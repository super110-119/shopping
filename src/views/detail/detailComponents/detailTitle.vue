<template>
  <div class="synopsis">
    <h3>{{ title }}</h3>
    <p><span class="price">{{ titles.price }}</span>
       <span><s>{{titles.oldPrice}}</s></span></p>
    <div class="detail-title-after">
      <ul>
        <li v-for="item in columns">{{item}}</li>
      </ul>
    </div>
    <div class="detail-title-after">
      <ul class="next">
        <li v-for="item in services">
          <img :src="item.icon">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailSynopsis",
    data(){
      return{
        demo: ''
      }
    },
    props: {
      titles: {
        type: Object,
        default(){
          return {}
        }
      },
      columns: {
        type: Array,
        default() {
          return [];
        }
      },
      commodityName: String,
      services: {
        type: Array,
        default(){
          return []
        }
      }
    },
    computed: {
      title(){
        let name = '【' + this.commodityName + '】';
        let data = this.titles.title
        return name + data;
      }
    }
  }
</script>

<style scoped>
  h3{
    font-size: 19px;
    color: #111;
    margin: 8px 0;
  }
  .price{
    font-size: 25px;
    color: #ff5777;
    margin: 0 10px;
  }
  p:before{
    content: '惊爆价';
    padding: 5px 8px;
    border-radius: 5px;
    margin-left: 5px;
    background-color: #ff8198;
    color: #fff;
    font-size: 9px;
  }
  ul{
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0;
    font-size: 12px;
  }
  .detail-title-after:after{
    content: '';
    display: block;
    height: 1px;
    background-color: #ccc;
    margin-top: 15px;
  }
  img{
    width: 10px;
  }
  .next{
    font-size: 10px;
    justify-content: space-around;
  }
  .next li{
    display: flex;
    align-items: center;
  }
</style>
