<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <tab-bar-demo/>
  </div>
</template>

<script>
import tabBarDemo from "components/content/tabbar/tabBarDemo";
import loading from 'components/common/loading/Loading'

export default {
  name: 'App',
  components: {
    tabBarDemo, loading
  },
  data(){
    return{

    }
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
