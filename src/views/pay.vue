
<script>
    import tooll from '../components/lib/util.js'
    import global_ from '../components/Global.vue'

    const modal = weex.requireModule('modal');
    const stream = weex.requireModule('stream');
    const storage = weex.requireModule('storage');
    export default {
        name: 'pay',
        data() {
            return {
                htmlInfo: ''
            }
        },
        components: {},//子组件依赖
        methods: {
            ceshi() {
                console.log("!234");
            },
            payCourse() {
                let adminId1;
                let url = global_.dataUrl + "/api/getJson/payCourse";
                storage.getItem("adminId", adminId => {
                    adminId1 = adminId.data;
                });
                let openId = tooll.getUrlParam("openid");
                let studentNumber = tooll.getUrlParam("studentNumber");
                let schoolId = tooll.getUrlParam("schoolId");
                let data = {
                    openId,
                    studentNumber,
                    schoolId,
                };
                //let winOpen = window.open("", "_blank
                storage.getItem("token", token => {
                    if (token !== '') {
                        tooll.sendRequestWithTokenAndId(url, token.data, adminId1, data, ret => {
                            if (ret.data.objResult != null) {
                                const link = ret.data.objResult.data;
                                setTimeout(function () {  //这里使用setTimeout非常重要，没有将无法实现
                                    //原因是window.open会中断正在执行的进程，这样能保证其它代码执行完成再执行这个。
                                    //winOpen.location = "http://192.168.1.108:8081/views/pay.html"; //改变页面的location
                                    document.write(link);
                                    document.close();
                                }, 200);
                            } else {
                                modal.toast({message: "通讯失败，请联系管理员！", direction: 1.6});
                            }
                        });
                    } else {
                        modal.toast({message: "登录超时！", direction: 1.6});
                    }
                });
            },
            openWindows(data) {
                console.log("!234");
                let dwSafari;
                dwSafari = window.open();
                let dataObj = data;
                dwSafari.document.write(dataObj);
                dwSafari.document.close();
                //window.location.href = data;
            },
            open(data) {
                let winOpen = window.open("", "_blank"); //首先打开一个新页面
                const link = data;
                setTimeout(function () {  //这里使用setTimeout非常重要，没有将无法实现
                    //原因是window.open会中断正在执行的进程，这样能保证其它代码执行完成再执行这个。
                    winOpen.location = "http://192.168.1.108:8081/views/pay.html"; //改变页面的location
                    winOpen.document.write(link);
                    winOpen.document.close();
                }, 200);
            }
        },
        /*已经创建完成：*/
        create: function () {
        },

        /* 开始 loading 事件 */
        beforeCreate: function () {
        },

        /* 后端 请求数据 */
        mounted: function () {
        },

        created() {//初始加载
            this.payCourse();
        },
    };
</script>

