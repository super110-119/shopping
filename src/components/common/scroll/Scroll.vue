<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: "Scroll",
    data(){
      return{
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      // 设置属性
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      // 请求下拉数据
      this.scroll.on('scroll', p => {
        this.$emit('scroll', p.y)
        this.$bus.$emit("detailBusAcroll", p.y)
      });
      // 监听上拉事件
      if(this.pullUpLoad){
        this.scroll.on('pullingUp', () => this.$emit('pullingUp'));
      }
    }
  }
</script>

<style scoped>

</style>
