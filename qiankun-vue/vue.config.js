/*
 * @Author: your name
 * @Date: 2021-08-25 17:56:00
 * @LastEditTime: 2021-08-25 17:58:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \qiankun\qiankun-vue\vue.config.js
 */
module.exports = {
    configureWebpack: {
        output: {
            library: 'singleVue',  //打包之后的类库库
            libraryTarget: 'umd',   //
        },
        devServer:{
            port:10000,
            headers:{
                'Access-Control-Allow-Origin':'*' //解决跨域问题
            }
        }
    }
}
