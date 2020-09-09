const path = require('path');
//const {resolve} = require("core-js/fn/promise");
//const resolve = loc => path.resolve(_dirname, loc);

module.exports = {
    devServer:{
        proxy:{
            '/Game03':{
                target:'http://localhost:8383/WlanGame',
                ws:true,
                changeOrigin:true,
                pathRewirte:{
                    '^/Game03':''
                }
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        }
    },
    pages:{
        index:{
            entry:'src/pages/index/main.js', 
            template:'public/index.html', 
            filename:'index.html'           
        },
        page03:{
            entry:'src/pages/page03/main.js',
            templage:'public/page03.html', 
            filename:'page03.html'
        }
}
}


/**
 * require() : module.exports를 리턴한다. 모듈 리턴 함수
 * module.exports : 함수가 모듈화된 결과물
 * 
 * pages : 진입점
 * entry : 진입파일
 * template : index가 html이 될 파일 - meta info 공유
 * filename : 배포할 파일 릴리즈(default folder : /dist/) - 릴리즈 위치는 변경 가능
 */