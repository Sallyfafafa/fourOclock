import Vue from 'vue';

import weex from 'weex-vue-render';

// import render-core.
// import weex from 'weex-vue-render/dist/index.core';

// need to run `npm i weex-vue-slider weex-vue-stream --save` frist.
// import the plugins (components and modules) you want to use.
// import slider from 'weex-vue-slider';
// import stream from 'weex-vue-stream';

// install the plugins.
// weex.install(slider);
// weex.install(stream);
weex.init(Vue);
//post请求格式化方法

weex.registerModule('tools', {
    toParams(obj) {
        let param = ""
        for (const name in obj) {
            if (typeof obj[name] != 'function') {
                param += "&" + name + "=" + encodeURI(obj[name])
            }
        }
        return param.substring(1)
    },
    formatDate(date,fmt) {
        let o = {
            "M+" : date.getMonth()+1,                 //月份
            "d+" : date.getDate(),                    //日
            "h+" : date.getHours(),                   //小时
            "m+" : date.getMinutes(),                 //分
            "s+" : date.getSeconds(),                 //秒
            "q+" : Math.floor((date.getMonth()+3)/3), //季度
            "S"  : date.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(let k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    },
    debounce(action, delay) {
        let timer = null;

        return function() {
            let self = this,
                args = arguments;

            clearTimeout(timer);
            timer = setTimeout(function() {
                action.apply(self, args)
            }, delay);
        }
    },
    createQuery (obj) {
        let url = '?';
        for (let key in obj) {
            if (obj[key] !== null) {
                url += (key + '=' + encodeURIComponent(obj[key]) + '&');
            }
        }
        return url.substring(0, url.lastIndexOf('&'));
    },
    getQueryData (url) {
        url = url.substring(url.indexOf('.js?') + 3);
        let result = {};
        if (url.indexOf("?") !== -1) {
            let str = url.substr(1);
            let strs = str.split("&");
            for (let i = 0; i < strs.length; i++) {
                result[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
            }
        }
        return result;
    },

});

//storage get set辅助方法


const storage = weex.requireModule('storage')
weex.registerModule("bus", {
    setItem(key, obj, fun) {
        storage.setItem(key, JSON.stringify(obj), fun)
    },
    getItem(key) {
        let obj = null
        storage.getItem(key, e => {
            if (e.result === "success") {
                obj = JSON.parse(e.data)
            } else
                obj = null
        })
        return obj
    }
})

let gEvent={};

weex.registerModule("eventCenter",{

    registerEvent(eventName,callBackFun){
        gEvent.eventName = callBackFun;

    },

    removeEvent(eventName){

    },

    fireEvent(eventName,data){
        gEvent.eventName(data);
    }

});

const stream = weex.requireModule('stream');
const tool = weex.requireModule('tools');
weex.registerModule("netRequest",{

    sendRequest (url,data,callback) {
        stream.fetch({
            method: 'POST',
            url: url,
            type: 'json',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: tool.toParams(data)
        },callback)
    },

    sendOtherRequest(type, url, data, callback) {
        stream.fetch({
            method: type,
            url: url,
            type: 'json',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: tool.toParams(data)
        },callback)
    },
});


const App = require('../../../src/components/basic/Navbar.vue');
new Vue(Vue.util.extend({el: '#root'}, App));
