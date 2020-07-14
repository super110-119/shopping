<template>
  <div class="detail-store">
    <div class="detail-store-title">
      <img :src="shopInfo.shopLogo">
      <p>{{ shopInfo.name }}</p>
    </div>
    <div class="demo">
      <div class="store">
        <div class="store-sells">
          <p class="active">{{ shopInfo.cSells }}</p>
          <p>全部销量</p>
        </div>
        <div class="store-goods">
          <p class="active">{{ shopInfo.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="score">
        <ul>
          <li v-for="(item, index) in this.shopInfo.score"
              :class="{red: item.score === 5,
                      orangered: item.score < 5 && item.score >= 4.5,
                      orange: item.score < 4.5}">
            {{ item.name }} {{ item.score }}
          </li>
        </ul>
      </div>
    </div>
    <div class="bging">
      <span>进入店铺</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailStore",
    props: {
      shopInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  .detail-store-title{
    margin: 15px 0;
    display: flex;
    align-items: center;
  }
  .detail-store-title img{
    width: 75px;
    border-radius: 50%;
    margin: 0 5px;
  }
  .detail-store-title p{
    font-size: 20px;
    color: #222;
  }
  .demo{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    width: 100%;
  }
  .demo>div{
    width: 50%;
  }
  .store{
    display: flex;
    align-items: center;
    font-size: 12px;
    justify-content: space-evenly;
    color: #333;
  }
  .active{
    font-size: 20px;
    color: #ff8198;
    margin-bottom: 5px;
  }
  .store:after{
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background-color: #ddd;
  }

  .red{
    color: #f00;
  }
  .red:before{
    content: '高';
    background-color: #f00;
    color: #fff;
    padding: 3px 5px;
    font-size: 12px;
  }

  .orangered{
    color: orangered;
  }
  .orangered:before{
    content: '中';
    background-color: orangered;
    color: #fff;
    padding: 3px 5px;
    font-size: 12px;
  }

  .orange{
    color: orange;
  }
  .orange:before{
    content: '低';
    background-color: orange;
    color: #fff;
    padding: 3px 5px;
    font-size: 12px;
  }
  ul{
    list-style: none;
    text-align: left;
    font-size: 14px;
  }
  li{
    margin: 10px 0;
  }
  .detail-store:after{
    content: '';
    width: 100%;
    height: 1px;
    background-color: #eee;
    display: block;
    margin: 25px 0;
  }
  .bging{
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 20px;
  }
  .bging span{
    padding: 10px 21px;
    background-color: #ff8198;
    font-size: 13px;
    color: #fff;
    border-radius: 6px;
  }
</style>
