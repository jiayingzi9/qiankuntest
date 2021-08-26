/*
 * @Author: your name
 * @Date: 2021-08-25 16:35:58
 * @LastEditTime: 2021-08-26 14:15:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun\qiankun-base\src\main.ts
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 在主应用程序中注册子应用程序
import { registerMicroApps , start } from 'qiankun' ;



registerMicroApps([
  {
    name: 'vueApp', // app name registered
    entry: '//localhost:10001',
    container: '#vue',
    activeRule: '/vue',
    props:{a:1}
  },
  {
    name: 'reactApp', // app name registered
    entry: '//localhost:20001',
    container: '#react',
    activeRule: '/react',
  },
],
// beforeCreate这里写生命周期
);

start(
  {
    prefetch:false//取消预加载
  }
);

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
