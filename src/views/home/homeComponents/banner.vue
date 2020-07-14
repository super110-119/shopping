<template>
  <div>
    <Swiper>
      <Swiper-item v-for="(item, index) in banners" :key="index">
        <a href="javascript:;" :title="item.title">
          <img :src="item.image" :alt="item.title" @load="BannerLoad">
        </a>
      </Swiper-item>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "banner",
    components: {
      Swiper, SwiperItem
    },
    props: {
      banners:{
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data(){
      return{
        isLoad: false
      }
    },
    methods: {
      BannerLoad(){
        if(!this.isLoad)
          this.$emit('bannerImgLoad');
          this.isLoad = true;
      }
    }
  }
</script>

<style scoped>

</style>
