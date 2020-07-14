<template>
  <div class="cart-list">
    <scroll class="mesList" ref="scroll">
      <h4 v-show="isShow">
        购物车空空如也，快去购物吧
        <router-link to="/home">首页</router-link>
      </h4>
      <cart-item
        v-for="(item, index) in list"
        :key="index"
        :message="item"/>
    </scroll>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Scroll from "components/common/scroll/Scroll";
  import CartItem from "./CartItem";
  export default {
    name: "CartList",
    components: {
      Scroll, CartItem
    },
    computed: {
      ...mapGetters({
        'list': 'cartList'
      }),
      isShow(){
        if(this.list.length > 0){
          return false
        }else{
          return true
        }
      }
    },
    activated() {
      this.$refs.scroll.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list{
    height: 100%;
  }
  .mesList{
    width: 100%;
    height: calc(100% - 49px);
    overflow: hidden;
  }
  h4{
    text-align: center;
    margin: 15px 0;
  }
  a{
    color: #ff5777;
  }
</style>
