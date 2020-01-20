<template>
    <div class="body">
        <!--<navbar :msg="textName" :url="titleUrl"></navbar>!-->
        <transition name="name">
            <div v-if="loading">
                <div class="baoming">
                    <div class="line">
                        <div class="lines"></div>
                        <text class="shuoming">校内托管服务报名系统说明</text>
                        <div class="lines"></div>
                    </div>
                    <div class="look">
                        <text class="lookText">点击查看</text>
                    </div>
                </div>
                <div class="classs">
                    <img :src="classImg" class="classImg">
                    <text class="classRoom">可选班级</text>
                </div>
                <scroller class="scrollerCla" :style={height:scrollHeight}>
                    <div class="card" v-for="(item,index) in arrList" :key="item.courseId">
                        <div class="cardTop">
                            <img :src="item.headerImg" class="personImg" @click="gotoBJXQ(item.courseId)"/>
                            <div class="message" @click="gotoBJXQ(item.courseId)">
                                <text class="classRooms">{{item.courseName}}</text>
                                <text class="teacher">上课老师：{{item.teacherName}}</text>
                                <text class="direction">面向年级：{{item.grade}}</text>
                            </div>
                            <div class="baomingDiv" v-if="item.selectionState==null">
                                <text class="baomingText" style="width: 50px;" v-if="clickOnce"
                                      @click="selectionCourse(item.courseId,item.grade)">报名</text>
                                <text class="baomingText" style="width: 50px;" v-else>报名</text>
                            </div>
                            <div class="zhuangtai" v-if="item.selectionState==0">
                                <text class="baomingText" style="color:#5987FF">待审核</text>
                            </div>
                            <div class="zhuangtai" v-if="item.selectionState==1">
                                <text class="baomingText" style="color:#24A88F ">已通过</text>
                            </div>
                            <div class="zhuangtai" v-if="item.selectionState==2">
                                <text class="baomingText" style="color:#D42F2F">未通过</text>
                            </div>
                        </div>
                        <div class="cardBot">
                            <div class="cardBotLeft">
                                <text class="num">{{item.courseCapacity}}</text>
                                <text class="direction">班级容量</text>
                            </div>
                            <div class="cardBotLeft">
                                <text class="num">{{item.choseNum}}</text>
                                <text class="direction">已报名人数</text>
                            </div>
                            <div class="cardBotLeft">
                                <text class="num">{{item.courseSelected}}</text>
                                <text class="direction">通过人数</text>
                            </div>
                        </div>
                    </div>
                    <text class="footer">当前没有更多课程了</text>
                </scroller >
                <div class="footerNav">
                    <div class="icon">
                        <img :src="baomingImg" alt="在线报名" class="iconImg">
                        <text class="bao" style="color: #47494D">在线报名</text>
                    </div>
                    <div class="icon" @click="gotoGRZX">
                        <img :src="xiaoxiImg" alt="个人中心" class="iconImg">
                        <text class="bao">个人中心</text>
                    </div>
                </div>
            </div>
        </transition>
        <loading class="load" v-if="isLoading"></loading>
    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal');
    import tooll from '../components/lib/util.js'
    import Utils from "../components/lib/computed"
    import global_ from '../components/Global.vue'
    import navbar from '../components/basic/Navbar'
    import loading from "../components/basic/loading"

    const storage = weex.requireModule('storage');
    export default {
        name: "zxbm",
        data() {
            return {
                clientHeight:'',
                clickOnce: true,
                scrollHeight: '',
                textName: '在线报名',
                showFirst: false,
                titleUrl: 'denglu.html',
                fengcaiImg: global_.imgUrl + '/tab_b_normal_icon%402x.png',
                pingjiaImg: global_.imgUrl + '/tab_c_active_icon%20copy.png',
                xiaoxiImg: global_.imgUrl + '/tab_d_normal_icon.png',
                baomingImg: global_.imgUrl + '/rectangular_copy.png',
                classImg: global_.imgUrl + '/class.png',
                isLoading: false,
                loading: false,
                Img: global_.imgUrl + '/QQ%E5%9B%BE%E7%89%8720190825183207.jpg',
                arrList: [{
                    courseId: '',
                    courseName: '',
                    headerImg: '',
                    teacherName: '',
                    grade: '',
                    selectionState: '',
                    courseCapacity: '',
                    choseNum: '',
                    courseSelected: '',
                }]
            }
        },
        created() {
            this.getClass();
            this.scrollHeight = Utils.env.getScreenHeight() - 360 + 'px';
        },
        components: {'navbar': navbar, 'loading': loading},
        methods: {
            gotoBJXQ(courseId) {
                this.isLoading = true;
                let go = setTimeout(() => {
                    navigator.push(
                        {
                            url: global_.dicUrl + '/views/bjxq.html?courseId=' + courseId,
                            animated: "true"
                        }, event => {
                            clearTimeout(go);
                            this.isLoading = false;
                        }
                    )
                }, 1000);
            },
            getHeight(){
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
                this.gotoLoading = false;
                let go = setTimeout(() => {
                    navigator.push(
                        {
                            url: global_.dicUrl + '/views/grzx.html',
                            animated: "true"
                        }, event => {
                            clearTimeout(go);
                            this.isLoading = false;
                            this.gotoLoading = true;
                        }
                    )
                }, 1000);
            },
            gotoBJPJ() {
                this.isLoading = true;
                let go = setTimeout(() => {
                    navigator.push(
                        {
                            url: global_.dicUrl + '/views/bjpj.html',
                            animated: "true"
                        }, event => {
                            clearTimeout(go);
                            this.isLoading = false;
                        }
                    )
                }, 1000);
            },
            gotoBJFC() {
                this.isLoading = true;
                let go = setTimeout(() => {
                    navigator.push(
                        {
                            url: global_.dicUrl + '/views/bjfc.html',
                            animated: "true"
                        }, event => {
                            clearTimeout(go);
                            this.isLoading = false;
                        }
                    )
                }, 1000);
            },
            selectionCourse(courseId, grade) {
                this.isLoading = true;
                this.clickOnce = false;
                let go = setTimeout(() => {
                    let url = global_.dataUrl + '/api/getJson/addSelection';
                    let adminId1;
                    let schoolId1;
                    storage.getItem("adminId", adminId => {
                        adminId1 = adminId.data;
                    });
                    storage.getItem("schoolId", schoolId => {
                        schoolId1 = schoolId.data;
                    });
                    let data = {studentId: adminId1, courseId: courseId, grade: grade,schoolId:schoolId1,};
                    storage.getItem("token", token => {
                        if (token !== '') {
                            tooll.sendRequestWithTokenAndId(url, token.data, adminId1, data, ret => {
                                if (ret.data == null) {
                                    clearTimeout(go);
                                    this.isLoading = false;
                                    modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                                } else {
                                    if (ret.data === 1) {
                                        clearTimeout(go);
                                        this.isLoading = false;
                                        modal.toast({message: "报名成功,请等待班主任审核！", duration: 1.6});
                                        this.getClass();
                                    } else {
                                        if (ret.data === -1) {
                                            clearTimeout(go);
                                            this.isLoading = false;
                                            modal.toast({message: "请选择和所属年级相符的课程！", duration: 1.6});
                                        } else {
                                            if (ret.data === -2) {
                                                clearTimeout(go);
                                                this.isLoading = false;
                                                modal.toast({message: "该课程人数已满！", duration: 1.6});
                                            } else {
                                                if(ret.data === -3){
                                                    clearTimeout(go);
                                                    this.isLoading = false;
                                                    modal.toast({message: "已存在待审核课程！", duration: 1.6});
                                                }else {
                                                    clearTimeout(go);
                                                    this.isLoading = false;
                                                    modal.toast({message: "报名失败，请联系管理员！", duration: 1.6});
                                                    this.getClass();
                                                }
                                            }
                                        }
                                    }
                                }
                            });

                        } else {
                            clearTimeout(go);
                            modal.toast({message: "登录超时", duration: 1.6});
                            this.isDisable = true;
                            this.gotoDLJM();
                        }
                    });
                }, 1000);
                setTimeout(() => {
                    this.clickOnce = true;
                },3000);
            },
            getClass() {
                this.isLoading = true;
                let go = setTimeout(() => {
                    let url = global_.dataUrl + '/api/getJson/getCourseInfo';
                    let adminId1;
                    let schoolId1;
                    storage.getItem("adminId", adminId => {
                        adminId1 = adminId.data;
                    });
                    storage.getItem("schoolId", schoolId => {
                        schoolId1 = schoolId.data;
                    });
                    let data = {adminId: adminId1, schoolId: schoolId1};
                    storage.getItem("token", token => {
                        if (token !== '') {
                            tooll.sendRequestWithTokenAndId(url, token.data, adminId1, data, ret => {
                                if (ret.data != null) {
                                    if (ret.data.result === "2") {
                                        clearTimeout(go);
                                        this.isLoading = false;
                                        this.gotoBJPJ();
                                    } else {
                                        if (ret.data.result === "3") {
                                            this.arrList = ret.data.list;
                                            clearTimeout(go);
                                            this.loading = true;
                                            this.isLoading = false;
                                        } else {
                                            clearTimeout(go);
                                            this.isLoading = false;
                                            this.loading = true;
                                            modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                                        }
                                    }
                                } else {
                                    clearTimeout(go);
                                    this.isLoading = false;
                                    this.loading = true;
                                    modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                                    this.gotoDLJM();
                                }
                            });
                        } else {
                            clearTimeout(go);
                            this.isLoading = false;
                            modal.toast({message: "登录超时", duration: 1.6});
                            this.gotoDLJM();
                        }
                    });
                }, 1000);
            }
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
    }

    .baoming {
        background-color: #FFC000;
        border-color: #FFC000;
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
        width: 72px;
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

    .classs {
        height: 84px;
        width: 702px;
        margin-right: auto;
        margin-left: auto;
        flex-direction: row;
        align-items: center;

    }

    .classImg {
        width: 40px;
        height: 44px;
    }

    .classRoom {
        margin-left: 8px;
        color: #2F3133;
        font-size: 32px;
    }

    .scrollerCla {
        width: 702px;
        height: 950px;
        margin-left: auto;
        margin-right: auto;
    }

    .card {
        margin-bottom: 16px;
        width: 720px;
        height: 300px;
        background-color: white;
    }

    .cardTop {
        width: 670px;
        height: 180px;
        margin-left: 16px;
        border-bottom-width: 2px;
        border-bottom-color: rgba(241, 241, 241, 1);
        flex-direction: row;
    }

    .personImg {
        width: 148px;
        height: 148px;
        margin-left: 16px;
        margin-top: 16px;
    }

    .classRooms {
        margin-top: 24px;
        margin-left: 8px;
        font-size: 32px;
        color: #2F3133;
    }

    .teacher {
        margin-top: 24px;
        margin-left: 8px;
        font-size: 24px;
        color: #757A80;
    }

    .direction {
        margin-top: 8px;
        margin-left: 8px;
        font-size: 24px;
        color: #757A80;
    }

    .cardBot {
        width: 670px;
        height: 118px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .cardBotLeft {
        margin-top: 20px;
        width: 130px;
        height: 116px;
        align-items: center;
    }

    .num {

        height: 50px;
        text-align: center;
        font-size: 36px;
        color: rgba(70, 73, 77, 1);
        line-height: 50px;
    }

    .direction {
        height: 34px;
        font-size: 24px;
        color: rgba(141, 146, 153, 1);
        line-height: 34px;
    }

    .footer {
        margin-top: 34px;
        margin-bottom: 34px;
        width: 216px;
        height: 34px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(171, 174, 179, 1);
        line-height: 34px;
        margin-left: auto;
        margin-right: auto;
    }

    .footerNav {
        width: 750px;
        height: 98px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: white;
    }

    .icon {
        width: 120px;
        height: 98px;
        align-items: center;
    }

    .bao {

        height: 28px;
        font-size: 20px;
        font-weight: 400;
        color: rgba(116, 121, 128, 1);
        line-height: 28px;
    }

    .iconImg {
        width: 64px;
        height: 64px;
    }

    .baomingDiv {
        margin-top: 24px;
        margin-left: 48px;
        width: 136px;
        height: 52px;
        background-color: #FF6E2C;
        border-radius: 26px;
        border-color: #FF6E2C;
        align-items: center;
    }

    .zhuangtai {
        margin-top: 24px;
        margin-left: 48px;
        width: 136px;
        height: 52px;
        align-items: center;
    }

    .baomingText {
        width: 75px;
        height: 52px;
        font-size: 24px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 52px;;
    }
    .load {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -40px;
        margin-left: -40px;

    }
</style>
