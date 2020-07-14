<template>
  <div class="loading">
    <div class="loading-centre">
      <div class="loading-centre-loading"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Loading",
  }
</script>

<style scoped>
  .loading{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading-centre{
    width: 150px;
    height: 120px;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
  }
  .loading-centre-loading{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 5px solid var(--color-tint);
    border-color:
      var(--color-tint)
      var(--color-tint)
      var(--color-tint)
      #ccc;
    animation: loading .8s infinite linear;
  }
  @keyframes loading {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
