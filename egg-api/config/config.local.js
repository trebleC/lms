module.exports = () => {

  const config = exports = {};

  config.mysql = {
    // 单数据库信息配置
    client: {
      // // host
      // host: 'mysql.sqlpub.com',
      // // 端口号
      // port: '3306',
      // // 用户名
      // user: 'root_dev',
      // // 密码
      // password: 'logLPS2KoBQ637us',

      // host: 'localhost',
      // port:'3310',
      // user:'root',
      // password:'123456',

      host: '127.0.0.1',
      port:'3310',
      user:'root',
      password:'123456',

      // 数据库名
      database: 'lms_api',

    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.cors = {
    // 匹配规则  域名+端口  *则为全匹配
    origin: '*',

    // 匹配请求方式
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  return {
    ...config,
  };
};
