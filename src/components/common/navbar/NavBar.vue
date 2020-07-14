<template>
  <div class="nav-bar" :style="NavStyle">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      bgColor: {
        type: String,
        default: '#fff'
      },
      fontColor: {
        type: String,
        default: '#656565'
      }
    },
    computed: {
      NavStyle(){
        return {
          'color': this.fontColor,
          'backgroundColor': this.bgColor
        }
      }
    }
  }
</script>

<style scoped>
  .nav-bar{
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(99,99,99,0.1);
    display: flex;
    font-size: 17px;
  }
  .left, .right{
    width: 56px;
  }
  .center{
    flex: 1;
  }
</style>
