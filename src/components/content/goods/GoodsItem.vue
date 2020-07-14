<template>
  <div class="goods-item" @click="goodItemClick">
    <img v-lazy="showImg" @load="imgLoad">
    <div>
      <p>{{ goodItem.title }}</p>
      <span class="price">
        ￥:{{ goodItem.price }}
      </span>
      <span class="collect">
        {{ goodItem.cfav }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goodItem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imgLoad(){
        this.$bus.$emit("GoodItemImgLoad")
      },
      goodItemClick(){
        this.$router.push({
          path: '/detail',
          query: {
            id: this.iid
          }
        })
      }
    },
    computed: {
      showImg(){
        return this.goodItem.image || this.goodItem.img || this.goodItem.show.img
      },
      iid(){
        return this.goodItem.shop_id || this.goodItem.iid
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    width: 50%;
    display: inline-block;
    padding: 15px 5px;
    text-align: center;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-item p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
  }
  .goods-item span{
    font-size: 13px;
  }
  .price{
    color: var(--color-tint);
  }
  .collect:before{
    content: '☆';
    margin-left: 15px;
  }
</style>
