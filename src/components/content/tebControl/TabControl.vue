<template>
  <div class="tab-control">
    <div v-for="(item, index) in messages"
         :class="{'active': index === isActive}"
          @click="itemActive(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      messages: {
        type: Array,
        default(){
          return []
        }
      },
      active: {
        type: Number,
        default: 0
      }
    },
    data(){
      return{
        isActive: this.active
      }
    },
    methods: {
      itemActive(i){
        this.isActive = i;
        this.$emit('tabClick', i);
      }
    }
  }
</script>

<style scoped>
.tab-control{
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}
  .active{
    color: var(--color-tint);
  }
  .active:after{
    content: '';
    border-bottom: 3px solid var(--color-tint);
    display: block;
    width: 100%;
    line-height: 3px;
    height: 3px;
  }
</style>
