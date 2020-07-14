<template>
  <div>
    <h4>热门推荐</h4>
    <div class="recommends">
      <div v-for="(item, index) in recommends" :key="index">
        <a href="javascript:;">
          <img :src="item.image" :alt="item.title">
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "recommend",
      props:{
        recommends:{
          type: Array,
          default(){
            return []
          }
        }
      }
    }
</script>

<style scoped>
h4{
  margin: 10px 5px;
  color: var(--color-tint);
}
h4:before{
  content: "|";
  margin: 0 5px;
}
h4:after{
  content: "";
  width: 8px;
  height: 8px;
  display: inline-block;;
  border-radius: 50%;
  background-color: var(--color-tint);
  margin: 0 5px;
}
.recommends{
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  font-size: 14px;
  padding: 12px 0 25px 0;
  border-bottom: 10px solid var(--color-tint);
}
.recommends a{
  color: var(--color-tint);
}
.recommends img{
  width: 65px;
  height: 65px;
  margin-bottom: 5px;
}

</style>
