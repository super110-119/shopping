<template>
  <div class="more-mes">
    <ul class="goods" @click="demo">
      <li>
        <Icon type="ios-bookmarks" />
        <span>待付款</span>
      </li>
      <li>
        <Icon type="ios-share" />
        <span>待分享</span>
      </li>
      <li>
        <Icon type="ios-time" />
        <span>待发货</span>
      </li>
      <li>
        <Icon type="ios-plane" />
        <span>待收货</span>
      </li>
      <li>
        <Icon type="ios-happy" />
        <span>待评价</span>
      </li>
      <li>
        <Icon type="ios-pin-outline" />
        <span>收货地址</span>
      </li>
      <li>
        <Icon type="ios-headset-outline" />
        <span>客服</span>
      </li>
      <li>
        <Icon type="ios-settings-outline" />
        <span>设置</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "PMoreMes",
    methods: {
      demo(){
        this.$Notice.error ({
          title: '该功能暂未开放！'
        });
      }
    }
  }
</script>

<style scoped>
  .goods{
    list-style: none;
    margin: 0 15px;
    font-size: 19px;
  }
  .goods li{
    margin: 10px 0;
    border-top: 1px solid #eee;
    padding-top: 15px;
    color: #2baee9;
    /*color: #ff8198;*/
    /*color: #9a9a9a;*/
  }
  i{
    margin: 0 15px;
    user-select: none;
  }
  li:after{
    content: '>';
    float: right;
  }
  li:nth-child(odd){
    color: #ff8198;
  }
</style>
