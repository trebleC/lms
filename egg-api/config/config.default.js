/* eslint valid-jsdoc: "off" */

const CryptoJS = require('crypto-js');
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1718589943161_1734';
  config.prefix =  '/lsm-api/v1'
  // add your middleware config here

  config.tokenWhiteList = [ '/admin/login', '/app/lend_list/selfList',
    '/class_info/list', '/book_info/list', '/book_info/search', '/book_info/detail'
   ].map(item => config.prefix + item)

  // add your middleware config here
  config.middleware = [ 'jwtPars', 'errorHandler' ];

config.jwtPars = {
    match(ctx) {
      const { request } = ctx;
      const { url } = request;
      const urls = url.split('?');
      const result =  !url.includes('cover') && !config.tokenWhiteList.includes(urls[0]);
      return result;
    },
  };
  // 鉴权
  config.jwt = {
    secret: 'wentanshudianABC',
    sign: {
      // 多少时间后到期。以秒表示或描述时间跨度zeit / ms的字符串。如60，“2 days”，“10h”，“7d”，Expiration time，过期时间
      expiresIn: '1 days', // 多少s后过期。actionToken.js中,jwt.sing(plyload,secret,{expiresIn:number})会被合并，调用时设置优先级更高;
    },
  };
  // 秘钥
  config.KEY = CryptoJS.enc.Utf8.parse('sdghj7df7h23jhy9yh94'); // 20位
  config.IV = CryptoJS.enc.Utf8.parse('gysd7sdg87g2487crhhu');

  // 关闭crsf,开启跨域
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // 上传文件
  config.multipart = {
    fileSize: '5mb',
    mode: 'file',
    fileExtensions: [ '.xlsx', '.xls','jpg','png' ],
  };

  config.cluster = {
    listen: {
      port: process.env.NODE_ENV === "production"? 7001: 7010,
      hostname: '0.0.0.0', // 不建议设置为 '0.0.0.0'，可能导致外部连接风险，请了解后使用
      // path: '/var/run/egg.sock',
    },
  };

  // config.alinode = {
  //   // 从 `Node.js 性能平台` 获取对应的接入参数
  //   appid: '93723',
  //   secret: 'a441f6beddc3354ac5f27e29f2842c5f492606ee',
  // };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'app/public'),
    // maxAge: 365 * 24 * 60 * 60 * 1000, // in milliseconds
    buffer: true,
  }

  return {
    ...config,
    ...userConfig,
  };
};
