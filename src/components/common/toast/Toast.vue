<template>
  <div class="toast" v-if="isShow">
    <div class="toast-item">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return{
        isShow: false,
        message: ''
      }
    },
    methods: {
      show(mes, time = 2500, fn){
        fn = fn || function () {

        };
        this.isShow = true;
        this.message = mes;

        setTimeout(() => {
          this.isShow = false;
          this.message = '';
          fn()
        }, time)
      }
    }
  }
</script>

<style scoped>
.toast{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.78);
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .toast-item{
    width: 210px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #222222;
    background-color: #eee;
  }
</style>
