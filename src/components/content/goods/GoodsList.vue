<template>
  <div class="goods">
    <goods-item
      v-for="(item, index) in goods"
      :key="index"
      :good-item="item"/>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem";
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      GoodsItem
    }
  }
</script>

<style scoped>

</style>
