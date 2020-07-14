<template>
  <div>
    <nav-bar fontColor="#fff" bgColor="#ff8198" class="nav">
      <div slot="left" @click="demo">
        <router-link to="/">
          <img src="~assets/img/myself/sousuo.png">
        </router-link>
      </div>
      <div slot="center">购物街</div>
      <div slot="right">
        <router-link to="/profile">
          <img src="~assets/img/myself/profile.png">
        </router-link>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";

  export default {
    name: "Homenav",
    components: {
      NavBar
    },
    methods: {
      demo(){
        this.$Message.info('搜索/查找 模块正在制作之中！');
      }
    }
  }
</script>

<style scoped>
  .nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .nav img{
    width: 24px;
    margin-top: 10px;
  }
</style>
