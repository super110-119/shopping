<template>
  <div class="detail-nav">
    <navbar bgColor="rgba(255, 255, 255, .6)">
      <div slot="left">
        <div class="detail-back" @click="BackHome">
          <img src="~assets/img/common/back.svg">
        </div>
      </div>
      <div slot="center">
        <ul class="title-list">
          <li
            v-for="(item, index) in titles"
            :class="{active: defaultActive === index}"
            @click="titleClick(index)"
          >{{ item }}</li>
        </ul>
      </div>
    </navbar>
  </div>
</template>

<script>
  import navbar from 'components/common/navbar/NavBar'

  export default {
    name: "detailNav",
    components:{
      navbar
    },
    data(){
      return{
        titles: ['商品', '参数', '评论', '推荐'],
        defaultActive: 0
      }
    },
    methods: {
      titleClick(i) {
        this.defaultActive = i
        this.$emit('detailNavClick', i)
      },
      BackHome() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  li{
    list-style: none;
  }
  .title-list{
    display: flex;
    justify-content: space-evenly;
    font-size: 13px;
  }
  .detail-back{
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detail-back img{
    width: 18px;
  }
  .active{
    color: #ff8198;
  }
</style>
