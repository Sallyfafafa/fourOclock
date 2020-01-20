<template>
    <div class="body">
        <loading class="load" v-if="isLoading"></loading>
        <div class="content" v-if="loading">
            <textarea name="news" id="textNews" v-model="content" class="news" rows="10"
                      placeholder="写下新动态..."></textarea>
            <div class="upImg">
                <div class="addBtn" v-for="(item,index) in imgList" :key="index">
                    <img :src=item.imgUrl alt="加号" class="addBtnImg" v-if="item.type">
                    <video :src=item.imgUrl alt="加号" v-if="!item.type" controls="controls" class="addBtnImg"
                           style="object-fit:fill" ></video>
                    <div class="icon-svg" v-if="item.isClose" @click="deleteImg(index)">
                        <svg t="1573977978492" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="1768" width="16" height="16">
                            <path d="M512 32C251.4285715625 32 32 251.4285715625 32 512s219.4285715625 480 480 480 480-219.4285715625 480-480-219.4285715625-480-480-480z m205.7142853125 617.142856875c20.5714284375 20.5714284375 20.5714284375 48 0 61.714286249999994-20.5714284375 20.5714284375-48 20.5714284375-61.714285312499996 0l-137.142856875-137.1428578125L374.857143125 717.7142853125c-20.5714284375 20.5714284375-48 20.5714284375-68.5714284375 0s-20.5714284375-54.857143125 0-68.5714284375l144-144-137.1428578125-137.142856875c-20.5714284375-13.714285312500001-20.5714284375-41.142856875 0-61.714285312499996 20.5714284375-20.5714284375 48-20.5714284375 61.714286249999994 0l137.142856875 137.142856875 144-144c20.5714284375-20.5714284375 48-20.5714284375 68.5714284375 0 20.5714284375 20.5714284375 20.5714284375 48 0 68.5714284375L580.5714284375 512l137.142856875 137.142856875z"
                                  fill="#d81e06" p-id="1769"></path>
                        </svg>
                    </div>
                    <input v-if="!item.isClose" class="file" type="file" accept="image/png,image/jpeg,image/jpg,video/*"
                           multiple
                           @change="initPic($event,index)"/>
                </div>
            </div>
        </div>
        <div class="btn" v-if="loading">
            <text class="btn-text" @click="addMoment">发布</text>
        </div>
    </div>
</template>

<script>
    import Exif from '../components/lib/exif.js'

    const navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal');
    import tool from '../components/lib/util.js'
    import global_ from '../components/Global.vue'
    import loading from "../components/basic/loading"

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
        data() {
            return {
                base64Url: [],
                content: '',
                images: [],
                rImages: [],
                isLoading: true,
                loading: false,
                imgList: [
                    {
                        imgUrl: 'http://afterschool2019.oss-cn-hangzhou.aliyuncs.com/image/tab_b_normal_icon%402x.png',
                        isClose: false,
                        type: true,
                    }
                ]
            }

        },
        components: {
            'loading': loading,
        },
        created() {
            setTimeout(() => {
                this.loading = true;
                this.isLoading = false;
            }, 1000);
        },
        methods: {
            gotoBJFC() {
                this.loading = false;
                this.isLoading = true;
                let go = setTimeout(() => {
                    navigator.push(
                        {
                            url: global_.dicUrl + '/views/bjfc.html',
                            animated: "true"
                        }, event => {
                            this.loading = true;
                            this.isLoading = false;
                        }
                    )
                }, 1000);
            },
            deleteImg(index) {
                this.imgList.splice(index, 1);
                this.images.splice(index, 1);
                if (index === 8) {
                    let obj = {
                        imgUrl: 'http://afterschool2019.oss-cn-hangzhou.aliyuncs.com/image/tab_b_normal_icon%402x.png',
                        isClose: false,
                        type: true,
                    };
                    this.imgList.splice(index, 0, obj);
                }

            },
            addImg(index, img, type) {
                if (index === this.imgList.length - 1) {
                    let obj = {
                        imgUrl: img,
                        isClose: true,
                        type: type,
                    };
                    this.imgList.splice(index, 0, obj);
                    if (index === 8) {
                        this.imgList.splice(9, 1);
                    }
                }
            },
            addMoment() {
                new Promise((resolve, reject) => {
                    let myDate = new Date();
                    let _this = this;
                    for (let i = 0; i < this.images.length; i++) {
                        let file = this.images[i];
                        let type;
                        if(file.type==="video/mp4"){
                            type="video/";
                        }else{
                            type="image/";
                        }
                        const url = type+`${file.name.split(".")[0]}-${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}-${myDate.getHours()}`;
                        client.put(url, file).then((val) => {
                            _this.rImages.push(val.url);
                            if (i === this.images.length - 1) {
                                resolve(_this.rImages);
                            }
                        }).catch((error) => {
                            return modal.toast({message: "上传图片失败，请检查网络！", direction: 1.6});
                        });
                    }
                }).then(res => {
                    if (res != null && res.length === this.images.length) {
                        this.upLoad();
                    } else {
                        modal.toast({message: "图片异常，请刷新重试！", direction: 1.6});
                    }
                });
            },
            upLoad() {
                let url = global_.dataUrl + '/api/getMoments/addMoment';
                let _this = this;
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
                    courseId: tool.getUrlParam("courseId"),
                    images: JSON.stringify(_this.rImages),
                    content: this.content,
                };
                this.images = [];
                this.rImages = [];
                this.imgList = [
                    {
                        imgUrl: 'http://afterschool2019.oss-cn-hangzhou.aliyuncs.com/image/tab_b_normal_icon%402x.png',
                        isClose: false,
                        type: true,
                    }
                ];
                storage.getItem("token", token => {
                    if (token !== '') {
                        tool.sendRequestJson(url, token.data, adminId1, JSON.stringify(data), ret => {
                            if (ret.data.longResult === -1 || ret.data.longResult == null) {
                                modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                            } else {
                                this.gotoBJFC();
                            }
                        });

                    } else {
                        modal.toast({message: "登录超时", duration: 1.6});
                    }
                });
            },
            initPic(e, index) {
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
                if (files.length >= 1) {
                    for (let i = 0; i < files.length; i++) {
                        let f = files[i];
                        if (Math.floor(f.size) > 5 * 1024 * 1024) {
                            return modal.toast({message: '请上传5M以内的图片！', direction: 1.6});
                        }
                        _this.images.splice(i, 0, f);
                        let reader = new FileReader();
                        reader.readAsDataURL(f);
                        reader.onload = function (a) {
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            if (f.type === "image/png" || f.type === "image/jpeg" || f.type === "image/jpg") {
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
                                    _this.addImg(index + i, canvas.toDataURL('image/jpeg'), true);
                                }
                            } else {
                                _this.addImg(index + i, a.target.result, false);
                            }

                        }
                    }
                }
            },
        }
    }
</script>

<style scoped>
    .body {
        width: 750px;
        height: 100vh;
        background-color: #F7F7F7;
    }

    .content {
        margin: 24px auto 0;
        width: 90%;
        height: 972px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .news {
        margin-top: 40px;
        padding: 0 20px;
        width: 670px;
        height: 274px;
        color: #A5ACB3;
        font-size: 28px;
        border-bottom: 2px solid #E6E6E6;
    }

    .upImg {

        width: 670px;
        height: 558px;
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-content: flex-start;
    }

    .icon-svg {
        position: absolute;
        top: 0;
        right: 0;
    }

    .addBtn {
        position: relative;
        box-sizing: border-box;
        margin: 25px 42px;
        width: 135px;
        height: 135px;
        border-radius: 8px;
        border: 2px solid rgba(230, 230, 230, 1);
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .addBtnImg {
        width: 135px;
        height: 135px;
    }

    .btn {
        margin: 40px auto;
        width: 80%;
        height: 72px;
        line-height: 72px;
        align-items: center;
        background-color: #FF6E2C;
    }

    .btn-text {
        font-size: 30px;
        color: #FFFFFF;
        line-height: 72px;
    }

    .file {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
        width: 100px;
    }

    .load {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -40px;
        margin-left: -40px;

    }
</style>
