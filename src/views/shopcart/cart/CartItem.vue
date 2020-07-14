<template>
  <div class="cart-item">
    <div class="check-button">
<!--      选择按钮-->
      <check-button
        class="btn-item"
        @click.native="checkClick"
        :is-active="message.checked"/>
    </div>
    <div class="item" @click="goThis">
      <div class="item-img">
        <img :src="message.image">
      </div>
      <div class="item-mes">
        <div class="item-titles">
          <h3>{{ message.titles }}</h3>
        </div>
        <p>描述：{{message.styles}}</p>
        <div class="item-message">
          <ul>
            <li>型号： {{message.isSize}}</li>
            <li>数量：{{message.num}}</li>
          </ul>
          <ul>
            <li>￥：{{ prices }}</li>
            <li>总价： {{ allprices }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  export default {
    name: "CartItem",
    components: {
      CheckButton
    },
    props: {
      message: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    computed: {
      prices(){
        return (this.message.newprices/100).toFixed(2)
      },
      allprices(){
        return (this.prices * this.message.num).toFixed(2)
      }
    },
    methods: {
      checkClick(){
        this.message.checked = !this.message.checked
      },
      goThis(){
        this.$router.push({
          path: '/detail',
          query: {
            id: this.message.id
          }
        })
      }
    }
  }
</script>

<style scoped>
  .cart-item{
    display: flex;
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
    margin: 25px 0;
  }
  .item{
    flex: 1;
    display: flex;
  }
  .item-img{
    width: 110px;
    border-radius: 5px;
    height: 120px;
    overflow: hidden;
  }
  .item-mes{
    flex: 1;
    margin-left: 8px;
  }
  .item-titles{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  img{
    width: 100%;
  }
  ul{
    list-style: none;
    flex: 1;
  }
  .item-message{
    display: flex;
  }
  li{
    margin: 5px 0;
    color: #ff5777;
  }
  .check-button{
    width: 45px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-item{
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
  }
</style>
