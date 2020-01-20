<template>
    <div class="body">
        <loading class="load" v-if="isLoading"></loading>
        <!--<navbar :msg="textName" :url="titleUrl"> </navbar>!-->
        <transition name="name">
        <div v-if="loading">
            <div class="header">
                <img :src="heagerImg" alt="头像" class="headerImg">
                <text class="headerText">#{{courseName}}#</text>
            </div>
            <div class="middle" :style={height:middleHeight}>
                <text class="scoreText">请对您所在班级进行评分</text>
                <text class="state">课程内容情况</text>
                <div class="star">
                    <div class="starNum">
                        <div class="nums" v-for="index of 5" :key="index">
                            <img :src="shineStar" class="shin" v-if="index <=courseNum" @click="changeCourse(index)">
                            <img :src="blackStar" class="shin" @click="changeCourse(index)" v-else>
                        </div>
                    </div>
                    <text class="evaluate1" v-if="courseNum<3 && courseNum>0">较差</text>
                    <text class="evaluate1" v-if="courseNum===3">一般</text>
                    <text class="evaluate1" v-if="courseNum>3">较好</text>
                    <text class="evaluate" v-if="courseNum===0">请评价</text>
                </div>
                <text class="state">老师负责情况</text>
                <div class="star">
                    <div class="starNum">
                        <div class="nums" v-for="index of 5" :key="index">
                            <img :src="shineStar" class="shin" v-if="index <=teaNum" @click="changeteaNum(index)">
                            <img :src="blackStar" class="shin" @click="changeteaNum(index)" v-else>
                        </div>
                    </div>
                    <text class="evaluate1" v-if="teaNum<3 && teaNum>0">较差</text>
                    <text class="evaluate1" v-if="teaNum===3">一般</text>
                    <text class="evaluate1" v-if="teaNum>3">较好</text>
                    <text class="evaluate" v-if="teaNum===0">请评价</text>
                </div>
                <text class="state">整体评价情况</text>
                <div class="star">
                    <div class="starNum">
                        <div class="nums" v-for="index of 5" :key="index">
                            <img :src="shineStar" class="shin" v-if="index <=bothNum" @click="changebothNum(index)">
                            <img :src="blackStar" class="shin" @click="changebothNum(index)" v-else>
                        </div>
                    </div>
                    <text class="evaluate1" v-if="bothNum<3 && bothNum>0">较差</text>
                    <text class="evaluate1" v-if="bothNum===3">一般</text>
                    <text class="evaluate1" v-if="bothNum>3">较好</text>
                    <text class="evaluate" v-if="bothNum===0">请评价</text>
                </div>
                <text class="state">其他说明</text>
                <textarea rows='10' v-model="otherReason" placeholder="请输入其他说明" class="areaText"></textarea>
                <div class="denglu" @click="addAppraise">
                    <text class="dengluText">提交评价</text>
                </div>
            </div>
            <div class="footer" >
                <div class="icon" @click="">
                    <img :src="pingjiaImg" alt="在线报名" class="iconImg">
                    <text class="bao">班级评价</text>
                </div>
                <div class="icon" @click="gotoGRZX">
                    <img :src="xiaoxiImg" alt="在线报名" class="iconImg">
                    <text class="bao">个人中心</text>
                </div>
            </div>
        </div>
        </transition>
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
        name: "bjpj",
        data() {
            return {
                loading:true,
                courseId: '',
                courseName: '',
                teacherId: '',
                Img: global_.imgUrl + '/QQ%E5%9B%BE%E7%89%8720190825183144.jpg',
                isLoading: false,
                textName: '班级评价',
                titleUrl: 'zxbm.html',
                scrollHeight: '',
                heagerImg: global_.imgUrl + '/QQ%E5%9B%BE%E7%89%8720190825183144.jpg',
                fengcaiImg: global_.imgUrl + '/tab_b_normal_icon%402x.png',
                pingjiaImg: global_.imgUrl + '/tab_c_active_icon%402x.png',
                xiaoxiImg: global_.imgUrl + '/tab_d_normal_icon.png',
                baomingImg: global_.imgUrl + '/rectangular.png',
                shineStar: global_.imgUrl + '/star2.png',
                blackStar: global_.imgUrl + '/star1.png',
                courseNum: '5',
                teaNum: '5',
                bothNum: '5',
                middleHeight: '',
                otherReason: ''
            }
        },
        components: {
            'navbar': navbar,
            'loading': loading
        },
        methods: {
            changeCourse(i) {
                this.courseNum = i;
            },
            changebothNum(i) {
                this.bothNum = i;
            },
            changeteaNum(i) {
                this.teaNum = i;
            },
            gotoZXBM() {
                navigator.push(
                    {
                        url: global_.dicUrl + '/views/zxbm.html',
                        animated: "true"
                    }, event => {

                    }
                )
            },
            gotoGRZX() {
                navigator.push(
                    {
                        url: global_.dicUrl + '/views/grzx.html',
                        animated: "true"
                    }, event => {

                    }
                )
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
            gotoWDXX() {
                navigator.push(
                    {
                        url: global_.dicUrl + '/views/wdxx.html',
                        animated: "true"
                    }, event => {
                    }
                )
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
            getAppraise() {
                this.isLoading = true;
                let go = setTimeout(() => {
                    let url = global_.dataUrl + '/api/getAppraise/getAppraiseInfo';
                    let adminId1;
                    let schoolId1;
                    storage.getItem("adminId", adminId => {
                        adminId1 = adminId.data;
                    });
                    storage.getItem("schoolId", schoolId => {
                        schoolId1 = schoolId.data;
                    });
                    let data = {
                        studentId: adminId1,
                        schoolId: schoolId1,
                    };
                    storage.getItem("token", token => {
                        if (token != '') {
                            tooll.sendRequestWithTokenAndId(url, token.data, adminId1, data, ret => {
                                if (ret.data != null) {
                                    this.courseId = ret.data.courseId;
                                    this.courseName = ret.data.courseName;
                                    this.courseNum = ret.data.courseAppraise;
                                    this.teaNum = ret.data.teacherAppraise;
                                    this.bothNum = ret.data.resultAppraise;
                                    this.teacherId = ret.data.teacherId;
                                    this.otherReason = ret.data.otherAppraise;
                                    clearTimeout(go);
                                    this.isLoading = false;
                                } else {
                                    clearTimeout(go);
                                    this.isLoading = false;
                                    modal.toast({message: "网络异常请联系管理员！", duration: 1.6});
                                    this.gotoDLJM();
                                }
                            });
                        } else {
                            clearTimeout(go);
                            this.isLoading = false;
                            modal.toast({message: "登录超时！", duration: 1.6});
                            this.gotoDLJM();
                        }
                    });
                }, 1000);
            },
            addAppraise() {
                let url = global_.dataUrl + '/api/getAppraise/addAppraise';
                let adminId1;
                let schoolId1;
                let go = setTimeout(() => {
                    storage.getItem("adminId", adminId => {
                        adminId1 = adminId.data;
                    });
                    storage.getItem("schoolId", schoolId => {
                        schoolId1 = schoolId.data;
                    });
                    let data = {
                        "studentId": adminId1,
                        "schoolId": schoolId1,
                        "courseAppraise": this.courseNum,
                        "teacherAppraise": this.teaNum,
                        "resultAppraise": this.bothNum,
                        "otherAppraise": this.otherReason,
                        "courseId": this.courseId,
                        "teacherId": this.teacherId,
                        "courseName": this.courseName,
                    };
                    storage.getItem("token", token => {
                        if (token !== '') {
                            tooll.sendRequestJson(url, token.data, adminId1, JSON.stringify(data), ret => {
                                if (ret.data == null) {
                                    this.isLoading = false;
                                    modal.toast({message: "请检查网络，如无问题请联系管理员！", duration: 1.6});
                                } else {
                                    if (ret.data == true) {
                                        clearTimeout(go);
                                        this.isLoading = false;
                                        modal.toast({message: "评价成功，谢谢您的评价！", duration: 1.6});
                                        this.getAppraise();
                                    } else {
                                        clearTimeout(go);
                                        this.isLoading = false;
                                        modal.toast({message: "网络异常请联系管理员！", duration: 1.6});
                                        this.getAppraise();
                                    }
                                }
                            });
                        } else {
                            clearTimeout(go);
                            this.isLoading = false;
                            modal.toast({message: "登录超时！", duration: 1.6});
                            this.gotoDLJM();
                        }
                    });
                }, 1000);
            }
        },
        created() {
            this.middleHeight = Utils.env.getPageHeight() - 270 + 'px';

            this.getAppraise();
        }
    }
</script>

<style scoped>
    .denglu {
        width: 250px;
        height: 48px;
        margin-top: 40px;
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

    .areaText {
        width: 670px;
        height: 196px;
        background-color: rgba(247, 247, 247, 1);
        border-width: 2px;
        border-color: rgba(232, 232, 232, 1);
        padding: 24px;
        font-size: 24px;
        font-weight: 700;
        color: rgba(194, 201, 209, 1);
        line-height: 34px;
    }

    .shin {
        width: 56px;
        height: 56px;
    }

    .star {
        margin-top: 24px;
        height: 56px;
        width: 750px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .evaluate {
        width: 88px;
        font-size: 28px;
        font-weight: 400;
        color: rgba(164, 171, 179, 1);
        line-height: 40px;
    }

    .evaluate1 {
        width: 88px;
        font-size: 28px;
        font-weight: 400;
        color: rgba(94, 98, 102, 1);
        line-height: 40px;
    }

    .starNum {
        width: 360px;
        height: 56px;
        margin-left: 95px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .nums {
        height: 56px;
        width: 56px;
    }

    .scoreText {
        width: 264px;
        height: 34px;
        font-size: 24px;
        margin-top: 32px;
        font-weight: 400;
        color: rgba(164, 171, 179, 1);
        line-height: 34px;
    }

    .state {
        width: 168px;
        height: 40px;
        font-size: 28px;
        margin-top: 32px;
        font-weight: 500;
        color: rgba(47, 49, 51, 1);
        line-height: 40px;
        text-align: center;
    }

    .body {
        background-color: #F7F7F7;
    }

    .header {
        width: 750px;
        height: 144px;
        background: rgba(255, 255, 255, 1);
        margin-top: 4px;

        flex-direction: row;
        align-items: center;
    }

    .headerImg {
        margin-left: 44px;
        width: 96px;
        height: 96px;
    }

    .headerText {
        margin-left: 26px;
        width: 180px;
        height: 40px;
        font-size: 32px;
        font-weight: 500;
        color: rgba(47, 49, 51, 1);
        line-height: 40px;
    }

    .middle {
        width: 750px;
        height: 1000px;
        background: rgba(255, 255, 255, 1);
        margin-top: 16px;
        align-items: center;
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

    .footer {
        border-top-width: 2px;
        border-top-color: rgba(232, 232, 232, 1);
        width: 750px;
        height: 98px;
        line-height: 98px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: white;
    }

    .load {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -40px;
        margin-left: -40px;

    }
</style>
