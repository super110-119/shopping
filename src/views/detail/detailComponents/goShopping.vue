<template>
  <div class="is-shop" v-if="isToShow">
    <scroll class="shop-scroll" ref="scroll">
      <div class="big-img">
        <div class="img">
          <img v-lazy="image">
        </div>
        <div class="data">
          <h5>{{ styles }}</h5>
          <p>￥：{{ nowprice }}</p>
          <p>型号：{{ goShopSize[thisActive] }}</p>
        </div>
        <div class="num">
          <button @click="num++">+</button>
          <span>{{ num }}</span>
          <button @click="num<=1 ? 1 : num--">-</button>
          <p>总价：￥{{num * nowprice}}</p>
        </div>
      </div>
      <div class="small-img">
        <ul>
          <li v-for="(item, index) in goShopImage"
              :class="{active: index === thisActive}"
              @click="changeShop(index)"
              :key="index">
            <img :src="item" @load="imgLoad">
          </li>
        </ul>
      </div>
      <div class="isok">
        <div class="ok" @click="myShopIsOk">确定</div>
        <div class="no" @click="isToShow =! isToShow">取消</div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "goShopping",
    components: {
      Scroll,
    },
    props: {
      goShop: {
        type: Array,
        default(){
          return []
        }
      },
      goShopImage: {
        type: Array,
        default() {
          return []
        }
      },
      goShopStyle: Array,
      goShopPrice: Array,
      goShopSize: Array
    },
    data(){
      return{
        thisActive: 0,
        num: 1,
        isToShow: false
      }
    },
    methods: {
      changeShop(i){
        this.thisActive = i
        this.num = 1
      },
      myShopIsOk(){
        const obj = {};
        obj.image = this.goShopImage[this.thisActive];
        obj.num = this.num
        obj.newprices = this.goShopPrice[this.thisActive]
        obj.isSize = this.goShopSize[this.thisActive]
        obj.styles = this.goShopStyle[this.thisActive]
        this.$emit('shoppingOk', obj)
        this.isToShow =! this.isToShow
      },
      imgLoad(){
        this.$refs.scroll.scroll.refresh()
      }
    },
    computed: {
      nowprice(){
        return this.goShopPrice[this.thisActive] / 100 .toFixed(2)
      },
      image(){
        return this.goShopImage[this.thisActive]
      },
      styles(){
        return this.goShopStyle[this.thisActive]
      }
    }
  }
</script>

<style scoped>
  .shop-scroll{
    width: 100vw;
    height: 210px;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 50px;
    z-index: 100;
    overflow: hidden;
  }
  .img{
    width: 80px;
    height: 80px;
    overflow: hidden;
    margin: 0 15px;
  }
  img{
    width: 100%;
  }
  .big-img{
    display: flex;
    margin: 15px 0;
  }
  h5{
    margin: 10px 0;
    font-size: 16px;
  }
  ul{
    list-style: none;
  }
  .small-img ul{
    display: flex;
    flex-wrap: wrap;
  }
  .small-img ul li{
    width: 50px;
    height: 50px;
    margin: 5px;
    overflow: hidden;
  }
  .data p{
    font-size: 12px;
  }
  .active{
    border: 3px solid #ff8198;
    box-sizing: border-box;
  }
  .isok{
    width: 100%;
    height: 60px;
    display: flex;
    text-align: center;
    margin: 15px 0;
  }
  .isok div{
    width: 80%;
    padding: 15px 25px;
    flex: 1;
    margin: 2px 15px;
    color: #fff;
  }
  .ok{
    background-color: #ff5777;
  }
  .isok div.no{
    background-color: greenyellow;
    color: #222;
  }
  .num{
    margin: 20px;
  }
  .num p{
    margin-top: 5px;
    font-size: 14px;
  }
  .num button{
    width: 21px;
  }
  .num span{
    margin: 0 10px;
  }
</style>
