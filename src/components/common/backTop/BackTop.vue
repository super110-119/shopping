<template>
  <div class="back-top" :style="BackTopStyle">
    <span>↑</span>
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    props: {
      backTopWidth: {
        type: Number,
        default: 32
      },
      bgColor: {
        type: String,
        default: '#fff'
      },
      fontColor: {
        type: String,
        default: '#ff8198'
      },
      toBottom: {
        type: Number,
        default: 64
      },
      toRight: {
        type: Number,
        default: 15
      },
      fontSize: {
        type: Number,
        default: 21
      }
    },
    computed: {
      BackTopStyle(){
        return{
          'width': this.backTopWidth + 'px',
          'height': this.backTopWidth + 'px',
          'color': this.fontColor,
          'backgroundColor': this.bgColor,
          'bottom': this.toBottom + 'px',
          'right': this.toRight + 'px',
          'fontSize': this.fontSize + 'px',
        }
      }
    }
  }
</script>

<style scoped>
.back-top{
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
}
</style>
