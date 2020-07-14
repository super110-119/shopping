<template>
  <div class="check-button" :class="{isActive: isActive}">
    <div>{{isActive ? ok : no}}</div>
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return{
        ok: '√',
        no: ''
      }
    }
  }
</script>

<style scoped>
  .check-button{
    border: 1px solid #999;
  }
  .isActive{
    background-color: #ff8198;
    color: #fff;
    border: 1px solid #ff8198;
  }
</style>
