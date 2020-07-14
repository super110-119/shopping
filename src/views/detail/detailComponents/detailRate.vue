<template>
  <div class="detailRate">
    <h5>精选评论</h5>
    <div class="box">
<!--      用户信息-->
      <div class="box-user">
        <img :src="detailRate.uimg">
        <p>
          <span>{{ detailRate.uname }}</span>
          <br>
          <span class="user-style">{{ detailRate.style }}</span>
        </p>
      </div>
<!--      评论详情-->
      <div class="box-content">
        <p>{{ detailRate.content }}</p>
        <ul>
          <li v-for="item in detailRate.extraInfo">
            {{ item }}
          </li>
        </ul>
        <div v-for="item in detailRate.images">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailRate",
    props: {
      detailRate: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  h5{
    margin: 15px;
    color: #ff8198;
  }
  h5:before{
    content: '|';
    display: inline-block;
    margin-right: 5px;
  }
  .box-user{
    font-size: 15px;
    display: flex;
    align-items: center;
  }
  .box-user img{
    width: 32px;
    margin: 0 15px;
    border-radius: 50%;
  }
  .user-style{
    font-size: 12px;
    color: #ff8198;
  }
  .box-content p{
    text-indent:2em;
  }
  .box-content:before{
    content: '';
    height: 1px;
    margin: 15px 0;
    background-color: #efefef;
    display: block;
  }
  .box-content ul{
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    color: #ff8198;
    font-size: 12px;
    margin: 15px 0;
    text-align: center;
  }
  .box-content div{
    display: inline-block;
    width: 33.3333%;
    height: 120px;
    overflow: hidden;
    padding: 0 5px;
  }
  .box-content div img{
    width: 100%;
  }
  .detailRate{
    padding-bottom: 30px;
    border-bottom: 15px solid #cdcdcd;
  }
</style>
