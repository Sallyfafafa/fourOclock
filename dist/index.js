// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var stream = weex.requireModule('stream');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
var globalEvent = weex.requireModule('globalEvent');
var navigator = weex.requireModule('navigator');
var tools = {
    toParams: function toParams(obj) {
        var param = "";
        for (var name in obj) {
            if (typeof obj[name] !== 'function') {
                if (obj[name] === 0 || obj[name]) {
                    if (name === 'json') {
                        param += "&" + "json" + "=" + JSON.stringify(obj[name]);
                    } else {
                        param += "&" + name + "=" + encodeURI(obj[name]);
                    }
                } else {
                    param += "&" + name + "=";
                }
            }
        }
        return param.substring(1);
    },
    getTime: function getTime(date) {
        var time = new Date(date);
        var now = new Date();
        var info = void 0;
        var num = parseInt(now.getFullYear() + now.getMonth() + now.getDate()) - parseInt(time.getFullYear() + time.getMonth() + time.getDate());
        if (num === 0) {
            info = "今天" + time.getHours() + ":" + time.getMinutes();
        } else if (num === 1) {
            info = "昨天" + time.getHours() + ":" + time.getMinutes();
        } else if (num === 2) {
            info = "前天" + time.getHours() + ":" + time.getMinutes();
        } else if (num >= 3 && num <= 7) {
            info = "三天前";
        } else {
            info = "很久以前";
        }
        return info;
    },
    sendRequestWithToken: function sendRequestWithToken(url, token, data, callback) {
        var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "POST";

        stream.fetch({
            method: type,
            url: url,
            type: 'json',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': token
            },
            body: tools.toParams(data)
        }, callback);
    },
    sendRequestWithTokenAndId: function sendRequestWithTokenAndId(url, token, adminId, data, callback) {
        var type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "POST";

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
        }, callback);
    },
    sendRequestJson: function sendRequestJson(url, token, adminId, data, callback) {
        var type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "POST";

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
        }, callback);
    },
    sendRequest: function sendRequest(url, data, callback) {
        var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "POST";

        stream.fetch({
            method: type,
            url: url,
            type: 'json',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            },
            body: tools.toParams(data)
        }, callback);
    },
    formatDate: function formatDate(date, fmt) {
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }return fmt;
    },
    getUrlParam: function getUrlParam(name) {
        var url = decodeURI(weex.config.bundleUrl); //取得整个地址栏
        var result = url.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        if (result == null || result === undefined) {
            console.warn('警告:\n--- start :\n' + name + ' 值为 ' + result + '\n--- end \n\n');
        } else {
            return result[1];
        }
    },
    setEventListen: function setEventListen() {
        globalEvent.addEventListener("native_jump_event", function (e) {
            modal.toast({ message: e, duration: 2 });
            modal.confirm({
                message: '收到一条新消息?',
                duration: 0.3
            }, function (value) {
                if (value === 'OK') {
                    var url = 'http://maibole.xuebaeasy.com/views/basic/infolb.js';
                    navigator.push({
                        url: url,
                        animated: "true"
                    }, function (event) {});
                }
            });
        });
    },
    setTitle: function setTitle(t) {
        document.title = t;
        var i = document.createElement('iframe');
        //i.src = '//m.baidu.com/favicon.ico';
        i.style.display = 'none';
        i.onload = function () {
            setTimeout(function () {
                i.remove();
            }, 9);
        };
        document.body.appendChild(i);
    },
    getCache: function getCache(key) {
        return new Promise(function (resolve) {
            try {
                storage.getItem(key, function (e) {
                    if (e.result === 'success') {
                        resolve(e.data);
                        console.info('\u83B7\u53D6\u7F13\u5B58key=\'' + key + '\'\u6210\u529F,result=', e);
                    } else {
                        resolve(false);
                        console.warn('\u83B7\u53D6\u7F13\u5B58key=\'' + key + '\'\u5931\u8D25,result=', e);
                    }
                });
            } catch (e) {
                console.error('\u83B7\u53D6\u7F13\u5B58key=\'' + key + '\'\u51FA\u73B0\u5F02\u5E38\uFF01 >>>' + e.toString());
                resolve(false);
            }
        });
    }
};

exports.default = tools;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(35)
)

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(37)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sally/Documents/毕设/weexapp/src/components/HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-469af010"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = {
  "@TRANSITION": {
    "v-enter-active": {
      "property": "opacity",
      "duration": 500
    },
    "v-leave-active": {
      "property": "opacity",
      "duration": 500
    }
  },
  "v-enter-active": {
    "transitionProperty": "opacity",
    "transitionDuration": 500
  },
  "v-leave-active": {
    "transitionProperty": "opacity",
    "transitionDuration": 500
  },
  "v-enter": {
    "opacity": 0
  }
}

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "grzx",
    data: function data() {
        return { show: false };
    }
};

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "demo"
    }
  }, [_c('button', {
    on: {
      "click": function($event) {
        _vm.show = !_vm.show
      }
    }
  }, [_vm._v("\n        Toggle\n    ")]), _c('transition', [(_vm.show) ? _c('p', [_vm._v("hello")]) : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(56);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(57)
)

/* script */
__vue_exports__ = __webpack_require__(58)

/* template */
var __vue_template__ = __webpack_require__(59)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/sally/Documents/毕设/weexapp/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "width": "424",
    "height": "200"
  },
  "greeting": {
    "textAlign": "center",
    "marginTop": "70",
    "fontSize": "50",
    "color": "#41B883"
  },
  "message": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "fontSize": "32",
    "color": "#727272"
  }
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HelloWorld = __webpack_require__(34);

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _util = __webpack_require__(10);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import zxbm from '../components/views/zxbm'
exports.default = {
  name: 'App',
  components: {
    HelloWorld: _HelloWorld2.default
  },
  data: function data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    };
  },
  create: function create() {
    _util2.default.wxSetTitle("报名申请");
  }
};

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": _vm.logo
    }
  }), _c('text', {
    staticClass: ["greeting"]
  }, [_vm._v("The environment is ready!")]), _c('HelloWorld')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });