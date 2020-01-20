const stream = weex.requireModule('stream');
const storage = weex.requireModule('storage')
const modal = weex.requireModule('modal')
const globalEvent = weex.requireModule('globalEvent');
const navigator = weex.requireModule('navigator');
const tools = {
    toParams(obj) {
        var param = ""
        for (const name in obj) {
            if (typeof obj[name] !== 'function') {
                if (obj[name] === 0 || obj[name]) {
                    if (name === 'json') {
                        param += "&" + "json" + "=" + JSON.stringify(obj[name]);
                    } else {
                        param += "&" + name + "=" + encodeURI(obj[name])
                    }
                } else {
                    param += "&" + name + "=";
                }
            }
        }
        return param.substring(1)
    },
    getTime(date) {
        let time = new Date(date);
        let now = new Date();
        let info;
        let num = parseInt(now.getFullYear() + now.getMonth() + now.getDate())
            - parseInt(time.getFullYear() + time.getMonth() + time.getDate())
        if(num===0){
            info="今天"+time.getHours() + ":" + time.getMinutes();
        }else if(num===1){
            info="昨天"+time.getHours() + ":" + time.getMinutes();
        }else if(num===2){
            info="前天"+time.getHours() + ":" + time.getMinutes();
        }else if(num>=3&&num<=7){
            info="三天前";
        }else{
            info="很久以前";
        }
        return info;
    },
    sendRequestWithToken(url, token, data, callback, type = "POST") {
        stream.fetch({
            method: type,
            url: url,
            type: 'json',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': token,
            },
            body: tools.toParams(data)
        }, callback)
    },
    sendRequestWithTokenAndId(url, token, adminId, data, callback, type = "POST") {
        stream.fetch({
            method: type,
            url: url,
            type: 'json',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': token,
                'adminId': adminId
            },
            body: tools.toParams(data)
        }, callback)
    },
    sendRequestJson(url, token, adminId, data, callback, type = "POST") {
        stream.fetch({
            method: type,
            url: url,
            type: 'json',
            headers: {
                'Content-Type': 'application/json',
                'token': token,
                'adminId': adminId
            },
            body: data
        }, callback)
    },
    sendRequest(url, data, callback, type = "POST") {
        stream.fetch({
            method: type,
            url: url,
            type: 'json',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            },
            body: tools.toParams(data)
        }, callback)
    },
    formatDate(date, fmt) {
        let o = {
            "M+": date.getMonth() + 1,                 //月份
            "d+": date.getDate(),                    //日
            "h+": date.getHours(),                   //小时
            "m+": date.getMinutes(),                 //分
            "s+": date.getSeconds(),                 //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },
    getUrlParam(name) {
        var url = decodeURI(weex.config.bundleUrl); //取得整个地址栏
        var result = url.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        if (result == null || result === undefined) {
            console.warn('警告:\n--- start :\n' + name + ' 值为 ' + result + '\n--- end \n\n');
        } else {
            return result[1];
        }
    },
    setEventListen() {
        globalEvent.addEventListener("native_jump_event", function (e) {
            modal.toast({message: e, duration: 2})
            modal.confirm({
                message: '收到一条新消息?',
                duration: 0.3
            }, function (value) {
                if (value === 'OK') {
                    let url = 'http://maibole.xuebaeasy.com/views/basic/infolb.js';
                    navigator.push({
                        url: url,
                        animated: "true",
                    }, event => {

                    })
                }

            })

        });
    },
    setTitle(t) {
        document.title = t;
        var i = document.createElement('iframe');
        //i.src = '//m.baidu.com/favicon.ico';
        i.style.display = 'none';
        i.onload = function () {
            setTimeout(function () {
                i.remove();
            }, 9)
        }
        document.body.appendChild(i);
    },

    getCache(key) {
        return new Promise(function (resolve) {
            try {
                storage.getItem(key, e => {
                    if (e.result === 'success') {
                        resolve(e.data);
                        console.info(`获取缓存key='${key}'成功,result=`, e);
                    } else {
                        resolve(false);
                        console.warn(`获取缓存key='${key}'失败,result=`, e);
                    }
                });
            } catch (e) {
                console.error(`获取缓存key='${key}'出现异常！ >>>` + e.toString());
                resolve(false);
            }
        });
    }
};

export default tools;
