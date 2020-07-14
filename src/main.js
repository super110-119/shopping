import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './stroe'
// view Ui 引入
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import toast from 'components/common/toast'
import FastClick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// 添加事件总线
Vue.prototype.$bus = new Vue()
// 安装自定义 toast 插件
Vue.use(toast)
// 安装 view Ui
Vue.use(ViewUI);
// 解决移动端300ms延迟
FastClick.attach(document.body)
// 使用懒加载插件
Vue.use(vueLazyLoad,{
  loading: require('./assets/img/lazyLoad/index.jpg')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
