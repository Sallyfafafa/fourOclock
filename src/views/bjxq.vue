<template>
    <div class="body">
        <!--<navbar :msg="textName" :url="titleUrl"></navbar>!-->
        <loading class="load" v-if="isLoading"></loading>
        <transition-group name="name">
            <div class="card" v-if="loading" key="box">
                <div class="cardTop">
                    <img :src="arrList.headerImg" class="personImg"/>
                    <div class="message">
                        <text class="classRooms">{{arrList.courseName}}</text>
                        <text class="teacher">上课老师：{{arrList.teacherName}}</text>
                        <text class="direction">面向年级：{{arrList.grade}}</text>
                    </div>
                    <div class="baomingDiv" v-if="arrList.selectionState==null">
                        <text class="baomingText" style="width: 48px;" v-if="clickOnce"
                              @click="selectionCourse(arrList.courseId,arrList.grade)">报名
                        </text>
                        <text class="baomingText" style="width: 48px;" v-else>报名
                        </text>
                    </div>
                    <div class="zhuangtai" v-if="arrList.selectionState==0">
                        <text class="baomingText" style="color:#5987FF">待审核</text>
                    </div>
                    <div class="zhuangtai" v-if="arrList.selectionState==1">
                        <text class="baomingText" style="color:#24A88F ">已通过</text>
                    </div>
                    <div class="zhuangtai" v-if="arrList.selectionState==2">
                        <text class="baomingText" style="color:#D42F2F">未通过</text>
                    </div>
                </div>
                <div class="cardBot">
                    <div class="cardBotLeft">
                        <text class="num">{{arrList.courseCapacity}}</text>
                        <text class="direction" style="color: white">班级容量</text>
                    </div>
                    <div class="cardBotLeft">
                        <text class="num">{{arrList.choseNum}}</text>
                        <text class="direction" style="color: white">已报名人数</text>
                    </div>
                    <div class="cardBotLeft">
                        <text class="num">{{arrList.courseSelected}}</text>
                        <text class="direction" style="color: white">通过人数</text>
                    </div>
                </div>
            </div>
            <scroller class="detail" :style={height:scrollHeight} v-if="loading" key="box1">
                <div class="header">
                    <div class="blockHea"></div>
                    <text class="detailTe">班级介绍</text>
                </div>
                <text class="detailText">
                    通过引用有代表性的一对一学员作业点评，从而对训练营一期的课程内容做复盘。可以适当补充一些新的知识内容，但不用做大范围创新。

                    产出的点评笔记面向的读者是普通设计师小伙伴，而并非我们的学员。不用把所有课程中知识点都面面俱到，主要是通过学员案例中出现的问题，提出有针对性的解决方案，让没有上过课程的小伙伴能快速理解。

                    所选用的讲解案例，注意更新，不要用已在各平台重复发表或课件中经常出现的案例。

                    知识点不要重复讲解，如在之前的切入点已经提及的知识点，后续可以带过。 点评笔记的排版样式，不要与之前EDC在站酷上的点评笔记样式完全一样，做出差异化。
                </text>
            </scroller>
        </transition-group>
    </div>

</template>

<script>
    const navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal');
    const animation = weex.requireModule('animation');
    import tooll from '../components/lib/util.js'
    import Utils from "../components/lib/computed"
    import global_ from '../components/Global.vue'
    import navbar from '../components/basic/Navbar'
    import loading from "../components/basic/loading"

    const storage = weex.requireModule('storage');
    export default {
        name: "bjxq",
        data() {
            return {
                clickOnce:true,
                loading: false,
                isLoading: true,
                Img: global_.imgUrl + '/QQ%E5%9B%BE%E7%89%8720190825183207.jpg',
                arrList: {
                    courseId: '',
                    courseName: '',
                    headerImg: '',
                    teacherName: '',
                    grade: '',
                    selectionState: '',
                    courseCapacity: '',
                    choseNum: '',
                    courseSelected: '',
                },
                textName: '班级详情',
                titleUrl: 'zxbm.html',
                scrollHeight: '',
            }
        },
        created() {
            this.getOneCourseInfo();
            this.scrollHeight = Utils.env.getPageHeight() - 360 + 'px';
        },
        methods: {
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
            getOneCourseInfo() {
                let go = setTimeout(() => {
                    let courseId = tooll.getUrlParam("courseId");
                    let url = global_.dataUrl + '/api/getJson/getOneCourseInfo';
                    let adminId1;
                    let schoolId1;
                    storage.getItem("adminId", adminId => {
                        adminId1 = adminId.data;
                    });
                    storage.getItem("schoolId", schoolId => {
                        schoolId1 = schoolId.data;
                    });
                    let data = {adminId: adminId1, courseId: courseId, schoolId: schoolId1};
                    storage.getItem("token", token => {
                        if (token != '') {
                            tooll.sendRequestWithTokenAndId(url, token.data, adminId1, data, ret => {
                                    if (ret.data != null) {
                                        this.arrList = ret.data;
                                        clearTimeout(go);
                                        this.isLoading = false;
                                        this.loading = true;
                                    } else {
                                        clearTimeout(go);
                                        this.isLoading = false;
                                        modal.toast({message: "网络出错器请重试", duration: 1.6});
                                        this.gotoDLJM();
                                    }
                                }
                            );
                        } else {
                            clearTimeout(go);
                            this.isLoading = false;
                            modal.toast({message: "登录超时", duration: 1.6});
                            this.gotoDLJM();
                        }
                    });
                }, 1000);
            },
            selectionCourse(courseId, grade) {
                this.clickOnce=false;
                let go = setTimeout(() => {
                    let url = global_.dataUrl + '/api/getJson/addSelection';
                    let adminId1;
                    storage.getItem("adminId", adminId => {
                        adminId1 = adminId.data;
                    });
                    let data = {studentId: adminId1, courseId: courseId, grade: grade};
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
                                        this.getOneCourseInfo();
                                        modal.toast({message: "报名成功,请等待班主任审核！", duration: 1.6});
                                    } else {
                                        if (ret.data === -1) {
                                            clearTimeout(go);
                                            this.isLoading = false;
                                            modal.toast({message: "请选择和所属年级相符的课程！", duration: 1.6});
                                        } else {
                                            if (ret.data === -2) {
                                                clearTimeout(go);
                                                this.isLoading = false;
                                                this.getOneCourseInfo();
                                                modal.toast({message: "课程人数已满！", duration: 1.6});

                                            } else {
                                                clearTimeout(go);
                                                this.isLoading = false;
                                                modal.toast({message: "报名失败，请联系管理员！", duration: 1.6});
                                                this.getOneCourseInfo();
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
                }, 0);
                setTimeout(() => {
                    this.clickOnce=true;
                },3000);
            },

        },
        components: {
            'navbar': navbar,
            'loading': loading
        }


    }
</script>
<style>
    .name-enter-active, .name-leave-active {
        transition: opacity 0.5s;
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

    .card {
        margin-top: 16px;
        margin-left: auto;
        margin-right: auto;
        width: 720px;
        height: 310px;
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
        background-color: #5987FF;
        border-color: #5987FF;
        border-radius: 16px;
        margin-right: auto;
        margin-left: auto;
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
        color: #fff;
        line-height: 50px;
    }

    .detail {
        width: 710px;
        height: 600px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 24px;
        flex-direction: column;
        align-items: center;
        background-color: white;
    }

    .detailText {
        background-color: white;
        width: 662px;
        font-size: 30px;
        font-weight: 400;
        color: rgba(94, 98, 102, 1);
        line-height: 42px;
    }

    .header {
        width: 662px;
        height: 108px;
        flex-direction: row;
        align-items: center;
    }

    .blockHea {
        width: 12px;
        height: 36px;
        background: rgba(89, 135, 255, 1);
    }

    .detailTe {
        width: 128px;
        height: 40px;
        font-size: 32px;
        margin-left: 16px;
        font-weight: 500;
        color: rgba(47, 49, 51, 1);
        line-height: 40px;
    }

    .load {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -40px;
        margin-left: -40px;

    }

    .baomingDiv {
        margin-top: 64px;
        margin-left: 92px;
        width: 136px;
        height: 52px;
        background-color: #FF6E2C;
        border-radius: 26px;
        border-color: #FF6E2C;
        align-items: center;
    }

    .zhuangtai {
        margin-top: 64px;
        margin-left: 92px;
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
</style>
