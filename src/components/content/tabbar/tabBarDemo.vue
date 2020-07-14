<template>
	<div>
		<tab-bar>
			<tab-bar-item path='/home' fontColor="#ff5777">
				<img src="~@/assets/img/tabbar/home.svg" slot="tab-bar-ico">
				<img src="~@/assets/img/tabbar/home_active.svg" slot="tab-bar-ico-active">
				<p slot="tab-bar-text">首页</p>
			</tab-bar-item>
			<tab-bar-item path='/category'  fontColor="#ff5777">
				<img src="~@/assets/img/tabbar/category.svg" slot="tab-bar-ico">
				<img src="~@/assets/img/tabbar/category_active.svg" slot="tab-bar-ico-active">
				<p slot="tab-bar-text">分类</p>
			</tab-bar-item>
			<tab-bar-item path='/shopcart'  fontColor="#ff5777">
				<img src="~@/assets/img/tabbar/shopcart.svg" slot="tab-bar-ico">
				<img src="~@/assets/img/tabbar/shopcart_active.svg" slot="tab-bar-ico-active">
				<p slot="tab-bar-text">购物车</p>
			</tab-bar-item>
			<tab-bar-item path='/profile'  fontColor="#ff5777">
				<img src="~@/assets/img/tabbar/profile.svg" slot="tab-bar-ico">
				<img src="~@/assets/img/tabbar/profile_active.svg" slot="tab-bar-ico-active">
				<p slot="tab-bar-text">我的</p>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import tabBar from "@/components/common/TabBar/TabBar.vue"
	import tabBarItem from "@/components/common/TabBar/TabBarItem.vue"
	export default {
		name: 'tabBarDemo',
		components:{
			tabBar, tabBarItem
		}
	}
</script>

<style>
</style>
