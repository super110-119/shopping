<template>
  <div class="user">
    <div class="user-icon" @click="iconClick">
      <Icon type="md-person" />
    </div>
    <div class="user-loder" @click="login">
      <h1>
        <span>登录</span>/<span>注册</span>
      </h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Puser",
    methods: {
      login(){
        /*this.$Notice.info({
          title: '小刘正在努力创造登录页面'
        });*/
        this.$router.push('/login')
      },
      iconClick(){
        this.$Notice.warning({
          title: '头像暂时无法更改！'
        });
      }
    }
  }
</script>

<style scoped>
  .user{
    display: flex;
    align-items: center;
    margin: 20px 30px;
  }
  .user-icon{
    width: 100px;
    height: 100px;
    border: 5px solid #ff8198;
    box-sizing: border-box;
    border-radius: 50%;
    margin: 10px;
    font-size: 65px;
    text-align: center;
    line-height: 80px;
    color: #ff8198;
  }
  .user-loder{
    color: #ff8198;
    font-family: "楷体";
    font-size: 16.5px;
  }
</style>
