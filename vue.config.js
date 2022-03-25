const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../src/main/resources/static',
  indexPath: '../templates/index.html',
  lintOnSave: false,

  devServer: {
    proxy: 'http://localhost:8081',
    allowedHosts: 'all',
    
  }

});