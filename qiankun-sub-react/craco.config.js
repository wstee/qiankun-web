// craco.config.js
const path = require('path');
const { name } = require('./package');
const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  plugins: [
  ],

  devServer: {
    port: 3002,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // webpack
  webpack: {
    configure: (config) => {
      config.output.library = `${name}-[name]`;
      config.output.libraryTarget = 'umd';
      // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
      // config.output.jsonpFunction = `webpackJsonp_${name}`; 
      config.output.chunkLoadingGlobal = `webpackJsonp_${name}`; 
      config.output.globalObject = 'window';
      // config.output.publicPath = `//localhost:3002`
      return config;
    },
  
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils")
    }
  }
}
