/*
 * @Author: your name
 * @Date: 2021-08-26 09:56:23
 * @LastEditTime: 2021-08-26 11:21:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \qiankun\qiankun-react\config-overrides.js
 */
module.exports = {
    webpack: (config) => {
      config.output.library = `reactApp`;
      config.output.libraryTarget = "umd";
      config.output.publicPath = 'http://localhost:20001/'
      return config
    },
    devServer: function (configFunction) {
      return function (proxy, allowedHost) {
        const config = configFunction(proxy, allowedHost);
        // config.port='2000',
        config.headers = {
          "Access-Control-Allow-Origin": "*",
        };
        return config;
      };
    },
  };
  