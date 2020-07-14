<template>
	<div class="Category">
<!--    导航栏-->
    <c-nav-bar
      :mes-list="mylist"
      :listitem="listitem"/>
<!--    分页栏-->
    <c-tab
      :mwk="miniWallkey"
      :demo="demo"
      :mk="maitKey"/>
	</div>
</template>

<script>
  import CNavBar from "./components/CNavBar";
  import CTab from "./components/CTab";

  import {getMessAge} from 'network/category'

	export default {
		name: 'Category',
    data(){
		  return{
		    mylist: [],
        listitem: [],
        maitKey: [],
        miniWallkey: [],
        demo: function () {
		      return new Promise()
        }
      }
    },
    components: {
      CNavBar, CTab
    },
    created() {
      getMessAge().then(res => {
        for (let i of res.data.data.category.list){
          let obj = {}
          obj.maitKey = i.maitKey
          obj.miniWallkey = i.miniWallkey
          this.mylist.push(obj)
          this.listitem.push(i.title)
        }
        for(let i of this.mylist){
          this.maitKey.push(i.maitKey)
          this.miniWallkey.push(i.miniWallkey)
        }
      })
    }
  }
</script>

<style scoped>

</style>
