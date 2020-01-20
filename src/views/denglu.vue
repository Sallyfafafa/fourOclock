<template>
    <div class="body">
        <loading class="load" v-if="isLoading"></loading>
        <div v-if="loading">
            <div class="nav" :style="{marginTop:marginTop}">
                <text class="navText"></text>
            </div>
            <div class="content">
                <img :src='loginImg' class="loginImg" :style="{height:bacImgHeight}"/>
                <div class="middle">
                    <img :src="middleImg" class="middleImg">
                </div>
                <img :src="titleImg" class="titleImg">
                <div class="footer">
                    <div class="phone">
                        <input type="text" v-model="loginName" class="inputNumber" placeholder="请输入您的手机号">
                    </div>
                    <div class="phone">
                        <input type="password" v-model="password" class="inputNumber" placeholder="请输入密码">
                    </div>
                    <div class="denglu" @click="login">
                        <text class="dengluText">登陆</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import tooll from '../components/lib/util.js'
    import global_ from '../components/Global.vue'
    import loading from "../components/basic/loading"

    const navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal');
    const stream = weex.requireModule('stream');
    const tool = weex.requireModule('tools');
    const bus = weex.requireModule('bus');
    const storage = weex.requireModule('storage');
    export default {
        name: "denglu",
        data() {
            return {
                marginTop: null,
                loading: false,
                loginImg: global_.imgUrl + '/login_bg%403x.png',
                middleImg: global_.imgUrl + '/sr_bg.png',
                titleImg: global_.imgUrl + '/titleLogin.png',
                bacImgHeight: '',
                loginName: '',
                password: '',
                isLoading: false,
            }
        },
        components: {'loading': loading,},
        methods: {
            gotoZXBM() {
                this.isLoading = true;
                let go = setTimeout(() => {
                    navigator.push(
                        {
                            //url:'http://192.168.1.104:8081/views/zxbm.html',
                            url: global_.dicUrl + '/views/zxbm.html',
                            animated: "true",
                        }, event => {
                            clearTimeout(go);
                            this.isLoading = false;
                        }
                    )
                }, 1000);
            },
            gotoBJPJ() {
                this.isLoading = true;
                let go = setTimeout(() => {
                    navigator.push(
                        {
                            //url:'http://192.168.1.104:8081/views/zxbm.html',
                            url: global_.dicUrl + '/views/bjpj.html',
                            animated: "true",
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
                            animated: "true",
                        }, event => {
                            clearTimeout(go);
                            this.isLoading = false;
                        }
                    )
                }, 1000);
            },
            login() {
                let url = global_.dataUrl + '/api/getJson/studentLogin';
                let data = {
                    "loginName": this.loginName,
                    "password": this.password
                };
                if (this.loginName == null || this.password == null || this.loginName === "" || this.password === "") {
                    modal.toast({message: "登录信息不能为空！", duration: 1.6});
                } else {
                    tooll.sendRequest(url, data, ret => {
                        if (ret.data == null) {
                            this.loading = true;
                            modal.toast({message: "网络连接失败！", duration: 1.6});
                        } else {
                            storage.setItem('token', ret.data.token);
                            storage.setItem('adminId', ret.data.adminId);
                            storage.setItem('schoolId', ret.data.schoolId);
                            storage.setItem('openId', ret.data.openId);
                            storage.setItem('roleId', ret.data.roleId);
                            if (ret.data.result === "0") {
                                this.gotoBMYZ(ret.data.userName, ret.data.className);
                            } else {
                                if (ret.data.result === "1") {
                                    this.gotoZXBM();
                                } else {
                                    if (ret.data.result === "2") {
                                        this.gotoBJPJ();
                                    } else {
                                        if(ret.data.result==="teacher"){
                                            this.gotoGRZX();
                                        }else {
                                            this.loading = true;
                                            modal.toast({message: ret.data.result + ",如有疑问请联系管理员！", duration: 1.6});
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            },
            gotoBMYZ(userName, className) {
                this.isLoading = true;
                let go = setTimeout(() => {
                    navigator.push(
                        {
                            url: global_.dicUrl + '/views/bmyz.html?userName=' + userName + "&className=" + className,
                            animated: "true",
                        }, event => {
                            clearTimeout(go);
                            this.isLoading = false;
                        }
                    )
                }, 1000);
            },
            getStudent1() {
                let url = global_.dataUrl + '/api/getJson/getJson';
                let code = tooll.getUrlParam("code");
                let state = tooll.getUrlParam("state");
                let tokenInfo = tooll.getUrlParam("tokenInfo");
                if ((code != null && code.length > 10) || (tokenInfo != null && tokenInfo.length > 8)) {
                    let data = {"code": code, "state": state, "tokenInfo": tokenInfo};
                    tooll.sendRequest(url, data, ret => {
                        if (ret.data == null) {
                            this.loading = true;
                            modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                        } else {
                            storage.setItem('token', ret.data.token);
                            storage.setItem('adminId', ret.data.adminId);
                            storage.setItem('schoolId', ret.data.schoolId);
                            storage.setItem('openId', ret.data.openId);
                            storage.setItem('roleId', ret.data.roleId);
                            if (ret.data.result === "0") {
                                this.gotoBMYZ(ret.data.userName, ret.data.className);
                            } else {
                                if (ret.data.result === "1") {
                                    this.gotoZXBM();
                                } else {
                                    if (ret.data.result === "2") {
                                        this.gotoBJPJ();
                                    } else {
                                        if (ret.data.result === "teacher") {
                                            this.gotoGRZX();
                                        } else {
                                            this.loading = true;
                                            modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                                        }
                                    }
                                }
                            }
                        }
                    });
                } else {
                    this.loading = true;
                }
            }

        },
        created() {
            this.getStudent1();
        }
    }
</script>
<style scoped>
    .nav {
        background-color: white;
        height: 88px;
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .navText {
        font-size: 32px;
        color: #47484B;
        line-height: 88px;
    }

    .loginImg {
        width: 750px;
        height: 1206px;
    }

    .content {
        height: 1026px;
        width: 750px;
    }

    .middle {
        position: absolute;
        height: 650px;
        width: 646px;
        margin-top: 172px;
        background-color: white;
        left: 50%;
        margin-left: -323px;
    }

    .middleImg {
        height: 760px;
        width: 660px;
    }

    .titleImg {
        position: absolute;
        left: 50%;
        margin-left: -214px;
        top: 80px;
        height: 274px;
        width: 428px;
    }

    .footer {
        height: 474px;
        width: 510px;
        position: absolute;
        top: 450px;
        left: 50%;
        margin-left: -255px;
    }

    .phone {
        margin-top: 32px;
        width: 510px;
        height: 88px;
        border-width: 2px;
        border-color: #D6D6D6;
        border-radius: 50px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .inputNumber {
        width: 440px;
        height: 40px;
        font-size: 28px;
        color: #CCCCCC;
    }

    .denglu {
        width: 510px;
        height: 88px;
        margin-top: 80px;
        border-width: 2px;
        background-color: #FF6E2C;
        border-color: #ff6e2c;
        border-radius: 50px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .dengluText {
        font-size: 32px;
        color: #FFFFFF;
    }

    .load {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -40px;
        margin-left: -40px;
    }
</style>
