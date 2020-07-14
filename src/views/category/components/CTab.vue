<template>
  <div class="c-tab">
    <tab-control
      @tabClick="tabClick"
      :messages="message"/>
    <scroll class="isScroll" ref="scroll">
      <goods-list :goods='isMessage'/>
    </scroll>
  </div>
</template>

<script>
  import TabControl from "components/content/tebControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import {getMoreMes} from 'network/category'
  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "CTab",
    data(){
      return{
        message: ['流行', '精选', '新款'],
        isThis: 0,
        isThat: 0,
        type: 'pop',
        isMessage: []
      }
    },
    components: {
      TabControl, GoodsList, Scroll
    },
    methods: {
      tabClick(i){
        this.isThis = i
        if(i === 0){
          this.type = 'pop'
        }else if(i === 1){
          this.type = 'new'
        }else{
          this.type = 'sell'
        }
        this.getMes
      }
    },
    props: {
      mesList: {
        type: Array,
        default(){
          return []
        }
      },
      mk: {
        type: Array,
        default(){
          return []
        }
      },
      mwk: {
        type: Array,
        default(){
          return []
        }
      },
      demo:{
        type: Function,
        default(){
          return function () {

          }
        }
      }
    },
    mounted() {
      this.$bus.$on('myCategory', i => {
        this.isThat = i
        this.getMes
      })
      this.$bus.$on('GoodItemImgLoad', () => {
        this.$refs.scroll.scroll.finishPullUp()
      })
    },
    computed: {
      getMes(){
        getMoreMes(
          this.mk[this.isThat],
          this.mwk[this.isThat],
          this.type
        ).then(res => this.isMessage = res.data)
      }
    },
    created() {
      setTimeout(() => {
        this.getMes
      }, 500)
    }
  }
</script>

<style scoped>
  .c-tab{
    height: 100vh;
    overflow: hidden;
  }
  .isScroll{
    height: calc(100% - 120px);
    overflow: hidden;
  }
</style>
