<template>
  <div class="bottom-bar">
    <div class="ico">
      <ul>
        <li>
          <i class="kf"></i>
          <p>客服</p>
        </li>
        <li>
          <i class="dp"></i>
          <p>店铺</p>
        </li>
        <li>
          <i class="sc"></i>
          <p>收藏</p>
        </li>
      </ul>
    </div>
    <div class="do">
      <div class="jrgwc" @click="shopping">加入购物车</div>
      <div class="gm" @click="isBy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailBottonBar",
    methods: {
      shopping(){
        this.$emit('isShopping')
      },
      isBy(){
        this.$emit('isMyBy')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    height: 49px;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
  }
  li{
    list-style: none;
  }
  .ico, .do{
    width: 100%;
  }
  .ico ul{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 6px;
  }
  .ico ul li{
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
  }
  .ico ul li i{
    width: 22px;
    height: 22px;
    display: block;
    background-image: url("~assets/img/detail/detail_bottom.png");
    background-size: cover;
  }
  .kf{
    background-position: -22px -54px;
  }
  .dp{
    background-position: -22px -100px;
  }
  .do{
    display: flex;
    justify-content: space-evenly;
    line-height: 49px;
    text-align: center;
    font-size: 13px;
  }
  .jrgwc{
    width: 100%;
    color: #222;
    background-color: gold;
  }
  .gm{
    width: 100%;
    background-color: #ff8198;
    color: #fff;
  }
</style>
