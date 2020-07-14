<template>
  <div class="login">
<!--    导航栏-->
    <nav-bar class="login-nav">
      <div slot="left" @click="goBack">
        <Icon type="ios-arrow-dropleft" />
      </div>
    </nav-bar>
<!--    标题-->
    <h1>登录</h1>
<!--    微信登录-->
    <div class="weiXin" @click="demo">
      <Icon type="ios-chatbubbles" />
      <span>微信登录</span>
    </div>
<!--  横线  -->
    <div class="henGang"></div>
<!--其他-->
    <div>其他登录方式</div>

    <div class="Others">
      <div class="other-np" @click="demo">
        <Icon type="md-contact" />
        <span>免密登录</span>
      </div>
      <div class="other-zh" @click="demo">
        <Icon type="ios-contact" />
        <span>账号密码</span>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import toast from "../../components/common/toast";
  export default {
    name: "Logins",
    components: {
      NavBar
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      demo(){
        this.$toast.show('正在努力开发中！！！', 1500, function () {

        })
      }
    }
  }
</script>

<style scoped>
  .login{
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 9999;
    background-color: #fff;
    text-align: center;
  }
  .login-nav{
    font-size: 28px;
    font-weight: 700;
  }
  h1{
    text-align: center;
    font-family: "楷体";
    font-size: 36px;
    margin: 30px 0;
  }
  .weiXin{
    text-align: center;
    background-color: rgb(9,187,7);
    color: #fff;
    margin: 0 15%;
    padding: 20px 0;
    font-size: 21px;
    border-radius: 40px;
  }
  .weiXin i{
    margin: 0 5px;
  }
  .henGang{
    margin: 50px auto;
    width: 100px;
    height: 1px;
    background-color: #bbbbbb;
  }
  .Others{
    display: flex;
    justify-content: space-evenly;
    margin: 30px;
  }
  .Others i{
    font-size: 45px;
  }
  .Others div{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
