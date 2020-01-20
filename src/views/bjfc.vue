<template xmlns:overflow="http://www.w3.org/1999/xhtml" >
    <div>
        <loading class="load" v-if="isLoading"></loading>
        <div class="" v-if="reply">
            <div class="container" >
                <p>文本输入框</p>
                <textarea class="text" rows="5" v-model="content" ></textarea>
                <p>表情选择框</p>
                <emotion @emotion="handleEmotion" :height="200" ></emotion>
                <p>效果显示框</p>
                <div class="text-place">
                    <!-- /\#[\u4E00-\u9FA5]{1,3}\;/gi 匹配出含 #XXX; 的字段 -->
                    <p v-html="content.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)"></p>
                </div>
            </div>
        </div>
        <div class="main" v-if="loading">
            <div class="contentTitle">
                <image class="contentTitleImg" :src="contentTitleImg"></image>
                <text class="contentTitleName">#{{contentTitleName}}#</text>
                <div class="fabuBox">
                    <text class="fabu2" @click="gotoFBFC">发布风采</text>
                </div>
            </div>
            <div class="content" v-for="(item,index) in fabuList" :key="item.key">
                <div class="contentBox" overflow:hidden :style={height:item.height+item.replyHeight+item.praiseHeight}>
                    <image class="peopleHead" :src="item.userHeader"></image>
                    <div class="fabuContent" :style={height:item.height-200}>
                        <text class="fabuName">{{item.userName}}</text>
                        <text class="fabuText">{{item.content}}</text>
                        <div class="fabuImgBox" :style={height:item.height-200}>
                            <div class="upImg" :style={height:item.height-300}>
                                <div class="addBtn" v-for="item1 in item.images">
                                    <image class="addBtnImg" :src=item1.url v-if="item1.type"></image>
                                    <video :src=item1.url alt="加号" v-else
                                           controls="controls" class="addBtnImg"
                                           style="object-fit:fill"></video>
                                </div>
                            </div>
                        </div>
                        <div class="contentFooter">
                            <text class="time">{{item.gmtCreate}}</text>
                            <image class="dianzan" :src="dianzanIcon" v-if="item.zan==0"
                                   @click="addPraise(item.zan,item.key,index)"></image>
                            <image class="dianzan" :src="dianzanIcon2" v-else
                                   @click="addPraise(item.zan,item.key,index)"></image>
                            <text class="iconText" v-if="item.zan==0"
                                  @click="addPraise(item.zan,item.key,index)">点赞</text>
                            <text class="iconText" v-else @click="addPraise(item.zan,item.key,index)">取消</text>
                            <image class="pinglun" :src="pinglunIcon"></image>
                            <text class="iconText"
                                  @click="updateReply(item.userId,item.userName,item.momentsId)">评论</text>
                        </div>
                        <div class="repcomment" :style={height:item.replyHeight+item.praiseHeight} >
                            <div class="comments" v-if="item.replyHeight+item.praiseHeight>0">
                                <span class="triangle"></span>
                                <div class="top" v-if="item.praises.length>0">
                                <div class="like" v-if="item.praises.length>0" :style={height:item.praiseHeight}>
                                 <p>
                                     <span class="icon-heart-empty i-like"></span>
                                     <span class="user" v-for="(praise,index) in item.praises" :key="index">
                                         {{praise.userName}}
                                         <span class="dh-black" v-if="index!=item.praises.length-1">,</span>
                                     </span>
                                 </p>
                                </div>
                                    <div class="comment" >
                                        <div  class="com-space" v-for="(reply,index) in item.list" :key="index">
                                            <div v-if="reply.toUser!=null">
                                                <a href="javascript:;" @click.stop="" class="reply">
                                                    <span class="user">{{reply.userName}}:{{reply.content}}</span>
                                                </a>
                                            </div>
                                            <div v-else>
                                                <a class="com-space" v-for="(reply,index) in item.list" :key="index">
                                                    <span class="user">{{reply.userName}}回复{{reply.toName}}:{{reply.content}}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal');
    import tooll from '../components/lib/util.js'
    import global_ from '../components/Global.vue'
    import navbar from '../components/basic/Navbar'
    import loading from "../components/basic/loading"
    import Emotion from '../components/basic/index'
    const storage = weex.requireModule('storage');

    export default {
        name: "bjfc",
        data() {
            return {
                content:'评论',
                titleName: '班级风采',
                titleUrl: 'zxbm.html',
                loading: false,
                isLoading: false,
                reply:false,
                replyUser:true,
                dianzanIcon: global_.imgUrl + '/dz_w.png',
                dianzanIcon2: global_.imgUrl + '/dz_y.png',
                pinglunIcon: global_.imgUrl + '/pl.png',
                contentTitleImg: '',
                contentTitleName: '',
                courseId: '',
                adminId:'',
                fabuList: [{
                    userHeader: '',
                    userId: '',
                    userName: '',
                    content: '',
                    images: [],
                    gmtCreate: '18：03',
                    list: [],
                    praises:[],
                    height: '',
                    zan: '',
                    replyHeight:'',
                    praiseHeight:'',
                }],
                headerImage: '',
                disableUpload: false,
            }

        },
        mounted () {
        },
        components: {
            'navbar': navbar,
            'loading': loading,
            Emotion,
        },
        created() {
            // this.getMoments();
        },
        methods: {
            handleEmotion (i) {
                this.content += i
            },
            // 将匹配结果替换表情图片
            emotion (res) {
                let word = res.replace(/\#|\;/gi,'')
                const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你',  '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
                let index = list.indexOf(word)
                return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`
            },
            updateReply(userId,userName,momentsId){
              this.reply=!this.reply;
            },
            gotoDLJM() {
                this.isLoading = true;
                let go = setTimeout(() => {
                    navigator.push(
                        {
                            url: global_.dicUrl + '/views/denglu.html',
                            animated: "true"
                        }, event => {
                            clearTimeout(go);
                            this.isLoading = false;
                        }
                    )
                }, 1000);
            },
            gotoGRZX() {
                this.isLoading = true;
                let go = setTimeout(() => {
                    navigator.push(
                        {
                            url: global_.dicUrl + '/views/grzx.html',
                            animated: "true"
                        }, event => {
                            clearTimeout(go);
                            this.isLoading = false;
                        }
                    )
                }, 1000);
            },
            gotoFBFC() {
                this.isLoading = true;
                const courseId = this.courseId;
                let go = setTimeout(() => {
                    navigator.push(
                        {
                            url: global_.dicUrl + '/views/fbfc.html?courseId=' + courseId,
                            animated: "true"
                        }, event => {
                            clearTimeout(go);
                            this.isLoading = false;
                        }
                    )
                }, 1000);
            },
            addPraise(zan, key, index) {
                if (zan === 0) {
                    let url = global_.dataUrl + '/api/getMoments/addPraise';
                    let adminId1;
                    storage.getItem("adminId", adminId => {
                        adminId1 = adminId.data;
                    });
                    let data = {
                        momentId: key,
                        adminId: adminId1,
                    };
                    storage.getItem("token", token => {
                        if (token !== '') {
                            tooll.sendRequestWithTokenAndId(url, token.data, adminId1, data, ret => {
                                if (ret.data.longResult === 1) {
                                    this.$set(this.fabuList[index], `zan`, 1);
                                } else {
                                    modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                                }
                            });
                        } else {
                            modal.toast({message: "登录超时", duration: 1.6});
                        }
                    });
                } else {
                    let url = global_.dataUrl + '/api/getMoments/removePraise';
                    let adminId1;
                    storage.getItem("adminId", adminId => {
                        adminId1 = adminId.data;
                    });
                    let data = {
                        momentId: key,
                        adminId: adminId1,
                    };
                    storage.getItem("token", token => {
                        if (token !== '') {
                            tooll.sendRequestWithTokenAndId(url, token.data, adminId1, data, ret => {
                                if (ret.data.longResult === 1) {
                                    this.$set(this.fabuList[index], `zan`, 0);
                                } else {
                                    modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                                }
                            });
                        } else {
                            modal.toast({message: "登录超时", duration: 1.6});
                        }
                    });
                }
            },
            removeMoment(key) {
                let url = global_.dataUrl + '/api/getMoments/removeMoment';
                let adminId1;
                storage.getItem("adminId", adminId => {
                    adminId1 = adminId.data;
                });
                let data = {
                    momentId: key,
                };
                storage.getItem("token", token => {
                    if (token !== '') {
                        tooll.sendRequestWithToken(url, token.data, adminId1, data, ret => {
                            if (ret.data.longResult === 0) {
                            } else {
                                modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                            }
                        });
                    } else {

                        modal.toast({message: "登录超时", duration: 1.6});

                    }
                });
            },
            removeReplies(key) {
                let url = global_.dataUrl + '/api/getMoments/removeReplies';
                let adminId1;
                storage.getItem("adminId", adminId => {
                    adminId1 = adminId.data;
                });
                let data = {
                    repliesId: key,
                };
                storage.getItem("token", token => {
                    if (token !== '') {
                        tooll.sendRequestWithTokenAndId(url, token.data, adminId1, data, ret => {
                            if (ret.data.longResult === 0) {
                            } else {
                                modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                            }
                        });
                    } else {

                        modal.toast({message: "登录超时", duration: 1.6});

                    }
                });
            },
            addReplies(toUser, content,momentsId) {
                let url = global_.dataUrl + '/api/getMoments/addReplies';
                let adminId1;
                storage.getItem("adminId", adminId => {
                    adminId1 = adminId.data;
                });
                let data = {
                    userId: adminId1,
                    toUser,
                    content,
                    momentsId,
                };
                storage.getItem("token", token => {
                    if (token !== '') {
                        tooll.sendRequestJson(url, token.data, adminId1, JSON.stringify(data), ret => {
                            if (ret.data.longResult === 0) {
                            } else {
                                modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                            }
                        });
                    } else {

                        modal.toast({message: "登录超时", duration: 1.6});

                    }
                });
            },
            getMoments() {
                let url = global_.dataUrl + '/api/getMoments/getMoments';
                let adminId1;
                let roleId1;
                storage.getItem("adminId", adminId => {
                    adminId1 = adminId.data;
                });
                storage.getItem("roleId", roleId => {
                    roleId1 = roleId.data;
                });
                this.adminId=adminId1;
                let data = {
                    search: JSON.stringify({
                        adminId: adminId1,
                        roleId: roleId1
                    }),
                };
                storage.getItem("token", token => {
                    if (token !== '') {
                        tooll.sendRequestJson(url, token.data, adminId1, JSON.stringify(data), ret => {
                            if (ret.data != null) {
                                this.fabuList = ret.data.list;
                                this.contentTitleName = ret.data.fetchList[0].courseName;
                                this.contentTitleImg = ret.data.fetchList[0].headerImg;
                                this.courseId = ret.data.fetchList[0].courseId;
                                let i;
                                for (i = 0; i < ret.data.list.length; i++) {
                                    let info = JSON.parse(ret.data.list[i].images);
                                    let len = info.length;
                                    this.fabuList[i].images = [];
                                    for (let a = 0; a < len; a++) {
                                        let type = info[a].replace("http://afterschool2019.oss-cn-hangzhou.aliyuncs.com/", "").split("/");
                                        if (type[0] === "video") {
                                            this.fabuList[i].images.splice(a, 0, {type: false, url: info[a]});
                                        } else {
                                            this.fabuList[i].images.splice(a, 0, {type: true, url: info[a]});
                                        }
                                    }
                                    let reply=parseInt(ret.data.list[i].list.length)*40;
                                    let praise=parseInt(ret.data.list[i].praises.length/5+1)*40;
                                    this.fabuList[i].replyHeight=reply;
                                    this.fabuList[i].praiseHeight=praise;
                                    if (len <= 3) {
                                        this.fabuList[i].height = 350;
                                    } else if (len >= 3 && len <= 6) {
                                        this.fabuList[i].height = 500;
                                    } else {
                                        this.fabuList[i].height = 625;
                                    }
                                    this.fabuList[i].gmtCreate = tooll.getTime(ret.data.list[i].gmtCreate);
                                }
                                setTimeout(() => {
                                    this.loading = true;
                                }, 100);
                            } else {
                                modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                            }
                        });
                    } else {
                        modal.toast({message: "登录超时", duration: 1.6});

                    }
                });
            },
        }

    }

</script>

<style>
    .slide-fade-enter-active {
        transition: all .1s ease;
    }

    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }

    .name-enter-active, .name-leave-active {
        transition: opacity 0.1s;
    }

    .name-enter, .name-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>

<style scoped>
    .main {
        width: 750px;
        background-color: rgba(247, 247, 247, 1);
    }

    .contentTitle {
        width: 750px;
        height: 144px;
        background-color: rgba(255, 255, 255, 1);
        margin-top: 2px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .contentTitleImg {
        width: 96px;
        height: 96px;
        border-radius: 4px;
        margin-left: 44px;
    }

    .contentTitleName {
        font-size: 32px;
        font-weight: 500;
        color: rgba(47, 49, 51, 1);
        line-height: 40px;
        margin-left: 26px;
    }

    .fabuBox {
        margin-left: 272px;
        width: 144px;
        height: 48px;
        border-radius: 24px;
        border-width: 2px;
        border-color: rgba(33, 111, 210, 1);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .fabu {
        width: 104px;
        height: 40px;
        font-size: 26px;
        font-weight: 400;
        color: rgba(33, 111, 210, 1);
        line-height: 40px;
        margin-right: 86px;
    }

    .fabu2 {
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: rgba(33, 111, 210, 1);
        position: absolute;
        left: 0;
        margin: auto;
        right: 0;
        width: calc(100% - 40px);
        height: 43px;
        line-height: 43px;
        border-radius: 4px;
        text-align: center;
    }

    .fabu1 {
        width: calc(100% - 40px);
        height: 43px;
        line-height: 43px;
        opacity: 0;
        position: absolute;
        z-index: 22;
        left: 0;
        margin: auto;
        right: 0;
    }

    .content {
        width: 750px;
        background-color: rgba(255, 255, 255, 1);
        margin-top: 16px;
    }

    .contentBox {
        width: 750px;
        height: 600px;
        background-color: rgba(255, 255, 255, 1);
        margin-top: 16px;
        display: flex;
        flex-direction: row;
    }

    .peopleHead {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        margin-left: 24px;
        margin-top: 24px;
    }

    .fabuContent {
        margin-left: 24px;
        width: 622px;
        height: 600px;
        display: flex;
        flex-direction: column;
    }

    .fabuName {
        font-size: 28px;
        font-weight: 500;
        color: rgba(46, 96, 153, 1);
        line-height: 40px;
        margin-top: 32px;
    }

    .fabuText {
        font-size: 28px;
        font-weight: 400;
        color: rgba(47, 49, 51, 1);
        line-height: 40px;
        margin-top: 8px;
    }

    .fabuImgBox {
        width: 400px;
        margin-top: 14px;
    }

    .fabuImg {
        width: 280px;
        height: 280px;
    }

    .contentFooter {
        height: 66px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .time {
        font-size: 24px;
        font-weight: 400;
        color: rgba(164, 171, 179, 1);
        line-height: 34px;
    }

    .dianzan {
        width: 32px;
        height: 28px;
        margin-left: 250px;
    }
    .dianzan1 {
        width: 32px;
        height: 28px;
        margin-left: 0px;
    }
    .iconText {
        font-size: 26px;
        font-weight: 400;
        color: rgba(164, 171, 179, 1);
        line-height: 36px;
        margin-left: 4px;
    }

    .pinglun {
        width: 32px;
        height: 28px;
        margin-left: 30px;
    }

    .addBtn {
        position: relative;
        box-sizing: border-box;
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

    .load {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -40px;
        margin-left: -40px;

    }
    .upImg {
        width: 500px;
        height: 400px;
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-content: flex-start;
    }
    .comment{
        border-top:1px solid #000;
    }
    .reply{
        text-decoration: none;
        font-size: 12px;
        color: #000;
    }
    .com-space{
        margin: 20px;
    }
    .comments{
        margin-left:0px;
        position: relative;
    }
    .top{
        width: 580px;
        margin:0 0 0px 0px;
        padding:5px 0;
        background: #F4F4F4;
    }
    .user{
        font-size:12px;
        color:#6495ED;
    }
    .like .i-like{
        color:#6495ED;
        margin-right:5px;
        font-weight:bold;
    }
    .dh-black {
        color: #000000;
    }

</style>
<style>
    .top p{
        margin:0px;
        font-size:12px;
        position: relative;
    }
    .triangle{
        position: absolute;
        width: 0px;
        height: 0px;
        line-height: 0px;
        border-bottom: 10px solid #F4F4F4;
        border-left: 10px solid #fff;
        border-right: 10px solid #fff;
        left: 40px;
        top: -10px;
    }
    .container {
        margin: 0 auto;
        margin-top: 20px;
        width: 400px;
    }
    .text {
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;
        width: 400px;
        resize: none;
        box-sizing: border-box;
        padding: 5px 10px;
        border-radius: 8px;
    }
    .text-place {
        height: 80px;
        box-sizing: border-box;
        padding: 5px 10px;
        border-radius: 8px;
        background: #ddd5d5;
    }
    .text-place p {
        display: flex;
        align-items: center;
        margin: 0;
    }
</style>
