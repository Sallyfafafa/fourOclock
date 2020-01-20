<template>
    <div class="body">
        <transition name="name">
            <div v-if="loading">
                <div class="baoming">
                    <div class="line">
                        <div class="lines"></div>
                        <text class="shuoming">托管服务流程说明</text>
                        <div class="lines"></div>
                    </div>
                    <div class="look">
                        <text class="lookText">点击查看</text>
                    </div>
                </div>
                <div class="baomingBox">
                    <div class="bossHead">
                        <div class="imgDian1"></div>
                        <div class="imgDian2"></div>
                        <text class="textBoss">校内托管申请表</text>
                        <div class="imgDian2"></div>
                        <div class="imgDian1"></div>
                    </div>
                    <div class="topMesBox">
                        <div class="nameBox">
                            <text class="nameText">学生姓名</text>
                            <input type="text" v-model="userName" class="textMsgB"
                                   readonly="flag=true"/>
                        </div>
                        <div class="nameBox">
                            <text class="nameText1">班级</text>
                            <input type="text" v-model="className" class="textMsgB"
                                   style="width:180px;" readonly="flag = true"/>
                            <text class="nameText">性别</text>
                            <input type="text" v-model="sex" class="textMsgB"
                                   style="width:180px;" readonly="flag = true "/>
                        </div>
                    </div>
                    <div class="messageBox">
                        <div class="nameBox">
                            <text class="nameText">父亲姓名</text>
                            <input type="text" placeholder="请输入" v-model="fatherName"
                                   class="textMsg" :readonly="flag == true ? true : false"/>
                        </div>
                        <div class="nameBox">
                            <text class="nameText">工作单位</text>
                            <input type="text" placeholder="请输入"
                                   v-model="fatherWork" class="textMsg" :readonly="flag == true ? true : false"/>
                        </div>
                    </div>
                    <div class="messageBox">
                        <div class="nameBox">
                            <text class="nameText">母亲姓名</text>
                            <input type="text" placeholder="请输入"
                                   v-model="mumName" class="textMsg" :readonly="flag == true ? true : false"/>
                        </div>
                        <div class="nameBox">
                            <text class="nameText">工作单位</text>
                            <input type="text" placeholder="请输入" v-model="mumWork"
                                   class="textMsg" :readonly="flag == true ? true : false"/>
                        </div>
                    </div>
                    <div class="messageBox">
                        <div class="nameBox1">
                            <text class="nameText1">申请理由</text>
                            <textarea type="text" placeholder="请输入" v-model="reason"
                                      class="textMsg1" :readonly="flag == true ? true : false"></textarea>
                        </div>
                    </div>
                    <div class="sub" v-if="click">
                        <text class="submit" @click="addParentsInfo">提交申请</text>
                    </div>
                    <div class="sub" v-else>
                        <text class="submit" @click="">{{butName}}</text>
                    </div>
                </div>
            </div>
        </transition>
        <shadows v-if="maskShow">
            <div class="slot">
                <text class="blockMessage">{{shenqing}}</text>
                <text class="close" @click="closeShow">关闭</text>
            </div>
        </shadows>
        <loading class="load" v-if="isLoading"></loading>
    </div>
    </div>

</template>
<script>
    import tooll from '../components/lib/util.js'
    import global_ from '../components/Global.vue'
    import loading from "../components/basic/loading"
    import shadow from "@/components/basic/shadow";

    const navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal');
    const stream = weex.requireModule('stream');
    const tool = weex.requireModule('tools');
    const bus = weex.requireModule('bus');
    const storage = weex.requireModule('storage');
    export default {
        name: "bmyz",
        data() {
            return {
                userName: '',
                className: '',
                fatherName: '',
                fatherWork: '',
                mumName: '',
                mumWork: '',
                reason: '',
                sex: '男',
                shenqing: '',
                selection: '',
                maskShow: false,
                isLoading: false,
                loading: false,
                flag: false,
                click: true,
                butName: "等待审核",
            }
        },
        components: {
            'loading': loading,
            'shadows': shadow
        },
        methods: {
            gotoZXBM() {
                this.isLoading = true;
                let go = setTimeout(() => {
                    navigator.push(
                        {
                            url: global_.dicUrl + '/views/zxbm.html?',
                            animated: "true"
                        }, event => {
                            clearTimeout(go);
                            this.isLoading = false;
                        }
                    )
                }, 1000);
            },
            check() {
                this.loading = true;
                this.isLoading = false;
                this.maskShow = !this.maskShow;
                this.flag = true;
            },
            closeShow() {
                this.maskShow = !this.maskShow;
                this.click = false;
                this.flag = true;
            },
            getParentsInfo() {
                this.isLoading = true;
                let go = setTimeout(() => {
                    let url = global_.dataUrl + '/api/getJson/getParentsInfo';
                    let adminId1;
                    storage.getItem("adminId", adminId => {
                        adminId1 = adminId.data;
                    });
                    let data = {"studentId": adminId1};
                    storage.getItem("token", token => {
                        if (token !== '') {
                            tooll.sendRequestWithTokenAndId(url, token.data, adminId1, data, ret => {
                                if (ret.data == null) {
                                    clearTimeout(go);
                                    this.isLoading = false;
                                    this.loading = true;
                                    this.click = true;
                                    this.flag = false;
                                } else {
                                    let selection = ret.data.selectionState;
                                    this.fatherName = ret.data.dadName;
                                    this.fatherWork = ret.data.dadWorkplace;
                                    this.mumName = ret.data.mumName;
                                    this.mumWork = ret.data.mumWorkplace;
                                    this.reason = ret.data.reason;
                                    this.userName = ret.data.studentName;
                                    this.className = ret.data.className;
                                    if (selection === 7) {
                                        this.gotoZXBM();
                                    } else {
                                        if (selection === 2 || selection === 3) {
                                            this.shenqing = "您的服务申请未通过审核，请联系班主任，谢谢。";
                                            clearTimeout(go);
                                            this.check();
                                        } else {
                                            if (selection === 5 || selection === 6) {
                                                this.shenqing = "您的服务申请未通过审核，请联系学校管理员，谢谢。";
                                                this.butName = "审核未通过";
                                                clearTimeout(go);
                                                this.check();
                                            } else {
                                                if (selection == null) {
                                                    clearTimeout(go);
                                                    this.isLoading = false;
                                                    this.loading = true;
                                                    this.click = true;
                                                    this.flag = false;
                                                } else {
                                                    this.shenqing = "您的申请已经递交，请耐心等待审核。";
                                                    clearTimeout(go);
                                                    this.check();
                                                }
                                            }
                                        }
                                    }
                                }
                            });
                        } else {
                            clearTimeout(go);
                            this.isLoading = false;
                            modal.toast({message: "登录超时", duration: 1.6});
                            this.gotoDLJM();
                        }
                    });
                }, 1500);
            },
            getFormInfo() {
                this.isLoading = true;
                let go = setTimeout(() => {
                    this.maskShow = !this.maskShow;
                    clearTimeout(go);
                    this.isLoading = false;
                }, 1500);
            },
            addParentsInfo() {
                this.isLoading = true;
                let go = setTimeout(() => {
                    let url = global_.dataUrl + '/api/getJson/addParentsInfo';
                    let adminId1;
                    storage.getItem("adminId", adminId => {
                        adminId1 = adminId.data;
                    });
                    let data = {
                        "studentId": adminId1,
                        "dadName": this.fatherName,
                        "dadWorkplace": this.fatherWork,
                        "mumName": this.mumName,
                        "mumWorkplace": this.mumWork,
                        "reason": this.reason,
                    };
                    if (this.fatherName == null || this.fatherWork == null ||
                        this.mumName == null || this.mumWork == null || this.reason == null ||
                        this.fatherName == "" || this.fatherWork == "" ||
                        this.mumName == "" || this.mumWork == "" || this.reason == "") {
                        clearTimeout(go);
                        this.isLoading = false;
                        modal.toast({message: "请填写完整的信息,谢谢！", duration: 1.6});
                    } else {
                        storage.getItem("token", token => {
                            if (token != '') {
                                tooll.sendRequestWithTokenAndId(url, token.data, adminId1, data, ret => {
                                    if (ret.data == null) {
                                        clearTimeout(go);
                                        this.isLoading = false;
                                        modal.toast({message: "网络连接超时！", duration: 1.6});
                                    } else {
                                        if (ret.data == true) {
                                            //modal.toast({message: "申请成功,请等待审核", duration: 1.6});
                                            this.shenqing = "您的申请已经递交，请耐心等待审核。";
                                            clearTimeout(go);
                                            this.isLoading = false;
                                            this.getFormInfo();
                                        } else {
                                            if (ret.data == false) {
                                                this.shenqing = "您的申请未正常提交,请联系管理人员！";
                                                clearTimeout(go);
                                                this.isLoading = false;
                                                this.getFormInfo();
                                            }
                                        }
                                    }
                                });
                            } else {
                                clearTimeout(go);
                                this.isLoading = false;
                                modal.toast({message: "登录超时", duration: 1.6});
                                this.gotoDLJM();
                            }
                        });
                    }
                }, 1000);
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
        },
        created() {
            this.getParentsInfo();
        }
    }
</script>
<style>
    .name-enter-active, .name-leave-active {
        transition: opacity 0.8s;
    }

    .name-enter, .name-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

</style>
<style scoped>
    .body {
        background-color: #F7F7F7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .baomingBox {
        top: 20px;
        background-color: #FFFFFF;
        margin: auto;
        width: 700px;
        height: 1080px;
        border-radius: 8px;
    }

    .bossHead {
        height: 84px;
        width: 700px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .textBoss {
        height: 44px;
        font-size: 32px;
        color: rgba(51, 51, 51, 1);
        line-height: 44px;
    }

    .imgDian1 {
        height: 8px;
        width: 8px;
        background-color: #5987FF;
        border-radius: 8px;
        margin: 0 10px;
        opacity: 0.5008;
    }

    .imgDian2 {
        height: 16px;
        width: 16px;
        background-color: #5987FF;
        border-radius: 16px;
        margin: 0 10px;

    }

    .topMesBox {
        padding-right: 30px;
        width: 600px;
        height: 176px;
        margin-left: auto;
        margin-right: auto;

    }

    .messageBox {
        padding-right: 30px;
        width: 600px;
        height: 176px;
        border-top-width: 2px;
        border-top-color: #eee;
        margin-left: auto;
        margin-right: auto;
    }

    .textMsg {
        color: #2F3133;
        display: block;
        font-weight: 700;
    }

    .textMsg1 {
        color: #2F3133;
        display: block;
        font-weight: 700;
        margin-top: 22px;
        margin-left: 12px;
        height: 85px;
    }

    .textMsgB {
        color: #2F3133;
        display: block;
        font-weight: 700;
    }

    .nameBox {
        padding-right: 30px;
        flex-direction: row;
        height: 88px;
        justify-content: center;
    }

    .nameBox1 {
        margin-left: -20px;
        flex-direction: row;
        height: 100px;
        justify-content: center;
    }

    .nameText {
        height: 88px;
        line-height: 88px;
        color: #5E6266;
        margin-right: 16px;

    }

    .nameText1 {
        height: 88px;
        line-height: 88px;
        color: #5E6266;
        margin-right:7px;

    }

    .sub {
        margin-left: auto;
        margin-right: auto;
        height: 25pt;
        width: 180pt;
        background-color: #5987FF;
        border-radius: 50px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .submit {
        color: #FFFFFF;
        font-size: 28px;
    }


    .load {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -40px;
        margin-left: -40px;

    }

    .slot {
        margin: auto;
        background-color: white;
        border-radius: 30px;
        display: flex;
        text-align: center;
    }

    .blockMessage {
        padding: 30px;
        width: 600px;
        height: 120px;
        font-size: 32px;
    }

    .close {
        text-align: center;
        padding: 10px;
        color: red;
    }

    .baoming {
        background-color: #7699F3;
        border-color: #7699F3;
        border-radius: 10px;
        margin-top: 16px;
        width: 702px;
        height: 166px;
        margin-left: auto;
        margin-right: auto;
    }

    .line {
        margin-top: 40px;
        width: 702px;
        height: 50px;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }

    .lines {
        width: 102px;
        height: 2px;
        background: rgba(255, 255, 255, 1);
    }

    .shuoming {
        color: white;
        font-size: 36px;
    }

    .look {
        width: 200px;
        height: 44px;
        margin-left: auto;
        margin-right: auto;
        border-color: rgba(255, 110, 44, 1);
        background-color: rgba(255, 110, 44, 1);
        border-radius: 22px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 16px;
    }

    .lookText {
        color: white;
        font-size: 24px;
    }
</style>