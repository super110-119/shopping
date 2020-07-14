<template>
  <div class="ItemParams">
    <p class="disclaimer">{{ ItemParams.disclaimer }}</p>
    <p class="desc">{{ ItemParams.desc }}</p>
    <ul class="tables">
      <li v-for="(item, index) in ItemParams.tables" :key="index">
        <ul class="tables-item">
          <li v-for="(res, index) in item" :key="index">
            {{ res }}
          </li>
        </ul>
      </li>
    </ul>
    <ul class="tables demo">
      <li v-for="item in ItemParamsSet">
        <div class="first">{{ item.key }}</div>
        <div>{{ item.value }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ItemParams",
    props: {
      ItemParams: {
        type: Object,
        default(){
          return{}
        }
      },
      ItemParamsSet:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .disclaimer{
    font-size: 13px;
    color: #ff8198;
    margin: 21px 0;
  }
  .desc{
    font-size: 14px;
    color: #ff5777;
    margin: 5px 0;
  }
  ul{
    list-style: none;
  }
  .tables-item{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    font-size: 15px;
  }
  .tables>li{
    margin: 15px 0;
  }
  .tables>li:after{
    content: '';
    display: block;
    margin-top: 5px;
    height: 1px;
    background-color: #ddd;
  }
  .demo li{
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  div{
    font-size: 12px;
  }
  .first{
    width: 65px;
    font-size: 13px;
    color: #ff8198;
  }
  .ItemParams{
    padding-bottom: 30px;
    border-bottom: 15px solid #ccc;
  }
</style>
