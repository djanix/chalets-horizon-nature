'use strict';

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (config, webpack) => {
  config.plugins.push(new MonacoWebpackPlugin());

  return config;
};
