// 导入模板
import Toast from "./Toast";
// 默认导出对象
export default {
  // 执行函数的install属性
  install: function (Vue) {
    // 1. 组件构造器
    const toastContrustor = Vue.extend(Toast)
    // 2.使用 new 出来一个新的构造器，创建组件对象
    const toast = new toastContrustor()
    // 3.手动挂载到某一个 div
    toast.$mount(document.createElement('div'))
    // 4.toast.$el 就是对应的 div
    document.body.appendChild(toast.$el)
    // 5.创建方法
    Vue.prototype.$toast = toast;
  }
}

