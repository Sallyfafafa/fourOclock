<template>
    <div class="body">
        <div class="content">
            <textarea name="news" id="textNews" class="news"
                      v-model="content" rows="10" placeholder="写下新动态..."></textarea>
            <div class="upImg">
                <div class="addBtn">
                    <div class="" v-for="item in base64Url">
                        <img :src="item" alt="" class="img1">
                    </div>
                    <input class="addBtnImg1" type="file" accept="image/*" multiple
                           @change="initPic($event)"/>
                    <img src="http://afterschool2019.oss-cn-hangzhou.aliyuncs.com/image/tab_b_normal_icon%402x.png"
                         alt="加号" class="addBtnImg">
                    <text @click="addMoment">发布</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Exif from '../lib/exif.js'

    const navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal');
    import tool from '../lib/util.js'
    import global_ from '../Global.vue'
    import loading from "../basic/loading"

    const storage = weex.requireModule('storage');
    let OSS = require('ali-oss');
    let client = new OSS({
        accessKeyId: 'FPp9XarK9EtD4bLx', // oss的key_id
        accessKeySecret: 'Msg07BzjT1IuOTdBmco9pb6FR4PqAS', // oss的secret
        bucket: 'afterschool2019',// 自己oss服务器的配置信息
        region: 'oss-cn-hangzhou',
    });
    export default {
        name: "fbfc",
        props: {
            courseId: {
                type: String,
                default: '',
            }
        },
        data() {
            return {
                base64Url: [],
                content: '',
                images: [],
                rImages: [],
            }
        },
        methods: {
            addMoment(){
                this.sendClient();
                let go = setTimeout(() => {
                    this.upLoad();
                },1000);
            },
            sendClient() {
                let myDate = new Date();
                for (let i = 0; i < this.images.length; i++) {
                    let file = this.images[i];
                    const url = `image/${file.name.split(".")[0]}-${myDate.getTime()}`;
                    client.put(url, file).then((val) => {
                        this.rImages.push(val.url);
                    }).then((val) => {
                        return -1;
                    });
                }
            },
            upLoad() {
                let url = global_.dataUrl + '/api/getMoments/addMoment';
                let adminId1;
                let roleId1;
                storage.getItem("adminId", adminId => {
                    adminId1 = adminId.data;
                });
                storage.getItem("roleId", roleId => {
                    roleId1 = roleId.data;
                });
                let data = {
                    userId: adminId1,
                    courseId: this.courseId,
                    images: JSON.stringify(this.rImages),
                    content: this.content,
                };
                storage.getItem("token", token => {
                    if (token !== '') {
                            tool.sendRequestJson(url, token.data, adminId1, JSON.stringify(data), ret => {
                                if (ret.data.longResult != null) {
                                    this.$emit('getAddMoment',0);
                                } else {
                                    this.$emit('getAddMoment',-1);
                                    modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                                }
                            });

                    } else {
                        modal.toast({message: "登录超时", duration: 1.6});
                    }
                });
            },
            initPic(e) {
                let Orientation;
                Exif.getData(e.target.files[0], function () {
                    Exif.getAllTags(this);
                    Orientation = Exif.getTag(this, 'Orientation');
                });
                let _this = this;
                let files = e.target.files;
                if (files.length > 9) {
                    return modal.toast({message: '图片数量超出上传限制！', direction: 1.6});
                }
                for (let i = 0; i < files.length; i++) {
                    let f = files[i];
                    if (Math.floor(f.size) > 5 * 1024 * 1024) {
                        return modal.toast({message: '请上传5M以内的图片！', direction: 1.6});
                    }
                    _this.images.push(f);
                    let reader = new FileReader();
                    reader.readAsDataURL(f);
                    reader.onload = function (a) {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        const img = new Image();
                        img.src = a.target.result;
                        img.onload = function () {
                            canvas.width = this.naturalWidth;
                            canvas.height = this.naturalHeight;
                            ctx.drawImage(this, 0, 0, img.naturalWidth, img.naturalHeight);
                            let width = img.naturalWidth;
                            let height = img.naturalHeight;

                            if (Orientation !== "" && Orientation !== 1 && Orientation != undefined) {
                                switch (Orientation) {
                                    case 6://需要顺时针90度旋转
                                        canvas.width = height;
                                        canvas.height = width;
                                        ctx.rotate(90 * Math.PI / 180);
                                        ctx.drawImage(this, 0, -height);
                                        break;
                                    case 8://需要逆时针90度旋转
                                        canvas.width = height;
                                        canvas.height = width;
                                        ctx.rotate(-90 * Math.PI / 180);
                                        ctx.drawImage(this, -width, 0);
                                        break;
                                    case 3://需要180度旋转
                                        ctx.rotate(180 * Math.PI / 180);
                                        ctx.drawImage(this, -width, -height);
                                        break;
                                }
                            }
                            _this.base64Url.push(canvas.toDataURL('image/jpeg'));
                        }
                    }
                }
            },
        }
    }
</script>

<style scoped>
    .body {
        width: 750%;
        height: 100vh;
        background-color: #F7F7F7;
    }

    .content {
        margin-top: 4px;
        width: 750px;
        height: 528px;
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .news {
        margin-top: 40px;
        width: 670px;
        height: 274px;
        color: #A5ACB3;
        font-size: 28px;
        border-bottom: 2px solid #E6E6E6;
    }

    .upImg {
        width: 670px;
        height: 210px;
    }

    .addBtn {
        margin-top: 34px;
        width: 120px;
        height: 120px;
        border-radius: 8px;
        border: 2px solid rgba(230, 230, 230, 1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .addBtnImg {
        width: 64px;
        height: 64px;
    }

    .addBtnImg1 {
        width: 64px;
        height: 64px;
        opacity: 0;
    }

    .img1 {
        width: 64px;
        height: 64px;
    }
</style>
