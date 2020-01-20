<template>
    <div class="body">
        <navbar :msg="textName" :url="titleUrl"> </navbar>
        <div class="content">
            <img :src='loginImg' class="loginImg" :style="{height:bacImgHeight}"/>
            <div class="middle">
                <img :src="middleImg"  class="middleImg">
            </div>
            <img :src="titleImg" class="titleImg">
            <div class="footer">
                <div class="phone">
                    <input type="text" class="inputNumber" placeholder="请输入您的手机号">
                </div>
                <div class="phone">
                    <input type="password" class="inputNumber" placeholder="请输入密码">
                </div>
                <div class="denglu" @click="gotoDenglu">
                    <text class="dengluText">注册</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal');
    import Utils from "../components/lib/computed"
    import global_ from '../components/Global.vue'
    import navbar from '../components/basic/Navbar'
    export default {
        name: "zhuce",
        data(){
            return{
                marginTop:null,
                loginImg:global_.imgUrl +'/login_bg%403x.png',
                middleImg:global_.imgUrl +'/sr_bg.png',
                titleImg:global_.imgUrl +'/title@3x.png',
                bacImgHeight:'',
                textName:'用户注册',
                titleUrl:'denglu.html'
            }
        },
        created(){
            this.bacImgHeight=Utils.env.getPageHeight()-88+'px';
        },
        components: {'navbar':navbar},
        methods:{
            gotoDenglu(){
                navigator.push(
                    {
                        url: global_.dicUrl+'/views/denglu.html',
                        animated: "true"
                    }, event => {

                    }
                )
            }
        }
    }
</script>

<style scoped>

    .loginImg{
        width: 750px;
        height: 1206px;
    }
    .content{
        height: 1026px;
        width: 750px;
    }
    .middle{
        position: absolute;
        height: 650px;
        width: 646px;
        margin-top: 172px;
        background-color: white;
        left: 50%;
        margin-left: -323px;
    }
    .middleImg{
        height: 760px;
        width:660px;
    }
    .titleImg{
        position: absolute;
        left: 50%;
        margin-left: -214px;
        top:80px;
        height: 274px;
        width: 428px;
    }
    .footer{
        height: 474px;
        width: 510px;
        position: absolute;
        top:450px;
        left:50%;
        margin-left: -255px;
    }
    .phone{
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
    .inputNumber{
        width: 440px;
        height: 40px;
        font-size: 28px;
        color: #CCCCCC;
    }
    .denglu{
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
    .dengluText{
        font-size: 32px;
        color: #FFFFFF;
    }
</style>
