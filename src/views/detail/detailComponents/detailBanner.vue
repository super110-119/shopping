<template>
  <swiper class="detail-banner">
    <swiper-item v-for="(item, index) in topImgs" :key="index">
      <img :src="item">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "detailBanner",
    components:{
      Swiper, SwiperItem
    },
    props: {
      topImgs: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-banner{
    height: 350px;
    overflow: hidden;
  }
</style>
