<template>
	<div class="shop-cart">
<!--    顶部导航属性-->
    <nav-bar bgColor="#ff8198" fontColor="#fff">
      <div slot="left"
           class="is-all"
           @click="isAll">
        <check-button
          class="is-check"
          :isActive="checkAll"
          :class="{thisactive: checkAll}"/>
        <span>全选</span>
      </div>
      <div slot="center">
        购物车（{{ length }}）
      </div>
      <div slot="right"
           @click="sanChange"
           class="checks">反选</div>
    </nav-bar>
<!--    列表-->
    <cart-list class="list"/>
<!--    底部导航栏-->
    <bottom-bar/>
	</div>
</template>

<script>
  import CartList from "./cart/CartList";
  import BottomBar from "./cart/BottomBar";

  import NavBar from "components/common/navbar/NavBar";
  import CheckButton from "components/content/checkButton/CheckButton";

  import { mapGetters } from 'vuex'
	export default {
		name: 'Shopcart',
    components: {
      NavBar,
      CartList,
      BottomBar,
      CheckButton
    },
    computed: {
		  // 使用数组
		  /*...mapGetters([
		    'cartLength',
        'cartList'
      ])*/
		  // 使用对象
      ...mapGetters({
        'length': 'cartLength',
        'list': 'cartList'
      }),
      checkAll(){
        if(this.length === 0) return false
        for(let i of this.list){
          if(!i.checked){
            return false
          }
        }
        return true
      }
    },
    methods: {
      isAll(){
        if(this.checkAll){
          this.$store.commit('allNotCheck')
          return
        }
        this.$store.commit('allCheck')
      },
      sanChange(){
        this.$store.commit('sanChange')
      }
    }
	}
</script>

<style scoped>
  .shop-cart{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .list{
    height: calc(100% - 93px);
    overflow: hidden;
  }
  .checks{
    height: 36px;
    align-items: center;
    font-size: 14px;
    text-align: center;
    background-color: #eff;
    color: #ff8198;
    margin: 3px 0;
    border-radius: 15px;
    line-height: 36px;
  }
  .is-all{
    display: flex;
    align-items: center;
  }
  .is-check{
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .thisactive{
    background-color: #fff;
    color: #222;
    text-align: center;
    line-height: 20px;
  }
</style>
