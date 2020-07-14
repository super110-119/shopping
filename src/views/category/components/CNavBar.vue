<template>
  <div>
    <nav-bar>
      <div slot="left">
        <Button @click="value1 = true" ghost type="primary">更多</Button>
        <Drawer title="分类详情" :closable="false" v-model="value1">
          <ul>
            <li v-for="(item, index) in listitem"
                :class="{active: index === isShow}"
                @click="itemClick(index)"
                :key="index">
              {{ item }}
            </li>
          </ul>
        </Drawer>
      </div>
      <div slot="center">
        <p>{{ listitem[isShow] }}</p>
      </div>
      <div slot="right">分类</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "CNavBar",
    components: {
      NavBar
    },
    data () {
      return {
        value1: false,
        isShow: 0
      }
    },
    props: {
      mesList: {
        type: Array,
        default(){
          return []
        }
      },
      listitem: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      itemClick(i){
        this.isShow = i,
        this.$bus.$emit('myCategory', i)
        this.$Message.info("你已经成功更换为：" + this.listitem[this.isShow])
      }
    }
  }
</script>

<style scoped>
li{
  list-style: none;
  font-size: 18px;
  margin: 5px;
}
  .active{
    color: #2d8cf0;
  }
</style>
