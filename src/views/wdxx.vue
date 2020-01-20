<template>
    <div class="main" v-if="loading">
        <div class="content">
            <div class="msgBox" v-for="item in msgList">
                <image class="personHead" :src="item.userHeader"></image>
                <div class="nameMsgBox">
                    <text class="name">{{item.userName}}</text>
                    <text class="msg">{{item.content}}</text>
                </div>
                <div class="detailBox">
                    <text class="clock">{{getTime(item.gmtCreate)}}</text>
                    <div class="msgCountBox" v-if="item.readerNum!='0'">
                        <text class="msgCount">{{item.readerNum}}</text>
                    </div>
                </div>
            </div>
        </div>
        <text class="noMsg">当前没有更多消息了</text>
        <div class="footer">
            <div class="icon" @click="goTo('bjfc')">
                <img :src="fengcaiImg" alt="班级风采" class="iconImg">
                <text class="bao">班级风采</text>
            </div>
            <div class="icon" @click="goTo('bjpj')">
                <img :src="pingjiaImg" alt="班级评价" class="iconImg">
                <text class="bao">班级评价</text>
            </div>
            <div class="icon" @click="goTo('wdxx')">
                <img :src="xiaoxiImg" alt="我的消息" class="iconImg">
                <text class="bao">我的消息</text>
            </div>
            <div class="icon" @click="goTo('grxx')">
                <img :src="gerenImg" alt="个人信息" class="iconImg">
                <text class="bao">个人信息</text>
            </div>
        </div>
    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal');
    import tool from '../components/lib/util.js'

    import global_ from '../components/Global.vue'
    import navbar from '../components/basic/Navbar'
    import loading from "../components/basic/loading"

    const storage = weex.requireModule('storage');

    export default {
        name: "wdxx",
        data() {
            return {
                textName: '我的消息',
                titleUrl: 'zxbm.html',
                loading: false,
                fengcaiImg: global_.imgUrl + '/tab_b_normal_icon%402x.png',
                pingjiaImg: global_.imgUrl + '/tab_c_active_icon%20copy.png',
                xiaoxiImg: global_.imgUrl + '/tab_d_normal_icon%20copy.png',
                baomingImg: global_.imgUrl + '/rectangular.png',
                gerenImg: global_.imgUrl + '/tab_d_normal_icon.png',
                msgList: [{
                    userHeader: '',
                    userName: '',
                    content: '',
                    gmtCreate: '',
                    readerNum: ''
                }]
            }
        },
        components: {
            'navbar': navbar
        },
        created() {
            this.getMessages();
        },
        methods: {
            goTo(url) {
                navigator.push(
                    {
                        url: global_.dicUrl + '/views/' + url + '.html',
                        animated: "true"
                    }, event => {

                    }
                )
            },
            getTime(date) {
                let time = new Date(date);
                let now = new Date();
                let info;
                let num = parseInt(now.getFullYear() + now.getMonth() + now.getDate())
                    - parseInt(time.getFullYear() + time.getMonth() + time.getDate())
                if(num===0){
                    info="今天"+time.getHours() + ":" + time.getMinutes();
                }else if(num===1){
                    info="昨天"+time.getHours() + ":" + time.getMinutes();
                }else if(num===2){
                    info="前天"+time.getHours() + ":" + time.getMinutes();
                }else if(num>=3&&num<=7){
                    info="三天前";
                }else{
                    info="很久以前";
                }
                return info;
            },
            getMessages() {
                let url = global_.dataUrl + '/api/getMessages/getMessages';
                let adminId1;
                storage.getItem("adminId", adminId => {
                    adminId1 = adminId.data;
                });
                let data = {
                    search: JSON.stringify({
                        adminId: adminId1,
                        userId:2505640,
                    }),
                };
                storage.getItem("token", token => {
                    if (token !== '') {
                        tool.sendRequestJson(url, token.data, adminId1, JSON.stringify(data), ret => {
                            if (ret.data != null) {
                                this.msgList = ret.data.list;
                                this.loading = true;
                            } else {
                                modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                            }
                        });
                    } else {

                        modal.toast({message: "登录超时", duration: 1.6});

                    }
                });
            }
        }
    }
</script>

<style scoped>
    .main {
        width: 750px;
        background-color: rgba(247, 247, 247, 1);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content {
        margin-top: 2px;
        width: 750px;
        background-color: rgba(255, 255, 255, 1);
    }

    .msgBox {
        width: 750px;
        height: 156px;
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .personHead {
        margin-left: 24px;
        width: 96px;
        height: 96px;
        border-radius: 8px;
        background-color: #000000;
    }

    .nameMsgBox {
        width: 500px;
        display: flex;
        flex-direction: column;
        margin-left: 24px;
    }

    .detailBox {
        display: flex;
        flex-direction: column;
        margin-left: -20px;
    }

    .clock {
        font-size: 24px;
        font-weight: 400;
        color: rgba(164, 171, 179, 1);
        line-height: 34px;
    }

    .msgCountBox {
        margin-top: 18px;
        width: 58px;
        height: 36px;
        background-color: rgba(255, 110, 44, 1);
        border-radius: 18px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .msgCount {
        font-size: 24px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 34px;
    }

    .name {
        font-size: 32px;
        font-weight: 500;
        color: rgba(47, 49, 51, 1);
        line-height: 44px;
    }

    .msg {
        margin-top: 12px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(117, 122, 128, 1);
        line-height: 34px;
    }

    .noMsg {
        margin-top: 40px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(171, 174, 179, 1);
        line-height: 34px;
    }

    .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        border-top-width: 2px;
        border-top-color: rgba(232, 232, 232, 1);
        width: 750px;
        height: 98px;
        line-height: 98px;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 32px;
        padding-right: 32px;
        align-items: center;
        background-color: white;
    }

    .icon {
        width: 88px;
        height: 94px;
        align-items: center;
    }

    .bao {
        font-size: 20px;
        font-weight: 400;
        color: rgba(116, 121, 128, 1);
        line-height: 28px;
        margin-top: 1px;
    }

    .iconImg {
        width: 64px;
        height: 64px;
    }
</style>
