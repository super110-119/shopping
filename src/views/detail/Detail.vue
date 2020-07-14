<template>
  <div class="detail">
<!--  顶部导航栏  -->
    <detail-nav class="detail-nav"
                @detailNavClick="catNav"
                ref="navBar"/>
    <scroll
      class="detail-scroll"
      ref="scroll"
      @scroll="scrollChange"
      :probe-type="3">
      <!--  轮播图  -->
      <detail-banner :topImgs="topImages"/>
      <!--  标题  -->
      <detail-title :titles="titles"
                    :columns="columns"
                    :services = 'services'
                    :commodityName="commodityName"/>
      <!--店铺信息-->
      <detail-store :shopInfo="shopInfo" ref="store"/>
      <!-- 图片展示信息 -->
      <detail-info
        :detail-info="detailInfo"
        :detail-image="detailImage"
        @detailImgLoad="detailImgLoad"/>
      <!-- 参数 -->
      <item-params
        ref="params"
        :item-params="itemParams"
        :ItemParamsSet="ItemParamsSet"/>
      <!-- 评论 -->
      <detail-rate :detail-rate="detailRate" ref="rate"/>
<!--      推荐-->
<!--      <recommend-list :goods="goods"/>-->
      <goods-list :goods="goods" ref="recommend"/>
    </scroll>
<!-- 返回顶部 -->
    <back-top v-show="scrollTop > storeTop" @click.native="goBack"/>
<!--    加入购物车或购买-->
    <go-shopping
      ref="shop"
      @shoppingOk = 'shoppingOk'
      :goShop="goShop"
      :goShopStyle="goShopStyle"
      :goShopImage="goShopImage"
      :goShopSize="goShopSize"
      :goShopPrice="goShopPrice"/>
<!--  底部导航栏-->
    <detail-bottom-bar @isShopping="isShopping" @isMyBy="byOk"/>
<!--    加入购物车成功-->
    <div class="shopok" v-if="goShopOk">
      <div class="isshopok">
        <h4>{{ tellUser }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  import detailNav from "./detailComponents/detailNav";
  import detailBanner from "./detailComponents/detailBanner";
  import detailTitle from "./detailComponents/detailTitle";
  import detailStore from "./detailComponents/detailStore";
  import detailInfo from "./detailComponents/detailInfo";
  import detailRate from "./detailComponents/detailRate";
  import detailBottomBar from "./detailComponents/detailBottomBar";
  import itemParams from "./detailComponents/ItemParams";
  import goShopping from "./detailComponents/goShopping";

  import {getDetail, ItemParams, DetailRate, getRecommend} from 'network/detail'

  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";
  import BackTop from "components/common/backTop/BackTop";
  export default {
    name: "Detail",
    components: {
      detailNav, detailBanner, detailTitle, GoodsList, BackTop,
      detailStore, detailInfo, itemParams, goShopping,
      detailRate, Scroll , ItemParams, DetailRate, detailBottomBar
    },
    data(){
      return {
        id: null,
        topImages: [],
        titles: {},
        columns: [],
        commodityName: '',
        services: [],
        shopInfo: {},
        detailInfo: {},
        detailImage: [],
        detailRate: {},

        itemParams:{},
        ItemParamsSet: [],
        scrollY: [],

        goods: [],
        storeTop: 0,
        scrollTop: 0,
        goShopOk: false,

        isShow: 0,
        shopping: 0,
        goShop: [],
        goShopImage: [],
        goShopStyle: [],
        goShopPrice: [],
        goShopSize: [],

        tellUser: ''
      }
    },
    created() {
      this.id = this.$route.query.id
      getDetail(this.id)
        .then(res => {
          // 获取轮播图数据
          this.topImages = res.result.itemInfo.topImages
          // 获取标题等数据
          this.titles = res.result.itemInfo
          // 获取销量，收藏等数据
          this.columns = res.result.columns
          // 获取店铺名称
          this.commodityName = res.result.shopInfo.name
          // 承诺
          this.services = res.result.shopInfo.services
          // 店铺信息
          this.shopInfo = res.result.shopInfo
          // 商品详细信息
          this.detailInfo = res.result.detailInfo
          // 商品详细信息图片
          this.detailImage = res.result.detailInfo.detailImage[0]
          // 商品参数
          const myitemParams = res.result.itemParams
          this.itemParams = new ItemParams(myitemParams.info, myitemParams.rule)
          this.ItemParamsSet = myitemParams.info.set
          // 评论信息
          const result = res.result
          this.detailRate = new DetailRate(result.rate.list[0])
          // 购买/加入购物车详细信息
          this.goShop = result.skuInfo.skus
          for (let i of this.goShop){
            this.goShopImage.push(i.img)
            this.goShopStyle.push(i.style)
            this.goShopPrice.push(i.nowprice || i.price)
            this.goShopSize.push(i.size)
          }
        })

      getRecommend().then(res => this.goods = res.data.list)
    },
    methods: {
      detailImgLoad(){
        this.$refs.scroll.scroll.refresh()
        this.thisOffsetTop
        this.storeTop = this.$refs.store.$el.offsetTop
      },
      catNav(i){
        this.$refs.scroll.scroll.scrollTo(0, -this.scrollY[i] + 50, 500)
      },
      scrollChange(p){
        this.scrollTop = -p
        let [arr1, arr2, arr3, arr4] = this.scrollY
        if(-p >= arr1 && -p < arr2 - 50){
          this.isShow = 0
        }else if(-p >= arr2 - 50 && -p < arr3 - 50){
          this.isShow = 1
        }else if(-p >= arr3 - 50 && -p < arr4 - 50){
          this.isShow = 2
        }else{
          this.isShow = 3
        }
        this.$refs.navBar.defaultActive = this.isShow
      },
      goBack(){
        this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      },
      isShopping(){
        this.$refs.shop.isToShow = true
      },
      shoppingOk(obj){
        // 获取商品详细
        this.tellUser = '加入购物车成功'
        this.shopClick
        let newObj = obj
        newObj.titles = this.titles.title
        newObj.id = this.id
        // 添加到 vuex 状态管理
        this.$store.commit('addCart', newObj)
      },
      byOk(){
        this.tellUser = '暂无添加购买模块'
        this.shopClick
      }
    },
    computed: {
      thisOffsetTop(){
        this.scrollY = []
        this.scrollY.push(0)
        this.scrollY.push(this.$refs.params.$el.offsetTop)
        this.scrollY.push(this.$refs.rate.$el.offsetTop)
        this.scrollY.push(this.$refs.recommend.$el.offsetTop)
        return this.scrollY
      },
      shopClick(){
        this.goShopOk =! this.goShopOk
        setTimeout(() => {
          this.goShopOk =! this.goShopOk
        }, 1800)
      }
    }
  }
</script>

<style scoped>
  .detail{
    position: relative;
    background-color: #fff;
    height: 100vh;
  }
  .detail-scroll{
    height: calc(100vh - 93px);
    overflow: hidden;
    /*height: 100vh;*/
    width: 100vw;
    background-color: #fff;
  }
  .shopok{
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0,0,0,.6);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .isshopok{
    width: 210px;
    height: 160px;
    background-color: #fff;
    line-height: 160px;
    text-align: center;
  }
</style>
