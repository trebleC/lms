module.exports = () => {

    const config = exports = {};
  
    config.mysql = {
      // 单数据库信息配置
      client: {
        host: 'book_db',//'localhost',
        port: '3306',
        // user: 'bookadmin',
        // password: 'Zeshaaipei9896!!',
        user: 'root',
        password: 'example',
        database: 'lms_api',
    },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    };
    return {
      ...config,
    };
  };
  