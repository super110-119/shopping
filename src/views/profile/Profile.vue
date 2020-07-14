<template>
  <div class="me">
    <puser/>
    <p-more-mes/>
  </div>
</template>

<script>
  import Puser from "./PComponents/Puser";
  import PMoreMes from "./PComponents/PMoreMes";
	export default {
		name: "Profile",
    components: {
      Puser, PMoreMes
    }
	}
</script>

<style scoped>

</style>
