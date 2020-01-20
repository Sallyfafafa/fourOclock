const Utils = {
    env: {
        isTrip () {
            const { appName } = weex.config.env;
            return appName === 'LX';
        },
        isWeb () {
            const { platform } = weex.config.env;
            return typeof (window) === 'object' && platform.toLowerCase() === 'web';
        },
        isIOS () {
            const { platform } = weex.config.env;
            return platform.toLowerCase() === 'ios';
        },
        /**
         * 是否为 iPhone X
         * @returns {boolean}
         */
        isIPhoneX () {
            const { deviceHeight } = weex.config.env;
            if (Utils.env.isWeb()) {
                return typeof window !== undefined && window.screen && window.screen.width && window.screen.height && (parseInt(window.screen.width, 10) === 375) && (parseInt(window.screen.height, 10) === 812);
            }
            return Utils.env.isIOS() && deviceHeight === 2436;
        },
        isAndroid () {
            const { platform } = weex.config.env;
            return platform.toLowerCase() === 'android';
        },
        /**
         * 获取weex屏幕真实的设置高度，需要减去导航栏高度
         * @returns {Number}
         */
        getPageHeight () {
            const { env } = weex.config;
            const navHeight = Utils.env.isWeb() ? 0 : (Utils.env.isIPhoneX() ? 176 : 0);
            return env.deviceHeight / env.deviceWidth * 750 - navHeight;
        },
        /**
         * 获取weex屏幕真实的设置高度
         * @returns {Number}
         */
        getScreenHeight () {
            const { env } = weex.config;
            return env.deviceHeight / env.deviceWidth * 750;
        }
    },
};

export default Utils;
