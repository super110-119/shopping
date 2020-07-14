<template>
  <div class="bottom-bar">
    <div class="sanAll" @click="deleteSan">
      <div>删除</div>
    </div>
    <div class="total-all">
      <p>合计:{{ totalPrice }}</p>
    </div>
    <div class="isOk" @click="jieSuan">
      结算（{{checkLength}}）
    </div>
  </div>
</template>

<script>

  export default {
    name: "BottomBar",
    computed: {
      totalPrice(){
         return '￥' + this.$store.state.cartList
           .filter(item => item.checked)
           .reduce((oldValue, value) => parseFloat(oldValue) + parseFloat(value.newprices/100 * value.num), 0)
           .toFixed(2)
      },
      checkLength(){
        return this.$store.state.cartList
          .filter(item => item.checked).length
      }
    },
    methods: {
      deleteSan(){
        this.$store.commit('deleteSan')
      },
      jieSuan(){
        if(this.checkLength === 0){
          this.$toast.show('请添加商品')
        }else{
          this.$toast.show('暂无添加购买板块')
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    width: 100%;
    height: 49px;
    position: relative;
    bottom: 49px;
    z-index: 99999;
    left: 0;
    right: 0;
    overflow: hidden;
    border-top: 1px solid #bbbbbb;
    box-sizing: border-box;
    background-color: #fafafa;
    display: flex;
  }
  .sanAll{
    width: 66px;
    margin: 5px ;
    height: 39px;
    line-height: 39px;
    text-align: center;
    background-color: #ff8198;
    color: #fff;
    border-radius: 15px;
  }
  .total-all{
    height: 49px;
    display: flex;
    align-items: center;
    margin-left: 5px;
    flex: 1;
  }
  .isOk{
    width: 120px;
    height: 49px;
    line-height: 49px;
    text-align: center;
    background-color: red;
    color: #fff;
    float: right;
  }
</style>
