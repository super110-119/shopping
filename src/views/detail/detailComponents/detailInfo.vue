<template>
  <div class="detailInfo">
    <p>{{ detailInfo.desc }}</p>
    <h5>{{ detailImage.key }}</h5>
    <ul>
      <li v-for="(item, index) in detailImage.list" :key="index">
        <img v-lazy="item" @load="detailImgLoad">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "detailInfo",
    props: {
      detailInfo: {
        type: Object,
        default(){
          return{}
        }
      },
      detailImage: {
        default() {
          return {};
        }
      }
    },
    data(){
      return{
        index: 0
      }
    },
    computed: {
      data(){
        return this.detailInfo && this.detailInfo.detailImage[0]
      },
      title(){
        return this.data.key
      },
      message(){
        return this.data.list
      }
    },
    methods: {
      detailImgLoad(){
        this.index++
        if(this.index === this.detailImage.list.length)
          this.$emit('detailImgLoad')
      }
    }
  }
</script>

<style scoped>
  p{
    text-indent:2em;
    font-size: 15px;
    color: #444;
  }
  p:after{
    content: '';
    height: 1px;
    background-color: #ccc;
    display: block;
    margin: 15px 0;
  }
  h5{
    margin: 10px 15px;
  }
  ul{
    list-style: none;
    width: 100%;
  }
  img{
    width: 100%;
  }
  .detailInfo{
    padding-bottom: 30px;
    border-bottom: 15px solid #ddd;
  }
</style>
