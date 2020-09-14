const path = require("path");

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
 
    devServer: { 
      proxy: { 
        '/api': { 
          target: 'http://localhost:3000/api',
          changeOrigin: true, 
          pathRewrite: { 
            '^/api': ''
          } 
        } 
      } 
    },
    outputDir: '../backend/public',  //생성되는 파일들은 백엔드 서버가 사용할 수 있다. 

}