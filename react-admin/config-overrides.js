const path = require('path');

// config-overrides.js  
const { override,addWebpackAlias } = require('customize-cra');  

module.exports = override(  
  addWebpackAlias({  
    '@': path.resolve(__dirname, 'src'), // 假设你的源代码在src目录下  
  })  
);