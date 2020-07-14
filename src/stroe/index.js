// 导入 vue 与 vuex
import Vue from 'vue'
import Vuex from 'vuex'
//导入子主题
import mutations from "./mutations";
import getters from "./getters";
// 安装插件
Vue.use(Vuex)
// 创建 state 实例
const state = {
  // 存储购物车商品信息
  cartList: [],
  // 存储显示勾选的信息
  isCheckTrue: 0
}
// 创建 store 对象
const store = new Vuex.Store({
  state,
  mutations,
  getters,
})
// 导出实例
export default store
