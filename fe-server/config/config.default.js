/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1593821655233_8224';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'sqlite',
    storage: './mw.db',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',

  };

  return {
    ...config,
    security: {
      csrf: {
        enable: false,
      },
    },
    ...userConfig,
  };
};
