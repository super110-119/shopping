<template>
	<div class="tabbaritem" @click="isShow">
		<div v-if="isActive">
			<slot name="tab-bar-ico"></slot>
		</div>
		<div v-else>
			<slot name="tab-bar-ico-active"></slot>
		</div>
		<div :style="{'color': isActive ? Color : fontColor}">
			<slot name="tab-bar-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		methods:{
			isShow(){
				this.$router.push(this.path)
			}
		},
		props:{
			fontColor:{
				type: String,
				default: "#f00"
			},
			path: {
				type: String
			},
			Color:{
				type: String,
				default: "#232323"
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) === -1
			}
		}
	}
</script>

<style scoped>
	.tabbaritem{
		text-align: center;
		font-size: 14px;
		display: flex;
		flex-direction: column;
    justify-content: center;
	}
	.tabbaritem img{
		width: 21px;
		height: 21px;
    vertical-align:middle
	}
</style>
