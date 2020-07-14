<template>
	<div id="TabBar" :style="TabBgColor">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "TabBar",
		props:{
			bgColor:{
				type: String,
				default: "#eee"
			},
			Height:{
				type: String,
				default: '49'
			}
		},
		computed:{
			TabBgColor(){
				return {
				  'backgroundColor': this.bgColor,
          'height': this.Height + 'px'
				}
			}
		}
	}
</script>

<style scoped>
	#TabBar{
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		box-shadow: 0 2px 3px #bbb;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
    z-index: 99;
    border-top: 1px solid #c9c9c9;
	}
</style>
