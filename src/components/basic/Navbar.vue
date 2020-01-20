<template>
    <div class="navbar" :style="{marginTop:marginTop}">
        <div class="nav">
            <div class="big" @click="LeftButtonClick">
                <image class="navImg" :src='srcImg'></image>
            </div>
            <text class="navText" >{{msg}}</text>
            <div style="width: 100px;height: 100px;"></div>
        </div>
    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal')
    import Utils from "../lib/computed"
    import global_ from '../Global.vue'
    export default {
        name: 'Navbar',
        data(){
            return{
                srcImg:'http://aibole.oss-cn-hangzhou.aliyuncs.com/basic/back_2.png',
                marginTop:null,
            }
        },
        components:{
            'global_':global_
        },
        created(){
            if(Utils.env.isIOS())
            {
                this.marginTop = 30+'px'
            }
            if(Utils.env.isIPhoneX())
            {
                this.marginTop = 88+'px'
            }
        },
        methods:{
            LeftButtonClick(){
                console.log('跳转...') ;
                navigator.push({
                    url: this.url,
                    animated: "true"
                }, event => {

                })
            }
        },
        props:{
            msg: String,
            url:String,
        },

    }

</script>

<style scoped>
    .navbar{
        height:88px;
        width: 750px;
        background-color: white;
    }
    .nav{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .navImg{
        width: 22px;
        height:30px;
    }
    .big{
        width:100px;
        height:88px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .navText{
        font-size:32px;
        color:#47484B;
        line-height: 88px;
    }
</style>
