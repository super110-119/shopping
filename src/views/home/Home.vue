<template>
	<div id="home">
<!--导航栏-->
    <home-nav-item/>
    <!--小形选项卡-->
    <tab-control
      :messages="['流行', '精选', '新款']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control userTabBar"
      v-show="tabControlFlex"/>
<!-- 设置滚动形式-->
    <scroll
      class="content"
      ref="scroll"
      :pull-up-load="true"
      @scroll = 'contentScroll'
      @pullingUp = 'loadMore'
      :probe-type="3">
      <!--轮播图-->
      <banner :banners="banners" @bannerImgLoad="bannerImgLoad"/>
      <!--推荐-->
      <recommend :recommends="recommends"/>
      <!--每周热门-->
      <feature/>
      <!--小形选项卡-->
      <tab-control
        :messages="['流行', '精选', '新款']"
        @tabClick="tabClick"
        ref="tabControl"
        class="tab-control"/>
      <!--商品列表-->
      <goods-list :goods="GoodsShow"/>

      <p class="toMore">---上拉加载更多---</p>
    </scroll>
    <back-top
      v-show="-scrollTop >= 640"
      @click.native="backClick"/>
	</div>
</template>

<script>
  import banner from "./homeComponents/banner";
  import recommend from './homeComponents/recommend';
  import feature from './homeComponents/feature';
  import HomeNavItem from './homeComponents/Homenav';

  import TabControl from "components/content/tebControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/common/backTop/BackTop";


  import {
    getHomeMessage, getHomeGoods
  } from "@/network/home";

  export default {
		name: 'Home',
    data(){
      return{
        result: null,
        banners: [],
        recommends: [],

        goodsType: 'pop',

        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },

        scrollTop: 0,
        tabOffsetTop: 0,
        tabControlFlex: false,
        saveY: 0
      }
    },
    components: {
      banner, recommend, feature,
      HomeNavItem, TabControl, GoodsList, Scroll, BackTop
    },
    created() {
		  // 轮播图/推荐数据
      this.HomeMessage();
      // 详细信息
      this.HomeGoods('pop');
      this.HomeGoods('new');
      this.HomeGoods('sell');
    },
    mounted() {
      // 通过 bus 传递
      this.$bus.$on('GoodItemImgLoad', () => {
        this.$refs.scroll.scroll.refresh()
      });
    },
    methods: {
		  // 事件监听
      tabClick(i){
        if(i === 0){
          this.goodsType = 'pop';
        }else if(i === 1){
          this.goodsType = 'new';
        }else{
          this.goodsType = 'sell';
        }
        this.$refs.tabControl1.isActive = i;
        this.$refs.tabControl.isActive = i;
      },
      backClick(){
        this.$refs.scroll.scroll.scrollTo(0, 0, 500);
      },
      contentScroll(p){
        this.scrollTop = p
        if(-p >= this.tabOffsetTop){
          this.tabControlFlex = true
        }else{
          this.tabControlFlex = false
        }
      },
      loadMore(){
        this.HomeGoods(this.goodsType)
      },
      bannerImgLoad(){
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },

		  // 网络请求
      HomeMessage(){
        getHomeMessage()
          .then(res => {
            this.result = res;
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
          }).catch(err => console.log(err));
      },
      HomeGoods(type){
        const page = this.goods[type].page+1;
        getHomeGoods(type, page)
          .then(res => {
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page++

            this.$refs.scroll.scroll.finishPullUp()
          })
          .catch(err => console.log(err));
      }
    },
    computed: {
		  GoodsShow(){
		    return this.goods[this.goodsType].list
      }
    },
    activated() {
      // console.log(this.saveY)
      this.$refs.scroll.scroll.scrollTo(0, this.saveY)
      this.$refs.scroll.scroll.refresh()
    },
    deactivated() {
      // console.log(this.saveY)
      this.saveY = this.scrollTop
      this.$bus.$off('scroll')
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .tab-control{
    top: 44px;
    z-index: 9;
  }
  .content{
    /*height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;*/
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    overflow: hidden;
  }
  .toMore{
    color: var(--color-tint);
    text-align: center;
    font-size: 12px;
  }
  .userTabBar{
    position: fixed;
    left: 0;
    top: 44px;
    right: 0;
  }
</style>
