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
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(1)
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
__vue_options__.__file = "/Users/sally/Documents/毕设/weexapp/src/components/Global.vue"
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _vue = __webpack_require__(8);

var _vue2 = _interopRequireDefault(_vue);

var _weexVueRender = __webpack_require__(9);

var _weexVueRender2 = _interopRequireDefault(_weexVueRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imgUrl = 'http://afterschool2019.oss-cn-hangzhou.aliyuncs.com/image';
var dataUrl = 'https://school.xuebaeasy.com:8443';
//const dicUrl = 'http://192.168.31.175:8081'//本地
// const dataUrl = ''//本地
var dicUrl = 'http://172.16.24.76:8081'; //本地
//const dicUrl='https://47.11.87.244:443'
// const dicUrl='https://tuoguan.xuebaeasy.com'
exports.default = {

    imgUrl: imgUrl, //图片服务器地址Å
    dataUrl: dataUrl, //数据接口服务器地址
    dicUrl: dicUrl //绝对位置文件

};

/***/ }),

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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
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
__vue_options__.__file = "/Users/sally/Documents/毕设/weexapp/src/components/basic/loading.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ae5dfa0a"
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = {
  "sk-three-bounce": {
    "flexDirection": "row",
    "width": "80",
    "height": "80"
  },
  "sk-child": {
    "width": "20",
    "height": "20",
    "display": "inline-block",
    "borderRadius": 100,
    "backgroundColor": "#5987FF",
    "animation": "sk-three-bounce 1.4s ease-in-out 0s infinite"
  },
  "sk-bounce1": {
    "animationDelay": -0.32
  },
  "sk-bounce2": {
    "animationDelay": -0.16
  }
}

/***/ }),

/***/ 13:
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
//

exports.default = {
    name: "loading.vue"
};

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["sk-three-bounce"]
  }, [_c('div', {
    staticClass: ["sk-child", "sk-bounce1"]
  }), _c('div', {
    staticClass: ["sk-child", "sk-bounce2"]
  }), _c('div', {
    staticClass: ["sk-child", "sk-bounce3"]
  })])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Utils = {
    env: {
        isTrip: function isTrip() {
            var appName = weex.config.env.appName;

            return appName === 'LX';
        },
        isWeb: function isWeb() {
            var platform = weex.config.env.platform;

            return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
        },
        isIOS: function isIOS() {
            var platform = weex.config.env.platform;

            return platform.toLowerCase() === 'ios';
        },

        /**
         * 是否为 iPhone X
         * @returns {boolean}
         */
        isIPhoneX: function isIPhoneX() {
            var deviceHeight = weex.config.env.deviceHeight;

            if (Utils.env.isWeb()) {
                return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
            }
            return Utils.env.isIOS() && deviceHeight === 2436;
        },
        isAndroid: function isAndroid() {
            var platform = weex.config.env.platform;

            return platform.toLowerCase() === 'android';
        },

        /**
         * 获取weex屏幕真实的设置高度，需要减去导航栏高度
         * @returns {Number}
         */
        getPageHeight: function getPageHeight() {
            var env = weex.config.env;

            var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 0;
            return env.deviceHeight / env.deviceWidth * 750 - navHeight;
        },

        /**
         * 获取weex屏幕真实的设置高度
         * @returns {Number}
         */
        getScreenHeight: function getScreenHeight() {
            var env = weex.config.env;

            return env.deviceHeight / env.deviceWidth * 750;
        }
    }
};

exports.default = Utils;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var path = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"path\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var ROOT = path.resolve(__dirname, '..');
var ip = __webpack_require__(3).address();
var config = {
  root: ROOT,
  // webpack-dev-server
  pluginConfigPath: 'plugins/plugins.json',
  pluginFilePath: 'plugins/plugins.js',
  // router
  // common
  sourceDir: 'src',
  templateDir: '.temp',
  entryFilePath: 'entry.js',
  // Module exclude from compile process
  excludeModuleReg: /node_modules(?!(\/|\\).*(weex).*)/,
  // Filter for entry files
  // see: https://www.npmjs.com/package/glob#glob-primer
  entryFilter: '**/*.vue',
  // Options for the filter
  // see: https://www.npmjs.com/package/glob#options
  entryFilterOptions: {},
  dev: {
    // Various Dev Server settings
    contentBase: ROOT,
    host: ip,
    port: 8081,
    historyApiFallback: true,
    open: true,
    watchContentBase: true,
    openPage: 'web/preview.html',
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: false
    },
    /**
    * Source Maps
    */
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',
    env: JSON.stringify('development'),
    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    proxyTable: {},
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    htmlOptions: {
      devScripts: '\n        <script>\n          window.addEventListener(\'load\', function () {\n            var is_touch_device = function () {\n              return \'ontouchstart\' in window // works on most browsers\n                  || \'onmsgesturechange\' in window; // works on ie10\n            };\n            if(!is_touch_device()) {\n              if (window.parent === window) { // not in iframe.\n                window.phantomLimb.stop()\n              }\n            }\n          })\n        </script>\n        '
    }
  },
  prod: _defineProperty({
    env: JSON.stringify('production'),
    /**
     * Source Maps
     */
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
    cssSourceMap: true
  }, 'productionSourceMap', true),
  nodeConfiguration: {
    global: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false,
    clearImmediate: false,
    // see: https://github.com/webpack/node-libs-browser
    assert: false,
    buffer: false,
    child_process: false,
    cluster: false,
    console: false,
    constants: false,
    crypto: false,
    dgram: false,
    dns: false,
    domain: false,
    events: false,
    fs: false,
    http: false,
    https: false,
    module: false,
    net: false,
    os: false,
    path: false,
    process: false,
    punycode: false,
    querystring: false,
    readline: false,
    repl: false,
    stream: false,
    string_decoder: false,
    sys: false,
    timers: false,
    tls: false,
    tty: false,
    url: false,
    util: false,
    vm: false,
    zlib: false
  }
};
module.exports = config;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ip = exports;
var Buffer = __webpack_require__(4).Buffer;
var os = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"os\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

ip.toBuffer = function(ip, buff, offset) {
  offset = ~~offset;

  var result;

  if (this.isV4Format(ip)) {
    result = buff || new Buffer(offset + 4);
    ip.split(/\./g).map(function(byte) {
      result[offset++] = parseInt(byte, 10) & 0xff;
    });
  } else if (this.isV6Format(ip)) {
    var sections = ip.split(':', 8);

    var i;
    for (i = 0; i < sections.length; i++) {
      var isv4 = this.isV4Format(sections[i]);
      var v4Buffer;

      if (isv4) {
        v4Buffer = this.toBuffer(sections[i]);
        sections[i] = v4Buffer.slice(0, 2).toString('hex');
      }

      if (v4Buffer && ++i < 8) {
        sections.splice(i, 0, v4Buffer.slice(2, 4).toString('hex'));
      }
    }

    if (sections[0] === '') {
      while (sections.length < 8) sections.unshift('0');
    } else if (sections[sections.length - 1] === '') {
      while (sections.length < 8) sections.push('0');
    } else if (sections.length < 8) {
      for (i = 0; i < sections.length && sections[i] !== ''; i++);
      var argv = [ i, 1 ];
      for (i = 9 - sections.length; i > 0; i--) {
        argv.push('0');
      }
      sections.splice.apply(sections, argv);
    }

    result = buff || new Buffer(offset + 16);
    for (i = 0; i < sections.length; i++) {
      var word = parseInt(sections[i], 16);
      result[offset++] = (word >> 8) & 0xff;
      result[offset++] = word & 0xff;
    }
  }

  if (!result) {
    throw Error('Invalid ip address: ' + ip);
  }

  return result;
};

ip.toString = function(buff, offset, length) {
  offset = ~~offset;
  length = length || (buff.length - offset);

  var result = [];
  if (length === 4) {
    // IPv4
    for (var i = 0; i < length; i++) {
      result.push(buff[offset + i]);
    }
    result = result.join('.');
  } else if (length === 16) {
    // IPv6
    for (var i = 0; i < length; i += 2) {
      result.push(buff.readUInt16BE(offset + i).toString(16));
    }
    result = result.join(':');
    result = result.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3');
    result = result.replace(/:{3,4}/, '::');
  }

  return result;
};

var ipv4Regex = /^(\d{1,3}\.){3,3}\d{1,3}$/;
var ipv6Regex =
    /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;

ip.isV4Format = function(ip) {
  return ipv4Regex.test(ip);
};

ip.isV6Format = function(ip) {
  return ipv6Regex.test(ip);
};
function _normalizeFamily(family) {
  return family ? family.toLowerCase() : 'ipv4';
}

ip.fromPrefixLen = function(prefixlen, family) {
  if (prefixlen > 32) {
    family = 'ipv6';
  } else {
    family = _normalizeFamily(family);
  }

  var len = 4;
  if (family === 'ipv6') {
    len = 16;
  }
  var buff = new Buffer(len);

  for (var i = 0, n = buff.length; i < n; ++i) {
    var bits = 8;
    if (prefixlen < 8) {
      bits = prefixlen;
    }
    prefixlen -= bits;

    buff[i] = ~(0xff >> bits) & 0xff;
  }

  return ip.toString(buff);
};

ip.mask = function(addr, mask) {
  addr = ip.toBuffer(addr);
  mask = ip.toBuffer(mask);

  var result = new Buffer(Math.max(addr.length, mask.length));

  var i = 0;
  // Same protocol - do bitwise and
  if (addr.length === mask.length) {
    for (i = 0; i < addr.length; i++) {
      result[i] = addr[i] & mask[i];
    }
  } else if (mask.length === 4) {
    // IPv6 address and IPv4 mask
    // (Mask low bits)
    for (i = 0; i < mask.length; i++) {
      result[i] = addr[addr.length - 4  + i] & mask[i];
    }
  } else {
    // IPv6 mask and IPv4 addr
    for (var i = 0; i < result.length - 6; i++) {
      result[i] = 0;
    }

    // ::ffff:ipv4
    result[10] = 0xff;
    result[11] = 0xff;
    for (i = 0; i < addr.length; i++) {
      result[i + 12] = addr[i] & mask[i + 12];
    }
    i = i + 12;
  }
  for (; i < result.length; i++)
    result[i] = 0;

  return ip.toString(result);
};

ip.cidr = function(cidrString) {
  var cidrParts = cidrString.split('/');

  var addr = cidrParts[0];
  if (cidrParts.length !== 2)
    throw new Error('invalid CIDR subnet: ' + addr);

  var mask = ip.fromPrefixLen(parseInt(cidrParts[1], 10));

  return ip.mask(addr, mask);
};

ip.subnet = function(addr, mask) {
  var networkAddress = ip.toLong(ip.mask(addr, mask));

  // Calculate the mask's length.
  var maskBuffer = ip.toBuffer(mask);
  var maskLength = 0;

  for (var i = 0; i < maskBuffer.length; i++) {
    if (maskBuffer[i] === 0xff) {
      maskLength += 8;
    } else {
      var octet = maskBuffer[i] & 0xff;
      while (octet) {
        octet = (octet << 1) & 0xff;
        maskLength++;
      }
    }
  }

  var numberOfAddresses = Math.pow(2, 32 - maskLength);

  return {
    networkAddress: ip.fromLong(networkAddress),
    firstAddress: numberOfAddresses <= 2 ?
                    ip.fromLong(networkAddress) :
                    ip.fromLong(networkAddress + 1),
    lastAddress: numberOfAddresses <= 2 ?
                    ip.fromLong(networkAddress + numberOfAddresses - 1) :
                    ip.fromLong(networkAddress + numberOfAddresses - 2),
    broadcastAddress: ip.fromLong(networkAddress + numberOfAddresses - 1),
    subnetMask: mask,
    subnetMaskLength: maskLength,
    numHosts: numberOfAddresses <= 2 ?
                numberOfAddresses : numberOfAddresses - 2,
    length: numberOfAddresses,
    contains: function(other) {
      return networkAddress === ip.toLong(ip.mask(other, mask));
    }
  };
};

ip.cidrSubnet = function(cidrString) {
  var cidrParts = cidrString.split('/');

  var addr = cidrParts[0];
  if (cidrParts.length !== 2)
    throw new Error('invalid CIDR subnet: ' + addr);

  var mask = ip.fromPrefixLen(parseInt(cidrParts[1], 10));

  return ip.subnet(addr, mask);
};

ip.not = function(addr) {
  var buff = ip.toBuffer(addr);
  for (var i = 0; i < buff.length; i++) {
    buff[i] = 0xff ^ buff[i];
  }
  return ip.toString(buff);
};

ip.or = function(a, b) {
  a = ip.toBuffer(a);
  b = ip.toBuffer(b);

  // same protocol
  if (a.length === b.length) {
    for (var i = 0; i < a.length; ++i) {
      a[i] |= b[i];
    }
    return ip.toString(a);

  // mixed protocols
  } else {
    var buff = a;
    var other = b;
    if (b.length > a.length) {
      buff = b;
      other = a;
    }

    var offset = buff.length - other.length;
    for (var i = offset; i < buff.length; ++i) {
      buff[i] |= other[i - offset];
    }

    return ip.toString(buff);
  }
};

ip.isEqual = function(a, b) {
  a = ip.toBuffer(a);
  b = ip.toBuffer(b);

  // Same protocol
  if (a.length === b.length) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // Swap
  if (b.length === 4) {
    var t = b;
    b = a;
    a = t;
  }

  // a - IPv4, b - IPv6
  for (var i = 0; i < 10; i++) {
    if (b[i] !== 0) return false;
  }

  var word = b.readUInt16BE(10);
  if (word !== 0 && word !== 0xffff) return false;

  for (var i = 0; i < 4; i++) {
    if (a[i] !== b[i + 12]) return false;
  }

  return true;
};

ip.isPrivate = function(addr) {
  return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i
      .test(addr) ||
    /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) ||
    /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i
      .test(addr) ||
    /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) ||
    /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) ||
    /^f[cd][0-9a-f]{2}:/i.test(addr) ||
    /^fe80:/i.test(addr) ||
    /^::1$/.test(addr) ||
    /^::$/.test(addr);
};

ip.isPublic = function(addr) {
  return !ip.isPrivate(addr);
};

ip.isLoopback = function(addr) {
  return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/
      .test(addr) ||
    /^fe80::1$/.test(addr) ||
    /^::1$/.test(addr) ||
    /^::$/.test(addr);
};

ip.loopback = function(family) {
  //
  // Default to `ipv4`
  //
  family = _normalizeFamily(family);

  if (family !== 'ipv4' && family !== 'ipv6') {
    throw new Error('family must be ipv4 or ipv6');
  }

  return family === 'ipv4' ? '127.0.0.1' : 'fe80::1';
};

//
// ### function address (name, family)
// #### @name {string|'public'|'private'} **Optional** Name or security
//      of the network interface.
// #### @family {ipv4|ipv6} **Optional** IP family of the address (defaults
//      to ipv4).
//
// Returns the address for the network interface on the current system with
// the specified `name`:
//   * String: First `family` address of the interface.
//             If not found see `undefined`.
//   * 'public': the first public ip address of family.
//   * 'private': the first private ip address of family.
//   * undefined: First address with `ipv4` or loopback address `127.0.0.1`.
//
ip.address = function(name, family) {
  var interfaces = os.networkInterfaces();
  var all;

  //
  // Default to `ipv4`
  //
  family = _normalizeFamily(family);

  //
  // If a specific network interface has been named,
  // return the address.
  //
  if (name && name !== 'private' && name !== 'public') {
    var res = interfaces[name].filter(function(details) {
      var itemFamily = details.family.toLowerCase();
      return itemFamily === family;
    });
    if (res.length === 0)
      return undefined;
    return res[0].address;
  }

  var all = Object.keys(interfaces).map(function (nic) {
    //
    // Note: name will only be `public` or `private`
    // when this is called.
    //
    var addresses = interfaces[nic].filter(function (details) {
      details.family = details.family.toLowerCase();
      if (details.family !== family || ip.isLoopback(details.address)) {
        return false;
      } else if (!name) {
        return true;
      }

      return name === 'public' ? ip.isPrivate(details.address) :
          ip.isPublic(details.address);
    });

    return addresses.length ? addresses[0].address : undefined;
  }).filter(Boolean);

  return !all.length ? ip.loopback(family) : all[0];
};

ip.toLong = function(ip) {
  var ipl = 0;
  ip.split('.').forEach(function(octet) {
    ipl <<= 8;
    ipl += parseInt(octet);
  });
  return(ipl >>> 0);
};

ip.fromLong = function(ipl) {
  return ((ipl >>> 24) + '.' +
      (ipl >> 16 & 255) + '.' +
      (ipl >> 8 & 255) + '.' +
      (ipl & 255) );
};


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(5)
var ieee754 = __webpack_require__(6)
var isArray = __webpack_require__(7)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ("development" !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ("development" !== 'production' && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ("development" !== 'production' && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ("development" !== 'production' && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

console.log('START WEEX VUE RENDER: 1.0.36, Build 2018-12-29 17:52.');

(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.WeexVueRender = factory();
})(undefined, function () {
  'use strict';

  function __$styleInject(css, returnValue) {
    if (typeof document === 'undefined') {
      return returnValue;
    }
    css = css || '';
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    head.appendChild(style);

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    return returnValue;
  }

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.weex-root,\n.weex-root * {\n  color: initial;\n  cursor: initial;\n  direction: inherit;\n  /* In chrome, there's a chance that user set the miximum font-size to \n  a abnormal smaller size. But actually the smaller size is never working\n  if this font / font-size default value is set to initial. Perhaps a bug\n  for chrome. */\n  font: initial;\n  font-size: initial;\n  font-family: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.weex-root,\n.weex-root *,\n.weex-root *::before,\n.weex-root *::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\n.weex-root a,\n.weex-root button,\n.weex-root [role=\"button\"],\n.weex-root input,\n.weex-root label,\n.weex-root select,\n.weex-root textarea {\n      touch-action: manipulation;\n}\n\n.weex-root p,\n.weex-root ol,\n.weex-root ul,\n.weex-root dl,\n.weex-root figure {\n  margin: 0;\n  padding: 0;\n}\n\n.weex-root li {\n  list-style: none;\n}\n\n.weex-root figure {\n  margin: 0;\n}\n\n.weex-root textarea {\n  resize: none;\n}\n\n/* show no scroll bar. */\n::-webkit-scrollbar {\n  display: none;\n}\n", undefined);

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-root * {\n  border-width: 0;\n  border-color: inherit;\n  border-style: solid;\n}\n\ndiv.weex-root {\n  min-height: 100%;\n}\n\n/**\n * slider will overflow in horizontal axis, which will cause container\n * horizontally expanding. below styles will prevent this from happening.\n */\n.weex-root {\n  width: 100%;\n  overflow-x: hidden;\n}\n\n.weex-root figure {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.weex-flex-ct {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.weex-ct {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n          flex-grow: 0;\n  -webkit-flex-basis: auto;\n          flex-basis: auto;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n          align-items: stretch;\n  -webkit-align-content: flex-start;\n          align-content: flex-start;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-ct.horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n}\n\n.weex-el {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n          flex-grow: 0;\n  -webkit-flex-basis: auto;\n          flex-basis: auto;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-text {\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  white-space: pre-wrap;  /* not using 'pre': support auto line feed. */\n  font-size: 0.4266666666666667rem;\n  word-wrap: break-word;\n  overflow: hidden; /* it'll be clipped if the height is not high enough. */\n}\n\n.weex-image {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 100% 100%;\n}\n\n.weex-a {\n  text-decoration: none;\n}\n\n.weex-ios-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  z-index: 9999;\n  top: 0;\n}\n\n.weex-fixed {\n  position: fixed;\n  z-index: 1;\n}\n\n.weex-sticky {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n}\n", undefined);

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function _toInteger(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function _defined(it) {
    if (it == undefined) {
      throw TypeError("Can't call method on  " + it);
    }
    return it;
  };

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function _stringAt(TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) {
        return TO_STRING ? '' : undefined;
      }
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _library = false;

  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') {
      __g = global;
    } // eslint-disable-line no-undef
  });

  var _core = createCommonjsModule(function (module) {
    var core = module.exports = { version: '2.5.2' };
    if (typeof __e == 'number') {
      __e = core;
    } // eslint-disable-line no-undef
  });

  var _core_1 = _core.version;

  var _isObject = function _isObject(it) {
    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function _anObject(it) {
    if (!_isObject(it)) {
      throw TypeError(it + ' is not an object!');
    }
    return it;
  };

  var _fails = function _fails(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function get() {
        return 7;
      } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function _domCreate(it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
        return 7;
      } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function _toPrimitive(it, S) {
    if (!_isObject(it)) {
      return it;
    }
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) {
      return val;
    }
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) {
      return val;
    }
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) {
      return val;
    }
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) {
      try {
        return dP(O, P, Attributes);
      } catch (e) {/* empty */}
    }
    if ('get' in Attributes || 'set' in Attributes) {
      throw TypeError('Accessors not supported!');
    }
    if ('value' in Attributes) {
      O[P] = Attributes.value;
    }
    return O;
  };

  var _objectDp = {
    f: f
  };

  var _propertyDesc = function _propertyDesc(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function _has(it, key) {
    return hasOwnProperty.call(it, key);
  };

  var id = 0;
  var px = Math.random();
  var _uid = function _uid(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _redefine = createCommonjsModule(function (module) {
    var SRC = _uid('src');
    var TO_STRING = 'toString';
    var $toString = Function[TO_STRING];
    var TPL = ('' + $toString).split(TO_STRING);

    _core.inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) {
        _has(val, 'name') || _hide(val, 'name', key);
      }
      if (O[key] === val) {
        return;
      }
      if (isFunction) {
        _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
      }
      if (O === _global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        _hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        _hide(O, key, val);
      }
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });
  });

  var _aFunction = function _aFunction(it) {
    if (typeof it != 'function') {
      throw TypeError(it + ' is not a function!');
    }
    return it;
  };

  // optional / simple context binding

  var _ctx = function _ctx(fn, that, length) {
    _aFunction(fn);
    if (that === undefined) {
      return fn;
    }
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () /* ...args */{
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function $export(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) {
      source = name;
    }
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // extend global
      if (target) {
        _redefine(target, key, out, type & $export.U);
      }
      // export
      if (exports[key] != out) {
        _hide(exports, key, exp);
      }
      if (IS_PROTO && expProto[key] != out) {
        expProto[key] = out;
      }
    }
  };
  _global.core = _core;
  // type bitmap
  $export.F = 1; // forced
  $export.G = 2; // global
  $export.S = 4; // static
  $export.P = 8; // proto
  $export.B = 16; // bind
  $export.W = 32; // wrap
  $export.U = 64; // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  var _iterators = {};

  var toString = {}.toString;

  var _cof = function _cof(it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function _toIobject(it) {
    return _iobject(_defined(it));
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function _toLength(it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes


  var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) {
        while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare
          if (value != value) {
            return true;
          }
          // Array#indexOf ignores holes, Array#includes - not
        }
      } else {
        for (; length > index; index++) {
          if (IS_INCLUDES || index in O) {
            if (O[index] === el) {
              return IS_INCLUDES || index || 0;
            }
          }
        }
      }return !IS_INCLUDES && -1;
    };
  };

  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});
  var _shared = function _shared(key) {
    return store[key] || (store[key] = {});
  };

  var shared = _shared('keys');

  var _sharedKey = function _sharedKey(key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO$1 = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function _objectKeysInternal(object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) {
      if (key != IE_PROTO$1) {
        _has(O, key) && result.push(key);
      }
    }
    // Don't enum bug & hidden keys
    while (names.length > i) {
      if (_has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)


  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) {
      _objectDp.f(O, P = keys[i++], Properties[P]);
    }
    return O;
  };

  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


  var IE_PROTO = _sharedKey('IE_PROTO');
  var Empty = function Empty() {/* empty */};
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var _createDict = function createDict() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    _createDict = iframeDocument.F;
    while (i--) {
      delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];
    }
    return _createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else {
      result = _createDict();
    }
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var _wks = createCommonjsModule(function (module) {
    var store = _shared('wks');

    var _Symbol = _global.Symbol;
    var USE_SYMBOL = typeof _Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : _uid)('Symbol.' + name));
    };

    $exports.store = store;
  });

  var def = _objectDp.f;

  var TAG = _wks('toStringTag');

  var _setToStringTag = function _setToStringTag(it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG)) {
      def(it, TAG, { configurable: true, value: tag });
    }
  };

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () {
    return this;
  });

  var _iterCreate = function _iterCreate(Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function _toObject(it) {
    return Object(_defined(it));
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) {
      return O[IE_PROTO$2];
    }
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function returnThis() {
    return this;
  };

  var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function getMethod(kind) {
      if (!BUGGY && kind in proto) {
        return proto[kind];
      }
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!_library && !_has(IteratorPrototype, ITERATOR)) {
          _hide(IteratorPrototype, ITERATOR, returnThis);
        }
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() {
        return $native.call(this);
      };
    }
    // Define iterator
    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      _hide(proto, ITERATOR, $default);
    }
    // Plug for library
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) {
        for (key in methods) {
          if (!(key in proto)) {
            _redefine(proto, key, methods[key]);
          }
        }
      } else {
        _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
    }
    return methods;
  };

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) {
      return { value: undefined, done: true };
    }
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  // call something on iterator step with safe closing on error

  var _iterCall = function _iterCall(iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
      // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) {
        _anObject(ret.call(iterator));
      }
      throw e;
    }
  };

  // check on default Array iterator

  var ITERATOR$1 = _wks('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function _isArrayIter(it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _createProperty = function _createProperty(object, index, value) {
    if (index in object) {
      _objectDp.f(object, index, _propertyDesc(0, value));
    } else {
      object[index] = value;
    }
  };

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG$1 = _wks('toStringTag');
  // ES3 wrong here
  var ARG = _cof(function () {
    return arguments;
  }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (e) {/* empty */}
  };

  var _classof = function _classof(it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var ITERATOR$2 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) {
      return it[ITERATOR$2] || it['@@iterator'] || _iterators[_classof(it)];
    }
  };

  var ITERATOR$3 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$3]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    // eslint-disable-next-line no-throw-literal
  } catch (e) {/* empty */}

  var _iterDetect = function _iterDetect(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) {
      return false;
    }
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();
      iter.next = function () {
        return { done: safe = true };
      };
      arr[ITERATOR$3] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {/* empty */}
    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) {}), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /*  mapfn = undefined, thisArg = undefined */) {
      var O = _toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) {
        mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      }
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);
        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });

  var from = _core.Array.from;

  var f$1 = Object.getOwnPropertySymbols;

  var _objectGops = {
    f: f$1
  };

  var f$2 = {}.propertyIsEnumerable;

  var _objectPie = {
    f: f$2
  };

  // 19.1.2.1 Object.assign(target, source, ...)


  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var arguments$1 = arguments;
    // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;
    while (aLen > index) {
      var S = _iobject(arguments$1[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        if (isEnum.call(S, key = keys[j++])) {
          T[key] = S[key];
        }
      }
    }return T;
  } : $assign;

  // 19.1.3.1 Object.assign(target, source)


  _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

  var assign = _core.Object.assign;

  var gOPD = Object.getOwnPropertyDescriptor;

  var f$3 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject(O);
    P = _toPrimitive(P, true);
    if (_ie8DomDefine) {
      try {
        return gOPD(O, P);
      } catch (e) {/* empty */}
    }
    if (_has(O, P)) {
      return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
    }
  };

  var _objectGopd = {
    f: f$3
  };

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */

  var check = function check(O, proto) {
    _anObject(O);
    if (!_isObject(proto) && proto !== null) {
      throw TypeError(proto + ": can't set as prototype!");
    }
  };
  var _setProto = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) {
          O.__proto__ = proto;
        } else {
          set(O, proto);
        }
        return O;
      };
    }({}, false) : undefined),
    check: check
  };

  // 19.1.3.19 Object.setPrototypeOf(O, proto)

  _export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

  var setPrototypeOf = _core.Object.setPrototypeOf;

  // 19.1.3.6 Object.prototype.toString()

  var test = {};
  test[_wks('toStringTag')] = 'z';
  if (test + '' != '[object z]') {
    _redefine(Object.prototype, 'toString', function toString() {
      return '[object ' + _classof(this) + ']';
    }, true);
  }

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto$1 = Array.prototype;
  if (ArrayProto$1[UNSCOPABLES] == undefined) {
    _hide(ArrayProto$1, UNSCOPABLES, {});
  }
  var _addToUnscopables = function _addToUnscopables(key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
  };

  var _iterStep = function _iterStep(done, value) {
    return { value: value, done: !!done };
  };

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target
    this._i = 0; // next index
    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }
    if (kind == 'keys') {
      return _iterStep(0, index);
    }
    if (kind == 'values') {
      return _iterStep(0, O[index]);
    }
    return _iterStep(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  _iterators.Arguments = _iterators.Array;

  _addToUnscopables('keys');
  _addToUnscopables('values');
  _addToUnscopables('entries');

  var ITERATOR$4 = _wks('iterator');
  var TO_STRING_TAG = _wks('toStringTag');
  var ArrayValues = _iterators.Array;

  var DOMIterables = {
    CSSRuleList: true, // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true, // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true, // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
    var NAME = collections[i];
    var explicit = DOMIterables[NAME];
    var Collection = _global[NAME];
    var proto = Collection && Collection.prototype;
    var key;
    if (proto) {
      if (!proto[ITERATOR$4]) {
        _hide(proto, ITERATOR$4, ArrayValues);
      }
      if (!proto[TO_STRING_TAG]) {
        _hide(proto, TO_STRING_TAG, NAME);
      }
      _iterators[NAME] = ArrayValues;
      if (explicit) {
        for (key in es6_array_iterator) {
          if (!proto[key]) {
            _redefine(proto, key, es6_array_iterator[key], true);
          }
        }
      }
    }
  }

  var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }return it;
  };

  var _forOf = createCommonjsModule(function (module) {
    var BREAK = {};
    var RETURN = {};
    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : core_getIteratorMethod(iterable);
      var f = _ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') {
        throw TypeError(iterable + ' is not iterable!');
      }
      // fast case for arrays with default iterator
      if (_isArrayIter(iterFn)) {
        for (length = _toLength(iterable.length); length > index; index++) {
          result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
          if (result === BREAK || result === RETURN) {
            return result;
          }
        }
      } else {
        for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
          result = _iterCall(iterator, f, step.value, entries);
          if (result === BREAK || result === RETURN) {
            return result;
          }
        }
      }
    };
    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  });

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)


  var SPECIES = _wks('species');
  var _speciesConstructor = function _speciesConstructor(O, D) {
    var C = _anObject(O).constructor;
    var S;
    return C === undefined || (S = _anObject(C)[SPECIES]) == undefined ? D : _aFunction(S);
  };

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  var _invoke = function _invoke(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }return fn.apply(that, args);
  };

  var process$1 = _global.process;
  var setTask = _global.setImmediate;
  var clearTask = _global.clearImmediate;
  var MessageChannel = _global.MessageChannel;
  var Dispatch = _global.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer;
  var channel;
  var port;
  var run = function run() {
    var id = +this;
    // eslint-disable-next-line no-prototype-builtins
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var listener = function listener(event) {
    run.call(event.data);
  };
  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var arguments$1 = arguments;

      var args = [];
      var i = 1;
      while (arguments.length > i) {
        args.push(arguments$1[i++]);
      }
      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func
        _invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function clearImmediate(id) {
      delete queue[id];
    };
    // Node.js 0.8-
    if (_cof(process$1) == 'process') {
      defer = function defer(id) {
        process$1.nextTick(_ctx(run, id, 1));
      };
      // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function defer(id) {
        Dispatch.now(_ctx(run, id, 1));
      };
      // Browsers with MessageChannel, includes WebWorkers
    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = _ctx(port.postMessage, port, 1);
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
      defer = function defer(id) {
        _global.postMessage(id + '', '*');
      };
      _global.addEventListener('message', listener, false);
      // IE8-
    } else if (ONREADYSTATECHANGE in _domCreate('script')) {
      defer = function defer(id) {
        _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
          _html.removeChild(this);
          run.call(id);
        };
      };
      // Rest old browsers
    } else {
      defer = function defer(id) {
        setTimeout(_ctx(run, id, 1), 0);
      };
    }
  }
  var _task = {
    set: setTask,
    clear: clearTask
  };

  var macrotask = _task.set;
  var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
  var process$2 = _global.process;
  var Promise = _global.Promise;
  var isNode$1 = _cof(process$2) == 'process';

  var _microtask = function _microtask() {
    var head, last, notify;

    var flush = function flush() {
      var parent, fn;
      if (isNode$1 && (parent = process$2.domain)) {
        parent.exit();
      }
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (e) {
          if (head) {
            notify();
          } else {
            last = undefined;
          }
          throw e;
        }
      }last = undefined;
      if (parent) {
        parent.enter();
      }
    };

    // Node.js
    if (isNode$1) {
      notify = function notify() {
        process$2.nextTick(flush);
      };
      // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
    } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
      notify = function notify() {
        node.data = toggle = !toggle;
      };
      // environments with maybe non-completely correct, but existent Promise
    } else if (Promise && Promise.resolve) {
      var promise = Promise.resolve();
      notify = function notify() {
        promise.then(flush);
      };
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout
    } else {
      notify = function notify() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(_global, flush);
      };
    }

    return function (fn) {
      var task = { fn: fn, next: undefined };
      if (last) {
        last.next = task;
      }
      if (!head) {
        head = task;
        notify();
      }last = task;
    };
  };

  // 25.4.1.5 NewPromiseCapability(C)


  function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) {
        throw TypeError('Bad Promise constructor');
      }
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = _aFunction(resolve);
    this.reject = _aFunction(reject);
  }

  var f$4 = function f$4(C) {
    return new PromiseCapability(C);
  };

  var _newPromiseCapability = {
    f: f$4
  };

  var _perform = function _perform(exec) {
    try {
      return { e: false, v: exec() };
    } catch (e) {
      return { e: true, v: e };
    }
  };

  var _promiseResolve = function _promiseResolve(C, x) {
    _anObject(C);
    if (_isObject(x) && x.constructor === C) {
      return x;
    }
    var promiseCapability = _newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var _redefineAll = function _redefineAll(target, src, safe) {
    for (var key in src) {
      _redefine(target, key, src[key], safe);
    }
    return target;
  };

  var SPECIES$1 = _wks('species');

  var _setSpecies = function _setSpecies(KEY) {
    var C = _global[KEY];
    if (_descriptors && C && !C[SPECIES$1]) {
      _objectDp.f(C, SPECIES$1, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    }
  };

  var task = _task.set;
  var microtask = _microtask();

  var PROMISE = 'Promise';
  var TypeError$1 = _global.TypeError;
  var process = _global.process;
  var $Promise = _global[PROMISE];
  var isNode = _classof(process) == 'process';
  var empty = function empty() {/* empty */};
  var Internal;
  var newGenericPromiseCapability;
  var OwnPromiseCapability;
  var Wrapper;
  var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

  var USE_NATIVE = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1);
      var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
        exec(empty, empty);
      };
      // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
    } catch (e) {/* empty */}
  }();

  // helpers
  var isThenable = function isThenable(it) {
    var then;
    return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };
  var notify = function notify(promise, isReject) {
    if (promise._n) {
      return;
    }
    promise._n = true;
    var chain = promise._c;
    microtask(function () {
      var value = promise._v;
      var ok = promise._s == 1;
      var i = 0;
      var run = function run(reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then;
        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) {
                onHandleUnhandled(promise);
              }
              promise._h = 1;
            }
            if (handler === true) {
              result = value;
            } else {
              if (domain) {
                domain.enter();
              }
              result = handler(value);
              if (domain) {
                domain.exit();
              }
            }
            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else {
              resolve(result);
            }
          } else {
            reject(value);
          }
        } catch (e) {
          reject(e);
        }
      };
      while (chain.length > i) {
        run(chain[i++]);
      } // variable length - can't use forEach
      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) {
        onUnhandled(promise);
      }
    });
  };
  var onUnhandled = function onUnhandled(promise) {
    task.call(_global, function () {
      var value = promise._v;
      var unhandled = isUnhandled(promise);
      var result, handler, console;
      if (unhandled) {
        result = _perform(function () {
          if (isNode) {
            process.emit('unhandledRejection', value, promise);
          } else if (handler = _global.onunhandledrejection) {
            handler({ promise: promise, reason: value });
          } else if ((console = _global.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
      }promise._a = undefined;
      if (unhandled && result.e) {
        throw result.v;
      }
    });
  };
  var isUnhandled = function isUnhandled(promise) {
    if (promise._h == 1) {
      return false;
    }
    var chain = promise._a || promise._c;
    var i = 0;
    var reaction;
    while (chain.length > i) {
      reaction = chain[i++];
      if (reaction.fail || !isUnhandled(reaction.promise)) {
        return false;
      }
    }return true;
  };
  var onHandleUnhandled = function onHandleUnhandled(promise) {
    task.call(_global, function () {
      var handler;
      if (isNode) {
        process.emit('rejectionHandled', promise);
      } else if (handler = _global.onrejectionhandled) {
        handler({ promise: promise, reason: promise._v });
      }
    });
  };
  var $reject = function $reject(value) {
    var promise = this;
    if (promise._d) {
      return;
    }
    promise._d = true;
    promise = promise._w || promise; // unwrap
    promise._v = value;
    promise._s = 2;
    if (!promise._a) {
      promise._a = promise._c.slice();
    }
    notify(promise, true);
  };
  var $resolve = function $resolve(value) {
    var promise = this;
    var then;
    if (promise._d) {
      return;
    }
    promise._d = true;
    promise = promise._w || promise; // unwrap
    try {
      if (promise === value) {
        throw TypeError$1("Promise can't be resolved itself");
      }
      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = { _w: promise, _d: false }; // wrap
          try {
            then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({ _w: promise, _d: false }, e); // wrap
    }
  };

  // constructor polyfill
  if (!USE_NATIVE) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      _anInstance(this, $Promise, PROMISE, '_h');
      _aFunction(executor);
      Internal.call(this);
      try {
        executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    };
    // eslint-disable-next-line no-unused-vars
    Internal = function Promise(executor) {
      this._c = []; // <- awaiting reactions
      this._a = undefined; // <- checked in isUnhandled reactions
      this._s = 0; // <- state
      this._d = false; // <- done
      this._v = undefined; // <- value
      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
      this._n = false; // <- notify
    };
    Internal.prototype = _redefineAll($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode ? process.domain : undefined;
        this._c.push(reaction);
        if (this._a) {
          this._a.push(reaction);
        }
        if (this._s) {
          notify(this, false);
        }
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function _catch(onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    OwnPromiseCapability = function OwnPromiseCapability() {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = _ctx($resolve, promise, 1);
      this.reject = _ctx($reject, promise, 1);
    };
    _newPromiseCapability.f = newPromiseCapability = function newPromiseCapability(C) {
      return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Promise: $Promise });
  _setToStringTag($Promise, PROMISE);
  _setSpecies(PROMISE);
  Wrapper = _core[PROMISE];

  // statics
  _export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  _export(_export.S + _export.F * (_library || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
    }
  });
  _export(_export.S + _export.F * !(USE_NATIVE && _iterDetect(function (iter) {
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = _perform(function () {
        var values = [];
        var index = 0;
        var remaining = 1;
        _forOf(iterable, false, function (promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) {
              return;
            }
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.e) {
        reject(result.v);
      }
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = _perform(function () {
        _forOf(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (result.e) {
        reject(result.v);
      }
      return capability.promise;
    }
  });

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /* eslint-disable */

  var isInitialized = false;

  // major events supported:
  //   panstart
  //   panmove
  //   panend
  //   swipe
  //   longpress
  // extra events supported:
  //   dualtouchstart
  //   dualtouch
  //   dualtouchend
  //   tap
  //   doubletap
  //   pressend

  var doc = window.document;
  var docEl = doc.documentElement;
  var slice = Array.prototype.slice;
  var gestures = {};
  var lastTap = null;

  /**
   * find the closest common ancestor
   * if there's no one, return null
   *
   * @param  {Element} el1 first element
   * @param  {Element} el2 second element
   * @return {Element}     common ancestor
   */
  function getCommonAncestor(el1, el2) {
    var el = el1;
    while (el) {
      if (el.contains(el2) || el == el2) {
        return el;
      }
      el = el.parentNode;
    }
    return null;
  }

  /**
   * fire a HTMLEvent
   *
   * @param  {Element} element which element to fire a event on
   * @param  {string}  type    type of event
   * @param  {object}  extra   extra data for the event object
   */
  function fireEvent(element, type, extra) {
    var event = doc.createEvent('HTMLEvents');
    event.initEvent(type, true, true);

    if ((typeof extra === 'undefined' ? 'undefined' : _typeof(extra)) === 'object') {
      for (var p in extra) {
        event[p] = extra[p];
      }
    }

    /**
     * A flag to distinguish with other events with the same name generated
     * by another library in the same page.
     */
    event._for = 'weex';

    element.dispatchEvent(event);
  }

  /**
   * calc the transform
   * assume 4 points ABCD on the coordinate system
   * > rotate：angle rotating from AB to CD
   * > scale：scale ratio from AB to CD
   * > translate：translate shift from A to C
   *
   * @param  {number} x1 abscissa of A
   * @param  {number} y1 ordinate of A
   * @param  {number} x2 abscissa of B
   * @param  {number} y2 ordinate of B
   * @param  {number} x3 abscissa of C
   * @param  {number} y3 ordinate of C
   * @param  {number} x4 abscissa of D
   * @param  {number} y4 ordinate of D
   * @return {object}    transform object like
   *   {rotate, scale, translate[2], matrix[3][3]}
   */
  function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
    var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
    var scale = Math.sqrt((Math.pow(y4 - y3, 2) + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2)));
    var translate = [x3 - scale * x1 * Math.cos(rotate) + scale * y1 * Math.sin(rotate), y3 - scale * y1 * Math.cos(rotate) - scale * x1 * Math.sin(rotate)];

    return {
      rotate: rotate,
      scale: scale,
      translate: translate,
      matrix: [[scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]], [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]], [0, 0, 1]]
    };
  }

  /**
   * take over the touchstart events. Add new touches to the gestures.
   * If there is no previous records, then bind touchmove, tochend
   * and touchcancel events.
   * new touches initialized with state 'tapping', and within 500 milliseconds
   * if the state is still tapping, then trigger gesture 'press'.
   * If there are two touche points, then the 'dualtouchstart' is triggerd. The
   * node of the touch gesture is their cloest common ancestor.
   *
   * @event
   * @param  {event} event
   */
  function touchstartHandler(event) {

    if (Object.keys(gestures).length === 0) {
      docEl.addEventListener('touchmove', touchmoveHandler, true);
      docEl.addEventListener('touchend', touchendHandler, true);
      docEl.addEventListener('touchcancel', touchcancelHandler, true);
    }

    // record every touch
    for (var i = 0; i < event.changedTouches.length; i++) {
      var touch = event.changedTouches[i];
      var touchRecord = {};

      for (var p in touch) {
        touchRecord[p] = touch[p];
      }

      var gesture = {
        startTouch: touchRecord,
        startTime: Date.now(),
        status: 'tapping',
        element: event.srcElement || event.target,
        pressingHandler: setTimeout(function (element, touch) {
          return function () {
            if (gesture.status === 'tapping') {
              gesture.status = 'pressing';

              fireEvent(element, 'longpress', {
                // add touch data for weex
                touch: touch,
                touches: event.touches,
                changedTouches: event.changedTouches,
                touchEvent: event
              });
            }

            clearTimeout(gesture.pressingHandler);
            gesture.pressingHandler = null;
          };
        }(event.srcElement || event.target, event.changedTouches[i]), 500)
      };
      gestures[touch.identifier] = gesture;
    }

    if (Object.keys(gestures).length == 2) {
      var elements = [];

      for (var p in gestures) {
        elements.push(gestures[p].element);
      }

      fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
        touches: slice.call(event.touches),
        touchEvent: event
      });
    }
  }

  /**
   * take over touchmove events, and handle pan and dual related gestures.
   *
   * 1. traverse every touch point：
   * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
   * 2. if there are two touch points, then calc the tranform and trigger
   *   'dualtouch'.
   *
   * @event
   * @param  {event} event
   */
  function touchmoveHandler(event) {
    for (var i = 0; i < event.changedTouches.length; i++) {
      var touch = event.changedTouches[i];
      var gesture = gestures[touch.identifier];

      if (!gesture) {
        return;
      }

      if (!gesture.lastTouch) {
        gesture.lastTouch = gesture.startTouch;
      }
      if (!gesture.lastTime) {
        gesture.lastTime = gesture.startTime;
      }
      if (!gesture.velocityX) {
        gesture.velocityX = 0;
      }
      if (!gesture.velocityY) {
        gesture.velocityY = 0;
      }
      if (!gesture.duration) {
        gesture.duration = 0;
      }

      var time = Date.now() - gesture.lastTime;
      var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
      var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

      var RECORD_DURATION = 70;
      if (time > RECORD_DURATION) {
        time = RECORD_DURATION;
      }
      if (gesture.duration + time > RECORD_DURATION) {
        gesture.duration = RECORD_DURATION - time;
      }

      gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time) / (gesture.duration + time);
      gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time) / (gesture.duration + time);
      gesture.duration += time;

      gesture.lastTouch = {};

      for (var p in touch) {
        gesture.lastTouch[p] = touch[p];
      }
      gesture.lastTime = Date.now();

      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;
      var distance = Math.sqrt(Math.pow(displacementX, 2) + Math.pow(displacementY, 2));
      var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
      var direction = isVertical ? displacementY >= 0 ? 'down' : 'up' : displacementX >= 0 ? 'right' : 'left';

      // magic number 10: moving 10px means pan, not tap
      if ((gesture.status === 'tapping' || gesture.status === 'pressing') && distance > 10) {
        gesture.status = 'panning';
        gesture.isVertical = isVertical;
        gesture.direction = direction;

        fireEvent(gesture.element, 'panstart', {
          touch: touch,
          touches: event.touches,
          changedTouches: event.changedTouches,
          touchEvent: event,
          isVertical: gesture.isVertical,
          direction: direction
        });
      }

      if (gesture.status === 'panning') {
        gesture.panTime = Date.now();

        fireEvent(gesture.element, 'panmove', {
          displacementX: displacementX,
          displacementY: displacementY,
          touch: touch,
          touches: event.touches,
          changedTouches: event.changedTouches,
          touchEvent: event,
          isVertical: gesture.isVertical,
          direction: direction
        });
      }
    }

    if (Object.keys(gestures).length == 2) {
      var position = [];
      var current = [];
      var elements = [];
      var transform;

      for (var i = 0; i < event.touches.length; i++) {
        var touch = event.touches[i];
        var gesture = gestures[touch.identifier];
        position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
        current.push([touch.clientX, touch.clientY]);
      }

      for (var p in gestures) {
        elements.push(gestures[p].element);
      }

      transform = calc(position[0][0], position[0][1], position[1][0], position[1][1], current[0][0], current[0][1], current[1][0], current[1][1]);
      fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
        transform: transform,
        touches: event.touches,
        touchEvent: event
      });
    }
  }

  /**
   * handle touchend event
   *
   * 1. if there are tow touch points, then trigger 'dualtouchend'如
   *
   * 2. traverse every touch piont：
   * > if tapping, then trigger 'tap'.
   * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
   * > if padding, then decide to trigger 'panend' or 'swipe'
   * > if pressing, then trigger 'pressend'.
   *
   * 3. remove listeners.
   *
   * @event
   * @param  {event} event
   */
  function touchendHandler(event) {

    if (Object.keys(gestures).length == 2) {
      var elements = [];
      for (var p in gestures) {
        elements.push(gestures[p].element);
      }
      fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
        touches: slice.call(event.touches),
        touchEvent: event
      });
    }

    for (var i = 0; i < event.changedTouches.length; i++) {
      var touch = event.changedTouches[i];
      var id = touch.identifier;
      var gesture = gestures[id];

      if (!gesture) {
        continue;
      }

      if (gesture.pressingHandler) {
        clearTimeout(gesture.pressingHandler);
        gesture.pressingHandler = null;
      }

      if (gesture.status === 'tapping') {
        gesture.timestamp = Date.now();
        // fire click, not tap.
        fireEvent(gesture.element, 'weex$tap', {
          touch: touch,
          touchEvent: event
        });

        if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
          fireEvent(gesture.element, 'doubletap', {
            touch: touch,
            touchEvent: event
          });
        }

        lastTap = gesture;
      }

      if (gesture.status === 'panning') {
        var now = Date.now();
        var duration = now - gesture.startTime;
        var displacementX = touch.clientX - gesture.startTouch.clientX;
        var displacementY = touch.clientY - gesture.startTouch.clientY;

        var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY + gesture.velocityX * gesture.velocityX);
        var isSwipe = velocity > 0.5 && now - gesture.lastTime < 100;
        var extra = {
          duration: duration,
          isSwipe: isSwipe,
          velocityX: gesture.velocityX,
          velocityY: gesture.velocityY,
          displacementX: displacementX,
          displacementY: displacementY,
          touch: touch,
          touches: event.touches,
          changedTouches: event.changedTouches,
          touchEvent: event,
          isVertical: gesture.isVertical,
          direction: gesture.direction
        };

        fireEvent(gesture.element, 'panend', extra);
        if (isSwipe) {
          fireEvent(gesture.element, 'swipe', extra);
        }
      }

      if (gesture.status === 'pressing') {
        fireEvent(gesture.element, 'pressend', {
          touch: touch,
          touchEvent: event
        });
      }

      delete gestures[id];
    }

    if (Object.keys(gestures).length === 0) {
      docEl.removeEventListener('touchmove', touchmoveHandler, false);
      docEl.removeEventListener('touchend', touchendHandler, false);
      docEl.removeEventListener('touchcancel', touchcancelHandler, false);
    }
  }

  /**
   * handle touchcancel
   *
   * 1. if there are two touch points, then trigger 'dualtouchend'
   *
   * 2. traverse everty touch point:
   * > if pannnig, then trigger 'panend'
   * > if pressing, then trigger 'pressend'
   *
   * 3. remove listeners
   *
   * @event
   * @param  {event} event
   */
  function touchcancelHandler(event) {

    if (Object.keys(gestures).length == 2) {
      var elements = [];
      for (var p in gestures) {
        elements.push(gestures[p].element);
      }
      fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
        touches: slice.call(event.touches),
        touchEvent: event
      });
    }

    for (var i = 0; i < event.changedTouches.length; i++) {
      var touch = event.changedTouches[i];
      var id = touch.identifier;
      var gesture = gestures[id];

      if (!gesture) {
        continue;
      }

      if (gesture.pressingHandler) {
        clearTimeout(gesture.pressingHandler);
        gesture.pressingHandler = null;
      }

      if (gesture.status === 'panning') {
        fireEvent(gesture.element, 'panend', {
          touch: touch,
          touches: event.touches,
          changedTouches: event.changedTouches,
          touchEvent: event
        });
      }
      if (gesture.status === 'pressing') {
        fireEvent(gesture.element, 'pressend', {
          touch: touch,
          touchEvent: event
        });
      }
      delete gestures[id];
    }

    if (Object.keys(gestures).length === 0) {
      docEl.removeEventListener('touchmove', touchmoveHandler, true);
      docEl.removeEventListener('touchend', touchendHandler, true);
      docEl.removeEventListener('touchcancel', touchcancelHandler, true);
    }
  }

  if (!isInitialized) {
    docEl.addEventListener('touchstart', touchstartHandler, true);
    isInitialized = true;
  }

  var lib$2 = window.lib || (window.lib = {});

  /**
   * Version class.
   * @class lib.env~Version
   * @param {String} v - version number.
   */
  function Version(v) {
    Object.defineProperty(this, 'val', {
      value: v.toString(),
      enumerable: true
    });

    /**
     * larger than
     * @method gt
     * @param {String} v - version
     * @return {Boolean} result
     * @instance
     * @memberof Version
     */
    this.gt = function (v) {
      return Version.compare(this, v) > 0;
    };

    /**
     * larger than or equal to.
     * @method gte
     * @param {String} v - version
     * @return {Boolean} result
     * @instance
     * @memberof Version
     */
    this.gte = function (v) {
      return Version.compare(this, v) >= 0;
    };

    /**
     * less than.
     * @method lt
     * @param {String} v - version
     * @return {Boolean} result
     * @instance
     * @memberof Version
     */
    this.lt = function (v) {
      return Version.compare(this, v) < 0;
    };

    /**
     * less than or equal to.
     * @method lte
     * @param {String} v - version
     * @return {Boolean} result
     * @instance
     * @memberof Version
     */
    this.lte = function (v) {
      return Version.compare(this, v) <= 0;
    };

    /**
     * equal to.
     * @method eq
     * @param {String} v - version
     * @return {Boolean} equal to
     * @instance
     * @memberof Version
     */
    this.eq = function (v) {
      return Version.compare(this, v) === 0;
    };
  }

  /**
   * version number string.
   * @method toString
   * @return {String} current version number string.
   * @instance
   * @memberof Version
   */
  Version.prototype.toString = function () {
    return this.val;
  };

  /**
   * return current version number.
   * @method valueOf
   * @return {Boolean} version number
   * @instance
   * @memberof Version
   */
  Version.prototype.valueOf = function () {
    var v = this.val.split('.');
    var r = [];
    for (var i = 0; i < v.length; i++) {
      var n = parseInt(v[i], 10);
      if (isNaN(n)) {
        n = 0;
      }
      var s = n.toString();
      if (s.length < 5) {
        s = Array(6 - s.length).join('0') + s;
      }
      r.push(s);
      if (r.length === 1) {
        r.push('.');
      }
    }
    return parseFloat(r.join(''));
  };

  /**
   * compare two versions.
   * @method compare
   * @param {String} v1 - version1
   * @param {String} v2 - version2
   * @return {Number} 0 for equality，-1 for less than，1 for larger than.
   * @memberof Version
   */
  Version.compare = function (v1, v2) {
    v1 = v1.toString().split('.');
    v2 = v2.toString().split('.');
    for (var i = 0; i < v1.length || i < v2.length; i++) {
      var n1 = parseInt(v1[i], 10);
      var n2 = parseInt(v2[i], 10);
      if (window.isNaN(n1)) {
        n1 = 0;
      }
      if (window.isNaN(n2)) {
        n2 = 0;
      }
      if (n1 < n2) {
        return -1;
      } else if (n1 > n2) {
        return 1;
      }
    }
    return 0;
  };

  /**
   * 解析和操作版本号
   * @method version
   * @param {string} v - 需要解析的版本号
   * @return {lib.env~Version} Verson实例
   * @memberof lib
   */
  lib$2.version = function (v) {
    return new Version(v);
  };

  var lib$3 = window.lib || (window.lib = {});
  var env$1 = lib$3.env || (lib$3.env = {});

  var search = window.location.search.replace(/^\?/, '');
  env$1.params = {};
  if (search) {
    var params = search.split('&');
    for (var i$1 = 0; i$1 < params.length; i$1++) {
      params[i$1] = params[i$1].split('=');
      try {
        env$1.params[params[i$1][0]] = decodeURIComponent(params[i$1][1]);
      } catch (e) {
        env$1.params[params[i$1][0]] = params[i$1][1];
      }
    }
  }

  var lib$1 = window.lib || (window.lib = {});
  var env = lib$1.env || (lib$1.env = {});

  var ua = window.navigator.userAgent;
  var match;

  /**
   * os
   */

  match = ua.match(/Windows\sPhone\s(?:OS\s)?([\d.]+)/);
  if (match) {
    /**
     * @type {Object}
     * @memberof lib.env
     * @property {String} name - os name, e.g. Android/AndroidPad/iPhone/iPod/iPad/Windows Phone/unknown, etc.
     * @property {lib.env~Version} version - os version.
     * @property {Boolean} isWindowsPhone
     * @property {Boolean} isIPhone - is iPhone/iTouch
     * @property {Boolean} isIPad
     * @property {Boolean} isIOS
     * @property {Boolean} isAndroid
     * @property {Boolean} isAndroidPad
     */
    env.os = {
      name: 'Windows Phone',
      isWindowsPhone: true,
      version: match[1]
    };
  } else if (!!ua.match(/Safari/) && (match = ua.match(/Android[\s/]([\d.]+)/))) {
    env.os = {
      version: match[1]
    };

    if (ua.match(/Mobile\s+Safari/)) {
      env.os.name = 'Android';
      env.os.isAndroid = true;
    } else {
      env.os.name = 'AndroidPad';
      env.os.isAndroidPad = true;
    }
  } else if (match = ua.match(/(iPhone|iPad|iPod)/)) {
    var name = match[1];

    match = ua.match(/OS ([\d_.]+) like Mac OS X/);

    env.os = {
      name: name,
      isIPhone: name === 'iPhone' || name === 'iPod',
      isIPad: name === 'iPad',
      isIOS: true,
      version: match && match[1].split('_').join('.') || ''
    };
  } else {
    env.os = {
      name: 'unknown',
      version: '0.0.0'
    };
  }

  if (lib$1.version) {
    env.os.version = lib$1.version(env.os.version);
  }

  /**
   * browser
   */

  match = ua.match(/(?:UCWEB|UCBrowser\/)([\d.]+)/);

  if (match) {
    /**
     * @type {Object}
     * @memberof env
     * @property {String} name - browser name，e.g. UC/QQ/Firefox/Chrome/Android/Safari/iOS Webview/Chrome Webview/IE/IEMobile/unknown, etc.
     * @property {env~Version} version - browser version.
     * @property {Boolean} isUC
     * @property {Boolean} isQQ
     * @property {Boolean} isIE
     * @property {Boolean} isIEMobile
     * @property {Boolean} isIELikeWebkit
     * @property {Boolean} isChrome
     * @property {Boolean} isAndroid
     * @property {Boolean} isSafari
     * @property {Boolean} isWebview
     */
    env.browser = {
      name: 'UC',
      isUC: true,
      version: match[1]
    };
  } else if (match = ua.match(/MQQBrowser\/([\d.]+)/)) {
    env.browser = {
      name: 'QQ',
      isQQ: true,
      version: match[1]
    };
  } else if (match = ua.match(/Firefox\/([\d.]+)/)) {
    env.browser = {
      name: 'Firefox',
      isFirefox: true,
      version: match[1]
    };
  } else if ((match = ua.match(/MSIE\s([\d.]+)/)) || (match = ua.match(/IEMobile\/([\d.]+)/))) {
    env.browser = {
      version: match[1]
    };

    if (ua.match(/IEMobile/)) {
      env.browser.name = 'IEMobile';
      env.browser.isIEMobile = true;
    } else {
      env.browser.name = 'IE';
      env.browser.isIE = true;
    }

    if (ua.match(/Android|iPhone/)) {
      env.browser.isIELikeWebkit = true;
    }
  } else if (match = ua.match(/(?:Chrome|CriOS)\/([\d.]+)/)) {
    env.browser = {
      name: 'Chrome',
      isChrome: true,
      version: match[1]
    };

    if (ua.match(/Version\/[\d+.]+\s*Chrome/)) {
      env.browser.name = 'Chrome Webview';
      env.browser.isWebview = true;
    }
  } else if (!!ua.match(/Safari/) && (match = ua.match(/Android[\s/]([\d.]+)/))) {
    env.browser = {
      name: 'Android',
      isAndroid: true,
      version: match[1]
    };
  } else if (ua.match(/iPhone|iPad|iPod/)) {
    if (ua.match(/Safari/)) {
      match = ua.match(/Version\/([\d.]+)/);
      env.browser = {
        name: 'Safari',
        isSafari: true,
        version: match && match[1] || ''
      };
    } else {
      match = ua.match(/OS ([\d_.]+) like Mac OS X/);
      env.browser = {
        name: 'iOS Webview',
        isWebview: true,
        version: match && match[1].replace(/_/g, '.') || ''
      };
    }
  } else {
    env.browser = {
      name: 'unknown',
      version: '0.0.0'
    };
  }

  if (lib$1.version) {
    env.browser.version = lib$1.version(env.browser.version);
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var toString$1 = Object.prototype.toString;

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   *
   * @param {*} obj
   * @return {Boolean}
   */
  var OBJECT_STRING = '[object Object]';
  function isPlainObject(obj) {
    return toString$1.call(obj) === OBJECT_STRING;
  }

  var ARRAY_STRING = '[object Array]';
  function isArray(arr) {
    return toString$1.call(arr) === ARRAY_STRING;
  }

  function isPrimitive(val) {
    return typeof value === 'string' || typeof value === 'number' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol' || typeof value === 'boolean';
  }

  function isDef(val) {
    return val !== undefined && val !== null;
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
   * Mix properties into target object.
   * the rightest object's value has the highest priority.
   */
  function extend(to) {
    var args = [],
        len = arguments.length - 1;
    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }if (!args || args.length <= 0) {
      return to;
    }
    args.forEach(function (from) {
      if ((typeof from === 'undefined' ? 'undefined' : _typeof(from)) !== 'object') {
        return;
      }
      for (var key in from) {
        to[key] = from[key];
      }
    });
    return to;
  }
  /**
   * Mix truthy or '' property values into target object.
   * mostly for merging styles. (that's why '' is falsy but still should be counted in.)
   * the rightest object's value has the highest priority.
   */
  function extendTruthy(to) {
    var args = [],
        len = arguments.length - 1;
    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }if (!args || args.length <= 0) {
      return to;
    }
    args.forEach(function (from) {
      if ((typeof from === 'undefined' ? 'undefined' : _typeof(from)) !== 'object') {
        return;
      }
      var i;
      for (var key in from) {
        if (((i = from[key]) || i === '' || i === 0) && i !== 'undefined') {
          to[key] = i;
        }
      }
    });
    return to;
  }
  /**
   * Mix specified properties into target object.
   */
  function extendKeys(to, from, keys) {
    if (from === void 0) from = {};

    (keys || []).forEach(function (key) {
      from && (to[key] = from[key]);
    });
    return to;
  }
  /**
   * Extract specified properties from src to target object.
   */
  function extractKeys(to, from, keys) {
    if (from === void 0) from = {};

    if (!from) {
      return to;
    }
    (keys || []).forEach(function (key) {
      from && (to[key] = from[key]);
      from && delete from[key];
    });
    return to;
  }
  /**
   * Simple bind, faster than native
   *
   * @param {Function} fn
   * @param {Object} ctx
   * @return {Function}
   */
  function bind(fn, ctx) {
    return function (a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    };
  }
  /**
   * Only call the func the last time before it's not that frequently called.
   */
  function debounce(func, wait) {
    var timerId;
    return function () {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }clearTimeout(timerId);
      timerId = setTimeout(function later() {
        timerId = null;
        func.apply(null, args);
      }, wait);
    };
  }
  /**
   * Only call the func the first time before a series frequently function calls happen.
   */
  function depress(func, wait) {
    var timerId;

    function later() {
      timerId = null;
    }
    return function () {
      if (!timerId) {
        func.apply();
      }
      clearTimeout(timerId);
      timerId = setTimeout(later, wait);
    };
  }
  /**
   * Only call the func every time after a wait milliseconds if it's too frequently called.
   */
  function throttle(func, wait, callLastTime) {
    var last = 0;
    var lastTimer = null;
    var lastTimeDuration = wait + (wait > 25 ? wait : 25); // plus half wait time.
    return function () {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }var context = this;
      var time = new Date().getTime();
      if (time - last > wait) {
        if (callLastTime) {
          lastTimer && clearTimeout(lastTimer);
          lastTimer = setTimeout(function () {
            lastTimer = null;
            func.apply(context, args);
          }, lastTimeDuration);
        }
        func.apply(context, args);
        last = time;
      }
    };
  }
  // direction: 'l' | 'r', default is 'r'
  // num: how many times to loop, should be a positive integer
  function loopArray(arr, num, direction) {
    if (!isArray(arr)) {
      return;
    }
    var isLeft = (direction + '').toLowerCase() === 'l';
    var len = arr.length;
    num = num % len;
    if (num < 0) {
      num = -num;
      isLeft = !isLeft;
    }
    if (num === 0) {
      return arr;
    }
    var lp, rp;
    if (isLeft) {
      lp = arr.slice(0, num);
      rp = arr.slice(num);
    } else {
      lp = arr.slice(0, len - num);
      rp = arr.slice(len - num);
    }
    return rp.concat(lp);
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }
  /**
   * Camelize a hyphen-delmited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c.toUpperCase();
    });
  });
  function camelizeKeys(obj) {
    var res = {};
    for (var key in obj) {
      res[camelize(key)] = obj[key];
    }
    return res;
  }
  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /([^-])([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
  });
  function hyphenateKeys(obj) {
    var res = {};
    for (var key in obj) {
      res[hyphenate(key)] = obj[key];
    }
    return res;
  }
  var vendorsReg = /webkit-|moz-|o-|ms-/;
  function hyphenateStyleKeys(obj) {
    var res = {};
    for (var key in obj) {
      var hk = hyphenate(key).replace(vendorsReg, function ($0) {
        return '-' + $0;
      });
      res[hk] = obj[key];
    }
    return res;
  }
  function camelToKebab(name) {
    if (!name) {
      return '';
    }
    return name.replace(/([A-Z])/g, function (g, g1) {
      return "-" + g1.toLowerCase();
    });
  }
  function appendCss(css, cssId, replace) {
    var style = document.getElementById(cssId);
    if (style && replace) {
      style.parentNode.removeChild(style);
      style = null;
    }
    if (!style) {
      style = document.createElement('style');
      style.type = 'text/css';
      cssId && (style.id = cssId);
      document.getElementsByTagName('head')[0].appendChild(style);
    }
    style.appendChild(document.createTextNode(css));
  }
  function nextFrame(callback) {
    var runner = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (cb) {
      return setTimeout(cb, 16);
    };
    runner(callback);
  }
  function toCSSText(object) {
    if (!object) {
      return;
    }
    var obj = hyphenateStyleKeys(object);
    var cssText = '';
    for (var key in obj) {
      cssText += key + ":" + obj[key] + ";";
    }
    return cssText;
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /**
   * viewport priority:
   *
   * 1. meta weex-viewport (developer custom)
   * 2. setViewport(config) := config.width (private code) @deprecated
   * 3. 750 (buid time)
   *
   */
  var isInited = false;
  var DEFAULT_VIEWPORT_WIDTH = 750;

  /**
   * get viewport width from weex-viewport meta.
   */
  var envViewportWidth = parseInt(750);
  var width = !isNaN(envViewportWidth) && envViewportWidth > 0 ? envViewportWidth : DEFAULT_VIEWPORT_WIDTH;

  var wxViewportMeta = document.querySelector('meta[name="weex-viewport"]');
  var metaWidth = wxViewportMeta && parseInt(wxViewportMeta.getAttribute('content'));
  if (metaWidth && !isNaN(metaWidth) && metaWidth > 0) {
    width = metaWidth;
  }

  var dpr = 0;
  var screenWidth = 0;
  var screenHeight = 0;

  var info = {
    dpr: dpr,
    scale: 0,
    rootValue: 0,
    rem: 0,
    deviceWidth: 0,
    deviceHeight: 0
  };

  /**
   * set root font-size for rem units. If already been set, just skip this.
   */
  function setRootFont(width, viewportWidth, force) {
    var doc = window.document;
    var rem = width * 750 / viewportWidth / 10;
    if (!doc.documentElement) {
      return;
    }
    var rootFontSize = doc.documentElement.style.fontSize;
    if (!rootFontSize || force) {
      doc.documentElement.style.fontSize = rem + 'px';
    }
    info.rem = rem;
    info.rootValue = viewportWidth / 10;
  }

  function setMetaViewport(width) {
    if (!wxViewportMeta) {
      wxViewportMeta = document.createElement('meta');
      wxViewportMeta.setAttribute('name', 'weex-viewport');
      var firstMeta = document.querySelector('meta');
      var head = firstMeta && firstMeta.parentElement || document.documentElement.children[0];
      firstMeta ? head.insertBefore(wxViewportMeta, firstMeta) : head.appendChild(wxViewportMeta);
    } else {
      var metaWidth = parseInt(wxViewportMeta.getAttribute('content'));
      if (metaWidth === width) {
        return;
      }
    }
    wxViewportMeta.setAttribute('content', width + '');
  }

  /**
   * export viewport info.
   */
  function init$1(viewportWidth) {
    if (viewportWidth === void 0) viewportWidth = width;

    if (!isInited) {
      isInited = true;

      var doc = window.document;
      if (!doc) {
        console.error('[vue-render] window.document is undfined.');
        return;
      }
      if (!doc.documentElement) {
        console.error('[vue-render] document.documentElement is undfined.');
        return;
      }

      dpr = info.dpr = window.devicePixelRatio;
      screenWidth = doc.documentElement.clientWidth;
      screenHeight = doc.documentElement.clientHeight;

      var resetDeviceHeight = function resetDeviceHeight() {
        screenHeight = doc.documentElement.clientHeight;
        var env = window.weex && window.weex.config.env;
        info.deviceHeight = env.deviceHeight = screenHeight * dpr;
      };

      // set root font for rem.
      setRootFont(screenWidth, viewportWidth);
      setMetaViewport(viewportWidth);

      window.addEventListener('resize', resetDeviceHeight);

      /**
       * why not to use window.screen.width to get screenWidth ? Because in some
       * old webkit browser on android system it get the device pixel width, which
       * is the screenWidth multiply by the device pixel ratio.
       * e.g. ip6 -> get 375 for virtual screen width.
       */
      var scale = screenWidth / viewportWidth;
      /**
       * 1. if set initial/maximum/mimimum-scale some how the page will have a bounce
       * effect when user drag the page towards horizontal axis.
       * 2. Due to compatibility reasons, not to use viewport meta anymore.
       * 3. viewport meta should always be:
       *    <meta name="viewport"
       *      content="width=device-width,
       *      initial-scale=1,
       *      maximum-scale=1,
       *      user-scalable=no" />
       */
      extend(info, {
        scale: scale,
        rootValue: viewportWidth / 10,
        deviceWidth: screenWidth * dpr,
        deviceHeight: screenHeight * dpr
      });
    }

    return info;
  }

  /**
   * reset viewport width and scale.
   * @return new scale.
   */
  function resetViewport(viewportWidth) {
    setRootFont(screenWidth, viewportWidth, true);
    setMetaViewport(viewportWidth);
    var newScale = screenWidth / viewportWidth;
    info.scale = newScale;
    return newScale;
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  function extend$1(to) {
    var args = [],
        len = arguments.length - 1;
    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }if (!args || args.length <= 0) {
      return to;
    }
    args.forEach(function (from) {
      if ((typeof from === 'undefined' ? 'undefined' : _typeof(from)) !== 'object') {
        return;
      }
      for (var key in from) {
        to[key] = from[key];
      }
    });
    return to;
  }

  // if support passive event listeners.
  var _supportsPassive = false;
  try {
    document.createElement('div').addEventListener('test', function (_) {}, {
      get passive() {
        _supportsPassive = true;
      }
    });
  } catch (e) {
    // do nothing.
  }
  function supportsPassive() {
    return _supportsPassive;
  }

  /**
   * Create Event.
   * @param {DOMString} type
   * @param {Object} props
   */
  function createEvent(target, type, props) {
    var event = new Event(type, { bubbles: false });

    extend$1(event, props);
    //  phantomjs don't support customer event
    if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
      return event;
    }
    try {
      Object.defineProperty(event, 'target', {
        enumerable: true,
        value: target
      });
    } catch (err) {
      return extend$1({}, event, { target: target });
    }
    return event;
  }

  /**
   * Create a bubbable Event.
   * @param {DOMString} type
   * @param {Object} props
   */
  function createBubblesEvent(target, type, props) {
    var event = new Event(type, { bubbles: true });
    extend$1(event, props);
    //  phantomjs don't support customer event
    if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
      return event;
    }
    try {
      Object.defineProperty(event, 'target', {
        enumerable: true,
        value: target
      });
    } catch (err) {
      return extend$1({}, event, { target: target });
    }
    return event;
  }

  /**
   * Create Custom Event.
   * @param {DOMString} type
   * @param {Object} props
   */
  function createCustomEvent(target, type, props) {
    // compatibility: http://caniuse.com/#search=customevent
    // const event = new CustomEvent(type)
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, false, true, {});
    // event.preventDefault()
    // event.stopPropagation()

    extend$1(event, props);

    // event.target is readonly
    try {
      Object.defineProperty(event, 'target', {
        enumerable: true,
        value: target || null
      });
    } catch (err) {
      return extend$1({}, event, { target: target || null });
    }

    return event;
  }

  /**
   * dispatch a event on a HTML element.
   * @param  {HTMLElement} elm
   * @param  {Event} type event name.
   * @param  {Object} data extra data.
   */
  function dispatchNativeEvent(elm, type, data) {
    elm.dispatchEvent(createEvent(elm, type, data));
  }

  function mapFormEvents(context) {
    var eventMap = {};['input', 'change', 'focus', 'blur', 'return'].forEach(function (type) {
      eventMap[type] = function (event) {
        if (context.$el) {
          event.value = context.$el.value;
          // for the sake of v-model, a input event must be emitted.
          if (type === 'input') {
            context.$emit(type, event);
          }
        }
      };
    });
    return eventMap;
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var scaleStyles = ['width', 'height', 'left', 'right', 'top', 'bottom', 'border', 'borderRadius', 'borderWidth', 'borderLeft', 'borderRight', 'borderTop', 'borderBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth', 'margin', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'fontSize', 'lineHeight', 'transform', 'webkitTransform', 'WebkitTransform', 'mozTransform', 'MozTransform', 'itemSize'];

  var vendorReg = /webkit|moz/i;
  function hyphen(key) {
    return hyphenate(key.replace(vendorReg, function ($0) {
      return "-" + $0.toLowerCase() + "-";
    }));
  }

  function getAllStyles() {
    return Object.keys(scaleStyles.reduce(function (pre, key) {
      pre[key] = 1;
      pre[hyphen(key)] = 1;
      return pre;
    }, {}));
  }

  var allStyles = getAllStyles();

  var config = {
    scrollableTypes: ['scroller', 'list', 'waterfall', 'recycle-list'],
    gestureEvents: ['panstart', 'panmove', 'panend', 'swipe', 'longpress', 'tap'],
    // these components should not bind events with .native.
    weexBuiltInComponents: ['div', 'container', 'text', 'image', 'gif', 'img', 'cell', 'a'],
    bindingStyleNamesForPx2Rem: allStyles
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
   * whether ct contains el.
   * @param {HTMLElement} container
   * @param {HTMLElement} target
   */
  function contains(container, target, includeSelf) {
    if (includeSelf && container === target) {
      return true;
    }
    return container.contains ? container.contains(target) && container !== target : container.compareDocumentPosition(target) & 16 !== 0;
  }

  function insideA(el) {
    if (typeof el._insideA === 'boolean') {
      return el._insideA;
    }
    var parent = el.parentElement;
    var parents = [];
    var checkParents = function checkParents(inside) {
      for (var i = 0, l = parents.length; i < l; i++) {
        parents[i]._insideA = inside;
      }
    };
    var check = function check(inside) {
      el._insideA = inside;
      checkParents(inside);
      return inside;
    };
    while (parent !== document.body) {
      if (parent.tagName.toLowerCase() === 'a') {
        return check(true);
      }
      if (typeof parent._insideA === 'boolean') {
        return check(parent._insideA);
      }
      parents.push(parent);
      parent = parent.parentElement;
    }
    return check(false);
  }

  /**
   * get parent scroller vComponent.
   * return a VueComponent or null.
   */
  function getParentScroller(vm) {
    if (!vm) {
      return null;
    }
    if (vm._parentScroller) {
      return vm._parentScroller;
    }
    function _getParentScroller(parent) {
      if (!parent) {
        return;
      }
      if (config.scrollableTypes.indexOf(parent.weexType) > -1) {
        vm._parentScroller = parent;
        return parent;
      }
      return _getParentScroller(parent.$parent);
    }
    return _getParentScroller(vm.$parent);
  }

  /**
   * get scroller's element.
   * @param vm {HTMLElement | VueCOmponent} vm or element.
   * return the element or document.body.
   */
  function getParentScrollerElement(vm) {
    if (!vm) {
      return null;
    }
    var el = vm instanceof HTMLElement ? vm : vm.$el;
    if (!el || el.nodeType !== 1) {
      return;
    }
    if (vm._parentScroller) {
      return vm._parentScroller;
    }
    function _getParentScroller(parent) {
      if (!parent) {
        return;
      }
      var tagName = parent.tagName.toLowerCase();
      if (tagName === 'body' || tagName === 'main' && config.scrollableTypes.indexOf(parent.getAttribute('weex-type')) > -1) {
        vm._parentScroller = parent;
        return parent;
      }
      return _getParentScroller(parent.parentElement);
    }
    return _getParentScroller(el);
  }

  function horizontalBalance(rect, ctRect) {
    return rect.left < ctRect.right && rect.right > ctRect.left;
  }

  function verticalBalance(rect, ctRect) {
    return rect.top < ctRect.bottom && rect.bottom > ctRect.top;
  }

  /**
   * return a data array with two boolean value, which are:
   * 1. visible in current ct's viewport.
   * 2. visible with offset in current ct's viewport.
   */
  function hasIntersection(rect, ctRect, dir, offset) {
    dir = dir || 'up';
    var isHorizontal = dir === 'left' || dir === 'right';
    var isVertical = dir === 'up' || dir === 'down';
    if (isHorizontal && !verticalBalance(rect, ctRect)) {
      return [false, false];
    }
    if (isVertical && !horizontalBalance(rect, ctRect)) {
      return [false, false];
    }
    offset = offset ? parseInt(offset) * weex.config.env.scale : 0;
    switch (dir) {
      case 'up':
        return [rect.top < ctRect.bottom && rect.bottom > ctRect.top, rect.top < ctRect.bottom + offset && rect.bottom > ctRect.top - offset];
      case 'down':
        return [rect.bottom > ctRect.top && rect.top < ctRect.bottom, rect.bottom > ctRect.top - offset && rect.top < ctRect.bottom + offset];
      case 'left':
        return [rect.left < ctRect.right && rect.right > ctRect.left, rect.left < ctRect.right + offset && rect.right > ctRect.left - offset];
      case 'right':
        return [rect.right > ctRect.left && rect.left < ctRect.right, rect.right > ctRect.left - offset && rect.left < ctRect.right + offset];
    }
  }

  /**
   * isElementVisible
   * @param  {HTMLElement}  el    a dom element.
   * @param  {HTMLElement}  container  optional, the container of this el.
   */
  function isElementVisible(el, container, dir, offset) {
    if (!el.getBoundingClientRect) {
      return false;
    }
    var bodyRect = {
      top: 0,
      left: 0,
      bottom: window.innerHeight,
      right: window.innerWidth
    };
    var ctRect = container === window || container === document.body ? bodyRect : container ? container.getBoundingClientRect() : bodyRect;
    return hasIntersection(el.getBoundingClientRect(), ctRect, dir, offset);
  }

  // to trigger the appear/disappear event.
  function triggerAppearEvent(elm, evt, dir) {
    dispatchNativeEvent(elm, evt, {
      direction: dir
    });
  }

  /**
   * get all event listeners. including bound handlers in all parent vnodes.
   */
  function getEventHandlers(context) {
    var vnode = context.$vnode;
    var handlers = {};
    var attachedVnodes = [];
    while (vnode) {
      attachedVnodes.push(vnode);
      vnode = vnode.parent;
    }
    attachedVnodes.forEach(function (vnode) {
      var parentListeners = vnode.componentOptions && vnode.componentOptions.listeners;
      var dataOn = vnode.data && vnode.data.on;
      extend(handlers, parentListeners, dataOn);
    });
    return handlers;
  }

  function getAppearOffset(el) {
    return el && el.getAttribute('appear-offset');
  }

  function updateWatchAppearList(container) {
    container._watchAppearList = Array.prototype.slice.call(container.querySelectorAll('[weex-appear]'));
  }

  /**
   * inject removeChild function to watch disappear and offsetDisappear events.
   */
  if (!window._rmInjected) {
    window._rmInjected = true;
    var nativeRemove = HTMLElement.prototype.removeChild;
    HTMLElement.prototype.removeChild = function (el) {
      el._visible && triggerAppearEvent(el, 'disappear', null);
      el._offsetVisible && triggerAppearEvent(el, 'offsetDisappear', null);
      nativeRemove.apply(this, arguments);
    };
  }

  /**
   * Watch element's visibility to tell whether should trigger a appear/disappear
   * event in scroll handler.
   */
  function watchAppear(context, fireNow) {
    var el = context && context.$el;
    if (!el || el.nodeType !== 1) {
      return;
    }

    var isWindow = false;
    var container = getParentScrollerElement(context);
    if (!container) {
      return;
    }
    if (container === document.body) {
      isWindow = true;
    }
    /**
     * Code below will only exec once for binding scroll handler for parent container.
     */
    var scrollHandler = container._scrollHandler;
    if (!scrollHandler) {
      scrollHandler = container._scrollHandler = function (event$$1) {
        updateWatchAppearList(container);
        /**
         * detect scrolling direction.
         * direction only support up & down yet.
         * TODO: direction support left & right.
         */
        var scrollTop = isWindow ? window.pageYOffset : container.scrollTop;
        var preTop = container._lastScrollTop;
        container._lastScrollTop = scrollTop;
        var dir = (scrollTop < preTop ? 'down' : scrollTop > preTop ? 'up' : container._prevDirection) || null;
        container._prevDirection = dir;
        var watchAppearList = container._watchAppearList || [];
        var len = watchAppearList.length;
        for (var i = 0; i < len; i++) {
          var el = watchAppearList[i];
          var appearOffset = getAppearOffset(el);
          var visibleData = isElementVisible(el, container, dir, appearOffset);
          detectAppear(el, visibleData, dir);
        }
      };
      container.addEventListener('scroll', throttle(scrollHandler, 100, true));
    }
    if (fireNow) {
      context.$nextTick(scrollHandler);
    }
  }

  /**
   * decide whether to trigger a appear/disappear event.
   * @param {VueComponent} context
   * @param {boolean} visible
   * @param {string} dir
   */
  function detectAppear(el, visibleData, dir, appearOffset) {
    if (dir === void 0) dir = null;

    if (!el) {
      return;
    }
    var visible = visibleData[0];
    var offsetVisible = visibleData[1];
    /**
     * No matter it's binding appear/disappear or both of them. Always
     * should test it's visibility and change the el._visible.
     * If neigher has been bound, then ignore it.
     */
    /**
     * if the component hasn't appeared for once yet, then it shouldn't trigger
     * a disappear event at all.
     */
    if (el._appearedOnce || visible) {
      if (el._visible !== visible) {
        el._visible = visible;
        if (visible && !el._appearedOnce) {
          el._appearedOnce = true;
        }
        var evtName = visible ? 'appear' : 'disappear';
        if (el.getAttribute("data-evt-" + evtName) === '') {
          triggerAppearEvent(el, evtName, dir);
        }
      }
    }
    if (el._offsetAppearedOnce || offsetVisible) {
      if (el._offsetVisible !== offsetVisible) {
        el._offsetVisible = offsetVisible;
        if (offsetVisible && !el._offsetAppearedOnce) {
          el._offsetAppearedOnce = true;
        }
        var evt = offsetVisible ? ['offset-appear', 'offsetAppear'] : ['offset-disappear', 'offsetDisappear'];
        if (el.getAttribute("data-evt-" + evt[0]) === '') {
          triggerAppearEvent(el, evt[1], dir);
        }
      }
    }
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var lazyloadAttr = 'data-img-src';
  var placeholderAttr = 'placeholder';

  function preLoadImg(src, loadCallback, errorCallback) {
    var img = new Image();
    img.onload = loadCallback ? loadCallback.bind(img) : null;
    img.onerror = errorCallback ? errorCallback.bind(img) : null;
    img.src = src;
  }

  function applySrc(item, src, placeholderSrc) {
    if (!src) {
      return;
    }
    function finallCb() {
      delete item._src_loading;
    }

    if (window._processImgSrc) {
      src = window._processImgSrc(src, item);
      if (placeholderSrc) {
        placeholderSrc = window._processImgSrc(placeholderSrc, item);
      }
    }

    if (item._src_loading === src) {
      return;
    }

    /**
     * 1. apply src immediately in case javscript blocks the image loading
     *  before next tick.
     */
    item.style.backgroundImage = "url(" + (src || '') + ")";
    item.removeAttribute(lazyloadAttr);
    /**
     * 2. then load the img src with Image constructor (but would not post
     *  a request again), just to trigger the load event.
     */
    item._src_loading = src;
    preLoadImg(src, function (evt) {
      item.style.backgroundImage = "url(" + (src || '') + ")";
      var ref = this;
      var naturalWidth = ref.width;
      var naturalHeight = ref.height;
      var params = {
        success: true,
        size: { naturalWidth: naturalWidth, naturalHeight: naturalHeight }
      };
      dispatchNativeEvent(item, 'load', params);
      finallCb();
    }, function (evt) {
      var params = {
        success: false,
        size: { naturalWidth: 0, naturalHeight: 0 }
      };
      dispatchNativeEvent(item, 'load', params);
      if (placeholderSrc) {
        preLoadImg(placeholderSrc, function () {
          item.style.backgroundImage = "url(" + (placeholderSrc || '') + ")";
        });
      }
      finallCb();
    });
  }

  function getCtScroller(el) {
    if (!el) {
      return;
    }
    var scroller = el._ptScroller;
    if (!scroller) {
      var pt = el.parentElement;
      while (pt && pt !== document.body) {
        if ((pt.className + '' || '').match(/weex-list|weex-scroller|weex-waterfall/)) {
          scroller = pt;
          break;
        }
        pt = pt.parentElement;
      }
      scroller = pt;
      el._ptScroller = pt;
    }
    return scroller;
  }

  function fireLazyload(el, ignoreVisibility) {
    if (Array.isArray(el)) {
      return el.forEach(function (ct) {
        return fireLazyload(ct);
      });
    }
    el = el || document.body;
    if (!el) {
      return;
    }
    var imgs = (el || document.body).querySelectorAll("[" + lazyloadAttr + "]");
    if (el.getAttribute(lazyloadAttr)) {
      imgs = [el];
    }
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      if (typeof ignoreVisibility === 'boolean' && ignoreVisibility) {
        applySrc(img, img.getAttribute(lazyloadAttr), img.getAttribute(placeholderAttr));
      } else if (isElementVisible(img, getCtScroller(el))[0]) {
        applySrc(img, img.getAttribute(lazyloadAttr), img.getAttribute(placeholderAttr));
      }
    }
  }

  /**
   * cache a throttle lazyload function for every container element
   * once for different wait times separate.
   *   the architecture of this cache:
   *      cache: {
   *        el.id: {
   *          wait: throttledFunction () { ... }
   *        }
   *      }
   */
  var cache = {};
  var _uid$2 = 1;
  function getThrottleLazyload(wait, el) {
    if (wait === void 0) wait = 16;
    if (el === void 0) el = document.body;

    var id = +(el && el.dataset.throttleId);
    if (isNaN(id) || id <= 0) {
      id = _uid$2++;
      el && el.setAttribute('data-throttle-id', id + '');
    }

    !cache[id] && (cache[id] = {});
    var throttled = cache[id][wait] || (cache[id][wait] = throttle(fireLazyload.bind(this, el), parseFloat(wait),
    // true for callLastTime.
    // to trigger once more time after the last throttled function called with a little more delay.
    true));
    return throttled;
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var bindingStyleNamesForPx2Rem = config.bindingStyleNamesForPx2Rem;

  // whether to support using 0.5px to paint 1px width border.
  var _supportHairlines;
  function supportHairlines() {
    if (typeof _supportHairlines === 'undefined') {
      var dpr = window.devicePixelRatio;
      if (dpr && dpr >= 2 && document.documentElement) {
        var docElm = document.documentElement;
        var testElm = document.createElement('div');
        var fakeBody = document.createElement('body');
        var beforeNode = docElm.firstElementChild || docElm.firstChild;
        testElm.style.border = '0.5px solid transparent';
        fakeBody.appendChild(testElm);
        docElm.insertBefore(fakeBody, beforeNode);
        _supportHairlines = testElm.offsetHeight === 1;
        docElm.removeChild(fakeBody);
      } else {
        _supportHairlines = false;
      }
    }
    return _supportHairlines;
  }

  var support = null;

  function supportSticky() {
    if (support !== null) {
      return support;
    }
    var element = window.document.createElement('div');
    var elementStyle = element.style;
    elementStyle.cssText = 'position:-webkit-sticky;position:sticky;';
    support = elementStyle.position.indexOf('sticky') !== -1;
    return support;
  }

  /**
   * get transformObj
   */
  function getTransformObj(elm) {
    var styleObj = {};
    if (!elm) {
      return styleObj;
    }
    var transformStr = elm.style.webkitTransform || elm.style.mozTransform || elm.style.transform;
    if (transformStr && transformStr.match(/(?: *(?:translate|rotate|scale)[^(]*\([^(]+\))+/i)) {
      styleObj = transformStr.trim().replace(/, +/g, ',').split(' ').reduce(function (pre, str) {
        ['translate', 'scale', 'rotate'].forEach(function (name) {
          if (new RegExp(name, 'i').test(str)) {
            pre[name] = str;
          }
        });
        return pre;
      }, {});
    }
    return styleObj;
  }

  /**
   * translate a transform string from a transformObj.
   */
  function getTransformStr(obj) {
    return Object.keys(obj).reduce(function (pre, key) {
      return pre + obj[key] + ' ';
    }, '');
  }

  /**
   * add transform style to element.
   * @param {HTMLElement} elm
   * @param {object} style: transform object, format is like this:
   *   {
   *     translate: 'translate3d(2px, 2px, 2px)',
   *     scale: 'scale(0.2)',
   *     rotate: 'rotate(30deg)'
   *   }
   * @param {boolean} replace: whether to replace all transform properties.
   */
  function addTransform(elm, style, replace) {
    if (!style) {
      return;
    }
    var styleObj = {};
    if (!replace) {
      styleObj = getTransformObj(elm);
    }
    for (var key in style) {
      var val = style[key];
      if (val) {
        styleObj[key] = val;
      }
    }
    var resStr = getTransformStr(styleObj);
    elm.style.webkitTransform = resStr;
    elm.style.mozTransform = resStr;
    elm.style.transform = resStr;
  }

  /**
   * copy a transform behaviour from one element to another.
   * key could be: 'translate' | 'scale' | 'rotate'
   */
  function copyTransform(from, to, key) {
    var str;
    if (!key) {
      str = from.style.webkitTransform || from.style.mozTransform || from.style.transform;
    } else {
      var fromObj = getTransformObj(from);
      if (!fromObj[key]) {
        return;
      }
      var toObj = getTransformObj(to);
      toObj[key] = fromObj[key];
      str = getTransformStr(toObj);
    }
    to.style.webkitTransform = str;
    to.style.mozTransform = str;
    to.style.transform = str;
  }

  /**
   * get color's r, g, b value.
   * @param {string} color support all kinds of value of color.
   */
  function getRgb(color) {
    var haxReg = /#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/;
    var rgbReg = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    var span = document.createElement('span');
    var body = document.body;
    span.style.cssText = "color: " + color + "; width: 0px; height: 0px;";
    body && body.appendChild(span);
    color = window.getComputedStyle(span).color + '';
    body && body.removeChild(span);

    var match;
    match = color.match(haxReg);
    if (match) {
      return {
        r: parseInt(match[1], 16),
        g: parseInt(match[2], 16),
        b: parseInt(match[3], 16)
      };
    }
    match = color.match(rgbReg);
    if (match) {
      return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3])
      };
    }
  }

  /**
   * get style sheet with owner node's id
   * @param {string} id owner node id.
   */
  function getStyleSheetById(id) {
    if (!id) {
      return;
    }
    var styleSheets = document.styleSheets;
    var len = styleSheets.length;
    for (var i = 0; i < len; i++) {
      var styleSheet = styleSheets[i];
      if (styleSheet.ownerNode.id === id) {
        return styleSheet;
      }
    }
  }

  function getChildrenTotalWidth(children) {
    var len = children.length;
    var total = 0;
    for (var i = 0; i < len; i++) {
      total += children[i].getBoundingClientRect().width;
    }
    return total;
  }
  /**
   * get total content width of the element.
   * @param {HTMLElement} elm
   */
  function getRangeWidth(elm) {
    var children = elm.children;
    if (!children) {
      return elm.getBoundingClientRect().width;
    }
    if (!Range) {
      return getChildrenTotalWidth(children);
    }
    var range = document.createRange();
    if (!range.selectNodeContents) {
      return getChildrenTotalWidth(children);
    }
    range.selectNodeContents(elm);
    return range.getBoundingClientRect().width;
  }

  /**
   * px2rem and camelize keys.
   */
  function styleObject2rem(style, rootValue) {
    var obj = {};
    for (var k in style) {
      var camK = camelize(k);
      if (bindingStyleNamesForPx2Rem.indexOf(camK) > -1) {
        obj[camK] = px2rem(style[k] + '', rootValue);
      } else {
        obj[camK] = style[k];
      }
    }
    return obj;
  }

  function px2rem(px, rootValue) {
    return px.replace(/([+-]?\d+(?:.\d*)?)([p|w]x)/g, function ($0, $1, $2) {
      if ($2 === 'wx') {
        // 'wx' -> px
        return $1 + 'px';
      } else {
        // 'px' -> rem
        var pxVal = parseFloat($1);
        var sign = pxVal > 0 ? 1 : pxVal < 0 ? -1 : 0;
        if (Math.abs(pxVal) <= 1) {
          return supportHairlines() ? sign * 0.5 + "px" : sign * 1 + "px";
        }
        return pxVal / (rootValue || window.weex.config.env.rem) + 'rem';
      }
    });
  }

  function rem2px(rem, rootValue) {
    return rem.replace(/([+-]?\d+(?:.\d*)?)rem/g, function ($0, $1) {
      return parseFloat($1) * (rootValue || window.weex.config.env.rem) + 'px';
    });
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var utils = Object.freeze({
    extend: extend,
    extendTruthy: extendTruthy,
    extendKeys: extendKeys,
    extractKeys: extractKeys,
    bind: bind,
    debounce: debounce,
    depress: depress,
    throttle: throttle,
    loopArray: loopArray,
    cached: cached,
    camelize: camelize,
    camelizeKeys: camelizeKeys,
    capitalize: capitalize,
    hyphenate: hyphenate,
    hyphenateKeys: hyphenateKeys,
    hyphenateStyleKeys: hyphenateStyleKeys,
    camelToKebab: camelToKebab,
    appendCss: appendCss,
    nextFrame: nextFrame,
    toCSSText: toCSSText,
    supportsPassive: supportsPassive,
    createEvent: createEvent,
    createBubblesEvent: createBubblesEvent,
    createCustomEvent: createCustomEvent,
    dispatchNativeEvent: dispatchNativeEvent,
    mapFormEvents: mapFormEvents,
    contains: contains,
    insideA: insideA,
    getParentScroller: getParentScroller,
    getParentScrollerElement: getParentScrollerElement,
    hasIntersection: hasIntersection,
    isElementVisible: isElementVisible,
    getEventHandlers: getEventHandlers,
    watchAppear: watchAppear,
    detectAppear: detectAppear,
    applySrc: applySrc,
    fireLazyload: fireLazyload,
    getThrottleLazyload: getThrottleLazyload,
    supportHairlines: supportHairlines,
    supportSticky: supportSticky,
    getTransformObj: getTransformObj,
    getTransformStr: getTransformStr,
    addTransform: addTransform,
    copyTransform: copyTransform,
    getRgb: getRgb,
    getStyleSheetById: getStyleSheetById,
    getRangeWidth: getRangeWidth,
    styleObject2rem: styleObject2rem,
    px2rem: px2rem,
    rem2px: rem2px,
    isPlainObject: isPlainObject,
    isArray: isArray,
    isPrimitive: isPrimitive,
    isDef: isDef
  });

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
   * get WXEnvironment info.
   * @param  {object} viewportInfo: info about viewport.
   * @param  {object} envInfo: info parsed from lib.env.
   */
  function initEnv(viewportInfo, envInfo) {
    var browserName = envInfo.browser ? envInfo.browser.name : navigator.appName;
    var browserVersion = envInfo.browser ? envInfo.browser.version.val : null;
    var osName = envInfo.os.name;
    if (osName.match(/(iPhone|iPad|iPod)/i)) {
      osName = 'iOS';
    } else if (osName.match(/Android/i)) {
      osName = 'android';
    }
    var osVersion = envInfo.os.version.val;
    var env = {
      platform: 'Web',
      weexVersion: '1.0.36',
      layoutDirection: 'ltr',
      userAgent: navigator.userAgent,
      appName: browserName,
      appVersion: browserVersion,
      osName: osName,
      osVersion: osVersion,
      deviceModel: envInfo.os.name || null
    };
    /**
     * viewportInfo: scale, deviceWidth, deviceHeight. dpr
     */
    return extend(viewportInfo, env);
  }

  // const viewportInfo = initViewport()

  // 750 by default currently
  // const scale = viewportInfo.scale

  // const units = {
  //   REM: 12 * scale,
  //   VW: viewportInfo.deviceWidth / 100,
  //   VH: viewportInfo.deviceHeight / 100,
  //   VMIN: Math.min(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
  //   VMAX: Math.max(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
  //   CM: 96 / 2.54 * scale,
  //   MM: 96 / 25.4 * scale,
  //   Q: 96 / 25.4 / 4 * scale,
  //   IN: 96 * scale,
  //   PT: 96 / 72 * scale,
  //   PC: 96 / 6 * scale,
  //   PX: scale
  // }

  // Object.freeze(units)
  // Object.freeze(env)

  // window.CSS_UNIT = units
  window.WXEnvironment = initEnv(init$1(), window.lib.env);

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /* global Vue */

  var weexModules = {};
  var _roots = [];

  var weex$4 = {
    __vue__: null,
    utils: utils,
    // units: window.CSS_UNIT,
    config: {
      env: window.WXEnvironment,
      bundleUrl: location.href
    },

    _components: {},
    _modules: weexModules,

    _meta: {
      mounted: {},
      updated: {},
      destroyed: {},
      requiredModules: {},
      apiCalled: {},
      perf: {}
    },

    document: {
      body: {}
    },

    requireModule: function requireModule(moduleName) {
      var metaMod = weex$4._meta.requiredModules;
      if (!metaMod[moduleName]) {
        metaMod[moduleName] = 0;
      }
      metaMod[moduleName]++;
      return weexModules[moduleName];
    },

    registerModule: function registerModule() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }return (ref = this).registerApiModule.apply(ref, args);
      var ref;
    },

    support: function support(feature) {
      if (feature === void 0) feature = '';

      var match = (feature + '').match(/@(component|module)\/(\w+)(.\w+)?/);
      if (match) {
        var type = match[1];
        var mod = match[2];
        var method = match[3];
        method = method && method.replace(/^\./, '');
        switch (type) {
          case 'component':
            return typeof this._components[mod] !== 'undefined' || config.weexBuiltInComponents.indexOf(mod) >= 0;
          case 'module':
            var module = weexModules[mod];
            return module && method ? !!module[method] : !!module;
        }
      } else {
        console.warn("[vue-render] invalid argument for weex.support: " + feature);
        return null;
      }
    },

    supports: function supports() {
      return this.support.apply(this, arguments);
    },

    isRegisteredModule: function isRegisteredModule(moduleName, methodName) {
      var feature = methodName ? moduleName + "." + methodName : moduleName;
      return this.support('@module/' + feature);
    },

    isRegisteredComponent: function isRegisteredComponent(componentName) {
      return this.support('@component/' + componentName);
    },

    /**
     * Register a new vue instance in this weex instance. Put its root element into weex.document.body.children, so
     * that user can use weex.document.body to walk through all dom structures in all vue instances in the page.
     */
    registerVueInstance: function registerVueInstance(instance) {
      if (!instance instanceof Vue) {
        return;
      }
      var root = instance.$root;
      if (!root || !root.$el) {
        return;
      }
      this.document.body.children.push(root.$el);
    },

    // @deprecated
    require: function require() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }console.log("[Vue Render] \"weex.require\" is deprecated, please use \"weex.requireModule\" instead.");
      return (ref = this).requireModule.apply(ref, args);
      var ref;
    },

    // @deprecated
    // TODO: rename to registerModule
    registerApiModule: function registerApiModule(name, module, meta) {
      if (!weexModules[name]) {
        weexModules[name] = {};
      }
      if (!!meta && meta.registerType === 'assignment') {
        weexModules[name] = module;
      } else {
        var loop = function loop(key) {
          if (module.hasOwnProperty(key)) {
            weexModules[name][key] = function () {
              var called = weex$4._meta.apiCalled;
              if (!called[name]) {
                called[name] = {};
              }
              var calledMod = called[name];
              if (!calledMod[key]) {
                calledMod[key] = 0;
              }
              calledMod[key]++;
              return module[key].apply(weex$4, arguments);
            };
          }
        };

        for (var key in module) {
          loop(key);
        }
      }
    },

    registerComponent: function registerComponent(name, component) {
      if (!this.__vue__) {
        return console.log('[Vue Render] Vue is not found. Please import Vue.js before register a component.');
      }
      this._components[name] = 0;
      if (component._css) {
        var css = component._css.replace(/\b[+-]?[\d.]+rem;?\b/g, function (m) {
          return parseFloat(m) * 75 * weex$4.config.env.scale + 'px';
        });
        appendCss(css, "weex-cmp-" + name);
        delete component._css;
      }
      this.__vue__.component(name, component);
    },

    // @deprecated
    getRoot: function getRoot() {},

    // @deprecated
    sender: {
      performCallback: function performCallback(callback, data, keepAlive) {
        if (typeof callback === 'function') {
          return callback(data);
        }
        return null;
      }
    },

    // @deprecated
    install: function install(module) {
      module.init(this);
    }
  };

  Object.defineProperty(weex$4.document.body, 'children', {
    get: function get() {
      return _roots;
    }
  });['on', 'once', 'off', 'emit'].forEach(function (method) {
    weex$4[method] = function () {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }if (!this._vue) {
        this._vue = new this.__vue__();
      }
      return (ref = this._vue)["$" + method].apply(ref, args);
      var ref;
    };
  });

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  function getInlineStyle(vnode) {
    var data = vnode.data || {};
    return extendTruthy({}, data.staticStyle, data.style);
  }

  function extractComponentStyle(context) {
    return getComponentInlineStyle(context);
    // return getComponentStyle(context, true)
  }

  function getComponentInlineStyle(context) {
    var vnode = context && context.$vnode;
    if (!vnode) {
      return {};
    }
    var style = {};
    while (vnode) {
      extend(style, getInlineStyle(vnode));
      vnode = vnode.parent;
    }
    return style;
  }

  var text$2 = {
    transform: function transform(style) {
      var lines = style.lines;
      if (lines > 0) {
        return Object.assign(style, {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: lines
        });
      }
      return style;
    }
  };

  var tagMap$1 = {
    text: text$2
  };

  var getTransformer$1 = function getTransformer$1(tag) {
    return tagMap$1[tag];
  };

  var transformer = {
    getTransformer: getTransformer$1
  };

  var getTransformer = transformer.getTransformer;

  var getTransformer_1 = getTransformer;

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var weexBuiltInComponents = config.weexBuiltInComponents;

  var appearEventsMap = {
    appear: 'appear',
    disappear: 'disappear',
    offsetAppear: 'offset-appear',
    offsetDisappear: 'offset-disappear'
  };

  /**
   * remove text nodes in the nodes array.
   * @param  {Array} nodes
   * @return {Array} nodes without text nodes.
   */
  function trimTextVNodes(vnodes) {
    if (isArray(vnodes)) {
      return vnodes.filter(function (vnode) {
        return !!vnode.tag;
      });
    }
    return vnodes;
  }

  /**
   * ==================================================
   * method to transform args passed to createElement
   * for render function.
   * ==================================================
   */

  // should share with precompiler.
  var metaMap = {
    figure: ['img', 'image', 'gif', 'figure'],
    p: ['text', 'p'],
    div: ['container', 'div'],
    section: ['cell', 'cell-slot'],
    'recycle-list': ['recycle-list']
  };

  var checkMap = Object.keys(metaMap).reduce(function (pre, targetTag) {
    var tagArr = metaMap[targetTag];
    tagArr.forEach(function (fromTag) {
      pre[fromTag] = targetTag;
    });
    return pre;
  }, {});

  var _stdTagMap = {
    p: 'text',
    figure: 'image',
    section: 'cell'
  };
  function getStdTag(tag) {
    var stdTag = _stdTagMap[tag];
    return stdTag || tag;
  }

  var precompiledClassMap = {
    div: {
      'weex-ct': true,
      'weex-div': true
    },
    image: {
      'weex-el': true,
      'weex-image': true
    },
    text: {
      'weex-el': true,
      'weex-text': true
    },
    cell: {
      'weex-ct': true,
      'weex-cell': true
    },
    a: {
      'weex-ct': true,
      'weex-a': true
    }
  };

  function isPrecompiled(tag) {
    return config.weexBuiltInComponents.indexOf(tag) > -1;
  }

  function transformRender(ctx, h) {
    return function (tag, data, children, normalizationType, alwaysNormalize) {
      if (isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = {};
      }
      if (!isDef(data)) {
        data = {};
      }
      if (isDef(data.is)) {
        tag = data.is;
      }
      if (typeof tag === 'string') {
        data = transformData(this, data, tag);
        tag = transformTag(this, tag);
      } else {
        // direct component options / constructor
        data = transformData(this, data, undefined);
      }
      return h.call(this, tag, data, children, normalizationType, alwaysNormalize);
    }.bind(ctx);
  }

  function transformTag(ctx, tag) {
    var elementTag = checkMap[tag];
    return elementTag || tag;
  }

  /**
   * Tell whether a element is contained in a element who has
   * a attribute 'bubble'=true.
   * @param {HTMLElement} el
   */
  // function inBubble (el) {
  //   if (typeof el._inBubble === 'boolean') {
  //     return el._inBubble
  //   }
  //   const parents = []
  //   let parent = el.parentElement
  //   let inBubble
  //   while (parent && parent !== document.body) {
  //     if (typeof parent._inBubble === 'boolean') {
  //       inBubble = parent._inBubble
  //       break
  //     }
  //     const attr = parent.getAttribute('bubble')
  //     if (attr !== '') {
  //       inBubble = attr === true || attr === 'true'
  //       break
  //     }
  //     parents.push(parent)
  //     parent = parent.parentElement
  //   }
  //   el._inBubble = inBubble
  //   for (let i = 0, l = parents.length; i < l; i++) {
  //     parents[i]._inBubble = inBubble
  //   }
  //   return inBubble
  // }

  function bindEvents(ctx, evts, attrs, tag, appearAttached) {
    for (var key in evts) {
      var appearEvtName = appearEventsMap[key];
      if (appearEvtName) {
        attrs["data-evt-" + appearEvtName] = '';
        if (!appearAttached.value) {
          appearAttached.value = true;
          attrs['weex-appear'] = '';
        }
      } else {
        attrs["data-evt-" + key] = '';
        if (key !== 'click') {
          // should stop propagation by default.
          // TODO: should test inBubble first.
          var handler = evts[key];
          if (isArray(evts[key])) {
            handler.unshift(ctx.$stopPropagation);
          } else {
            evts[key] = [ctx.$stopPropagation, handler];
          }
        }
      }
    }
    if (evts.click) {
      evts.weex$tap = evts.click;
      evts.click = ctx.$stopOuterA;
    }
    if (evts.scroll) {
      evts.weex$scroll = evts.scroll;
      delete evts.scroll;
    }
  }

  function transformOn(ctx, data, tag) {
    var on = data.on;
    var nativeOn = data.nativeOn;
    if (weexBuiltInComponents.indexOf(tag) > -1) {
      /**
       * for div, image, text, cell, a, ...
       * user should bind all events without .native.
       */
      nativeOn = null;
      delete data.nativeOn;
    }
    if (isDef(weex._components[tag])) {
      /**
       * for slider, list, ...
       * user should bind events without .native.
       * in our events handling, all events should transfer to
       * .native binding.
       */
      delete data.nativeOn;
      nativeOn = null;
      if (on) {
        nativeOn = data.nativeOn = on;
      }
      on = null;
      delete data.on;
    }

    var attrs = data.attrs;
    if (!attrs) {
      attrs = data.attrs = {};
    }

    var appearAttached = {
      value: false
    };
    if (on) {
      bindEvents(ctx, on, attrs, tag, appearAttached);
    }
    if (nativeOn) {
      bindEvents(ctx, nativeOn, attrs, tag, appearAttached);
    }

    /**
     * binding a weex$tap to <a> element to stop propagation if there
     * is no bubbles=true flag showing on parents.
     */
    if (tag === 'a') {
      if (!on) {
        on = data.on = {};
      }
      // if (!checkBubble(el)) {
      var evt = on['weex$tap'];
      if (!evt) {
        on['weex$tap'] = ctx.$stopPropagation;
      } else if (Array.isArray(evt)) {
        evt.unshift(ctx.$stopPropagation);
      } else {
        evt = [ctx.$stopPropagation, evt];
      }
      // }
    }
  }

  function transformClass(data, tag) {
    var classData = data.class;
    var tagClassObj = precompiledClassMap[tag];
    if (!classData) {
      classData = data.class = [];
    }
    if (classData && isArray(classData)) {
      data.class = classData.concat(Object.keys(tagClassObj));
    } else if ((typeof classData === 'undefined' ? 'undefined' : _typeof(classData)) === 'object') {
      Object.assign(classData, tagClassObj);
    }
  }

  function transformStyle(ctx, data, tag) {
    var style = data.style;
    if (!style) {
      return;
    }
    var transformer = getTransformer_1(getStdTag(tag));
    if (transformer) {
      data.style = ctx._px2rem(transformer.transform(style), 75);
    } else {
      data.style = ctx._px2rem(style, 75);
    }
  }

  /**
   * transformAttrs:
   *  - add weex-type attrs for precompiledTags.
   *  - image.resize: transform to directive weex-resize.
   */
  function transformAttrs(data, tag) {
    var attrs = data.attrs;
    var directives = data.directives;
    if (!attrs) {
      attrs = data.attrs = {};
    }
    attrs['weex-type'] = tag;
    if (tag === 'image' || tag === 'gif') {
      var src = attrs.src;
      var resize = attrs.resize;
      if (src) {
        attrs['data-img-src'] = src;
      }
      if (resize) {
        if (!directives) {
          directives = data.directives = [];
        }
        directives.push({
          name: 'weex-resize',
          value: attrs.resize
        });
      }
    }
  }

  function transformData(ctx, data, tag) {
    if (isArray(data)) {
      // parameter data is ommited.
      return data;
    }
    var isP = isPrecompiled(tag);
    // class
    isP && transformClass(data, tag);
    // style
    transformStyle(ctx, data, tag);
    // attrs
    isP && transformAttrs(data, tag);
    // on
    transformOn(ctx, data, tag);
    return data;
  }

  function mapNativeEvents(ctx, map) {
    var eventMap = {};
    var loop = function loop(origEvent) {
      eventMap[origEvent] = function (evt) {
        var el = evt.target;
        dispatchNativeEvent(el, map[origEvent]);
      };
    };

    for (var origEvent in map) {
      loop(origEvent);
    }return eventMap;
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var core = Object.freeze({
    extractComponentStyle: extractComponentStyle,
    getComponentInlineStyle: getComponentInlineStyle,
    trimTextVNodes: trimTextVNodes,
    transformRender: transformRender,
    transformTag: transformTag,
    transformData: transformData,
    mapNativeEvents: mapNativeEvents
  });

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var scrollableTypes = config.scrollableTypes;

  var lazyloadWatched = false;
  function watchLazyload() {
    lazyloadWatched = true;['scroll',
    // 'transitionend',
    // 'webkitTransitionEnd',
    // 'animationend',
    // 'webkitAnimationEnd',
    'resize'].forEach(function (evt) {
      window.addEventListener(evt, getThrottleLazyload(25, document.body));
    });
    /**
     * In case the users use the body's overflow to scroll. Then the scroll
     * event would not be triggered on the window object but on the body.
     */
    document.body.addEventListener('scroll', getThrottleLazyload(25, document.body));
  }

  var idCnt = 0;
  var appearWatched = false;

  /**
   * during updating, the appear watcher binding on the appearWatched context
   * should be triggered within a debounced wrapper.
   * If the updating interval is shorter then 50 ms, then the appear events will
   * ignore the change in the previous 50 ms due to the debounce wrapper.
   */
  var debouncedWatchAppear = debounce(function () {
    watchAppear(appearWatched, true);
  }, 50);

  /**
   * if it's a scrollable tag, then watch appear events for it.
   */
  function watchAppearForScrollables(tagName, context) {
    // when this is a scroller/list/waterfall
    if (scrollableTypes.indexOf(tagName) > -1) {
      var sd = context.scrollDirection;
      if (!sd || sd !== 'horizontal') {
        appearWatched = context;
        watchAppear(context, true);
      }
    }
  }

  var base$1 = {
    beforeCreate: function beforeCreate() {
      if (!lazyloadWatched) {
        watchLazyload();
      }
    },

    updated: function updated() {
      var el = this.$el;
      if (!el || el.nodeType !== 1) {
        return;
      }
      if (this._rootId) {
        if (el.className.indexOf('weex-root') <= -1) {
          el.classList.add('weex-root');
          el.classList.add('weex-ct');
          el.setAttribute('data-wx-root-id', this._rootId);
        }
      }

      var tagName = this.$options && this.$options._componentTag;
      var metaUp = weex._meta.updated;
      if (!metaUp[tagName]) {
        metaUp[tagName] = 0;
      }
      metaUp[tagName]++;
      // will check appearing when no other changes in latest 50ms.
      debouncedWatchAppear();
      /**
       * since the updating of component may affect the layout, the lazyloading should
       * be fired.
       */
      this._fireLazyload();
    },

    mounted: function mounted() {
      var tagName = this.$options && this.$options._componentTag;
      var el = this.$el;
      if (!el || el.nodeType !== 1) {
        return;
      }
      if (typeof weex._components[tagName] !== 'undefined') {
        weex._components[tagName]++;
      }
      var metaMt = weex._meta.mounted;
      if (!metaMt[tagName]) {
        metaMt[tagName] = 0;
      }
      metaMt[tagName]++;

      watchAppearForScrollables(tagName, this);

      // when this is the root element of Vue instance.
      if (this === this.$root) {
        var rootId = "wx-root-" + idCnt++;
        if (!weex._root) {
          weex._root = {};
        }
        weex._root[rootId] = this;
        this._rootId = rootId;
        if (el.nodeType !== 1) {
          return;
        }
        el.classList.add('weex-root');
        el.classList.add('weex-ct');
        el.setAttribute('data-wx-root-id', rootId);

        /**
         * there's no scrollable component in this page. That is to say,
         * the page is using body scrolling instead of scrollabe components.
         * Then the appear watcher should be attached on the body.
         */
        if (!appearWatched) {
          appearWatched = this;
          watchAppear(this, true);
        }

        this._fireLazyload(el);
      }

      // give warning for not using $processStyle in vue-loader config.
      // if (!warned && !window._style_processing_added) {
      //   warnProcessStyle()
      // }
    },

    destroyed: function destroyed() {
      var el = this.$el;
      if (!el || el.nodeType !== 1) {
        return;
      }
      /**
       * if the destroyed element is above another panel with images inside, and the images
       * moved into the viewport, then the lazyloading should be triggered.
       */
      if (this._rootId) {
        delete weex._root[this._rootId];
        delete this._rootId;
      }
      var tagName = this.$options && this.$options._componentTag;
      if (typeof weex._components[tagName] !== 'undefined') {
        weex._components[tagName]--;
      }
      var metaDs = weex._meta.destroyed;
      if (!metaDs[tagName]) {
        metaDs[tagName] = 0;
      }
      metaDs[tagName]++;
      this._fireLazyload();
    },

    methods: {
      _fireLazyload: function _fireLazyload(el) {
        getThrottleLazyload(25, el || document.body)();
      }
    }
  };

  var event$1 = {
    methods: {
      // deprecated.
      $stopOutterA: function $stopOutterA(e) {
        return this.$stopOuterA(e);
      },

      $stopOuterA: function $stopOuterA(e) {
        if (e && e.preventDefault && e.target) {
          if (insideA(e.target)) {
            e.preventDefault();
          }
        }
      },

      $stopPropagation: function $stopPropagation(e) {
        if (e && e.stopPropagation) {
          e.stopPropagation();
        }
      }
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var bindingStyleNamesForPx2Rem$1 = config.bindingStyleNamesForPx2Rem;

  var style = {
    methods: {
      _px2rem: function _px2rem(value, rootValue) {
        var this$1 = this;

        if (typeof value === 'string') {
          return (value + '').replace(/[+-]?\d+(?:.\d*)?[pw]x/gi, function ($0) {
            return weex.utils.px2rem($0, rootValue);
          });
        }
        if (typeof value === 'number') {
          return weex.utils.px2rem(value + '', rootValue);
        }
        if (isPlainObject(value)) {
          for (var k in value) {
            if (value.hasOwnProperty(k) && bindingStyleNamesForPx2Rem$1.indexOf(k) > -1) {
              value[k] = weex.utils.px2rem(value[k] + '', rootValue);
            }
          }
          return value;
        }
        if (isArray(value)) {
          for (var i = 0, l = value.length; i < l; i++) {
            this$1._px2rem(value[i], rootValue);
          }
          return value;
        }
      },

      _processExclusiveStyle: function _processExclusiveStyle(styleObj, rootValue, tagName) {
        var transformer = getTransformer_1(tagName);
        return this._px2rem(transformer.transform(styleObj), rootValue);
      },

      _getParentRect: function _getParentRect() {
        var el = this.$el;
        var parent = el && el.parentElement;
        return parent && parent.getBoundingClientRect();
      }
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  // input and textare has some common api and event
  var findEnterKeyType = function findEnterKeyType(key) {
    var keys = ['default', 'go', 'next', 'search', 'send'];
    if (keys.indexOf(key) > -1) {
      return key;
    }
    return 'done';
  };

  var inputCommon = {
    methods: {
      focus: function focus() {
        this.$el && this.$el.focus();
      },
      blur: function blur() {
        this.$el && this.$el.blur();
      },

      setSelectionRange: function setSelectionRange(start, end) {
        try {
          this.$el.setSelectionRange(start, end);
        } catch (e) {}
      },

      getSelectionRange: function getSelectionRange(callback) {
        try {
          var selection = window.getSelection();
          var str = selection.toString();
          var selectionStart = this.$el.value.indexOf(str);
          var selectionEnd = selectionStart === -1 ? selectionStart : selectionStart + str.length;
          callback && callback({
            selectionStart: selectionStart,
            selectionEnd: selectionEnd
          });
        } catch (e) {
          callback && callback(new Error('[vue-render] getSelection is not supported.'));
        }
      },

      getEditSelectionRange: function getEditSelectionRange(callback) {
        this.getSelectionRange(callback);
      },

      // support enter key event
      createKeyboardEvent: function createKeyboardEvent(events) {
        var customKeyType = this.returnKeyType;
        if (customKeyType) {
          var keyboardEvents = {
            'keyup': function keyup(ev) {
              var code = ev.keyCode;
              var key = ev.key;
              if (code === 13) {
                if (!key || key.toLowerCase() === 'tab') {
                  key = 'next';
                }
                dispatchNativeEvent(ev.target, 'return', {
                  key: key,
                  returnKeyType: findEnterKeyType(customKeyType),
                  value: ev.target.value
                });
              }
            }
          };
          events = extend(events, keyboardEvents);
        }
        return events;
      }
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var sticky = {
    destroyed: function destroyed() {
      if (!this._stickyAdded) {
        return;
      }
      var scroller = getParentScroller(this);
      if (!scroller) {
        return;
      }
      delete scroller._stickyChildren[this._uid];
    },

    methods: {
      _addSticky: function _addSticky() {
        var el = this.$el;
        if (!el || el.nodeType === 1) {
          return;
        }
        el.classList.add('sticky');
        if (!this._placeholder) {
          this._placeholder = el.cloneNode(true);
        }
        this._placeholder.style.display = 'block';
        this._placeholder.style.width = this.$el.offsetWidth + 'px';
        this._placeholder.style.height = this.$el.offsetHeight + 'px';
        el.parentNode.insertBefore(this._placeholder, this.$el);
      },

      _removeSticky: function _removeSticky() {
        var el = this.$el;
        if (!el || el.nodeType === 1) {
          return;
        }
        el.classList.remove('sticky');
        if (this._placeholder) {
          this._placeholder.parentNode.removeChild(this._placeholder);
        }
        this._placeholder = null;
      }
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  window.global = window;
  window.weex = weex$4;

  weex$4._styleMap = {};['getComponentInlineStyle', 'extractComponentStyle', 'mapNativeEvents', 'trimTextVNodes'].forEach(function (method) {
    weex$4[method] = core[method].bind(weex$4);
  });

  weex$4.mixins = {
    inputCommon: inputCommon
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var _inited$1 = false;

  var renderFunctionPlugin = {
    init: function init(weex) {
      if (_inited$1) {
        return;
      }
      _inited$1 = true;
      var Vue = weex.__vue__;
      var _render = Vue.prototype._render;
      Vue.prototype._render = function () {
        var weexRender = this._weexRender;
        var tag = this.$options && this.$options._componentTag;
        if (!weexRender && !isDef(weex._components[tag])) {
          var origRender = this.$options.render;
          weexRender = this._weexRender = function (h) {
            var args = [],
                len = arguments.length - 1;
            while (len-- > 0) {
              args[len] = arguments[len + 1];
            }return origRender.call.apply(origRender, [this, transformRender(this, h)].concat(args));
          };
          this.$options.render = weexRender;
        }
        return _render.call(this);
      };
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  if (global.Vue) {
    setVue(global.Vue);
  }

  function setVue(vue) {
    if (!vue) {
      throw new Error('[Vue Render] Vue not found. Please make sure vue 2.x runtime is imported.');
    }
    if (global.weex.__vue__) {
      return;
    }
    global.weex.__vue__ = vue;
    weex.install(renderFunctionPlugin);
    console.log("[Vue Render] install Vue " + vue.version + ".");
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
   * init weex.
   * @param  {Vue$2} Vue: Vue Constructor.
   * @param  {object} options: extend weex plugins.
   *         - components.
   *         - modules.
   */
  var _inited = false;
  function init(Vue /* options = {}*/) {
    if (_inited) {
      return;
    }
    _inited = true;

    setVue(Vue);

    Vue.prototype.$getConfig = function () {
      console.warn('[Vue Render] "this.$getConfig" is deprecated, please use "weex.config" instead.');
      return weex.config;
    };

    var htmlRegex = /^html:/i;
    Vue.config.isReservedTag = function (tag) {
      return htmlRegex.test(tag);
    };
    Vue.config.parsePlatformTagName = function (tag) {
      return tag.replace(htmlRegex, '');
    };

    function isWeexTag(tag) {
      return typeof weex._components[tag] !== 'undefined';
    }
    var oldGetTagNamespace = Vue.config.getTagNamespace;
    Vue.config.getTagNamespace = function (tag) {
      if (isWeexTag(tag)) {
        return;
      }
      return oldGetTagNamespace(tag);
    };

    Vue.mixin(base$1);
    Vue.mixin(event$1);
    Vue.mixin(style);
    Vue.mixin(sticky);
  }

  // auto init in dist mode.
  if (typeof window !== 'undefined' && window.Vue) {
    init(window.Vue);
  }

  weex.init = init;

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /**
   * @fileOverview Input component.
   * Support v-model only if vue version is larger than 2.2.0
   */
  var mapFormEvents$1;
  var appendCss$1;

  var ID_PREFIX_PLACEHOLDER_COLOR = 'wipt_plc_';
  var ID_PREFIX_INPUT = 'wipt_';
  var idCount = 0;

  function setPlaceholderColor(inputVm, placeholderColor) {
    if (!placeholderColor) {
      return;
    }
    var vendors = ['::-webkit-input-placeholder', ':-moz-placeholder', '::-moz-placeholder', ':-ms-input-placeholder', ':placeholder-shown'];
    var id = inputVm._id;
    appendCss$1(vendors.map(function (vendor, idx) {
      return "#" + ID_PREFIX_INPUT + id + vendors[idx] + "{color:" + placeholderColor + ";}";
    }).join(''), "" + ID_PREFIX_PLACEHOLDER_COLOR + id, true);
  }

  function processStyle(vm) {
    var styles = getComponentInlineStyle(vm);
    var phColor = styles.placeholderColor || styles['placeholder-color'];
    if (phColor) {
      setPlaceholderColor(vm, phColor);
    }
    return styles;
  }

  function getInput(weex) {
    var ref = weex.mixins;
    var inputCommon = ref.inputCommon;

    return {
      name: 'weex-input',
      mixins: [inputCommon],
      props: {
        type: {
          type: String,
          default: 'text',
          validator: function validator(value) {
            return ['email', 'number', 'password', 'search', 'tel', 'text', 'url', 'date', 'datetime', 'time'].indexOf(value) !== -1;
          }
        },
        value: String,
        placeholder: String,
        disabled: {
          type: [String, Boolean],
          default: false
        },
        autofocus: {
          type: [String, Boolean],
          default: false
        },
        maxlength: [String, Number],
        returnKeyType: String
      },

      render: function render(createElement) {
        if (!this._id) {
          this._id = idCount++;
        }
        var events = mapFormEvents$1(this);
        return createElement('html:input', {
          attrs: {
            'weex-type': 'input',
            id: "" + ID_PREFIX_INPUT + this._id,
            type: this.type,
            value: this.value,
            disabled: this.disabled !== 'false' && this.disabled !== false,
            autofocus: this.autofocus !== 'false' && this.autofocus !== false,
            placeholder: this.placeholder,
            maxlength: this.maxlength,
            'returnKeyType': this.returnKeyType
          },
          domProps: {
            value: this.value
          },
          on: this.createKeyboardEvent(events),
          staticClass: 'weex-input weex-el',
          staticStyle: processStyle(this)
        });
      }
    };
  }

  var input = {
    init: function init(weex) {
      mapFormEvents$1 = weex.utils.mapFormEvents;
      appendCss$1 = weex.utils.appendCss;

      weex.registerComponent('input', getInput(weex));
    }
  };

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.weex-switch {\n  border: 0.013333rem solid #dfdfdf;\n  cursor: pointer;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  background-clip: content-box;\n  color: #64bd63;\n  width: 1.333333rem;\n  height: 0.8rem;\n  background-color: white;\n  border-color: #dfdfdf;\n  -webkit-box-shadow: #dfdfdf 0 0 0 0 inset;\n          box-shadow: #dfdfdf 0 0 0 0 inset;\n  border-radius: 0.8rem;\n  -webkit-transition: border 0.4s, background-color 1.2s, -webkit-box-shadow 0.4s;\n  transition: border 0.4s, background-color 1.2s, -webkit-box-shadow 0.4s;\n  transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n  transition: border 0.4s, box-shadow 0.4s, background-color 1.2s, -webkit-box-shadow 0.4s;\n}\n\n.weex-switch-checked {\n  background-color: #64bd63;\n  border-color: #64bd63;\n  -webkit-box-shadow: #64bd63 0 0 0 0.533333rem inset;\n          box-shadow: #64bd63 0 0 0 0.533333rem inset;\n}\n\n.weex-switch-checked.weex-switch-disabled {\n  opacity: 0.3\n}\n\n.weex-switch-disabled {\n  background-color: #EEEEEE;\n}\n\n.weex-switch-inner {\n  width: 0.8rem;\n  height: 0.8rem;\n  background: #fff;\n  border-radius: 100%;\n  -webkit-box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: background-color 0.4s, left 0.2s;\n  transition: background-color 0.4s, left 0.2s;\n}\n\n.weex-switch-checked > .weex-switch-inner {\n  left: 0.533333rem;\n}\n", undefined);

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  function getSwitch(weex) {
    var extractComponentStyle = weex.extractComponentStyle;
    var ref = weex.utils;
    var dispatchNativeEvent = ref.dispatchNativeEvent;

    return {
      name: 'weex-switch',
      props: {
        checked: {
          type: [Boolean, String],
          default: false
        },
        disabled: {
          type: [Boolean, String],
          default: false
        },
        // Border color  when the switch is turned off
        tintColor: String,
        // Background color when the switch is turned on.
        onTintColor: String,
        // Color of the foreground switch grip.
        thumbTintColor: String
      },
      data: function data() {
        return {
          isChecked: this.checked !== 'false' && this.checked !== false,
          isDisabled: this.disabled !== 'false' && this.disabled !== false
        };
      },
      computed: {
        wrapperClass: function wrapperClass() {
          var classArray = ['weex-el', 'weex-switch'];
          this.isChecked && classArray.push('weex-switch-checked');
          this.isDisabled && classArray.push('weex-switch-disabled');
          return classArray.join(' ');
        },
        mergeStyle: function mergeStyle() {
          var style = extractComponentStyle(this);
          var ref = this;
          var tintColor = ref.tintColor;
          var onTintColor = ref.onTintColor;
          var isChecked = ref.isChecked;
          var isDisabled = ref.isDisabled;

          if (!isChecked && tintColor) {
            Object.assign(style, {
              borderColor: tintColor,
              boxShadow: tintColor + " 0 0 0 0 inset"
            });
          }

          if (isChecked && onTintColor) {
            Object.assign(style, {
              backgroundColor: onTintColor,
              color: onTintColor,
              borderColor: onTintColor,
              boxShadow: onTintColor + " 0 0 0 0.533333rem inset"
            });
          }

          isDisabled && Object.assign(style, {
            opacity: 0.3
          });

          return style;
        },
        smallStyle: function smallStyle() {
          var ref = this;
          var thumbTintColor = ref.thumbTintColor;
          var smallStyle = {};

          if (thumbTintColor) {
            smallStyle = {
              background: thumbTintColor
            };
          }
          return smallStyle;
        }
      },
      methods: {
        toggle: function toggle() {
          // TODO: handle the events
          if (!this.isDisabled) {
            this.isChecked = !this.isChecked;
            dispatchNativeEvent(this.$el, 'change', { value: this.isChecked });
          }
        }
      },

      mounted: function mounted() {
        var this$1 = this;

        var el = this.$el;
        if (el && el.nodeType === 1) {
          if (!this._removeClickHandler) {
            var handler = function handler(evt) {
              this$1.toggle();
            };
            this._removeClickHandler = el.removeEventListener.bind(el, 'weex$tap', handler);
            el.addEventListener('weex$tap', handler);
          }
        }
      },

      beforeDestroy: function beforeDestroy() {
        var rm = this._removeClickHandler;
        if (rm) {
          rm();
          delete this._removeClickHandler;
        }
      },

      render: function render(createElement) {
        return createElement('span', {
          attrs: { 'weex-type': 'switch' },
          staticClass: this.wrapperClass,
          staticStyle: this.mergeStyle
        }, [createElement('small', {
          staticClass: 'weex-switch-inner',
          staticStyle: this.smallStyle
        })]);
      }
    };
  }

  var _switch = {
    init: function init(weex) {
      weex.registerComponent('switch', getSwitch(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var DEFAULT_OFFSET_ACCURACY = 10;
  var DEFAULT_LOADMORE_OFFSET = 0;

  function getThrottledScroll(context) {
    var scale = weex.config.env.scale;
    if (!context._throttleScroll) {
      var wrapper = context.$refs.wrapper;
      var inner = context.$refs.inner;
      var preOffset = (context.scrollDirection === 'horizontal' ? wrapper.scrollLeft : wrapper.scrollTop) || 0;
      context._throttleScroll = weex.utils.throttle(function (evt) {
        var offset = context.scrollDirection === 'horizontal' ? wrapper.scrollLeft : wrapper.scrollTop;
        var indent = parseInt(context.offsetAccuracy) * scale;
        function triggerScroll() {
          var rect = inner.getBoundingClientRect();
          var evtObj = {
            contentSize: { width: rect.width, height: rect.height },
            contentOffset: {
              x: wrapper.scrollLeft,
              /**
               * positive direciton for y-axis is down.
               * so should use negative operation on scrollTop.
               *
               *  (0,0)---------------> x
               *       |
               *       |
               *       |
               *       |
               *       v y
               *
               */
              y: -wrapper.scrollTop
            }
          };
          if (context.$el) {
            weex.utils.dispatchNativeEvent(context.$el, 'weex$scroll', evtObj);
          }
        }
        if (Math.abs(offset - preOffset) >= indent) {
          triggerScroll();
          preOffset = offset;
        }
      }, 16, true);
    }
    return context._throttleScroll;
  }

  var scrollable$1 = {
    props: {
      loadmoreoffset: {
        type: [String, Number],
        default: DEFAULT_LOADMORE_OFFSET,
        validator: function validator(value) {
          var val = parseInt(value);
          return !isNaN(val) && val >= DEFAULT_LOADMORE_OFFSET;
        }
      },

      offsetAccuracy: {
        type: [Number, String],
        default: DEFAULT_OFFSET_ACCURACY,
        validator: function validator(value) {
          var val = parseInt(value);
          return !isNaN(val) && val >= DEFAULT_OFFSET_ACCURACY;
        }
      }
    },

    created: function created() {
      // should call resetLoadmore() to enable loadmore event.
      this._loadmoreReset = true;
    },

    mounted: function mounted() {
      this.reloadStickyChildren();
    },

    updated: function updated() {
      this.reloadStickyChildren();
    },

    methods: {
      updateLayout: function updateLayout() {
        var wrapper = this.$refs.wrapper;
        if (wrapper) {
          var rect = wrapper.getBoundingClientRect();
          this._wrapperWidth = rect.width;
          this._wrapperHeight = rect.height;
        }
        var inner = this.$refs.inner;
        var children = inner && inner.children;
        if (inner) {
          var rect$1 = inner.getBoundingClientRect();
          this._innerWidth = rect$1.width;
          this._innerHeight = rect$1.height;
        }
        var loadingEl = this._loading && this._loading.$el;
        var refreshEl = this._refresh && this._refresh.$el;
        if (loadingEl) {
          this._innerHeight -= loadingEl.getBoundingClientRect().height;
        }
        if (refreshEl) {
          this._innerHeight -= refreshEl.getBoundingClientRect().height;
        }
        // inner width is always the viewport width somehow in horizontal
        // scoller, therefore the inner width should be reclaculated.
        if (this.scrollDirection === 'horizontal' && children) {
          this._innerWidth = weex.utils.getRangeWidth(inner);
        }
      },

      resetLoadmore: function resetLoadmore() {
        this._loadmoreReset = true;
      },

      /**
       * process sticky children in scrollable components.
       * current only support list and vertical scroller.
       */
      processSticky: function processSticky() {
        var this$1 = this;

        /**
         * current browser support 'sticky' or '-webkit-sticky', so there's no need
         * to do further more.
         */
        var stickyChildren = this._stickyChildren;
        var len = stickyChildren && stickyChildren.length || 0;
        if (len <= 0) {
          return;
        }

        var origSticky = weex.utils.supportSticky();
        // current only support list and vertical scroller.
        if (this.scrollDirection === 'horizontal') {
          return;
        }

        var container = this.$el;
        if (!container) {
          return;
        }
        var scrollTop = container.scrollTop;

        var stickyChild;
        for (var i = 0; i < len; i++) {
          stickyChild = stickyChildren[i];
          if (origSticky) {
            this$1.addSticky(stickyChild, origSticky);
          } else if (stickyChild._initOffsetTop < scrollTop) {
            this$1.addSticky(stickyChild);
          } else {
            this$1.removeSticky(stickyChild);
          }
        }
      },

      addSticky: function addSticky(el, supportSticky) {
        if (supportSticky) {
          el.classList.add('weex-ios-sticky');
        } else {
          if (el._sticky === true) {
            return;
          }
          el._sticky = true;
          if (!el._placeholder) {
            var placeholder = el.cloneNode(true);
            placeholder._origNode = el;
            placeholder.classList.add('weex-sticky-placeholder');
            el._placeholder = placeholder;
          }
          el.parentNode.insertBefore(el._placeholder, el);
          el.style.width = window.getComputedStyle(el).width;
          el.classList.add('weex-sticky');
        }
      },

      removeSticky: function removeSticky(el) {
        if (typeof el._sticky === 'undefined' || el._sticky === false) {
          return;
        }
        el._sticky = false;
        el.parentNode.removeChild(el._placeholder);
        el.classList.remove('weex-sticky');
      },

      reloadStickyChildren: function reloadStickyChildren() {
        var container = this.$el;
        if (!container) {
          return;
        }
        var stickyChildren = [];
        var children = container.querySelectorAll('[sticky]');
        for (var i = 0, l = children.length; i < l; i++) {
          var child = children[i];
          if (/weex-sticky-placeholder/.test(child.className)) {
            // is a placeholder.
            var origNode = child._origNode;
            if (!origNode || !origNode.parentNode || origNode.parentNode !== child.parentNode) {
              child.parentNode.removeChild(child);
            }
          } else {
            // is a sticky node.
            stickyChildren.push(child);
            if (!child._sticky) {
              child._initOffsetTop = child.offsetTop;
            }
          }
        }
        this._stickyChildren = stickyChildren;
      },

      handleScroll: function handleScroll(event) {
        weex.utils.getThrottleLazyload(25, this.$el, 'scroll')();
        getThrottledScroll(this)(event);

        this.processSticky();

        // fire loadmore event.
        var inner = this.$refs.inner;
        if (inner) {
          var innerLength = this.scrollDirection === 'horizontal' ? this._innerWidth : this._innerHeight;
          if (!this._innerLength) {
            this._innerLength = innerLength;
          }
          if (this._innerLength !== innerLength) {
            this._innerLength = innerLength;
            this._loadmoreReset = true;
          }
          if (this._loadmoreReset && this.reachBottom(this.loadmoreoffset)) {
            this._loadmoreReset = false;
            var el = this.$el;
            if (el) {
              weex.utils.dispatchNativeEvent(el, 'loadmore');
            }
          }
        }
      },

      reachTop: function reachTop() {
        var wrapper = this.$refs.wrapper;
        return !!wrapper && wrapper.scrollTop <= 0;
      },

      reachBottom: function reachBottom(offset) {
        var wrapper = this.$refs.wrapper;
        var inner = this.$refs.inner;
        offset = parseInt(offset || 0) * weex.config.env.scale;

        if (wrapper && inner) {
          var key = this.scrollDirection === 'horizontal' ? 'width' : 'height';
          var innerLength = this["_inner" + key[0].toUpperCase() + key.substr(1)];
          var wrapperLength = this["_wrapper" + key[0].toUpperCase() + key.substr(1)];
          var scrollOffset = this.scrollDirection === 'horizontal' ? wrapper.scrollLeft : wrapper.scrollTop;
          return scrollOffset >= innerLength - wrapperLength - offset;
        }
        return false;
      },

      handleTouchStart: function handleTouchStart(event) {
        if (this._loading || this._refresh) {
          var touch = event.changedTouches[0];
          this._touchParams = {
            reachTop: this.reachTop(),
            reachBottom: this.reachBottom(),
            startTouchEvent: touch,
            startX: touch.pageX,
            startY: touch.pageY,
            timeStamp: event.timeStamp
          };
        }
      },

      handleTouchMove: function handleTouchMove(event) {
        if (!this._touchParams || !this._refresh && !this._loading) {
          return;
        }
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startY = ref.startY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          var touch = event.changedTouches[0];
          var offsetY = touch.pageY - startY;
          var dir = offsetY > 0 ? 'down' : 'up';
          this._touchParams.offsetY = offsetY;
          if (this._refresh && dir === 'down' && reachTop) {
            this._refresh.pullingDown(offsetY);
          } else if (this._loading && dir === 'up' && reachBottom) {
            this._loading.pullingUp(-offsetY);
          }
        }
      },

      handleTouchEnd: function handleTouchEnd(event) {
        if (!this._touchParams || !this._refresh && !this._loading) {
          return;
        }
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startY = ref.startY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          var touch = event.changedTouches[0];
          var offsetY = touch.pageY - startY;
          var dir = offsetY > 0 ? 'down' : 'up';
          this._touchParams.offsetY = offsetY;
          if (this._refresh && dir === 'down' && reachTop) {
            this._refresh.pullingEnd();
          } else if (this._loading && dir === 'up' && reachBottom) {
            this._loading.pullingEnd();
          }
        }
        delete this._touchParams;
      }
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  function getList(weex) {
    var extractComponentStyle = weex.extractComponentStyle;

    return {
      name: 'weex-list',
      mixins: [scrollable$1],
      computed: {
        wrapperClass: function wrapperClass() {
          var classArray = ['weex-list', 'weex-list-wrapper', 'weex-ct'];
          this._refresh && classArray.push('with-refresh');
          this._loading && classArray.push('with-loading');
          return classArray.join(' ');
        }
      },

      methods: {
        createChildren: function createChildren(h) {
          var slots = this.$slots.default || [];
          this._cells = slots.filter(function (vnode) {
            if (!vnode.tag && !vnode.componentOptions) {
              return false;
            }
            return true;
          });
          return [h('article', {
            ref: 'inner',
            staticClass: 'weex-list-inner weex-ct'
          }, this._cells)];
        }
      },

      render: function render(createElement) {
        var this$1 = this;

        this.weexType = 'list';

        this.$nextTick(function () {
          this$1.updateLayout();
        });

        return createElement('main', {
          ref: 'wrapper',
          attrs: { 'weex-type': 'list' },
          staticClass: this.wrapperClass,
          on: {
            scroll: this.handleScroll,
            touchstart: this.handleTouchStart,
            touchmove: this.handleTouchMove,
            touchend: this.handleTouchEnd
          },
          staticStyle: extractComponentStyle(this)
        }, this.createChildren(createElement));
      }
    };
  }

  var list = {
    init: function init(weex) {
      weex.registerComponent('list', getList(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  function getScroller(weex) {
    var extractComponentStyle = weex.extractComponentStyle;

    return {
      name: 'weex-scroller',
      mixins: [scrollable$1],
      props: {
        scrollDirection: {
          type: [String],
          default: 'vertical',
          validator: function validator(value) {
            return ['horizontal', 'vertical'].indexOf(value) !== -1;
          }
        },
        scrollable: {
          type: [Boolean],
          default: true
        }
      },
      computed: {
        wrapperClass: function wrapperClass() {
          var classArray = ['weex-scroller', 'weex-scroller-wrapper', 'weex-ct'];
          if (this.scrollDirection === 'horizontal') {
            classArray.push('weex-scroller-horizontal');
          } else {
            classArray.push('weex-scroller-vertical');
          }
          if (!this.scrollable) {
            classArray.push('weex-scroller-disabled');
          }
          return classArray.join(' ');
        }
      },

      methods: {
        createChildren: function createChildren(h) {
          var slots = this.$slots.default || [];
          this._cells = slots.filter(function (vnode) {
            if (!vnode.tag && !vnode.componentOptions) {
              return false;
            }
            return true;
          });
          return [h('article', {
            ref: 'inner',
            staticClass: 'weex-scroller-inner weex-ct'
          }, this._cells)];
        }
      },

      render: function render(createElement) {
        var this$1 = this;

        this.weexType = 'scroller';

        /* istanbul ignore next */
        // if ("production" === 'development') {
        //   validateStyles('scroller', this.$vnode.data && this.$vnode.data.staticStyle)
        // }

        this._cells = this.$slots.default || [];
        this.$nextTick(function () {
          this$1.updateLayout();
        });

        return createElement('main', {
          ref: 'wrapper',
          attrs: { 'weex-type': 'scroller' },
          on: {
            scroll: this.handleScroll,
            touchstart: this.handleTouchStart,
            touchmove: this.handleTouchMove,
            touchend: this.handleTouchEnd
          },
          staticClass: this.wrapperClass,
          staticStyle: extractComponentStyle(this)
        }, this.createChildren(createElement));
      }
    };
  }

  var scroller = {
    init: function init(weex) {
      weex.registerComponent('scroller', getScroller(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND,  either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /**
   * @fileoverview waterfall
   * NOTE: only support full screen width waterfall.
   */

  var NORMAL_GAP_SIZE = 32;
  var DEFAULT_COLUMN_COUNT = 1;

  function getWaterfall(weex) {
    var extractComponentStyle = weex.extractComponentStyle;

    return {
      name: 'weex-waterfall',
      mixins: [scrollable$1],
      props: {
        /**
         * specified gap size.
         * value can be number or 'normal'. 'normal' (32px) by default.
         */
        columnGap: {
          type: [String, Number],
          default: 'normal',
          validator: function validator(val) {
            if (!val || val === 'normal') {
              return true;
            }
            val = parseInt(val);
            return !isNaN(val) && val > 0;
          }
        },
        /**
         * the maximum column counts.
         * value can be number or 'auto'. 1 by default.
         */
        columnCount: {
          type: [String, Number],
          default: DEFAULT_COLUMN_COUNT,
          validator: function validator(val) {
            val = parseInt(val);
            return !isNaN(val) && val > 0;
          }
        },
        /**
         * the mimimum column width.
         * value can be number or 'auto'. 'auto' by default.
         */
        columnWidth: {
          type: [String, Number],
          default: 'auto',
          validator: function validator(val) {
            if (!val || val === 'auto') {
              return true;
            }
            val = parseInt(val);
            return !isNaN(val) && val > 0;
          }
        }
      },

      mounted: function mounted() {
        this._nextTick();
      },

      updated: function updated() {
        this.$nextTick(this._nextTick());
      },

      methods: {
        _createChildren: function _createChildren(h, rootStyle) {
          var this$1 = this;

          var slots = (this.$slots.default || []).slice();
          this._headers = [];
          this._footers = [];
          this._others = [];
          var len = slots.length;

          for (var i = 0; i < len; i++) {
            var vnode = slots[i];
            var tag = vnode.componentOptions && vnode.componentOptions.tag || vnode.tag;
            if (tag === 'refresh' || tag === 'loading') {
              continue;
            }
            if (tag === 'section') {
              // cell
              break;
            }
            if (tag === 'header') {
              this$1._headers.push(vnode);
              slots[i] = null; // should not included in footer.
            }
          }

          for (var i$1 = len - 1; i$1 >= 0; i$1--) {
            var vnode$1 = slots[i$1];
            if (!vnode$1) {
              continue;
            } // already taken by header.
            var tag$1 = vnode$1.componentOptions && vnode$1.componentOptions.tag || vnode$1.tag;
            if (tag$1 === 'refresh' || tag$1 === 'loading') {
              continue;
            }
            if (tag$1 === 'section') {
              // cell
              break;
            }
            if (tag$1 === 'header') {
              this$1._footers.push(vnode$1);
            }
          }

          this._cells = slots.filter(function (vnode) {
            if (!vnode) {
              return false;
            }
            var cmpOpts = vnode.componentOptions;
            if (!vnode.tag && !cmpOpts) {
              return false;
            }
            var tag = cmpOpts && cmpOpts.tag || vnode.tag;
            if (tag === 'refresh' || tag === 'loading') {
              this$1["_" + tag] = vnode;
              return false;
            }
            if (tag !== 'section') {
              this$1._others.push(vnode);
              return false;
            }
            return true;
          });

          this._reCalc(rootStyle);
          this._genColumns(h);
          var children = [];
          this._refresh && children.push(this._refresh);
          children = children.concat(this._headers);
          // .concat(this._others)
          children.push(h('html:div', {
            ref: 'columns',
            staticClass: 'weex-waterfall-inner-columns weex-ct'
          }, this._columns));
          children.push(h('html:div', {
            ref: 'footers',
            staticClass: 'weex-waterfall-footers weex-ct'
          }, this._footers));
          this._loading && children.push(this._loading);
          return [h('article', {
            ref: 'inner',
            staticClass: 'weex-waterfall-inner weex-ct'
          }, children)];
        },

        _reCalc: function _reCalc(rootStyle) {
          /**
           * NOTE: columnGap and columnWidth can't both be auto.
           * NOTE: the formula:
           *  totalWidth = n * w + (n - 1) * gap
           * 1. if columnCount = n then calc w
           * 2. if columnWidth = w then calc n
           * 3. if columnWidth = w and columnCount = n then calc totalWidth
           *    3.1 if totalWidth < ctWidth then increase columnWidth
           *    3.2 if totalWidth > ctWidth then decrease columnCount
           */
          var width, gap, cnt, ctWidth;
          var scale = weex.config.env.scale;
          var el = this.$el;
          function getCtWidth(width, style) {
            var padding = style.padding ? parseInt(style.padding) * 2 : parseInt(style.paddingLeft || 0) + parseInt(style.paddingRight || 0);
            return width - padding;
          }
          if (el && el.nodeType === 1) {
            // already mounted
            var cstyle = window.getComputedStyle(el);
            ctWidth = getCtWidth(el.getBoundingClientRect().width, cstyle);
          } else {
            // not mounted.
            // only support full screen width for waterfall component.
            ctWidth = getCtWidth(document.documentElement.clientWidth, rootStyle);
          }

          gap = this.columnGap;
          if (gap && gap !== 'normal') {
            gap = parseInt(gap);
          } else {
            gap = NORMAL_GAP_SIZE;
          }
          gap = gap * scale;

          width = this.columnWidth;
          cnt = this.columnCount;
          if (width && width !== 'auto') {
            width = parseInt(width) * scale;
          }
          if (cnt && cnt !== 'auto') {
            cnt = parseInt(cnt);
          }

          // 0. if !columnCount && !columnWidth
          if (cnt === 'auto' && width === 'auto') {}
          // 1. if columnCount = n then calc w.
          else if (cnt !== 'auto' && width === 'auto') {
              width = (ctWidth - (cnt - 1) * gap) / cnt;
            }
            // 2. if columnWidth = w then calc n.
            else if (cnt === 'auto' && width !== 'auto') {
                cnt = (ctWidth + gap) / (width + gap);
              }
              // 3. if columnWidth = w and columnCount = n then calc totalWidth
              else if (cnt !== 'auto' && width !== 'auto') {
                  var totalWidth;
                  var adjustCountAndWidth = function adjustCountAndWidth() {
                    totalWidth = cnt * width + (cnt - 1) * gap;
                    if (totalWidth < ctWidth) {
                      width += (ctWidth - totalWidth) / cnt;
                    } else if (totalWidth > ctWidth && cnt > 1) {
                      cnt--;
                      adjustCountAndWidth();
                    } else if (totalWidth > ctWidth) {
                      // cnt === 1
                      width = ctWidth;
                    }
                  };
                  adjustCountAndWidth();
                }
          this._columnCount = cnt;
          this._columnWidth = width;
          this._columnGap = gap;
        },

        _genColumns: function _genColumns(createElement) {
          var this$1 = this;

          this._columns = [];
          var cells = this._cells;
          var columnCnt = this._columnCount;
          var len = cells.length;
          var columnCells = this._columnCells = Array(columnCnt).join('.').split('.').map(function () {
            return [];
          });
          // spread cells to the columns using simpole polling algorithm.
          for (var i = 0; i < len; i++) {
            (cells[i].data.attrs || (cells[i].data.attrs = {}))['data-cell'] = i;
            columnCells[i % columnCnt].push(cells[i]);
          }
          for (var i$1 = 0; i$1 < columnCnt; i$1++) {
            this$1._columns.push(createElement('html:div', {
              ref: "column" + i$1,
              attrs: {
                'data-column': i$1
              },
              staticClass: 'weex-ct',
              staticStyle: {
                width: this$1._columnWidth + 'px',
                marginLeft: i$1 === 0 ? 0 : this$1._columnGap + 'px'
              }
            }, columnCells[i$1]));
          }
        },

        _nextTick: function _nextTick() {
          this._reLayoutChildren();
        },

        _reLayoutChildren: function _reLayoutChildren() {
          var this$1 = this;

          /**
           * treat the shortest column bottom as the match standard.
           * whichever cell exceeded it would be rearranged.
           * 1. m = shortest column bottom.
           * 2. get all cell ids who is below m.
           * 3. calculate which cell should be in which column.
           */
          var columnCnt = this._columnCount;
          var columnDoms = [];
          var columnAppendFragments = [];
          var columnBottoms = [];
          var minBottom = Number.MAX_SAFE_INTEGER;
          var minBottomColumnIndex = 0;

          // 1. find the shortest column bottom.
          for (var i = 0; i < columnCnt; i++) {
            var columnDom = this$1._columns[i].elm;
            var lastChild = columnDom.lastElementChild;
            var bottom = lastChild ? lastChild.getBoundingClientRect().bottom : 0;
            columnDoms.push(columnDom);
            columnBottoms[i] = bottom;
            columnAppendFragments.push(document.createDocumentFragment());
            if (bottom < minBottom) {
              minBottom = bottom;
              minBottomColumnIndex = i;
            }
          }

          // 2. get all cell ids who is below m.
          var belowCellIds = [];
          var belowCells = {};
          for (var i$1 = 0; i$1 < columnCnt; i$1++) {
            if (i$1 === minBottomColumnIndex) {
              continue;
            }
            var columnDom$1 = columnDoms[i$1];
            var cellsInColumn = columnDom$1.querySelectorAll('section.weex-cell');
            var len = cellsInColumn.length;
            for (var j = len - 1; j >= 0; j--) {
              var cellDom = cellsInColumn[j];
              var cellRect = cellDom.getBoundingClientRect();
              if (cellRect.top > minBottom) {
                var id = ~~cellDom.getAttribute('data-cell');
                belowCellIds.push(id);
                belowCells[id] = { elm: cellDom, height: cellRect.height };
                columnBottoms[i$1] -= cellRect.height;
              }
            }
          }

          // 3. calculate which cell should be in which column and rearrange them
          //  in the dom tree.
          belowCellIds.sort(function (a, b) {
            return a > b;
          });
          var cellIdsLen = belowCellIds.length;
          function addToShortestColumn(belowCell) {
            // find shortest bottom.
            minBottom = Math.min.apply(Math, columnBottoms);
            minBottomColumnIndex = columnBottoms.indexOf(minBottom);
            var cellElm = belowCell.elm;
            var cellHeight = belowCell.height;
            columnAppendFragments[minBottomColumnIndex].appendChild(cellElm);
            columnBottoms[minBottomColumnIndex] += cellHeight;
          }
          for (var i$2 = 0; i$2 < cellIdsLen; i$2++) {
            addToShortestColumn(belowCells[belowCellIds[i$2]]);
          }
          for (var i$3 = 0; i$3 < columnCnt; i$3++) {
            columnDoms[i$3].appendChild(columnAppendFragments[i$3]);
          }
        }
      },

      render: function render(createElement) {
        var this$1 = this;

        this.weexType = 'waterfall';
        this._cells = this.$slots.default || [];
        this.$nextTick(function () {
          this$1.updateLayout();
        });
        var mergedStyle = extractComponentStyle(this);
        return createElement('main', {
          ref: 'wrapper',
          attrs: { 'weex-type': 'waterfall' },
          on: {
            scroll: this.handleScroll,
            touchstart: this.handleTouchStart,
            touchmove: this.handleTouchMove,
            touchend: this.handleTouchEnd
          },
          staticClass: 'weex-waterfall weex-waterfall-wrapper weex-ct',
          staticStyle: mergedStyle
        }, this._createChildren(createElement, mergedStyle));
      }
    };
  }

  var waterfall = {
    init: function init(weex) {
      weex.registerComponent('waterfall', getWaterfall(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  function getHeader(weex) {
    var extractComponentStyle = weex.extractComponentStyle;

    return {
      render: function render(createElement) {
        var attrs = this.$vnode.data.attrs;
        return createElement('html:header', {
          attrs: {
            'weex-type': 'header',
            sticky: this.$parent.weexType === 'waterfall' && typeof attrs.sticky === 'undefined' ? undefined : ''
          },
          ref: 'header',
          staticClass: 'weex-header weex-ct',
          staticStyle: extractComponentStyle(this)
        }, this.$slots.default);
      }
    };
  }

  var header = {
    init: function init(weex) {
      weex.registerComponent('header', getHeader(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  function getLoading() {
    var extractComponentStyle = weex.extractComponentStyle;
    var ref = weex.utils;
    var dispatchNativeEvent = ref.dispatchNativeEvent;

    return {
      name: 'weex-loading',
      props: {
        display: {
          type: String,
          default: 'show',
          validator: function validator(value) {
            return ['show', 'hide'].indexOf(value) !== -1;
          }
        }
      },
      data: function data() {
        return {
          height: -1,
          viewHeight: 0
        };
      },
      mounted: function mounted() {
        this.viewHeight = this.$el.offsetHeight;
        if (this.display === 'hide') {
          this.height = 0;
        } else {
          this.height = this.viewHeight;
        }
      },
      watch: {
        height: function height(val) {
          var offset = val + "px";
          this.$el.style.height = offset;
          this.$el.style.bottom = offset;
        },
        display: function display(val) {
          if (val === 'hide') {
            this.height = 0;
          } else {
            this.height = this.viewHeight;
          }
        }
      },
      methods: {
        pulling: function pulling(offsetY) {
          if (offsetY === void 0) offsetY = 0;

          this.height = offsetY;
        },
        pullingUp: function pullingUp(offsetY) {
          this.$el.style.transition = "height 0s";
          this.pulling(offsetY);
        },
        pullingEnd: function pullingEnd() {
          this.$el && (this.$el.style.transition = "height .2s");
          if (this.height >= this.viewHeight) {
            this.pulling(this.viewHeight);
            if (this.$el) {
              dispatchNativeEvent(this.$el, 'loading');
            }
          } else {
            this.pulling(0);
          }
        },
        getChildren: function getChildren() {
          var children = this.$slots.default || [];
          if (this.display === 'show') {
            return children;
          }
          return children.filter(function (vnode) {
            return !(vnode.componentOptions && vnode.componentOptions.tag === 'loading-indicator');
          });
        }
      },
      render: function render(createElement) {
        this.$parent._loading = this;
        return createElement('aside', {
          ref: 'loading',
          attrs: { 'weex-type': 'loading' },
          staticClass: 'weex-loading weex-ct',
          staticStyle: extractComponentStyle(this)
        }, this.getChildren());
      }
    };
  }

  var loading = {
    init: function init(weex) {
      weex.registerComponent('loading', getLoading(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  function getRefresh(weex) {
    var extractComponentStyle = weex.extractComponentStyle;
    var ref = weex.utils;
    var dispatchNativeEvent = ref.dispatchNativeEvent;

    return {
      name: 'weex-refresh',
      props: {
        display: {
          type: String,
          default: 'show',
          validator: function validator(value) {
            return ['show', 'hide'].indexOf(value) !== -1;
          }
        }
      },
      data: function data() {
        return {
          lastDy: 0,
          viewHeight: 0,
          height: -1
        };
      },
      mounted: function mounted() {
        this.viewHeight = this.$el.offsetHeight;
        if (this.display === 'hide') {
          this.height = 0;
        } else {
          this.height = this.viewHeight;
        }
      },
      watch: {
        height: function height(val) {
          this.$el.style.height = val + "px";
        },
        display: function display(val) {
          if (val === 'hide') {
            this.height = 0;
          } else {
            this.height = this.viewHeight;
          }
        }
      },
      methods: {
        pulling: function pulling(offsetY) {
          if (offsetY === void 0) offsetY = 0;

          this.height = offsetY;
          if (this.$el) {
            dispatchNativeEvent(this.$el, 'pullingdown', {
              dy: offsetY - this.lastDy,
              pullingDistance: offsetY,
              viewHeight: this.viewHeight
            });
          }
          this.lastDy = offsetY;
        },
        pullingDown: function pullingDown(offsetY) {
          this.$el.style.transition = "height 0s";
          this.pulling(offsetY);
        },
        pullingEnd: function pullingEnd() {
          this.$el && (this.$el.style.transition = "height .2s");
          if (this.height >= this.viewHeight) {
            this.pulling(this.viewHeight);
            if (this.$el) {
              dispatchNativeEvent(this.$el, 'refresh');
            }
          } else {
            this.pulling(0);
          }
        },
        getChildren: function getChildren() {
          var children = this.$slots.default || [];
          if (this.display === 'show') {
            return children;
          }
          return children.filter(function (vnode) {
            return !(vnode.componentOptions && vnode.componentOptions.tag === 'loading-indicator');
          });
        }
      },
      render: function render(createElement) {
        this.$parent._refresh = this;
        return createElement('aside', {
          ref: 'refresh',
          attrs: { 'weex-type': 'refresh' },
          staticClass: 'weex-refresh weex-ct',
          staticStyle: extractComponentStyle(this)
        }, this.getChildren());
      }
    };
  }

  var refresh = {
    init: function init(weex) {
      weex.registerComponent('refresh', getRefresh(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var extractComponentStyle$1;
  var getRgb$1;
  var loopArray$1;
  var getStyleSheetById$1;

  var _css = "\n.weex-refresh-indicator,\n.weex-loading-indicator {\n  width: 1rem !important;\n  height: 1rem !important;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.weex-refresh-indicator:before,\n.weex-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  width: 0.5em;\n  height: 0.5em;\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n  -moz-animation: weex-spinner 1.1s infinite ease;\n  animation: weex-spinner 1.1s infinite ease;\n}\n\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n";

  function getStyleSheet(spinnerVm) {
    if (spinnerVm._styleSheet) {
      return;
    }
    spinnerVm._styleSheet = getStyleSheetById$1('weex-cmp-loading-indicator');
  }

  function setKeyframeColor(spinnerVm, val) {
    getStyleSheet(spinnerVm);
    var keyframeRules = computeKeyFrameRules(val);
    var rules = spinnerVm._styleSheet.rules || spinnerVm._styleSheet.cssRules;
    for (var i = 0, l = rules.length; i < l; i++) {
      var item = rules.item(i);
      if ((item.type === CSSRule.KEYFRAMES_RULE || item.type === CSSRule.WEBKIT_KEYFRAMES_RULE) && item.name === 'weex-spinner') {
        var cssRules = item.cssRules;
        for (var j = 0, m = cssRules.length; j < m; j++) {
          var keyframe = cssRules[j];
          if (keyframe.type === CSSRule.KEYFRAME_RULE || keyframe.type === CSSRule.WEBKIT_KEYFRAME_RULE) {
            keyframe.style.boxShadow = keyframeRules[j];
          }
        }
      }
    }
  }

  function computeKeyFrameRules(rgb) {
    if (!rgb) {
      return;
    }
    var scaleArr = ['0em -1.3em 0em 0em', '0.9em -0.9em 0 0em', '1.25em 0em 0 0em', '0.875em 0.875em 0 0em', '0em 1.25em 0 0em', '-0.9em 0.9em 0 0em', '-1.3em 0em 0 0em', '-0.9em -0.9em 0 0em'];
    var colorArr = ['1', '0.2', '0.2', '0.2', '0.2', '0.2', '0.5', '0.7'].map(function (e) {
      return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + e + ')';
    });
    var rules = [];
    var loop = function loop(i) {
      var tmpColorArr = loopArray$1(colorArr, i, 'r');
      rules.push(scaleArr.map(function (scaleStr, i) {
        return scaleStr + ' ' + tmpColorArr[i];
      }).join(', '));
    };

    for (var i = 0; i < scaleArr.length; i++) {
      loop(i);
    }return rules;
  }

  function processStyle$1(vm) {
    var style = extractComponentStyle$1(vm);
    var color = style.color;
    var rgb = color && getRgb$1(color);
    if (rgb) {
      setKeyframeColor(vm, rgb);
    }
    return style;
  }

  var loadingIndicator = {
    name: 'weex-loading-indicator',
    render: function render(createElement) {
      this.weexType = 'loading-indicator';
      return createElement('mark', {
        attrs: { 'weex-type': 'loading-indicator' },
        staticClass: 'weex-loading-indicator weex-ct',
        staticStyle: processStyle$1(this)
      });
    },
    _css: _css
  };

  var loadingIndicator$1 = {
    init: function init(weex) {
      extractComponentStyle$1 = weex.extractComponentStyle;
      getRgb$1 = weex.utils.getRgb;
      loopArray$1 = weex.utils.loopArray;
      getStyleSheetById$1 = weex.utils.getStyleSheetById;
      weex.registerComponent('loading-indicator', loadingIndicator);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  function getList$1(weex) {
    var extractComponentStyle = weex.extractComponentStyle;

    return {
      name: 'weex-recycle-list',
      mixins: [scrollable$1],
      props: {
        scrollDirection: {
          type: [String],
          default: 'vertical',
          validator: function validator(value) {
            return ['horizontal', 'vertical'].indexOf(value) !== -1;
          }
        },
        _items: Array,
        _switch: String
      },
      computed: {
        wrapperClass: function wrapperClass() {
          var classArray = ['weex-recycle', 'weex-recycle-wrapper', 'weex-ct'];
          this._refresh && classArray.push('with-refresh');
          this._loading && classArray.push('with-loading');
          if (this.scrollDirection === 'horizontal') {
            classArray.push('weex-recycle-horizontal');
          } else {
            classArray.push('weex-recycle-vertical');
          }
          return classArray.join(' ');
        }
      },

      methods: {
        createChildren: function createChildren(h) {
          var _vm = this;
          return [h('article', {
            ref: 'inner',
            staticClass: 'weex-recycle-inner weex-ct'
          }, [_vm._l(_vm._items, function (item, index) {
            return [_vm._t(_vm.sloteName(item), null, {
              item: item,
              index: index
            })];
          })])];
        },
        sloteName: function sloteName(item) {
          if (this._switch && item[this._switch]) {
            return item[this._switch];
          } else {
            return 'default';
          }
        }
      },

      render: function render(createElement) {
        var this$1 = this;

        this.weexType = 'list';

        this.$nextTick(function () {
          this$1.updateLayout();
        });

        return createElement('main', {
          ref: 'wrapper',
          attrs: { 'weex-type': 'recycle-list' },
          staticClass: this.wrapperClass,
          on: {
            scroll: this.handleScroll,
            touchstart: this.handleTouchStart,
            touchmove: this.handleTouchMove,
            touchend: this.handleTouchEnd
          },
          staticStyle: extractComponentStyle(this)
        }, this.createChildren(createElement));
      }
    };
  }

  var recycleList = {
    init: function init(weex) {
      weex.registerComponent('recycle-list', getList$1(weex));
    }
  };

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\nbody > .weex-list,\nbody > .weex-recycle,\nbody > .weex-scroller,\nbody > .weex-waterfall {\n  max-height: 100%;\n}\n\n.weex-list-wrapper,\n.weex-recycle-wrapper,\n.weex-scroller-wrapper,\n.weex-waterfall-wrapper {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-list-wrapper,\n.weex-waterfall-wrapper {\n  overflow-y: scroll !important;\n  overflow-x: hidden !important;\n}\n\n.weex-list-inner,\n.weex-recycle-inner,\n.weex-scroller-inner,\n.weex-waterfall-inner {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-waterfall-inner-columns {\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n}\n\n.weex-scroller-wrapper.weex-scroller-vertical,\n.weex-recycle-wrapper.weex-recycle-vertical  {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.weex-scroller-wrapper.weex-scroller-horizontal,\n.weex-recycle-wrapper.weex-recycle-horizontal {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.weex-scroller-wrapper.weex-scroller-disabled {\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.weex-scroller-horizontal .weex-scroller-inner,\n.weex-recycle-horizontal .weex-recycle-inner {\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n  height: 100%;\n}\n\n.weex-cell {\n  width: 100%;\n}\n\n.weex-refresh,\n.weex-loading {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  width: 100%;\n  overflow: hidden;\n}\n", undefined);

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  // import cell from './cell'
  var modules = [list, scroller, waterfall,
  // cell,
  header, loading, refresh, loadingIndicator$1, recycleList];

  var scrollable = {
    init: function init(weex) {
      modules.forEach(function (mod) {
        weex.install(mod);
      });
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var TRANSITION_TIME = 400;
  var NEIGHBOR_SCALE_TIME = 100;
  var MAIN_SLIDE_OPACITY = 1;
  var THROTTLE_SCROLL_TIME = 25;
  var INTERVAL_MINIMUM = 200;

  var slideMixin = {
    created: function created() {
      this._clones = [];
      this.innerOffset = 0;
      this._indicator = null;
    },

    beforeUpdate: function beforeUpdate() {
      this._getWrapperSize();
    },

    updated: function updated() {
      var this$1 = this;

      var children = this.$children;
      var len = children && children.length;
      if (children && len > 0) {
        for (var i = 0; i < len; i++) {
          var vm = children[i];
          if (vm.$options._componentTag === 'indicator' || vm.$vnode.data.ref === 'indicator') {
            vm._watcher.get();
            break;
          }
        }
      }

      var frameCount = this.frameCount;
      if (!this._preFrameCount) {
        this._preFrameCount = frameCount;
      } else if (this._preFrameCount !== frameCount) {
        this._resetNodes();
        this._preFrameCount = frameCount;
        var resetBlankFrame = function resetBlankFrame() {
          if (this$1.currentIndex >= frameCount) {
            // reset blank page.
            this$1._stopAutoPlay();
            this$1._slideTo(0);
          }
        };
        if (this._sliding) {
          // If it's sliding, then the currentIndex is the last frame. The actual currentIndex
          // should be the next index.
          // That is to say, this updating happens Between _parepareNodes and _rearrangeNodes,
          // and the sliding is not yet finished, and the state is not updated yet.
          setTimeout(resetBlankFrame, TRANSITION_TIME + NEIGHBOR_SCALE_TIME);
        } else {
          resetBlankFrame();
        }
      }
      weex.utils.fireLazyload(this.$el, true);
      if (this._preIndex !== this.currentIndex) {
        this._slideTo(this.currentIndex);
      }
    },

    mounted: function mounted() {
      this._getWrapperSize();
      this._slideTo(this.currentIndex);
      weex.utils.fireLazyload(this.$el, true);
    },

    methods: {
      _getWrapperSize: function _getWrapperSize() {
        var wrapper = this.$refs.wrapper;
        if (wrapper) {
          var rect = wrapper.getBoundingClientRect();
          this._wrapperWidth = rect.width;
          this._wrapperHeight = rect.height;
        }
      },

      _formatChildren: function _formatChildren(createElement) {
        var this$1 = this;

        var children = this.$slots.default || [];
        var indicatorVnode;
        var cells = children.filter(function (vnode) {
          if (!vnode.tag) {
            return false;
          }
          if (vnode.componentOptions && vnode.componentOptions.tag === 'indicator') {
            indicatorVnode = vnode;
            return false;
          }
          return true;
        }).map(function (vnode) {
          return createElement('li', {
            ref: 'cells',
            staticClass: "weex-slider-cell weex-ct" + (this$1.isNeighbor ? ' neighbor-cell' : '')
          }, [vnode]);
        });
        if (indicatorVnode) {
          indicatorVnode.data.attrs = indicatorVnode.data.attrs || {};
          indicatorVnode.data.attrs.count = cells.length;
          indicatorVnode.data.attrs.active = this.currentIndex;
          this._indicator = indicatorVnode;
        }
        return cells;
      },

      _renderSlides: function _renderSlides(createElement) {
        this._cells = this._formatChildren(createElement);
        this.frameCount = this._cells.length;
        return createElement('nav', {
          ref: 'wrapper',
          attrs: { 'weex-type': this.isNeighbor ? 'slider-neighbor' : 'slider' },
          on: {
            touchstart: this._handleTouchStart,
            touchmove: weex.utils.throttle(weex.utils.bind(this._handleTouchMove, this), 25),
            touchend: this._handleTouchEnd,
            touchcancel: this._handleTouchCancel
          },
          staticClass: 'weex-slider weex-slider-wrapper weex-ct',
          staticStyle: weex.extractComponentStyle(this)
        }, [createElement('ul', {
          ref: 'inner',
          staticClass: 'weex-slider-inner weex-ct'
        }, this._cells), this._indicator]);
      },

      // get standard index
      _normalizeIndex: function _normalizeIndex(index) {
        var newIndex = (index + this.frameCount) % this.frameCount;
        return Math.min(Math.max(newIndex, 0), this.frameCount - 1);
      },

      _startAutoPlay: function _startAutoPlay() {
        if (!this.autoPlay || this.autoPlay === 'false') {
          return;
        }
        if (this._autoPlayTimer) {
          clearTimeout(this._autoPlayTimer);
          this._autoPlayTimer = null;
        }
        var interval = parseInt(this.interval - TRANSITION_TIME - NEIGHBOR_SCALE_TIME);
        interval = interval > INTERVAL_MINIMUM ? interval : INTERVAL_MINIMUM;
        this._autoPlayTimer = setTimeout(weex.utils.bind(this._next, this), interval);
      },

      _stopAutoPlay: function _stopAutoPlay() {
        if (this._autoPlayTimer) {
          clearTimeout(this._autoPlayTimer);
          this._autoPlayTimer = null;
        }
      },

      _slideTo: function _slideTo(index, isTouchScroll) {
        var this$1 = this;

        if (this.frameCount <= 0) {
          return;
        }
        if (!this.infinite || this.infinite === 'false') {
          if (index === -1 || index > this.frameCount - 1) {
            this._slideTo(this.currentIndex);
            return;
          }
        }
        if (!this._preIndex && this._preIndex !== 0) {
          if (this._showNodes && this._showNodes[0]) {
            this._preIndex = this._showNodes[0].index;
          } else {
            this._preIndex = this.currentIndex;
          }
        }

        if (this._sliding) {
          return;
        }
        this._sliding = true;

        var newIndex = this._normalizeIndex(index);
        var inner = this.$refs.inner;
        var step = this._step = this.frameCount <= 1 ? 0 : this._preIndex - index;

        if (inner) {
          this._prepareNodes();
          var translate = weex.utils.getTransformObj(inner).translate;
          var match = translate && translate.match(/translate[^(]+\(([+-\d.]+)/);
          var innerX = match && match[1] || 0;
          var dist = innerX - this.innerOffset;
          this.innerOffset += step * this._wrapperWidth;
          // transform the whole slides group.
          inner.style.webkitTransition = "-webkit-transform " + TRANSITION_TIME / 1000 + "s ease-in-out";
          inner.style.mozTransition = "transform " + TRANSITION_TIME / 1000 + "s ease-in-out";
          inner.style.transition = "transform " + TRANSITION_TIME / 1000 + "s ease-in-out";
          inner.style.webkitTransform = "translate3d(" + this.innerOffset + "px, 0, 0)";
          inner.style.mozTransform = "translate3d(" + this.innerOffset + "px, 0, 0)";
          inner.style.transform = "translate3d(" + this.innerOffset + "px, 0, 0)";

          // emit scroll events.
          if (!isTouchScroll) {
            this._emitScrollEvent('scrollstart');
          }
          setTimeout(function () {
            this$1._throttleEmitScroll(dist, function () {
              this$1._emitScrollEvent('scrollend');
            });
          }, THROTTLE_SCROLL_TIME);

          this._loopShowNodes(step);

          setTimeout(function () {
            if (this$1.isNeighbor) {
              this$1._setNeighbors();
            }

            setTimeout(function () {
              inner.style.webkitTransition = '';
              inner.style.mozTransition = '';
              inner.style.transition = '';
              for (var i = this$1._showStartIdx; i <= this$1._showEndIdx; i++) {
                var node = this$1._showNodes[i];
                if (!node) {
                  continue;
                }
                var elm = node.firstElementChild;
                elm.style.webkitTransition = '';
                elm.style.mozTransition = '';
                elm.style.transition = '';
              }
              // clean cloned nodes and rearrange slide cells.
              this$1._rearrangeNodes(newIndex);
            }, NEIGHBOR_SCALE_TIME);
          }, TRANSITION_TIME);
        }

        if (newIndex !== this._preIndex) {
          weex.utils.dispatchNativeEvent(this.$el, 'change', {
            index: newIndex
          });
        }
      },

      _clearNodesOffset: function _clearNodesOffset() {
        var this$1 = this;

        var end = this._showEndIdx;
        for (var i = this._showStartIdx; i <= end; i++) {
          var node = this$1._showNodes[i];
          node = node && node.firstElementChild;
          if (!node) {
            continue;
          }
          weex.utils.addTransform(this$1._showNodes[i].firstElementChild, {
            translate: 'translate3d(0px, 0px, 0px)'
          });
        }
      },

      _loopShowNodes: function _loopShowNodes(step) {
        var this$1 = this;

        if (!step || this.frameCount <= 1) {
          return;
        }
        var sign = step > 0 ? 1 : -1;
        var i = step <= 0 ? this._showStartIdx : this._showEndIdx;
        var end = step <= 0 ? this._showEndIdx : this._showStartIdx;
        for (; i !== end - sign; i -= sign) {
          var nextIdx = i + step;
          this$1._showNodes[nextIdx] = this$1._showNodes[i];
          this$1._showNodes[nextIdx]._showIndex = nextIdx;
          delete this$1._showNodes[i];
        }
        this._showStartIdx += step;
        this._showEndIdx += step;
      },

      _prepareNodes: function _prepareNodes() {
        // test if the next slide towards the direction exists.
        // e.g. currentIndex 0 -> 1: should prepare 4 slides: -1, 0, 1, 2
        // if not, translate a node to here, or just clone it.
        var step = this._step;
        if (!this._inited) {
          this._initNodes();
          this._inited = true;
          this._showNodes = {};
        }
        if (this.frameCount <= 1) {
          this._showStartIdx = this._showEndIdx = 0;
          var node = this._cells[0].elm;
          node.style.opacity = 1;
          node.style.zIndex = 99;
          node.index = 0;
          this._showNodes[0] = node;
          node._inShow = true;
          node._showIndex = 0;
          return;
        }

        var showCount = this._showCount = Math.abs(step) + 3;
        this._showStartIdx = step <= 0 ? -1 : 2 - showCount;
        this._showEndIdx = step <= 0 ? showCount - 2 : 1;
        this._clearNodesOffset();
        this._positionNodes(this._showStartIdx, this._showEndIdx, step);
      },

      _clearClones: function _clearClones() {
        var this$1 = this;

        // clear all clones.
        Object.keys(this._clones).forEach(function (key) {
          this$1._clones[key].forEach(function (cloneNode) {
            cloneNode.parentNode.removeChild(cloneNode);
          });
          this$1._clones[key] = [];
        });
      },

      // reset nodes' index and _inShow state. But leave the styles
      // as they are to prevent dom rerendering.
      _resetNodes: function _resetNodes() {
        this._clearClones();
        // reset status.
        this._cells.forEach(function (cell, idx) {
          var elm = cell.elm;
          elm.index = idx;
          elm._inShow = false;
        });
      },

      _initNodes: function _initNodes() {
        this._cells.forEach(function (cell, idx) {
          var node = cell.elm;
          node.index = idx;
          node._inShow = false;
          node.style.zIndex = 0;
          node.style.opacity = 0;
        });
      },

      _positionNodes: function _positionNodes(begin, end, step, anim) {
        var this$1 = this;

        var cells = this._cells;
        var start = step <= 0 ? begin : end;
        var stop = step <= 0 ? end : begin;
        var sign = step <= 0 ? -1 : 1;
        var cellIndex = this._preIndex + sign;
        for (var i = start; i !== stop - sign; i = i - sign) {
          var node = cells[this$1._normalizeIndex(cellIndex)].elm;
          cellIndex = cellIndex - sign;
          this$1._positionNode(node, i);
        }
      },

      /**
       * index: position index in the showing cells' view.
       */
      _positionNode: function _positionNode(node, index) {
        var holder = this._showNodes[index];
        if (node._inShow && (holder !== node || holder._showIndex !== index)) {
          if (holder && holder._isClone) {
            this._removeClone(holder);
          }
          node = this._getClone(node.index);
        } else if (node._inShow) {
          // holder === node
          return;
        }

        node._inShow = true;
        var translateX = index * this._wrapperWidth - this.innerOffset;
        weex.utils.addTransform(node, {
          translate: "translate3d(" + translateX + "px, 0px, 0px)"
        });
        node.style.zIndex = 99 - Math.abs(index);
        node.style.opacity = 1;
        node._showIndex = index;
        this._showNodes[index] = node;
      },

      _getClone: function _getClone(index) {
        var arr = this._clones[index] || (this._clones[index] = []);
        var origNode = this._cells[index].elm;
        var clone = origNode.cloneNode(true);
        clone._isClone = true;
        clone._inShow = true;
        // clone._inShow = origNode._inShow
        clone.index = origNode.index;
        clone.style.opacity = 0;
        clone.style.zIndex = 0;
        this.$refs.inner.appendChild(clone);
        arr.push(clone);
        return clone;
        // try {
        //   let arr = this._clones[index]
        //   if (!arr) {
        //     this._clones[index] = arr = []
        //   }
        //   if (arr.length <= 0) {

        //   }
        //   return arr.pop()
        // } catch (err) {
        //   console.error('this._cells -> ', this._cells)
        // }
      },

      _removeClone: function _removeClone(node) {
        var cloneArr = this._clones[node.index];
        var i;
        if (cloneArr && (i = cloneArr.indexOf(node)) > -1) {
          cloneArr.splice(i, 1);
        }
        try {
          node.parentNode.removeChild(node);
        } catch (err) {}
        // maybe cells has been updated and this clone node is already removed from the dom tree
        // throught _clearClones method.

        // const idx = node.index
        // this._hideNode(node)
        // const arr = this._clones[idx]
        // arr.push(node)
      },

      _hideNode: function _hideNode(node) {
        node._inShow = false;
        node.style.opacity = 0;
        node.style.zIndex = 0;
      },

      /**
       * hide nodes from begin to end in showArray.
       * if it is clone node, just move the clone node to the buffer.
       */
      _clearNodes: function _clearNodes(begin, end) {
        var this$1 = this;

        for (var i = begin; i <= end; i++) {
          var node = this$1._showNodes[i];
          if (!node) {
            return;
          }
          if (node._isClone) {
            this$1._removeClone(node);
          } else if (!node._inShow) {
            this$1._hideNode(node);
          }
          delete this$1._showNodes[i];
        }
      },

      /**
       * copy node style props (opacity and zIndex) and transform status from
       * one element to another.
       */
      _copyStyle: function _copyStyle(from, to, styles, transformExtra) {
        if (styles === void 0) styles = ['opacity', 'zIndex'];
        if (transformExtra === void 0) transformExtra = {};

        weex.utils.extendKeys(to.style, from.style, styles);
        var transObj = weex.utils.getTransformObj(from);
        for (var k in transformExtra) {
          transObj[k] = transformExtra[k];
        }
        weex.utils.addTransform(to, transObj);
        var fromInner = from.firstElementChild;
        var toInner = to.firstElementChild;
        toInner.style.opacity = fromInner.style.opacity;
        weex.utils.copyTransform(fromInner, toInner);
      },

      /**
       * replace a clone node with the original node if it's not in use.
       */
      _replaceClone: function _replaceClone(clone, pos) {
        var this$1 = this;

        var origCell = this._cells[clone.index];
        if (!origCell) {
          return;
        }
        var origNode = origCell.elm;
        if (origNode._inShow) {
          return;
        }
        var origShowIndex = origNode._showIndex;
        var styleProps = ['opacity', 'zIndex'];
        var cl;
        if (Math.abs(origShowIndex) <= 1) {
          // leave a clone to replace the origNode in the show zone(-1 ~ 1).
          cl = this._getClone(origNode.index);
          this._copyStyle(origNode, cl);
          this._showNodes[origShowIndex] = cl;
        }
        origNode._inShow = true;
        var transObj = weex.utils.getTransformObj(clone);
        transObj.translate = transObj.translate.replace(/[+-\d.]+[pw]x/, function ($0) {
          return pos * this$1._wrapperWidth - this$1.innerOffset + 'px';
        });
        this._copyStyle(clone, origNode, styleProps, transObj);
        this._removeClone(clone);
        if (!cl) {
          delete this._showNodes[origShowIndex];
        }
        this._showNodes[pos] = origNode;
        origNode._showIndex = pos;
      },

      _rearrangeNodes: function _rearrangeNodes(newIndex) {
        var this$1 = this;

        if (this.frameCount <= 1) {
          this._sliding = false;
          this.currentIndex = 0;
          return;
        }

        // clear autoPlay timer (and restart after updated hook).
        this._startAutoPlay();

        /**
         * clean nodes. replace current node with non-cloned node.
         * set current index to the new index.
         */
        var shows = this._showNodes;
        for (var i = this._showStartIdx; i <= this._showEndIdx; i++) {
          shows[i]._inShow = false;
        }
        for (var i$1 = -1; i$1 <= 1; i$1++) {
          var node = shows[i$1];
          if (!node._isClone) {
            node._inShow = true;
          } else {
            this$1._replaceClone(node, i$1);
          }
        }

        this._clearNodes(this._showStartIdx, -2);
        this._showStartIdx = -1;
        this._clearNodes(2, this._showEndIdx);
        this._showEndIdx = 1;
        this._sliding = false;

        // set current index to the new index.
        this.currentIndex = newIndex;
        this._preIndex = newIndex;
      },

      /**
       * according to the attrs: neighborScale, neighborAlpha, neighborSpace.
       * 1. apply the main cell transform effects.
       * 2. set the previous cell and the next cell's positon, scale and alpha.
       * 3. set other cells' scale and alpha.
       */
      _setNeighbors: function _setNeighbors() {
        var this$1 = this;

        for (var i = this._showStartIdx; i <= this._showEndIdx; i++) {
          var elm = this$1._showNodes[i].firstElementChild;
          elm.style.webkitTransition = "all " + NEIGHBOR_SCALE_TIME / 1000 + "s ease";
          elm.style.mozTransition = "all " + NEIGHBOR_SCALE_TIME / 1000 + "s ease";
          elm.style.transition = "all " + NEIGHBOR_SCALE_TIME / 1000 + "s ease";
          var transObj = {
            scale: "scale(" + (i === 0 ? this$1.currentItemScale : this$1.neighborScale) + ")"
          };
          var translateX = void 0;
          if (!this$1._neighborWidth) {
            this$1._neighborWidth = parseFloat(elm.style.width) || elm.getBoundingClientRect().width;
          }
          // calculate position offsets according to neighbor scales.
          if (Math.abs(i) === 1) {
            var dist = ((this$1._wrapperWidth - this$1._neighborWidth * this$1.neighborScale) / 2 + this$1.neighborSpace * weex.config.env.scale) / this$1.neighborScale;
            translateX = -i * dist;
          } else {
            // clear position offsets.
            translateX = 0;
          }
          transObj.translate = "translate3d(" + translateX + "px, 0px, 0px)";
          weex.utils.addTransform(elm, transObj);
          elm.style.opacity = i === 0 ? MAIN_SLIDE_OPACITY : this$1.neighborAlpha;
        }
      },

      _next: function _next() {
        var next = this.currentIndex + 1;
        if (this.frameCount <= 1) {
          next--;
        }
        this._slideTo(next);
      },

      _prev: function _prev() {
        var prev = this.currentIndex - 1;
        if (this.frameCount <= 1) {
          prev++;
        }
        this._slideTo(prev);
      },

      _handleTouchStart: function _handleTouchStart(event) {
        var touch = event.changedTouches[0];
        this._stopAutoPlay();
        var inner = this.$refs.inner;
        this._touchParams = {
          originalTransform: inner.style.webkitTransform || inner.style.mozTransform || inner.style.transform,
          startTouchEvent: touch,
          startX: touch.pageX,
          startY: touch.pageY,
          timeStamp: event.timeStamp
        };
      },

      _handleTouchMove: function _handleTouchMove(event) {
        var tp = this._touchParams;
        if (!tp) {
          return;
        }
        if (this._sliding) {
          return;
        }
        var ref = this._touchParams;
        var startX = ref.startX;
        var startY = ref.startY;
        var touch = event.changedTouches[0];
        var offsetX = touch.pageX - startX;
        var offsetY = touch.pageY - startY;
        tp.offsetX = offsetX;
        tp.offsetY = offsetY;
        var isV = tp.isVertical;
        if (typeof isV === 'undefined') {
          isV = tp.isVertical = Math.abs(offsetX) < Math.abs(offsetY);
          if (!isV) {
            this._emitScrollEvent('scrollstart');
          }
        }
        // vertical scroll. just ignore it.
        if (isV) {
          return;
        }
        // horizontal scroll. trigger scroll event.
        event.preventDefault();
        var inner = this.$refs.inner;
        if (inner && offsetX) {
          if (!this._nodesOffsetCleared) {
            this._nodesOffsetCleared = true;
            this._clearNodesOffset();
          }
          this._emitScrollEvent('weex$scroll', {
            offsetXRatio: offsetX / this._wrapperWidth
          });
          inner.style.webkitTransform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
          inner.style.mozTransform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
          inner.style.transform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
        }
      },

      _handleTouchEnd: function _handleTouchEnd(event) {
        this._startAutoPlay();
        var tp = this._touchParams;
        if (!tp) {
          return;
        }
        var isV = tp.isVertical;
        if (typeof isV === 'undefined') {
          return;
        }
        var inner = this.$refs.inner;
        var offsetX = tp.offsetX;
        if (inner) {
          this._nodesOffsetCleared = false;
          // TODO: test the velocity if it's less than 0.2.
          var reset = Math.abs(offsetX / this._wrapperWidth) < 0.2;
          var direction = offsetX > 0 ? 1 : -1;
          var newIndex = reset ? this.currentIndex : this.currentIndex - direction;
          this._slideTo(newIndex, true);
        }
        delete this._touchParams;
      },

      _handleTouchCancel: function _handleTouchCancel(event) {
        return this._handleTouchEnd(event);
      },

      _emitScrollEvent: function _emitScrollEvent(type, data) {
        if (data === void 0) data = {};

        var el = this.$el;
        if (el) {
          weex.utils.dispatchNativeEvent(el, type, data);
        }
      },

      _throttleEmitScroll: function _throttleEmitScroll(offset, callback) {
        var this$1 = this;

        var i = 0;
        var throttleTime = THROTTLE_SCROLL_TIME;
        var cnt = parseInt(TRANSITION_TIME / throttleTime) - 1;
        var sign = offset > 0 ? 1 : -1;
        var r = Math.abs(offset / this._wrapperWidth);
        var throttledScroll = function throttledScroll() {
          if (++i > cnt) {
            return callback && callback.call(this$1);
          }
          var ratio = this$1._step === 0 ? sign * r * (1 - i / cnt) : sign * (r + (1 - r) * i / cnt);
          this$1._emitScrollEvent('weex$scroll', {
            offsetXRatio: ratio
          });
          setTimeout(throttledScroll, THROTTLE_SCROLL_TIME);
        };
        throttledScroll();
      }
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  // import { validateStyles } from '../../validator'
  // import indicator from './indicator'
  var slider$1 = {
    mixins: [slideMixin],
    props: {
      index: {
        type: [String, Number],
        default: 0
      },
      'auto-play': {
        type: [String, Boolean],
        default: false
      },
      interval: {
        type: [String, Number],
        default: 3000
      },
      infinite: {
        type: [String, Boolean],
        default: true
      }
    },

    watch: {
      index: function index() {
        this.currentIndex = this._normalizeIndex(this.index);
      }
    },

    data: function data() {
      return {
        frameCount: 0,
        currentIndex: this.index
      };
    },

    beforeCreate: function beforeCreate() {
      this.weexType = 'slider';
    },

    render: function render(createElement) {
      /* istanbul ignore next */
      // if ("production" === 'development') {
      //   validateStyles('slider', this.$vnode.data && this.$vnode.data.staticStyle)
      // }
      return this._renderSlides(createElement);
    }
  };

  var slider$2 = {
    init: function init(weex) {
      weex.registerComponent('slider', slider$1);
      weex.registerComponent('cycleslider', slider$1);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var DEFAULT_NEIGHBOR_SPACE = 20;
  var DEFAULT_NEIGHBOR_ALPHA = 0.6;
  var DEFAULT_NEIGHBOR_SCALE = 0.8;
  var DEFAULT_CURRENT_ITEM_SCALE = 0.9;

  var sliderNeighbor = {
    mixins: [slideMixin],
    props: {
      index: {
        type: [String, Number],
        default: 0
      },
      autoPlay: {
        type: [String, Boolean],
        default: false
      },
      interval: {
        type: [String, Number],
        default: 3000
      },
      infinite: {
        type: [String, Boolean],
        default: true
      },
      neighborSpace: {
        type: [String, Number],
        validator: function validator(val) {
          val = parseFloat(val);
          return !isNaN(val) && val > 0;
        },
        default: DEFAULT_NEIGHBOR_SPACE
      },
      neighborAlpha: {
        type: [String, Number],
        validator: function validator(val) {
          val = parseFloat(val);
          return !isNaN(val) && val >= 0 && val <= 1;
        },
        default: DEFAULT_NEIGHBOR_ALPHA
      },
      neighborScale: {
        type: [String, Number],
        validator: function validator(val) {
          val = parseFloat(val);
          return !isNaN(val) && val >= 0 && val <= 1;
        },
        default: DEFAULT_NEIGHBOR_SCALE
      },
      currentItemScale: {
        type: [String, Number],
        validator: function validator(val) {
          val = parseFloat(val);
          return !isNaN(val) && val >= 0 && val <= 1;
        },
        default: DEFAULT_CURRENT_ITEM_SCALE
      }
    },

    watch: {
      index: function index() {
        this.currentIndex = this._normalizeIndex(this.index);
      }
    },

    data: function data() {
      return {
        currentIndex: this.index,
        frameCount: 0
      };
    },

    beforeCreate: function beforeCreate() {
      this.isNeighbor = true;
      this.weexType = 'slider-neighbor';
    },

    render: function render(createElement) {
      return this._renderSlides(createElement);
    }
  };

  var neighbor = {
    init: function init(weex) {
      weex.registerComponent('slider-neighbor', sliderNeighbor);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var getComponentInlineStyle$1;

  function getIndicatorItemStyle(ms, isActive) {
    var style = {};
    var bgColor = isActive ? ms['itemSelectedColor'] || ms['item-selected-color'] : ms['itemColor'] || ms['item-color'];
    style['background-color'] = bgColor;
    style['width'] = style['height'] = ms['itemSize'] || ms['item-size'];
    return style;
  }

  function getScopeIds(context) {
    var scopeIds = context._scopeIds;
    if (scopeIds) {
      return scopeIds;
    } else {
      scopeIds = [];
    }
    var parent = context.$parent;
    while (parent) {
      var i = void 0;
      if ((i = parent.$options) && (i = i._scopeId)) {
        scopeIds.push(i);
      }
      parent = parent.$parent;
    }
    context._scopeIds = scopeIds;
    return scopeIds;
  }

  function _render(context, h) {
    var children = [];
    var mergedStyle = getComponentInlineStyle$1(context);
    var scopeIds = getScopeIds(context);
    var attrs = {};
    for (var i = 0, l = scopeIds.length; i < l; i++) {
      attrs[scopeIds[i]] = '';
    }
    for (var i$1 = 0; i$1 < Number(context.count); ++i$1) {
      var classNames = ['weex-indicator-item weex-el'];
      var isActive = false;
      if (i$1 === Number(context.active)) {
        classNames.push('weex-indicator-item-active');
        isActive = true;
      }
      children.push(h('mark', {
        attrs: attrs,
        staticClass: classNames.join(' '),
        staticStyle: getIndicatorItemStyle(mergedStyle, isActive)
      }));
    }
    return h('nav', {
      attrs: { 'weex-type': 'indicator' },
      staticClass: 'weex-indicator weex-ct'
    }, [
    // the indicator nav may cover the slides, and may stop the
    // click event be triggered on the slides.
    // so a smaller wrapper is needed to prevent the overlap.
    // This wrapper will cover only the whole size of all the
    // indicator pointers' item-sizes.
    h('div', {
      staticClass: 'weex-indicator-inner'
    }, children)]);
  }

  var indicator = {
    name: 'weex-indicator',
    methods: {
      show: function show() {
        this.$el.style.visibility = 'visible';
      }
    },
    props: {
      itemColor: [String],
      itemSelectedColor: [String],
      itemSize: [String]
    },
    data: function data() {
      return {
        count: 0,
        active: 0
      };
    },
    render: function render(createElement) {
      var ref = this.$vnode.data.attrs || {};
      var count = ref.count;
      var active = ref.active;
      this.count = count;
      this.active = active;
      if (!this.count) {
        return;
      }
      return _render(this, createElement);
    }
  };

  var indicator$1 = {
    init: function init(weex) {
      getComponentInlineStyle$1 = weex.getComponentInlineStyle;
      weex.registerComponent('indicator', indicator);
    }
  };

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-slider-wrapper {\n  overflow: hidden;\n}\n\n.weex-slider-inner {\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n}\n\n.weex-slider-cell {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background: transparent !important;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n\n.neighbor-cell {\n  overflow: visible !important;\n}\n\nnav.weex-indicator {\n  position: absolute;\n  z-index: 10;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-transform: translate(-10rem, 0px);\n          transform: translate(-10rem, 0px)\n}\n\ndiv.weex-indicator-inner {\n  -webkit-transform: translate(10rem, 0px);\n          transform: translate(10rem, 0px);\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n}\n\n.weex-indicator-item {\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  width: 0.266667rem;\n  height: 0.266667rem;\n  background-color: #BBBBBB;\n}\n.weex-indicator-item + .weex-indicator-item {\n  margin-left: 0.133333rem;\n}\n\n.weex-indicator-item-active {\n  background-color: blue;\n}", undefined);

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var slider = {
    init: function init(weex) {
      weex.install(slider$2);
      weex.install(neighbor);
      weex.install(indicator$1);
    }
  };

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.weex-textarea {\n  font-size: 0.426667rem\n}\n.weex-textarea:focus {\n  outline: none;\n}\n", undefined);

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  function getTextarea(weex) {
    var extractComponentStyle = weex.extractComponentStyle;
    var ref = weex.mixins;
    var inputCommon = ref.inputCommon;
    var ref$1 = weex.utils;
    var extend = ref$1.extend;
    var mapFormEvents = ref$1.mapFormEvents;

    return {
      name: 'weex-textarea',
      mixins: [inputCommon],
      props: {
        value: String,
        placeholder: String,
        disabled: {
          type: [String, Boolean],
          default: false
        },
        autofocus: {
          type: [String, Boolean],
          default: false
        },
        rows: {
          type: [String, Number],
          default: 2
        },
        returnKeyType: String
      },

      render: function render(createElement) {
        /* istanbul ignore next */
        // if ("production" === 'development') {
        //   validateStyles('textarea', this.$vnode.data && this.$vnode.data.staticStyle)
        // }
        var events = extend(mapFormEvents(this));
        return createElement('html:textarea', {
          attrs: {
            'weex-type': 'textarea',
            value: this.value,
            disabled: this.disabled !== 'false' && this.disabled !== false,
            autofocus: this.autofocus !== 'false' && this.autofocus !== false,
            placeholder: this.placeholder,
            rows: this.rows,
            'return-key-type': this.returnKeyType
          },
          domProps: {
            value: this.value
          },
          on: this.createKeyboardEvent(events),
          staticClass: 'weex-textarea weex-el',
          staticStyle: extractComponentStyle(this)
        });
      }
    };
  }

  var textarea = {
    init: function init(weex) {
      weex.registerComponent('textarea', getTextarea(weex));
    }
  };

  /*
  * Licensed to the Apache Software Foundation (ASF) under one
  * or more contributor license agreements.  See the NOTICE file
  * distributed with this work for additional information
  * regarding copyright ownership.  The ASF licenses this file
  * to you under the Apache License, Version 2.0 (the
  * "License"); you may not use this file except in compliance
  * with the License.  You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing,
  * software distributed under the License is distributed on an
  * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  * KIND, either express or implied.  See the License for the
  * specific language governing permissions and limitations
  * under the License.
  */

  function getVideo(weex) {
    var extractComponentStyle = weex.extractComponentStyle;
    var mapNativeEvents = weex.mapNativeEvents;
    var ref = weex.utils;
    var dispatchNativeEvent = ref.dispatchNativeEvent;

    return {
      name: 'weex-video',
      props: {
        src: String,
        playStatus: {
          type: String,
          default: 'pause',
          validator: function validator(value) {
            return ['play', 'pause'].indexOf(value) !== -1;
          }
        },
        autoplay: {
          type: [String, Boolean],
          default: false
        },
        autoPlay: {
          type: [String, Boolean],
          default: false
        },
        playsinline: {
          type: [String, Boolean],
          default: true
        },
        controls: {
          type: [String, Boolean],
          default: false
        }
      },

      render: function render(createElement) {
        if (this.playStatus === 'play') {
          this.$nextTick(function () {
            try {
              this.$el && this.$el.play();
            } catch (err) {
              dispatchNativeEvent(this && this.$el, 'error', {
                message: err.message
              });
            }
          });
        } else if (this.playStatus === 'pause') {
          this.$nextTick(function () {
            this.$el && this.$el.pause();
          });
        }

        return createElement('html:video', {
          attrs: {
            'weex-type': 'video',
            autoplay: this.autoplay !== 'false' && this.autoplay !== false || this.autoPlay !== 'false' && this.autoPlay !== false,
            'webkit-playsinline': this.playsinline,
            controls: this.controls,
            src: this.src
          },
          on: mapNativeEvents(this, {
            play: 'start',
            error: 'fail'
          }),
          staticClass: 'weex-video weex-el',
          staticStyle: extractComponentStyle(this)
        });
      }
    };
  }

  var video = {
    init: function init(weex) {
      weex.registerComponent('video', getVideo(weex));
    }
  };

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.weex-web {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n", undefined);

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  function getWeb(weex) {
    var extractComponentStyle = weex.extractComponentStyle;
    var ref = weex.utils;
    var dispatchNativeEvent = ref.dispatchNativeEvent;

    return {
      data: function data() {
        return {
          currentSrc: ''
        };
      },
      name: 'weex-web',
      props: {
        src: String
      },
      watch: {
        src: function src(newVal) {
          this.currentSrc = newVal;
        }
      },
      methods: {
        goBack: function goBack() {
          var el = this.$el;
          if (el) {
            var win = el.contentWindow;
            try {
              win.history.back();
              this.currentSrc = win.location.href;
            } catch (err) {
              dispatchNativeEvent(el, 'error', err);
            }
          }
        },
        goForward: function goForward() {
          var el = this.$el;
          if (el) {
            var win = el.contentWindow;
            try {
              win.history.forward();
              this.currentSrc = win.location.href;
            } catch (err) {
              dispatchNativeEvent(el, 'error', err);
            }
          }
        },
        reload: function reload() {
          var el = this.$el;
          if (el) {
            try {
              el.contentWindow.location.reload();
              dispatchNativeEvent(el, 'pagestart', { url: this.currentSrc });
            } catch (err) {
              dispatchNativeEvent(el, 'error', err);
            }
          }
        }
      },

      created: function created() {
        this.currentSrc = this.src;
      },

      mounted: function mounted() {
        var el = this.$el;
        this._prevSrc = this.currentSrc;
        if (el) {
          dispatchNativeEvent(el, 'pagestart', { url: this.currentSrc });
        }
      },

      updated: function updated() {
        if (this.currentSrc !== this._prevSrc) {
          this._prevSrc = this.currentSrc;
          dispatchNativeEvent(this.$el, 'pagestart', { url: this.currentSrc });
        }
      },

      render: function render(createElement) {
        var this$1 = this;

        return createElement('iframe', {
          attrs: {
            'weex-type': 'web',
            src: this.currentSrc
          },
          on: {
            load: function load(event) {
              this$1.$nextTick(function () {
                var el = this.$el;
                try {
                  var html = el.contentWindow.document.documentElement;
                  if (html) {
                    dispatchNativeEvent(el, 'pagefinish', { url: this.currentSrc });
                  } else {
                    dispatchNativeEvent(el, 'error', new Error('[vue-render]:found no page content.'));
                  }
                } catch (err) {
                  dispatchNativeEvent(el, 'error', err);
                }
              });
            }
          },
          staticClass: 'weex-web weex-el',
          staticStyle: extractComponentStyle(this)
        });
      }
    };
  }

  var web = {
    init: function init(weex) {
      weex.registerComponent('web', getWeb(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  // import a from './a'
  // import div from './div'
  // import image from './image'
  // import text from './text'
  var components = [
  // a,
  // div,
  // image,
  input, _switch, scrollable, slider,
  // text,
  textarea, video, web];

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var supportGeolocation = 'geolocation' in navigator;
  var errorMsg = "[h5-render]: browser doesn't support geolocation.";

  var geolocation = {
    // options:
    //   - enableHighAccuracy optional, value is true or false, false by default.
    //   - timeout [none-native] optional, value is a number (milliseconds), default vaule is FINFINITY.
    //   - maximumAge [none-native] optional, value is a number (milliseconds), default value is 0.
    getCurrentPosition: function getCurrentPosition(successCbId, errorCbId, options) {
      var this$1 = this;

      var successCb = function successCb(pos) {
        return this$1.sender.performCallback(successCbId, pos);
      };
      var errorCb = function errorCb(err) {
        return this$1.sender.performCallback(errorCbId, err);
      };
      if (supportGeolocation) {
        navigator.geolocation.getCurrentPosition(successCb, errorCb, options);
      } else {
        console.warn(errorMsg);
        errorCb(new Error(errorMsg));
      }
    },

    // options: the same with `getCurrentPosition`.
    watchPosition: function watchPosition(successCbId, errorCbId, options) {
      var this$1 = this;

      var successCb = function successCb(pos) {
        return this$1.sender.performCallback(successCbId, pos, true);
      };
      var errorCb = function errorCb(err) {
        return this$1.sender.performCallback(errorCbId, err);
      };
      if (supportGeolocation) {
        var id = navigator.geolocation.watchPosition(function (pos) {
          pos.watchId = id;
          successCb(pos);
        }, errorCb, options);
      } else {
        console.warn(errorMsg);
        errorCb(new Error(errorMsg));
      }
    },

    clearWatch: function clearWatch(watchId) {
      if (supportGeolocation) {
        navigator.geolocation.clearWatch(watchId);
      } else {
        console.warn(errorMsg);
      }
    }
  };

  var meta = {
    geolocation: [{
      name: 'getCurrentPosition',
      args: ['function', 'function', 'object']
    }, {
      name: 'watchPosition',
      args: ['function', 'function', 'object']
    }, {
      name: 'clearWatch',
      args: ['string']
    }]
  };

  var geolocation$1 = {
    init: function init(Weex) {
      Weex.registerApiModule('geolocation', geolocation, meta);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /* global localStorage */

  var supportLocalStorage = false;
  try {
    supportLocalStorage = typeof localStorage !== 'undefined';
  } catch (err) {
    // not support.
  }

  var SUCCESS = 'success';
  var FAILED = 'failed';
  var INVALID_PARAM = 'invalid_param';
  var UNDEFINED = 'undefined';

  function callFail(sender, callbackId, errorMsg) {
    sender.performCallback(callbackId, {
      result: FAILED,
      data: errorMsg || UNDEFINED
    });
  }

  function callNotSupportFail(sender, callbackId) {
    sender.performCallback(callbackId, {
      result: FAILED,
      data: 'localStorage is disabled or not supported.'
    });
  }

  var storage = {

    /**
     * When passed a key name and value, will add that key to the storage,
     * or update that key's value if it already exists.
     * @param {string} key
     * @param {string} value not null nor undifined，but 0 works.
     * @param {function} callbackId
     */
    setItem: function setItem(key, value, callbackId) {
      var sender = this.sender;
      if (!supportLocalStorage) {
        return callNotSupportFail(sender, callbackId);
      }
      if (!key || !value && value !== 0) {
        sender.performCallback(callbackId, {
          result: 'failed',
          data: INVALID_PARAM
        });
        return;
      }
      try {
        localStorage.setItem(key, value);
        sender.performCallback(callbackId, {
          result: SUCCESS,
          data: UNDEFINED
        });
      } catch (e) {
        // accept any exception thrown during a storage attempt as a quota error
        callFail(sender, callbackId);
      }
    },

    /**
     * When passed a key name, will return that key's value.
     * @param {string} key
     * @param {function} callbackId
     */
    getItem: function getItem(key, callbackId) {
      var sender = this.sender;
      if (!supportLocalStorage) {
        return callNotSupportFail(sender, callbackId);
      }
      if (!key) {
        sender.performCallback(callbackId, {
          result: FAILED,
          data: INVALID_PARAM
        });
        return;
      }
      try {
        var val = localStorage.getItem(key);
        sender.performCallback(callbackId, {
          result: val ? SUCCESS : FAILED,
          data: val || UNDEFINED
        });
      } catch (e) {
        // accept any exception thrown during a storage attempt as a quota error
        callFail(sender, callbackId);
      }
    },

    /**
     *When passed a key name, will remove that key from the storage.
     * @param {string} key
     * @param {function} callbackId
     */
    removeItem: function removeItem(key, callbackId) {
      var sender = this.sender;
      if (!supportLocalStorage) {
        return callNotSupportFail(sender, callbackId);
      }
      if (!key) {
        sender.performCallback(callbackId, {
          result: FAILED,
          data: INVALID_PARAM
        });
        return;
      }
      try {
        localStorage.removeItem(key);
        sender.performCallback(callbackId, {
          result: SUCCESS,
          data: UNDEFINED
        });
      } catch (e) {
        // accept any exception thrown during a storage attempt as a quota error
        callFail(sender, callbackId);
      }
    },

    /**
     * Returns an integer representing the number of data items stored in the Storage object.
     * @param {function} callbackId
     */
    length: function length(callbackId) {
      var sender = this.sender;
      if (!supportLocalStorage) {
        return callNotSupportFail(sender, callbackId);
      }
      try {
        var len = localStorage.length;
        sender.performCallback(callbackId, {
          result: SUCCESS,
          data: len
        });
      } catch (e) {
        // accept any exception thrown during a storage attempt as a quota error
        callFail(sender, callbackId);
      }
    },

    /**
     * Returns an array that contains all keys stored in Storage object.
     * @param {function} callbackId
     */
    getAllKeys: function getAllKeys(callbackId) {
      var sender = this.sender;
      if (!supportLocalStorage) {
        return callNotSupportFail(sender, callbackId);
      }
      try {
        var _arr = [];
        for (var i = 0; i < localStorage.length; i++) {
          _arr.push(localStorage.key(i));
        }
        sender.performCallback(callbackId, {
          result: SUCCESS,
          data: _arr
        });
      } catch (e) {
        // accept any exception thrown during a storage attempt as a quota error
        callFail(sender, callbackId);
      }
    }
  };

  var meta$1 = {
    storage: [{
      name: 'setItem',
      args: ['string', 'string', 'function']
    }, {
      name: 'getItem',
      args: ['string', 'function']
    }, {
      name: 'removeItem',
      args: ['string', 'function']
    }, {
      name: 'length',
      args: ['function']
    }, {
      name: 'getAllKeys',
      args: ['function']
    }]
  };

  var storage$1 = {
    init: function init(Weex) {
      Weex.registerApiModule('storage', storage, meta$1);
    }
  };

  typeof window === 'undefined' && (window = { ctrl: {}, lib: {} });!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function (a, b) {
    function c(a) {
      var b = {};Object.defineProperty(this, "params", { set: function set(a) {
          if ("object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a))) {
            for (var c in b) {
              delete b[c];
            }for (var c in a) {
              b[c] = a[c];
            }
          }
        }, get: function get() {
          return b;
        }, enumerable: !0 }), Object.defineProperty(this, "search", { set: function set(a) {
          if ("string" == typeof a) {
            0 === a.indexOf("?") && (a = a.substr(1));var c = a.split("&");for (var d in b) {
              delete b[d];
            }for (var e = 0; e < c.length; e++) {
              var f = c[e].split("=");if (void 0 !== f[1] && (f[1] = f[1].toString()), f[0]) {
                try {
                  b[decodeURIComponent(f[0])] = decodeURIComponent(f[1]);
                } catch (g) {
                  b[f[0]] = f[1];
                }
              }
            }
          }
        }, get: function get() {
          var a = [];for (var c in b) {
            if (void 0 !== b[c]) {
              if ("" !== b[c]) {
                try {
                  a.push(encodeURIComponent(c) + "=" + encodeURIComponent(b[c]));
                } catch (d) {
                  a.push(c + "=" + b[c]);
                }
              } else {
                try {
                  a.push(encodeURIComponent(c));
                } catch (d) {
                  a.push(c);
                }
              }
            }
          }return a.length ? "?" + a.join("&") : "";
        }, enumerable: !0 });var c;Object.defineProperty(this, "hash", { set: function set(a) {
          "string" == typeof a && (a && a.indexOf("#") < 0 && (a = "#" + a), c = a || "");
        }, get: function get() {
          return c;
        }, enumerable: !0 }), this.set = function (a) {
        a = a || "";var b;if (!(b = a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$", "i")))) {
          throw new Error("Wrong uri scheme.");
        }this.protocol = b[1] || ("object" == (typeof location === 'undefined' ? 'undefined' : _typeof(location)) ? location.protocol : ""), this.username = b[2] || "", this.password = b[3] || "", this.hostname = this.host = b[4], this.port = b[5] || "", this.pathname = b[6] || "/", this.search = b[7] || "", this.hash = b[8] || "", this.origin = this.protocol + "//" + this.hostname;
      }, this.toString = function () {
        var a = this.protocol + "//";return this.username && (a += this.username, this.password && (a += ":" + this.password), a += "@"), a += this.host, this.port && "80" !== this.port && (a += ":" + this.port), this.pathname && (a += this.pathname), this.search && (a += this.search), this.hash && (a += this.hash), a;
      }, a && this.set(a.toString());
    }b.httpurl = function (a) {
      return new c(a);
    };
  }(window, window.lib || (window.lib = {}));var httpurl_common = window.lib['httpurl'];

  var strictUriEncode = function strictUriEncode(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  };

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject$1(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var arguments$1 = arguments;

    var from;
    var to = toObject$1(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments$1[s]);

      for (var key in from) {
        if (hasOwnProperty$1.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };

  function encoderForArrayFormat(opts) {
    switch (opts.arrayFormat) {
      case 'index':
        return function (key, value, index) {
          return value === null ? [encode(key, opts), '[', index, ']'].join('') : [encode(key, opts), '[', encode(index, opts), ']=', encode(value, opts)].join('');
        };

      case 'bracket':
        return function (key, value) {
          return value === null ? encode(key, opts) : [encode(key, opts), '[]=', encode(value, opts)].join('');
        };

      default:
        return function (key, value) {
          return value === null ? encode(key, opts) : [encode(key, opts), '=', encode(value, opts)].join('');
        };
    }
  }

  function parserForArrayFormat(opts) {
    var result;

    switch (opts.arrayFormat) {
      case 'index':
        return function (key, value, accumulator) {
          result = /\[(\d*)\]$/.exec(key);

          key = key.replace(/\[\d*\]$/, '');

          if (!result) {
            accumulator[key] = value;
            return;
          }

          if (accumulator[key] === undefined) {
            accumulator[key] = {};
          }

          accumulator[key][result[1]] = value;
        };

      case 'bracket':
        return function (key, value, accumulator) {
          result = /(\[\])$/.exec(key);
          key = key.replace(/\[\]$/, '');

          if (!result) {
            accumulator[key] = value;
            return;
          } else if (accumulator[key] === undefined) {
            accumulator[key] = [value];
            return;
          }

          accumulator[key] = [].concat(accumulator[key], value);
        };

      default:
        return function (key, value, accumulator) {
          if (accumulator[key] === undefined) {
            accumulator[key] = value;
            return;
          }

          accumulator[key] = [].concat(accumulator[key], value);
        };
    }
  }

  function encode(value, opts) {
    if (opts.encode) {
      return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
    }

    return value;
  }

  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    } else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
      return keysSorter(Object.keys(input)).sort(function (a, b) {
        return Number(a) - Number(b);
      }).map(function (key) {
        return input[key];
      });
    }

    return input;
  }

  var extract = function extract(str) {
    return str.split('?')[1] || '';
  };

  var parse = function parse(str, opts) {
    opts = objectAssign({ arrayFormat: 'none' }, opts);

    var formatter = parserForArrayFormat(opts);

    // Create an object with no prototype
    // https://github.com/sindresorhus/query-string/issues/47
    var ret = Object.create(null);

    if (typeof str !== 'string') {
      return ret;
    }

    str = str.trim().replace(/^(\?|#|&)/, '');

    if (!str) {
      return ret;
    }

    str.split('&').forEach(function (param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      // Firefox (pre 40) decodes `%3D` to `=`
      // https://github.com/sindresorhus/query-string/pull/37
      var key = parts.shift();
      var val = parts.length > 0 ? parts.join('=') : undefined;

      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);

      formatter(decodeURIComponent(key), val, ret);
    });

    return Object.keys(ret).sort().reduce(function (result, key) {
      var val = ret[key];
      if (Boolean(val) && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && !Array.isArray(val)) {
        // Sort object keys, not values
        result[key] = keysSorter(val);
      } else {
        result[key] = val;
      }

      return result;
    }, Object.create(null));
  };

  var stringify = function stringify(obj, opts) {
    var defaults = {
      encode: true,
      strict: true,
      arrayFormat: 'none'
    };

    opts = objectAssign(defaults, opts);

    var formatter = encoderForArrayFormat(opts);

    return obj ? Object.keys(obj).sort().map(function (key) {
      var val = obj[key];

      if (val === undefined) {
        return '';
      }

      if (val === null) {
        return encode(key, opts);
      }

      if (Array.isArray(val)) {
        var result = [];

        val.slice().forEach(function (val2) {
          if (val2 === undefined) {
            return;
          }

          result.push(formatter(key, val2, result.length));
        });

        return result.join('&');
      }

      return encode(key, opts) + '=' + encode(val, opts);
    }).filter(function (x) {
      return x.length > 0;
    }).join('&') : '';
  };

  var queryString = {
    extract: extract,
    parse: parse,
    stringify: stringify
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /* global lib, XMLHttpRequest */
  /* deps: httpurl */

  var utils$1;

  var jsonpCnt = 0;
  var ERROR_STATE = -1;

  function _jsonp(config, callback, progressCallback) {
    var cbName = config.jsonpCallbackName || 'jsonp_' + ++jsonpCnt;
    var url;

    if (!config.url) {
      console.error('[h5-render] config.url should be set in _jsonp for \'fetch\' API.');
    }

    global[cbName] = function (cb) {
      return function (response) {
        callback({
          status: 200,
          ok: true,
          statusText: 'OK',
          data: response
        });
        delete global[cb];
      };
    }(cbName);

    var script = document.createElement('script');
    try {
      url = lib.httpurl(config.url);
    } catch (err) {
      console.error('[h5-render] invalid config.url in _jsonp for \'fetch\' API: ' + config.url);
    }
    url.params.callback = cbName;
    script.type = 'text/javascript';
    script.src = url.toString();
    // script.onerror is not working on IE or safari.
    // but they are not considered here.
    script.onerror = function (cb) {
      return function (err) {
        console.error('[h5-render] unexpected error in _jsonp for \'fetch\' API', err);
        callback({
          status: ERROR_STATE,
          ok: false,
          statusText: '',
          data: ''
        });
        delete global[cb];
      };
    }(cbName);
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, null);
  }

  function _xhr(config, callback, progressCallback) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = config.type;
    xhr.open(config.method, config.url, true);

    // cors cookie support
    if (config.withCredentials === true) {
      xhr.withCredentials = true;
    }

    var headers = config.headers || {};
    for (var k in headers) {
      xhr.setRequestHeader(k, headers[k]);
    }

    xhr.onload = function (res) {
      callback({
        status: xhr.status,
        ok: xhr.status >= 200 && xhr.status < 300,
        statusText: xhr.statusText,
        data: xhr.response,
        headers: xhr.getAllResponseHeaders().split('\n').reduce(function (obj, headerStr) {
          var headerArr = headerStr.match(/(.+): (.+)/);
          if (headerArr) {
            obj[headerArr[1]] = headerArr[2];
          }
          return obj;
        }, {})
      });
    };

    if (progressCallback) {
      xhr.onprogress = function (e) {
        progressCallback({
          readyState: xhr.readyState,
          status: xhr.status,
          length: e.loaded,
          total: e.total,
          statusText: xhr.statusText,
          headers: xhr.getAllResponseHeaders().split('\n').reduce(function (obj, headerStr) {
            var headerArr = headerStr.match(/(.+): (.+)/);
            if (headerArr) {
              obj[headerArr[1]] = headerArr[2];
            }
            return obj;
          }, {})
        });
      };
    }

    xhr.onerror = function (err) {
      console.error('[h5-render] unexpected error in _xhr for \'fetch\' API', err);
      callback({
        status: ERROR_STATE,
        ok: false,
        statusText: '',
        data: ''
      });
    };

    xhr.send(config.body || null);
  }

  var stream = {

    /**
     * sendHttp
     * @deprecated
     * Note: This API is deprecated. Please use stream.fetch instead.
     * send a http request through XHR.
     * @param  {obj} params
     *  - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH',
     *  - url: url requested
     * @param  {string} callbackId
     */
    sendHttp: function sendHttp(param, callbackId) {
      if (typeof param === 'string') {
        try {
          param = JSON.parse(param);
        } catch (e) {
          return;
        }
      }
      if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) !== 'object' || !param.url) {
        return console.error('[h5-render] invalid config or invalid config.url for sendHttp API');
      }

      var sender = this.sender;
      var method = param.method || 'GET';
      var xhr = new XMLHttpRequest();
      xhr.open(method, param.url, true);
      xhr.onload = function () {
        sender.performCallback(callbackId, this.responseText);
      };
      xhr.onerror = function (error) {
        return console.error('[h5-render] unexpected error in sendHttp API', error);
        // sender.performCallback(
        //   callbackId,
        //   new Error('unexpected error in sendHttp API')
        // )
      };
      xhr.send();
    },

    /**
     * fetch
     * use stream.fetch to request for a json file, a plain text file or
     * a arraybuffer for a file stream. (You can use Blob and FileReader
     * API implemented by most modern browsers to read a arraybuffer.)
     * @param  {object} options config options
     *   - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH'
     *   - headers {obj}
     *   - url {string}
     *   - mode {string} 'cors' | 'no-cors' | 'same-origin' | 'navigate'
     *   - withCredentials {boolean}
     *   - body
     *   - type {string} 'json' | 'jsonp' | 'text'
     * @param  {string} callbackId
     * @param  {string} progressCallbackId
     */
    fetch: function fetch(options, callbackId, progressCallbackId) {
      var DEFAULT_METHOD = 'GET';
      var DEFAULT_MODE = 'cors';
      var DEFAULT_TYPE = 'text';

      var methodOptions = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'];
      var modeOptions = ['cors', 'no-cors', 'same-origin', 'navigate'];
      var typeOptions = ['text', 'json', 'jsonp', 'arraybuffer'];

      // const fallback = false  // fallback from 'fetch' API to XHR.
      var sender = this.sender;

      var config = utils$1.extend({}, options);

      // validate options.method
      if (typeof config.method === 'undefined') {
        config.method = DEFAULT_METHOD;
        console.warn('[h5-render] options.method for \'fetch\' API has been set to ' + 'default value \'' + config.method + '\'');
      } else if (methodOptions.indexOf((config.method + '').toUpperCase()) === -1) {
        return console.error('[h5-render] options.method \'' + config.method + '\' for \'fetch\' API should be one of ' + methodOptions + '.');
      }

      // validate options.url
      if (!config.url) {
        return console.error('[h5-render] options.url should be set for \'fetch\' API.');
      }

      // validate body content for method 'GET'.
      if (config.method.toUpperCase() === 'GET') {
        var body = config.body;
        if (utils$1.isPlainObject(body)) {
          body = queryString.stringify(body);
        }
        var url = config.url;
        var hashIdx = url.indexOf('#');
        hashIdx <= -1 && (hashIdx = url.length);
        var hash = url.substr(hashIdx);
        if (hash && hash[0] === '#') {
          hash = hash.substr(1);
        }
        url = url.substring(0, hashIdx);
        if (body) {
          url += (config.url.indexOf('?') <= -1 ? '?' : '&') + body;
        }
        url += '#' + hash;
        config.url = url;
      }

      // validate options.mode
      if (typeof config.mode === 'undefined') {
        config.mode = DEFAULT_MODE;
      } else if (modeOptions.indexOf((config.mode + '').toLowerCase()) === -1) {
        return console.error('[h5-render] options.mode \'' + config.mode + '\' for \'fetch\' API should be one of ' + modeOptions + '.');
      }

      // validate options.type
      if (typeof config.type === 'undefined') {
        config.type = DEFAULT_TYPE;
        console.warn('[h5-render] options.type for \'fetch\' API has been set to ' + 'default value \'' + config.type + '\'.');
      } else if (typeOptions.indexOf((config.type + '').toLowerCase()) === -1) {
        return console.error('[h5-render] options.type \'' + config.type + '\' for \'fetch\' API should be one of ' + typeOptions + '.');
      }

      // validate options.headers
      config.headers = config.headers || {};
      if (!utils$1.isPlainObject(config.headers)) {
        return console.error('[h5-render] options.headers should be a plain object');
      }

      // validate options.timeout
      config.timeout = parseInt(config.timeout, 10) || 2500;

      var _callArgs = [config, function (res) {
        sender.performCallback(callbackId, res);
      }];
      if (progressCallbackId) {
        _callArgs.push(function (res) {
          // Set 'keepAlive' to true for sending continuous callbacks
          sender.performCallback(progressCallbackId, res, true);
        });
      }

      if (config.type === 'jsonp') {
        _jsonp.apply(this, _callArgs);
      } else {
        _xhr.apply(this, _callArgs);
      }
    }

  };

  var meta$2 = {
    stream: [{
      name: 'sendHttp',
      args: ['object', 'function']
    }, {
      name: 'fetch',
      args: ['object', 'function', 'function']
    }]
  };

  var stream$1 = {
    init: function init(Weex) {
      utils$1 = Weex.utils;
      Weex.registerApiModule('stream', stream, meta$2);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
  
  AUCTION:
  taskQueue
  Clipboard.setString()  NOW not works, facing to user-act lose of taskQueue.
  
  works in Chrome Firefox Opera. but not in Safari.
  @see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Browser_compatibility
  
  Clipboard.getString() unimplemented. There is no easy way to do paste from clipboard to js variable.
  
  So look out your app behavior, when downgrade to html5 render.
  Any idea is welcome.
  **/

  var WEEX_CLIPBOARD_ID = '__weex_clipboard_id__';

  var clipboard = {

    getString: function getString(callbackId) {
      // not supported in html5
      console.log('clipboard.getString() is not supported now.');
    },

    setString: function setString(text) {
      // not support safari
      if (typeof text === 'string' && text !== '' && document.execCommand) {
        var tempInput = element();
        tempInput.value = text;

        tempInput.select();
        document.execCommand('copy');
        // var out = document.execCommand('copy');
        // console.log("execCommand out is " + out);
        tempInput.value = '';
        tempInput.blur();
      } else {
        console.log('only support string input now');
      }
    }

  };

  function element() {
    var tempInput = document.getElementById(WEEX_CLIPBOARD_ID);
    if (!tempInput) {
      tempInput = document.createElement('input');
      tempInput.setAttribute('id', WEEX_CLIPBOARD_ID);
      tempInput.style.cssText = 'height:1px;width:1px;border:none;';
      // tempInput.style.cssText = "height:40px;width:300px;border:solid;"
      document.body.appendChild(tempInput);
    }
    return tempInput;
  }

  var meta$3 = {
    clipboard: [{
      name: 'getString',
      args: ['function']
    }, {
      name: 'setString',
      args: ['string']
    }]
  };

  var clipboard$1 = {
    init: function init(Weex) {
      Weex.registerApiModule('clipboard', clipboard, meta$3);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var event$2 = {
    /**
     * openUrl
     * @param  {string} url
     */
    openURL: function openURL(url) {
      location.href = url;
    }

  };

  var meta$4 = {
    event: [{
      name: 'openURL',
      args: ['string']
    }]
  };

  var eventModule = {
    init: function init(Weex) {
      Weex.registerApiModule('event', event$2, meta$4);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var utils$2 = {};
  var endEvent;
  var styleName;

  var DESIGN_ROOT_VALUE = 75;

  var EVENT_NAME_MAP = {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  };

  function detectEvents() {
    var testEl = document.createElement('div');
    var style = testEl.style;
    for (var name in EVENT_NAME_MAP) {
      if (name in style) {
        endEvent = EVENT_NAME_MAP[name];
        styleName = name;
        break;
      }
    }
  }

  detectEvents();

  function transitionOnce(vnode, config, callback) {
    var nextFrame = utils$2.nextFrame;
    var toCSSText = utils$2.toCSSText;
    var styleObject2rem = utils$2.styleObject2rem;
    var isArray = utils$2.isArray;

    if (isArray(vnode)) {
      vnode = vnode[0];
    }

    var duration = config.duration || 0; // ms
    var timing = config.timingFunction || 'linear';
    var delay = config.delay || 0; // ms

    // TODO: parse transition properties
    var transitionValue = "all " + duration + "ms " + timing + " " + delay + "ms";

    var dom = vnode instanceof HTMLElement ? vnode : vnode.$el;
    // trigger image lazyloading by force.
    dom && weex.utils.fireLazyload(dom, true);

    var transitionEndHandler = function transitionEndHandler(event) {
      event && event.stopPropagation();
      if (endEvent) {
        dom.removeEventListener(endEvent, transitionEndHandler);
        dom.style[styleName] = '';
      }
      callback();
    };
    if (endEvent) {
      dom.style[styleName] = transitionValue;
      dom.addEventListener(endEvent, transitionEndHandler);
    }
    nextFrame(function () {
      dom.style.cssText += toCSSText(styleObject2rem(config.styles, DESIGN_ROOT_VALUE) || {});
    });
  }

  var animation = {
    /**
     * transition
     * @param  {String} vnode
     * @param  {Object} config
     * @param  {String} callback
     */
    transition: function transition(vnode, config, callback) {
      if (!config.styles) {
        return;
      }
      return transitionOnce(vnode, config, function () {
        callback && callback();
      });
    }
  };

  var animation$1 = {
    init: function init(weex) {
      var extendKeys = weex.utils.extendKeys;
      extendKeys(utils$2, weex.utils, ['nextFrame', 'toCSSText', 'styleObject2rem',
      // 'autoPrefix',
      // 'normalizeStyle',
      'isArray']);

      weex.registerModule('animation', animation);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var utils$3 = {};

  function now() {
    var now = window.performance && window.performance.now ? window.performance.now.bind(window.performance) : Date.now;
    return now();
  }

  function scrollElement(dSuffix, position) {
    if (this === document.body || this === window && window.scrollTo) {
      return window.scrollTo(0, position);
    }
    this["scroll" + dSuffix] = position;
  }
  /**
   * self invoked function that, given a context, steps through scrolling
   * @method step
   * @param {Object} context
   */
  function step$1(context) {
    // call method again on next available frame
    context.frame = window.requestAnimationFrame(step$1.bind(window, context));
    var time = now();
    var elapsed = (time - context.startTime) / 468;
    // avoid elapsed times higher than one
    elapsed = elapsed > 1 ? 1 : elapsed;
    // apply easing to elapsed time
    var value = ease(elapsed);
    var currentPosition = context.startPosition + (context.position - context.startPosition) * value;
    context.method.call(context.scrollable, context.dSuffix, currentPosition);
    // return when end points have been reached
    /**
      * NOTE: should use ~~ to parse position number into integer. Otherwise
      * this two float numbers maybe have a slicely little difference, which
      * will cause this function never to stop.
    */
    if (~~currentPosition === ~~context.position) {
      window.cancelAnimationFrame(context.frame);
      return;
    }
  }
  /**
   * returns result of applying ease math function to a number
   * @method ease
   * @param {Number} k
   * @returns {Number}
   */
  function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  }
  var dom = {
    /**
     * scrollToElement
     * @param  {Vnode | VComponent} vnode
     * @param  {Object} options {offset:Number}
     *   ps: scroll-to has 'ease' and 'duration'(ms) as options.
     */
    scrollToElement: function scrollToElement(vnode, options) {
      var isArray = utils$3.isArray;
      var getParentScrollerElement = utils$3.getParentScrollerElement;
      if (isArray(vnode)) {
        vnode = vnode[0];
      }
      var isElement = vnode instanceof HTMLElement;
      var el = isElement ? vnode : vnode.$el || vnode.elm;
      var ct = getParentScrollerElement(vnode);
      var scroller = ct.__vue__;
      var isWindow = ct === document.body;
      var scrollDirection = isWindow ? 'vertical' : scroller && scroller.scrollDirection || 'vertical';
      if (ct && el) {
        var dSuffix = {
          horizontal: 'Left',
          vertical: 'Top'
        }[scrollDirection];
        var ctRect = ct.getBoundingClientRect();
        var elRect = el.getBoundingClientRect();
        /**
          * if it's a waterfall, and you want to scroll to a header, then just
          * scroll to the top.
        */
        if (!isElement && scroller && scroller.weexType === 'waterfall' && scroller._headers && scroller._headers.indexOf(vnode.$vnode || vnode) > -1) {
          // it's in waterfall. just scroll to the top.
          elRect = ct.firstElementChild.getBoundingClientRect();
        }
        var dir = dSuffix.toLowerCase();
        var offset = (isWindow ? 0 : ct["scroll" + dSuffix]) + elRect[dir] - ctRect[dir];
        if (options) {
          offset += options.offset && options.offset * weex.config.env.scale || 0;
        } else {}
        if (options && options.animated === false) {
          return scrollElement.call(ct, dSuffix, offset);
        }
        step$1({
          scrollable: ct,
          startTime: now(),
          frame: null,
          startPosition: isWindow ? window.pageYOffset : ct["scroll" + dSuffix],
          position: offset,
          method: scrollElement,
          dSuffix: dSuffix
        });
      }
    },
    /**
     * getComponentRect
     * @param {String} vnode
     * @param {Function} callback
     */
    getComponentRect: function getComponentRect(vnode, callback) {
      var isArray = utils$3.isArray;
      if (isArray(vnode)) {
        vnode = vnode[0];
      }
      var scale = window.weex.config.env.scale;
      var info = {
        result: false
      };
      var rectKeys = ['width', 'height', 'top', 'bottom', 'left', 'right'];

      function recalc(rect) {
        var res = {};
        rectKeys.forEach(function (key) {
          if (rect[key]) {
            res[key] = rect[key] / scale;
          }
        });
        return res;
      }
      if (vnode && vnode === 'viewport') {
        info.result = true;
        info.size = recalc({
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
          top: 0,
          left: 0,
          right: document.documentElement.clientWidth,
          bottom: document.documentElement.clientHeight
        });
      } else if (vnode) {
        var el = vnode instanceof HTMLElement ? vnode : vnode.$el;
        if (el.getBoundingClientRect) {
          info.result = true;
          info.size = recalc(el.getBoundingClientRect());
        } else {
          info.result = false;
        }
      }
      var message = info.result ? info : {
        result: false,
        errMsg: 'Illegal parameter'
      };
      callback && callback(message);
      return message;
    },
    /**
     * getLayoutDirection
     * @param {String} vnode
     * @param {Function} callback
     */
    getLayoutDirection: function getLayoutDirection(vnode, callback) {
      var isArray = utils$3.isArray;
      if (isArray(vnode)) {
        vnode = vnode[0];
      }
      var direction = 'ltr';
      if (vnode && vnode === 'viewport') {
        direction = getComputedStyle(document.documentElement)['direction'];
      } else if (vnode) {
        var el = vnode instanceof HTMLElement ? vnode : vnode.$el;
        direction = getComputedStyle(el)['direction'];
      }
      callback && callback(direction);
      return direction;
    },
    /**
     * for adding fontFace
     * @param {string} key fontFace
     * @param {object} styles rules
     */
    addRule: function addRule(key, styles) {
      var camelToKebab = utils$3.camelToKebab;
      var appendCss = utils$3.appendCss;
      key = camelToKebab(key);
      var stylesText = '';
      for (var k in styles) {
        if (styles.hasOwnProperty(k)) {
          stylesText += camelToKebab(k) + ':' + styles[k] + ';';
        }
      }
      var styleText = "@" + key + "{" + stylesText + "}";
      appendCss(styleText, 'dom-added-rules');
    }
  };
  var dom$1 = {
    init: function init(weex) {
      var extendKeys = weex.utils.extendKeys;
      extendKeys(utils$3, weex.utils, ['camelToKebab', 'appendCss', 'isArray', 'getParentScrollerElement']);
      weex.registerModule('dom', dom);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
   * globalEvent API:
   * @doc http://weex.apache.org/cn/references/modules/globalevent.html
   */
  // track varies kinds of events and listeners.
  var handlerTraker = {};

  var globalEvent = {
    /**
     * addEventListener
     * NOTE: one callback can only be bound to the same event once. Bind a callback twice doesn't
     *  mean it will be called twice when the event fired once.
     * @param {string} evt - the event name to add a listener on.
     */
    addEventListener: function addEventListener(evt, callback) {
      if (!callback) {
        return;
      }
      var handlers = handlerTraker[evt];
      if (!handlers) {
        handlers = handlerTraker[evt] = [];
      }
      var len = handlers.length;
      for (var i = 0; i < len; i++) {
        if (handlers[i] === callback) {
          // this callback is already bound. no need to bind it again.
          return;
        }
      }
      handlers.push(callback);
      document.addEventListener(evt, callback);
    },

    /**
     * removeEventListener
     * NOTE: remove all the event handlers for the specified event type.
     * @param {string} evt - the event name to remove a listener from.
     */
    removeEventListener: function removeEventListener(evt) {
      var handlers = handlerTraker[evt];
      if (!handlers) {
        // evt handlers has been already removed.
        return;
      }
      handlers.forEach(function (cb) {
        return document.removeEventListener(evt, cb);
      });
      delete handlerTraker[evt];
    }
  };

  var globalEvent$1 = {
    init: function init(weex) {
      weex.registerModule('globalEvent', globalEvent);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var queue$1 = [];
  var isProcessing = false;
  var toastWin;
  var TOAST_WIN_CLASS_NAME = 'weex-toast';
  var TOAST_TRANSITION_DURATION = 0.4;

  var DEFAULT_DURATION = 0.8;

  function showToastWindow(msg, callback) {
    if (!toastWin) {
      toastWin = document.createElement('div');
      toastWin.classList.add(TOAST_WIN_CLASS_NAME);
      toastWin.classList.add('hide');
      document.body.appendChild(toastWin);
    }
    toastWin.textContent = msg;
    setTimeout(function () {
      toastWin.classList.remove('hide');
      callback && callback();
    }, 16);
  }

  function hideToastWindow(callback) {
    if (!toastWin) {
      return;
    }
    toastWin.classList.add('hide');
    setTimeout(function () {
      callback && callback();
    }, TOAST_TRANSITION_DURATION * 1000);
  }

  var _toast = {
    push: function push(msg, duration) {
      queue$1.push({
        msg: msg,
        duration: duration || DEFAULT_DURATION
      });
      this.show();
    },

    show: function show() {
      var that = this;

      // All messages had been toasted already, so remove the toast window,
      if (!queue$1.length) {
        toastWin && toastWin.parentNode.removeChild(toastWin);
        toastWin = null;
        return;
      }

      // the previous toast is not ended yet.
      if (isProcessing) {
        return;
      }
      isProcessing = true;

      var toastInfo = queue$1.shift();
      showToastWindow(toastInfo.msg, function () {
        setTimeout(function () {
          hideToastWindow(function () {
            isProcessing = false;
            that.show();
          });
        }, toastInfo.duration * 1000);
      });
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  // there will be only one instance of modal.
  var MODAL_WRAP_CLASS = 'weex-modal-wrap';
  var MODAL_NODE_CLASS = 'weex-modal-node';

  function Modal() {
    this.wrap = document.querySelector(MODAL_WRAP_CLASS);
    this.node = document.querySelector(MODAL_NODE_CLASS);
    if (!this.wrap) {
      this.createWrap();
    }
    if (!this.node) {
      this.createNode();
    }
    this.clearNode();
    this.createNodeContent();
    this.bindEvents();
  }

  Modal.prototype = {

    show: function show() {
      this.wrap.style.display = 'block';
      this.node.classList.remove('hide');
    },

    destroy: function destroy() {
      document.body.removeChild(this.wrap);
      document.body.removeChild(this.node);
      this.wrap = null;
      this.node = null;
    },

    createWrap: function createWrap() {
      this.wrap = document.createElement('div');
      this.wrap.className = MODAL_WRAP_CLASS;
      document.body.appendChild(this.wrap);
    },

    createNode: function createNode() {
      this.node = document.createElement('div');
      this.node.classList.add(MODAL_NODE_CLASS, 'hide');
      document.body.appendChild(this.node);
    },

    clearNode: function clearNode() {
      this.node.innerHTML = '';
    },

    createNodeContent: function createNodeContent() {

      // do nothing.
      // child classes can override this method.
    },

    bindEvents: function bindEvents() {
      this.wrap.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
      });
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var CONTENT_CLASS = 'content';
  var MSG_CLASS = 'content-msg';
  var BUTTON_GROUP_CLASS = 'btn-group';
  var BUTTON_CLASS = 'btn';

  function Alert(config) {
    this.msg = config.message || '';
    this.callback = config.callback;
    this.okTitle = config.okTitle || 'OK';
    Modal.call(this);
    this.node.classList.add('weex-alert');
  }

  Alert.prototype = Object.create(Modal.prototype);

  Alert.prototype.createNodeContent = function () {
    var content = document.createElement('div');
    content.classList.add(CONTENT_CLASS);
    this.node.appendChild(content);

    var msg = document.createElement('div');
    msg.classList.add(MSG_CLASS);
    msg.appendChild(document.createTextNode(this.msg));
    content.appendChild(msg);

    var buttonGroup = document.createElement('div');
    buttonGroup.classList.add(BUTTON_GROUP_CLASS);
    this.node.appendChild(buttonGroup);
    var button = document.createElement('div');
    button.classList.add(BUTTON_CLASS, 'alert-ok');
    button.appendChild(document.createTextNode(this.okTitle));
    buttonGroup.appendChild(button);
  };

  Alert.prototype.bindEvents = function () {
    Modal.prototype.bindEvents.call(this);
    var button = this.node.querySelector('.' + BUTTON_CLASS);
    button.addEventListener('click', function () {
      this.destroy();
      this.callback && this.callback();
    }.bind(this));
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var CONTENT_CLASS$1 = 'content';
  var MSG_CLASS$1 = 'content-msg';
  var BUTTON_GROUP_CLASS$1 = 'btn-group';
  var BUTTON_CLASS$1 = 'btn';

  function Confirm(config) {
    this.msg = config.message || '';
    this.callback = config.callback;
    this.okTitle = config.okTitle || 'OK';
    this.cancelTitle = config.cancelTitle || 'Cancel';
    Modal.call(this);
    this.node.classList.add('weex-confirm');
  }

  Confirm.prototype = Object.create(Modal.prototype);

  Confirm.prototype.createNodeContent = function () {
    var content = document.createElement('div');
    content.classList.add(CONTENT_CLASS$1);
    this.node.appendChild(content);

    var msg = document.createElement('div');
    msg.classList.add(MSG_CLASS$1);
    msg.appendChild(document.createTextNode(this.msg));
    content.appendChild(msg);

    var buttonGroup = document.createElement('div');
    buttonGroup.classList.add(BUTTON_GROUP_CLASS$1);
    this.node.appendChild(buttonGroup);
    var btnOk = document.createElement('div');
    btnOk.appendChild(document.createTextNode(this.okTitle));
    btnOk.classList.add('btn-ok', BUTTON_CLASS$1);
    var btnCancel = document.createElement('div');
    btnCancel.appendChild(document.createTextNode(this.cancelTitle));
    btnCancel.classList.add('btn-cancel', BUTTON_CLASS$1);
    buttonGroup.appendChild(btnOk);
    buttonGroup.appendChild(btnCancel);
    this.node.appendChild(buttonGroup);
  };

  Confirm.prototype.bindEvents = function () {
    Modal.prototype.bindEvents.call(this);
    var btnOk = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-ok');
    var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-cancel');
    btnOk.addEventListener('click', function () {
      this.destroy();
      this.callback && this.callback(this.okTitle);
    }.bind(this));
    btnCancel.addEventListener('click', function () {
      this.destroy();
      this.callback && this.callback(this.cancelTitle);
    }.bind(this));
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var CONTENT_CLASS$2 = 'content';
  var MSG_CLASS$2 = 'content-msg';
  var BUTTON_GROUP_CLASS$2 = 'btn-group';
  var BUTTON_CLASS$2 = 'btn';
  var INPUT_WRAP_CLASS = 'input-wrap';
  var INPUT_CLASS = 'input';

  function Prompt(config) {
    this.msg = config.message || '';
    this.defaultMsg = config.default || '';
    this.callback = config.callback;
    this.okTitle = config.okTitle || 'OK';
    this.cancelTitle = config.cancelTitle || 'Cancel';
    Modal.call(this);
    this.node.classList.add('weex-prompt');
  }

  Prompt.prototype = Object.create(Modal.prototype);

  Prompt.prototype.createNodeContent = function () {
    var content = document.createElement('div');
    content.classList.add(CONTENT_CLASS$2);
    this.node.appendChild(content);

    var msg = document.createElement('div');
    msg.classList.add(MSG_CLASS$2);
    msg.appendChild(document.createTextNode(this.msg));
    content.appendChild(msg);

    var inputWrap = document.createElement('div');
    inputWrap.classList.add(INPUT_WRAP_CLASS);
    content.appendChild(inputWrap);
    var input = document.createElement('input');
    input.classList.add(INPUT_CLASS);
    input.type = 'text';
    input.autofocus = true;
    input.placeholder = this.defaultMsg;
    inputWrap.appendChild(input);

    var buttonGroup = document.createElement('div');
    buttonGroup.classList.add(BUTTON_GROUP_CLASS$2);
    var btnOk = document.createElement('div');
    btnOk.appendChild(document.createTextNode(this.okTitle));
    btnOk.classList.add('btn-ok', BUTTON_CLASS$2);
    var btnCancel = document.createElement('div');
    btnCancel.appendChild(document.createTextNode(this.cancelTitle));
    btnCancel.classList.add('btn-cancel', BUTTON_CLASS$2);
    buttonGroup.appendChild(btnOk);
    buttonGroup.appendChild(btnCancel);
    this.node.appendChild(buttonGroup);
  };

  Prompt.prototype.bindEvents = function () {
    Modal.prototype.bindEvents.call(this);
    var btnOk = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-ok');
    var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-cancel');
    var that = this;
    btnOk.addEventListener('click', function () {
      var val = document.querySelector('input').value;
      this.destroy();
      this.callback && this.callback({
        result: that.okTitle,
        data: val
      });
    }.bind(this));
    btnCancel.addEventListener('click', function () {
      var val = document.querySelector('input').value;
      this.destroy();
      this.callback && this.callback({
        result: that.cancelTitle,
        data: val
      });
    }.bind(this));
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var _css$1 = "\n.weex-toast {\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  z-index: 1999999999;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 50%;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.7;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.weex-toast.hide {\n  opacity: 0;\n}\n\n.weex-alert .weex-alert-ok {\n  width: 100%;\n}\n\n.weex-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-confirm .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n\n.weex-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.weex-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n\n.weex-modal-node.hide {\n  display: none;\n}\n\n.weex-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -moz-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 0.013333rem solid #ddd;\n}\n\n.weex-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.weex-modal-node .btn-group .btn {\n  text-align: center;\n}\n\n.weex-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  text-align: center;\n}\n\n.weex-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  height: 0.96rem;\n}\n\n.weex-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.426667rem;\n  border: 0.013333rem solid #999;\n}\n\n.weex-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-prompt .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n";

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  // TODO: rewrite the modal styles
  var modal = {

    // duration: default is 0.8 seconds.
    toast: function toast(config) {
      _toast.push(config.message, config.duration);
    },

    // config:
    //  - message: string
    //  - okTitle: title of ok button
    //  - callback
    alert: function alert(config, callback) {
      config.callback = function () {
        callback && callback();
      };
      new Alert(config).show();
    },

    // config:
    //  - message: string
    //  - okTitle: title of ok button
    //  - cancelTitle: title of cancel button
    //  - callback
    confirm: function confirm(config, callback) {
      config.callback = function (val) {
        callback && callback(val);
      };
      new Confirm(config).show();
    },

    // config:
    //  - message: string
    //  - okTitle: title of ok button
    //  - cancelTitle: title of cancel button
    //  - callback
    prompt: function prompt(config, callback) {
      config.callback = function (val) {
        callback && callback(val);
      };
      new Prompt(config).show();
    }
  };

  var modal$1 = {
    init: function init(Weex) {
      Weex.utils.appendCss(_css$1, 'weex-mud-modal');
      Weex.registerModule('modal', modal);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /**
   * Navigator module
   */
  var navigatorModule = {
    push: function push(config, callback) {
      window.location.href = config.url;
      callback && callback();
    },

    pop: function pop(config, callback) {
      window.history.back();
      callback && callback();
    }
  };

  var navigatorModule$1 = {
    init: function init(weex) {
      weex.registerModule('navigator', navigatorModule);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /**
   * Webview module
   */
  var isArray$1;

  var webview = {
    goBack: function goBack(vnode) {
      if (isArray$1(vnode)) {
        vnode = vnode[0];
      }
      if (vnode && typeof vnode.goBack === 'function') {
        vnode.goBack();
      }
    },
    goForward: function goForward(vnode) {
      if (isArray$1(vnode)) {
        vnode = vnode[0];
      }
      if (vnode && typeof vnode.goForward === 'function') {
        vnode.goForward();
      }
    },
    reload: function reload(vnode) {
      if (isArray$1(vnode)) {
        vnode = vnode[0];
      }
      if (vnode && typeof vnode.reload === 'function') {
        vnode.reload();
      }
    }
  };

  var webview$1 = {
    init: function init(weex) {
      isArray$1 = weex.utils.isArray;
      weex.registerModule('webview', webview);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
   * websocket module
   */
  /*global WebSocket*/
  var websocket$1 = function () {
    var registerListeners = ['onopen', 'onmessage', 'onerror', 'onclose'];
    var ws = {
      INSTANCE: null,
      WebSocket: function (_WebSocket) {
        function WebSocket(_x, _x2) {
          return _WebSocket.apply(this, arguments);
        }

        WebSocket.toString = function () {
          return _WebSocket.toString();
        };

        return WebSocket;
      }(function (url, protocol) {
        if (!url) {
          ws.INSTANCE = null;
          return;
        }
        if (!protocol) {
          ws.INSTANCE = new WebSocket(url);
        } else {
          ws.INSTANCE = new WebSocket(url, protocol);
        }
        return ws.INSTANCE;
      }),
      send: function send(messages) {
        ws.INSTANCE && ws.INSTANCE.send(messages);
      },
      close: function close() {
        ws.INSTANCE && ws.INSTANCE.close();
      }
    };
    var loop = function loop(i) {
      if (registerListeners.hasOwnProperty(i)) {
        Object.defineProperty(ws, registerListeners[i], {
          get: function get() {
            return ws.INSTANCE && ws.INSTANCE[registerListeners[i]];
          },
          set: function set(fn) {
            if (ws.INSTANCE) {
              ws.INSTANCE[registerListeners[i]] = fn;
            }
          }
        });
      }
    };

    for (var i in registerListeners) {
      loop(i);
    }return ws;
  }();

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  // TODO: rewrite the module meta
  var websocket = {
    init: function init(Weex) {
      Weex.registerModule('webSocket', websocket$1, { registerType: 'assignment' });
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var meta$5 = {
    /**
     * setViewport.
     * Changing viewport design width at runtime.
     */
    setViewport: function setViewport(options) {
      if (!options) {
        console.error("[vue-render] set viewport width invalid options: " + options);
      }
      var newWidth = parseInt(options.width);
      if (!isNaN(newWidth) && newWidth > 0) {
        resetViewport(options.width);
      } else {
        console.error("[vue-render] set viewport width invalid options.width: " + options.width);
      }
    }
  };

  var meta$6 = {
    init: function init(weex) {
      weex.registerModule('meta', meta$5);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  // modules from render/browesr (legacy modules)

  // custom modules
  var modules$1 = [geolocation$1, storage$1, stream$1, clipboard$1, eventModule, modal$1, websocket, animation$1, dom$1, globalEvent$1, navigatorModule$1, webview$1, meta$6];

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var valMap = {
    contain: 'contain',
    cover: 'cover',
    stretch: '100% 100%'
  };
  var vals = Object.keys(valMap);
  var defaultVal = 'stretch';

  var resize = {
    init: function init(weex) {
      weex.__vue__.directive('weex-resize', function (el, binding) {
        if (el.tagName.toLowerCase() !== 'figure') {
          return;
        }
        var value = binding.value;
        var oldValue = binding.oldvalue;
        if (value === oldValue) {
          return;
        }
        if (vals.indexOf(value) <= -1) {
          value = defaultVal;
        }
        el.style.backgroundSize = valMap[value];
      });
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var directives = {
    resize: resize
  };

  var preInit = weex.init;

  weex.init = function () {
    preInit.apply(weex, arguments);
    var plugins = components.concat(modules$1);

    plugins.forEach(function (plugin) {
      weex.install(plugin);
    });

    for (var k in directives) {
      weex.install(directives[k]);
    }
  };

  if (global.Vue) {
    weex.init(global.Vue);
  }

  return weex;
});

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _grzx = __webpack_require__(95);

var _grzx2 = _interopRequireDefault(_grzx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_grzx2.default.el = '#root';
new Vue(_grzx2.default);

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(96)
)
__vue_styles__.push(__webpack_require__(97)
)

/* script */
__vue_exports__ = __webpack_require__(98)

/* template */
var __vue_template__ = __webpack_require__(99)
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
__vue_options__.__file = "/Users/sally/Documents/毕设/weexapp/src/views/grzx.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6681fffa"
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

/***/ 96:
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: Cannot read property '1' of null\n    at transition (/Users/sally/Documents/毕设/weexapp/node_modules/weex-styler/lib/shorthand-parser.js:14:8)\n    at declarations.reduce (/Users/sally/Documents/毕设/weexapp/node_modules/weex-styler/lib/shorthand-parser.js:54:28)\n    at Array.reduce (<anonymous>)\n    at module.exports (/Users/sally/Documents/毕设/weexapp/node_modules/weex-styler/lib/shorthand-parser.js:51:23)\n    at /Users/sally/Documents/毕设/weexapp/node_modules/weex-styler/index.js:62:31\n    at Array.forEach (<anonymous>)\n    at Object.parse (/Users/sally/Documents/毕设/weexapp/node_modules/weex-styler/index.js:55:26)\n    at genStyleString (/Users/sally/Documents/毕设/weexapp/node_modules/weex-vue-loader/lib/style-loader.js:30:10)\n    at Object.module.exports (/Users/sally/Documents/毕设/weexapp/node_modules/weex-vue-loader/lib/style-loader.js:5:32)");

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

module.exports = {
  "body": {
    "backgroundColor": "#ffffff",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "main": {
    "position": "relative",
    "height": "708",
    "width": "750"
  },
  "top": {
    "height": "308",
    "width": "750"
  },
  "imgTopBg": {
    "width": "750",
    "height": "280"
  },
  "abs": {
    "position": "absolute",
    "top": "148",
    "height": "160",
    "width": "750",
    "display": "flex",
    "flexDirection": "row"
  },
  "imgDiv": {
    "width": "160",
    "height": "160",
    "borderRadius": "100",
    "marginLeft": "260"
  },
  "imgBor": {
    "width": "160",
    "height": "160",
    "borderRadius": "100"
  },
  "imgId": {
    "width": "160",
    "height": "160",
    "borderRadius": "100"
  },
  "imgId1": {
    "marginTop": "-10",
    "marginLeft": "14",
    "width": "80",
    "height": "80"
  },
  "footer": {
    "borderTopWidth": "2",
    "borderTopColor": "rgba(232,232,232,1)",
    "width": "750",
    "height": "98",
    "lineHeight": "98",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center",
    "backgroundColor": "#FFFFFF"
  },
  "icon": {
    "width": "120",
    "height": "98",
    "alignItems": "center"
  },
  "bao": {
    "height": "28",
    "fontSize": "20",
    "fontWeight": "400",
    "color": "rgba(116,121,128,1)",
    "lineHeight": "28"
  },
  "iconImg": {
    "width": "64",
    "height": "64"
  },
  "text": {
    "marginLeft": "60",
    "color": "#ffffff"
  },
  "textTop": {
    "fontSize": "40",
    "color": "#ffffff"
  },
  "textBot": {
    "marginTop": "16",
    "color": "#ffffff",
    "fontSize": "28"
  },
  "items": {
    "marginTop": 0,
    "marginBottom": 0,
    "height": "88",
    "width": "670",
    "borderBottom": "2px solid #f0f0f0",
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "imgIcon": {
    "marginLeft": "14",
    "width": "36",
    "height": "36"
  },
  "imgIcon1": {
    "marginLeft": "14",
    "width": "42",
    "height": "42"
  },
  "course": {
    "marginLeft": "18",
    "fontSize": "28",
    "color": "#2F3133",
    "width": "570"
  },
  "course1": {
    "marginLeft": "0",
    "fontSize": "28",
    "color": "#2F3133",
    "width": "570"
  },
  "course2": {
    "marginLeft": "-10",
    "fontSize": "28",
    "color": "#2F3133",
    "width": "570",
    "height": "40"
  },
  "load": {
    "position": "absolute",
    "top": 50,
    "left": 50,
    "marginTop": "-40",
    "marginLeft": "-40"
  }
}

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(10);

var _util2 = _interopRequireDefault(_util);

var _loading = __webpack_require__(11);

var _loading2 = _interopRequireDefault(_loading);

var _computed = __webpack_require__(15);

var _computed2 = _interopRequireDefault(_computed);

var _Global = __webpack_require__(0);

var _Global2 = _interopRequireDefault(_Global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule('storage');
var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');
var animation = weex.requireModule('animation');
exports.default = {
  name: "grzx",
  data: function data() {
    return {
      change1: false,
      show: true,
      loading: false,
      isLoading: false,
      userName: '',
      change: true,
      headerImg: '',
      footer: false,
      mainHeight: '',
      adminId: '',
      roleId: '',
      routeName: '',
      routeImg: '',
      signed: '',
      tianjia: _Global2.default.imgUrl + '/peizhi.png',
      peizhi: _Global2.default.imgUrl + '/icon-test.png',
      qiandao: _Global2.default.imgUrl + '/qiandao.png',
      fengcaiImg: _Global2.default.imgUrl + '/tab_b_normal_icon%402x.png',
      pingjiaImg: _Global2.default.imgUrl + '/tab_c_active_iconcopy@2x.png',
      gerenImg: _Global2.default.imgUrl + '/tab_d_normal_icon.png',
      xiaoxiImg: _Global2.default.imgUrl + '/tab_d_normal_icon@2x.png',
      baomingImg: _Global2.default.imgUrl + '/rectangular.png',
      list: [{
        headerImg: '',
        adminName: '',
        key: '',
        roleId: ''
      }]
    };
  },

  components: { 'loading': _loading2.default },
  created: function created() {
    this.mainHeight = _computed2.default.env.getPageHeight() - 98 + 'px';
    this.getUser();
  },

  computed: {},
  methods: {
    afterLeave: function afterLeave() {
      this.change1 = !this.change;
      this.change = !this.change1;
    },
    afterLeave1: function afterLeave1() {
      this.change = true;
    },
    gotoINFO: function gotoINFO() {
      if (this.routeName === "班级评价") {
        this.gotoBJPJ();
      } else if (this.routeName === "在线报名") {
        this.gotoZXBM();
      } else {
        this.gotoBMYZ();
      }
    },
    gotoBACK: function gotoBACK() {
      this.change1 = false;
    },
    gotoYHSZ: function gotoYHSZ() {
      this.change = false;
    },
    gotoSinged: function gotoSinged() {
      var _this = this;

      var url = _Global2.default.dataUrl + '/api/getJson/gotoSinged';
      var adminId1 = void 0;
      storage.getItem("adminId", function (adminId) {
        adminId1 = adminId.data;
      });
      var data = { adminId: adminId1 };
      storage.getItem("token", function (token) {
        if (token !== '') {
          _util2.default.sendRequestWithTokenAndId(url, token.data, adminId1, data, function (ret) {
            if (ret.data.objResult === 0) {
              modal.toast({ message: "签到失败", duration: 1.6 });
            } else {
              _this.signed = 1;
              modal.toast({ message: "签到成功", duration: 1.6 });
            }
          });
        } else {
          modal.toast({ message: "登录超时", duration: 1.6 });
          _this.gotoDLJM();
        }
      });
    },
    gotoZXBM: function gotoZXBM() {
      var _this2 = this;

      this.loading = false;
      this.footer = false;
      this.isLoading = true;
      var go = setTimeout(function () {
        navigator.push({
          url: _Global2.default.dicUrl + '/views/zxbm.html',
          animated: "true"
        }, function (event) {
          clearTimeout(go);
          _this2.isLoading = false;
          _this2.loading = true;
          _this2.footer = true;
        });
      }, 1000);
    },
    gotoGRZX: function gotoGRZX() {
      var _this3 = this;

      this.isLoading = true;
      var go = setTimeout(function () {
        navigator.push({
          url: _Global2.default.dicUrl + '/views/grzx.html',
          animated: "true"
        }, function (event) {
          clearTimeout(go);
          _this3.isLoading = false;
        });
      }, 1000);
    },
    gotoBJPJ: function gotoBJPJ() {
      var _this4 = this;

      this.isLoading = true;
      var go = setTimeout(function () {
        navigator.push({
          //url:'http://192.168.1.104:8081/views/zxbm.html',
          url: _Global2.default.dicUrl + '/views/bjpj.html',
          animated: "true"
        }, function (event) {
          clearTimeout(go);
          _this4.isLoading = false;
        });
      }, 1000);
    },
    gotoBMYZ: function gotoBMYZ() {
      var _this5 = this;

      this.loading = false;
      this.footer = false;
      this.isLoading = true;
      var go = setTimeout(function () {
        navigator.push({
          url: _Global2.default.dicUrl + '/views/bmyz.html',
          animated: "true"
        }, function (event) {
          clearTimeout(go);
          _this5.isLoading = false;
          _this5.loading = true;
          _this5.footer = true;
        });
      }, 1000);
    },
    changeUser: function changeUser(adminId, roleId, schoolId, openId) {
      var _this6 = this;

      var url = _Global2.default.dataUrl + '/api/getJson/changeUser';
      var data = { adminId: adminId, schoolId: schoolId, roleId: roleId, openId: openId };
      var adminId1 = void 0;
      storage.getItem("adminId", function (adminId) {
        adminId1 = adminId.data;
      });
      storage.getItem("token", function (token) {
        if (token !== '') {
          _util2.default.sendRequestWithTokenAndId(url, token.data, adminId1, data, function (ret) {
            if (ret.data != null) {
              if (ret.data.result === "0") {
                storage.setItem("token", ret.data.token);
                storage.setItem("adminId", ret.data.adminId);
                storage.setItem("roleId", ret.data.roleId);
              } else {
                modal.toast({ message: "切换失败，请检查网络！", duration: 1.6 });
              }
              _this6.loading = false;
              _this6.footer = false;
              _this6.getUser();
            } else {
              modal.toast({ message: "切换失败，请检查网络！", duration: 1.6 });
              _this6.getUser();
            }
          });
        } else {
          modal.toast({ message: "登录超时", duration: 1.6 });
          _this6.gotoDLJM();
        }
      });
    },
    gotoWDXX: function gotoWDXX() {
      navigator.push({
        url: _Global2.default.dicUrl + '/views/wdxx.html',
        animated: "true"
      }, function (event) {});
    },
    gotoDLJM: function gotoDLJM() {
      var _this7 = this;

      this.isLoading = true;
      var go = setTimeout(function () {
        navigator.push({
          url: _Global2.default.dicUrl + '/views/denglu.html',
          animated: "true"
        }, function (event) {
          clearTimeout(go);
          _this7.isLoading = false;
        });
      }, 1000);
    },
    giveInfo: function giveInfo(result, data) {
      if (result === "1") {
        this.userName = data.studentName;
        this.headerImg = data.headerImg;
        this.routeName = "在线报名";
        this.routeImg = this.baomingImg;
        this.footer = true;
      } else {
        if (result === "2") {
          this.userName = data.studentName;
          this.headerImg = data.headerImg;
          this.routeName = "班级评价";
          this.routeImg = this.pingjiaImg;
          this.footer = true;
        } else {
          if (result === "0") {
            if (data.roleId === 3 || data.roleId == "teacher" || data.roleId === "3") {
              this.userName = data.studentName;
              this.headerImg = data.headerImg;
              this.footer = false;
            } else {
              this.userName = data.studentName;
              this.headerImg = data.headerImg;
              this.routeName = "报名申请";
              this.routeImg = this.baomingImg;
              this.footer = true;
            }
          } else {
            modal.toast({ message: "验证失败，请重新登录！", duration: 1.6 });
            this.gotoDLJM();
          }
        }
      }
    },
    getUser: function getUser() {
      var _this8 = this;

      this.isLoading = true;
      var go = setTimeout(function () {
        var url = _Global2.default.dataUrl + '/api/getJson/getUsers';
        var adminId1 = void 0;
        var schoolId1 = void 0;
        var roleId1 = void 0;
        var openId1 = void 0;
        storage.getItem("adminId", function (adminId) {
          adminId1 = adminId.data;
        });
        storage.getItem("schoolId", function (schoolId) {
          schoolId1 = schoolId.data;
        });
        storage.getItem("roleId", function (roleId) {
          roleId1 = roleId.data;
        });
        storage.getItem("openId", function (openId) {
          openId1 = openId.data;
        });
        var data = { adminId: adminId1, schoolId: schoolId1, roleId: roleId1, openId: openId1 };
        _this8.adminId = adminId1;
        storage.getItem("token", function (token) {
          if (token !== '') {
            _util2.default.sendRequestWithTokenAndId(url, token.data, adminId1, data, function (ret) {
              if (ret.data == null) {
                clearTimeout(go);
                _this8.isLoading = false;
                _this8.loading = true;
                modal.toast({ message: "登录超时", duration: 1.6 });
              } else {
                _this8.list = ret.data.list;
                _this8.signed = ret.data.fetchList.longResult;
                _this8.giveInfo(ret.data.result, ret.data.fetchList.objResult);
                clearTimeout(go);
                _this8.isLoading = false;
                _this8.loading = true;
              }
            });
          } else {
            clearTimeout(go);
            _this8.isLoading = false;
            modal.toast({ message: "登录超时", duration: 1.6 });
            _this8.gotoDLJM();
          }
        });
      }, 700);
    }
  }
};

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["body"]
  }, [_c('transition', {
    attrs: {
      "name": "name"
    }
  }, [(_vm.loading) ? _c('div', {
    staticClass: ["main"],
    style: {
      height: _vm.mainHeight
    }
  }, [_c('div', {
    staticClass: ["top"]
  }, [_c('img', {
    staticClass: ["imgTopBg"],
    attrs: {
      "src": "https://cdn.weipaitang.com/static/2019102881e36285-d730-474b-83f7-75f5207eedb5-W375H140",
      "alt": "背景图"
    }
  }), _c('div', {
    staticClass: ["abs"]
  }, [_c('div', {
    staticClass: ["text"]
  }, [_c('text', {
    staticClass: ["textTop"]
  }, [_vm._v("用户昵称")]), _c('text', {
    staticClass: ["textBot"]
  }, [_vm._v(_vm._s(_vm.userName))])]), (_vm.signed == 0) ? _c('img', {
    staticClass: ["imgId1"],
    attrs: {
      "src": "https://cdn.weipaitang.com/static/2019110553710c2d-f7c0-4bf8-9e83-751803cb2477-W200H200",
      "alt": ""
    },
    on: {
      "click": _vm.gotoSinged
    }
  }) : _vm._e(), (_vm.signed >= 1) ? _c('img', {
    staticClass: ["imgId1"],
    attrs: {
      "src": "https://cdn.weipaitang.com/static/20191105c228be57-a700-4a7b-b183-fb1c987ddb44-W200H200",
      "alt": ""
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["imgDiv"]
  }, [_c('div', {
    staticClass: ["imgBor"]
  }, [_c('img', {
    staticClass: ["imgId"],
    attrs: {
      "src": _vm.headerImg,
      "alt": ""
    }
  })])])])]), _c('transition', {
    attrs: {
      "name": "slide-fade"
    },
    on: {
      "afterLeave": _vm.afterLeave
    }
  }, [(_vm.change) ? _c('div', {
    key: "box1",
    ref: "animate",
    staticClass: ["animate"]
  }, [_c('div', {
    staticClass: ["items"]
  }, [_c('img', {
    staticClass: ["imgIcon"],
    attrs: {
      "src": "https://cdn.weipaitang.com/static/20191028014c7526-e8a5-4a79-9261-418d245cb94f-W18H18",
      "alt": "icon"
    }
  }), _c('text', {
    staticClass: ["course"]
  }, [_vm._v("我的课程")]), _c('svg', {
    staticClass: ["icon"],
    attrs: {
      "t": "1572012155740",
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "pId": "2047",
      "width": "300",
      "height": "300"
    }
  }, [_c('path', {
    attrs: {
      "d": "M377.018182 802.909091c-6.981818 0-11.636364-2.327273-16.290909-6.981818-9.309091-9.309091-9.309091-23.272727 0-32.581818L612.072727 512 360.727273 260.654545c-9.309091-9.309091-9.309091-23.272727 0-32.581818s23.272727-9.309091 32.581818 0l267.636364 267.636364c9.309091 9.309091 9.309091 23.272727 0 32.581818L395.636364 795.927273c-4.654545 4.654545-11.636364 6.981818-18.618182 6.981818z",
      "pId": "2048",
      "fill": "#A5ABB3"
    }
  })], 1)]), _c('div', {
    staticClass: ["items"]
  }, [_c('img', {
    staticClass: ["imgIcon"],
    attrs: {
      "src": "https://cdn.weipaitang.com/static/201910280ae7a580-428c-415d-8b48-ff9c9c0158e0-W18H18",
      "alt": "icon"
    }
  }), _c('text', {
    staticClass: ["course"]
  }, [_vm._v("我发表的动态")]), _c('svg', {
    staticClass: ["icon"],
    attrs: {
      "t": "1572012155740",
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "pId": "2047",
      "width": "300",
      "height": "300"
    }
  }, [_c('path', {
    attrs: {
      "d": "M377.018182 802.909091c-6.981818 0-11.636364-2.327273-16.290909-6.981818-9.309091-9.309091-9.309091-23.272727 0-32.581818L612.072727 512 360.727273 260.654545c-9.309091-9.309091-9.309091-23.272727 0-32.581818s23.272727-9.309091 32.581818 0l267.636364 267.636364c9.309091 9.309091 9.309091 23.272727 0 32.581818L395.636364 795.927273c-4.654545 4.654545-11.636364 6.981818-18.618182 6.981818z",
      "pId": "2048",
      "fill": "#A5ABB3"
    }
  })], 1)]), _c('div', {
    staticClass: ["items"]
  }, [_c('img', {
    staticClass: ["imgIcon"],
    attrs: {
      "src": "https://cdn.weipaitang.com/static/201910280c042d8f-b844-4c24-b09e-e3410eba980f-W18H18",
      "alt": "icon"
    }
  }), _c('text', {
    staticClass: ["course"]
  }, [_vm._v("我赞的")]), _c('svg', {
    staticClass: ["icon"],
    attrs: {
      "t": "1572012155740",
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "pId": "2047",
      "width": "300",
      "height": "300"
    }
  }, [_c('path', {
    attrs: {
      "d": "M377.018182 802.909091c-6.981818 0-11.636364-2.327273-16.290909-6.981818-9.309091-9.309091-9.309091-23.272727 0-32.581818L612.072727 512 360.727273 260.654545c-9.309091-9.309091-9.309091-23.272727 0-32.581818s23.272727-9.309091 32.581818 0l267.636364 267.636364c9.309091 9.309091 9.309091 23.272727 0 32.581818L395.636364 795.927273c-4.654545 4.654545-11.636364 6.981818-18.618182 6.981818z",
      "pId": "2048",
      "fill": "#A5ABB3"
    }
  })], 1)]), _c('div', {
    staticClass: ["items"]
  }, [_c('img', {
    staticClass: ["imgIcon"],
    attrs: {
      "src": "https://cdn.weipaitang.com/static/20191028d2375867-d140-414d-a6a2-237696fbcd32-W18H18",
      "alt": "icon"
    }
  }), _c('text', {
    staticClass: ["course"]
  }, [_vm._v("我发表的评价")]), _c('svg', {
    staticClass: ["icon"],
    attrs: {
      "t": "1572012155740",
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "pId": "2047",
      "width": "128",
      "height": "128"
    }
  }, [_c('path', {
    attrs: {
      "d": "M377.018182 802.909091c-6.981818 0-11.636364-2.327273-16.290909-6.981818-9.309091-9.309091-9.309091-23.272727 0-32.581818L612.072727 512 360.727273 260.654545c-9.309091-9.309091-9.309091-23.272727 0-32.581818s23.272727-9.309091 32.581818 0l267.636364 267.636364c9.309091 9.309091 9.309091 23.272727 0 32.581818L395.636364 795.927273c-4.654545 4.654545-11.636364 6.981818-18.618182 6.981818z",
      "pId": "2048",
      "fill": "#A5ABB3"
    }
  })], 1)]), _c('div', {
    staticClass: ["items"],
    on: {
      "click": _vm.gotoYHSZ
    }
  }, [_c('img', {
    staticClass: ["imgIcon"],
    attrs: {
      "src": _vm.peizhi,
      "alt": "icon"
    }
  }), _c('text', {
    staticClass: ["course"]
  }, [_vm._v("用户设置")]), _c('svg', {
    staticClass: ["icon"],
    attrs: {
      "t": "1572012155740",
      "viewBox": "0 0 1024 1024",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "pId": "2047",
      "width": "128",
      "height": "128"
    }
  }, [_c('path', {
    attrs: {
      "d": "M377.018182 802.909091c-6.981818 0-11.636364-2.327273-16.290909-6.981818-9.309091-9.309091-9.309091-23.272727 0-32.581818L612.072727 512 360.727273 260.654545c-9.309091-9.309091-9.309091-23.272727 0-32.581818s23.272727-9.309091 32.581818 0l267.636364 267.636364c9.309091 9.309091 9.309091 23.272727 0 32.581818L395.636364 795.927273c-4.654545 4.654545-11.636364 6.981818-18.618182 6.981818z",
      "pId": "2048",
      "fill": "#A5ABB3"
    }
  })], 1)])]) : _vm._e()]), _c('transition', {
    attrs: {
      "name": "slide-fade"
    },
    on: {
      "afterLeave": _vm.afterLeave1
    }
  }, [(_vm.change1) ? _c('div', {
    key: "box2",
    staticClass: ["animate1"]
  }, [_c('div', {
    staticClass: ["items"],
    on: {
      "click": _vm.gotoBACK
    }
  }, [_c('img', {
    staticClass: ["imgIcon1"],
    attrs: {
      "src": "data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAYAAACTrr2IAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAA+pJREFUeNrt3TFoXHUAx/H3T8gigs3hIMahEmkRRCjEYoVCA3FTVIqpGaQdUu6Col20Q0HpokiR4GCuGdoSCglEi0NBqHaQ0skGR4XkCgFpJBAThdAlJM/BtMULMZfL3b337n0+czj+f8jvy7u3XBQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCE8Yszd7q6uhfGTlUOjY4W7pevzxZ6epI+FbXpSPoAZNX0dBx3dhbOb3yx78eJifBCdDiePnMmKsXfdQzevv1EXI5/i/fvT/qU/L+Q9AHImgfD//Ps3c+vXo2+ij+K3x4a2vJnr0Uz4cv5+fWJcGmt3N//dxgJz4f5+aRPz38JADWqcfjVhCDVBIAd1Dn8akKQSgLANjZf7lXWf9h3bmoqHI4G4q+PH9/rp8YfR33RH5XK2kDnLxu/Hjmy2lcsHSwtLSV927zyEpAqVS/3GjT8h4rRy+HdW7dW+xaKB4rLy0nfNu88AbCpQY/624jvRu+HgcuXV7oX13vnT5+OovMhhI2NpG+ddwKQe4afZwKQW4aPAOSQ4fOIAOSG4bOVALQ9w2d7AtC2DJ+dCUDbMXxqJwBtw/DZPQHIPMOnfgKQWYbP3glA5hg+jSMAmWH4NJ4ApJ7h0zwCkFqGT/MJQOoYPq0jAKlh+LSeACTO8EmOACTG8EmeALSc4ZMeAtAyhk/6CEDTGT7pJQBNY/iknwA0nOGTHQLQMIZP9gjAnhk+2SUAdTN8sk8Ads3waR9+HDRtfo++jV4JwkxL+EerW5OfBH6KngqfXLmy8uLiW72Tw8OeBGgGAdgzISC7BKBhhIDsEYCGEwKyQwCaRghIPwFoOiEgvQSgZYSA9BGAlhMC0kMAEiMEJE8AEicEJEcAUkMIaD0BSB0hoHUEILWEgOYTgNQTAppHADJDCGg8AcgcIaBxBCCzhIC9E4DMEwLqJwBtQwjYPQFoO0JA7QSgbQkBOxOAticEbE8AckMI2EoAckcIeEQAcksIEACEINcEgE1CkEcCQBUhyBM/DkqVwcEQ1teXP+04+9erJ0/GP0c3w3vXrjXs47+PnolHjh59fObp8dnxQiHp2+adALCNYqnvpbW1leeefKf3xokT0YfhQvhmaqreT4svRDeim3Nz4YOwGL957NhqX7F0sLS0lPQt885XAGpU31eDh8MfCsPxuf7+5cdGXj+wfO9e0rfhXwLALtUWAsOHtvYgBOVnK59NThYKY2Nzc3HcfWnsjbny7Gzhfvn6bKGnJ+lTAk01fnHmTldX98LYqcqh0VHDBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABy4R9cle5UyuFAOQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMC0zMFQxMTowNjoxMSswODowMAABFrwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTAtMzBUMTE6MDY6MTErMDg6MDBxXK4AAAAATHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2FkbWluL2ljb24tZm9udC90bXAvaWNvbl9rd253Zm8wMGhjYi9pY29uLXRlc3Quc3Znsc5VIwAAAABJRU5ErkJggg==",
      "alt": "icon"
    }
  }), _c('text', {
    staticClass: ["course2"]
  }, [_vm._v("返回")])]), _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: item.key,
      staticClass: ["items"]
    }, [_c('img', {
      staticClass: ["imgIcon"],
      attrs: {
        "src": item.headerImg,
        "alt": "icon"
      }
    }), _c('text', {
      staticClass: ["course"],
      on: {
        "click": function($event) {
          _vm.changeUser(item.key, item.roleId, item.schoolId, item.openId)
        }
      }
    }, [_vm._v("\r                                " + _vm._s(item.adminName) + "\r                            ")]), (item.key == _vm.adminId) ? _c('svg', {
      staticClass: ["icon"],
      attrs: {
        "t": "1572406469390",
        "viewBox": "0 0 1024 1024",
        "version": "1.1",
        "xmlns": "http://www.w3.org/2000/svg",
        "pId": "4711",
        "width": "128",
        "height": "128"
      }
    }, [_c('path', {
      attrs: {
        "d": "M74.24 526.21312a23.04 23.04 0 1 1 35.84-28.9792l215.98208 267.11552a28.16 28.16 0 0 0 41.79968 2.21184L920.6784 214.10304a23.04 23.04 0 0 1 32.57344 32.59392L400.44032 799.1552c-1.8432 1.8432-3.77856 3.584-5.80096 5.21728-31.88736 25.7792-78.63296 20.83328-104.41216-11.04896l-215.98208-267.1104z",
        "fill": "#1296db",
        "pId": "4712"
      }
    })], 1) : _c('svg', {
      staticClass: ["icon"],
      attrs: {
        "t": "1572405560014",
        "viewBox": "0 0 1024 1024",
        "version": "1.1",
        "xmlns": "http://www.w3.org/2000/svg",
        "pId": "3313",
        "width": "128",
        "height": "128"
      }
    }, [_c('path', {
      attrs: {
        "d": "M920.865573 637.722376H102.113167c-2.795673 0-5.514597 0.320295-8.133237 0.911766a36.95875 36.95875 0 0 0-18.426675 10.094916c-12.353352 12.419867-14.18814 31.399127-5.52176 45.776579a37.767162 37.767162 0 0 0 8.416693 9.992585l172.344207 173.278485c14.516622 14.59337 38.053688 14.59337 52.572356 0 14.516622-14.598486 14.516622-38.262442 0-52.856835L192.145693 713.098087h728.718857c20.554128 0 37.217646-16.873296 37.217646-37.685297 0-20.820188-16.662495-37.690414-37.216623-37.690414zM102.113167 386.467959h818.752406a36.920888 36.920888 0 0 0 7.80271-0.836041 36.917818 36.917818 0 0 0 19.774369-10.360976c14.517645-14.59644 14.517645-38.262442 0-52.855811L773.199419 146.225339c-14.515598-14.595416-38.054711-14.595416-52.571333 0-14.515598 14.594393-14.515598 38.261419 0 52.856835l111.408369 112.010073H102.113167c-20.554128 0-37.2156 16.873296-37.2156 37.689391 0 20.814048 16.660448 37.686321 37.2156 37.686321z",
        "pId": "3314",
        "fill": "#8a8a8a"
      }
    })], 1)])
  }), _c('div', {
    staticClass: ["items"],
    on: {
      "click": function($event) {}
    }
  }, [_c('img', {
    staticClass: ["imgIcon"],
    attrs: {
      "alt": "icon",
      "src": _vm.tianjia
    }
  }), _c('text', {
    staticClass: ["course1"]
  }, [_vm._v("添加或注册用户")])])], 2) : _vm._e()])], 1) : _vm._e()]), (_vm.isLoading) ? _c('loading', {
    staticClass: ["load"]
  }) : _vm._e(), _c('transition', {
    attrs: {
      "name": "name"
    }
  }, [(_vm.footer) ? _c('div', {
    staticClass: ["footer"]
  }, [_c('div', {
    staticClass: ["icon"],
    on: {
      "click": _vm.gotoINFO
    }
  }, [_c('img', {
    staticClass: ["iconImg"],
    attrs: {
      "src": _vm.routeImg,
      "alt": "在线报名"
    }
  }), _c('text', {
    staticClass: ["bao"]
  }, [_vm._v(_vm._s(_vm.routeName))])]), _c('div', {
    staticClass: ["icon"],
    on: {
      "click": _vm.gotoGRZX
    }
  }, [_c('img', {
    staticClass: ["iconImg"],
    attrs: {
      "src": "https://cdn.weipaitang.com/static/2019102806179a56-5fac-43e8-8185-363b87be4403-W32H32",
      "alt": "个人中心"
    }
  }), _c('text', {
    staticClass: ["bao"]
  }, [_vm._v("个人中心")])])]) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });