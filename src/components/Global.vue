<script>
    import config from "../../configs/config.js"
    import Vue from 'vue'
    import weex from 'weex-vue-render'
    const imgUrl = 'http://afterschool2019.oss-cn-hangzhou.aliyuncs.com/image'
    const dataUrl = 'https://school.xuebaeasy.com:8443'
    //const dicUrl = 'http://192.168.31.175:8081'//本地
    // const dataUrl = ''//本地
    const dicUrl=  'http://172.16.24.76:8081'//本地
    //const dicUrl='https://47.11.87.244:443'
    // const dicUrl='https://tuoguan.xuebaeasy.com'
    export default {

        imgUrl,     //图片服务器地址Å
        dataUrl,    //数据接口服务器地址
        dicUrl,   //绝对位置文件

    }
</script>
