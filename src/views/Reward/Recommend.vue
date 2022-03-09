<template>
  <div class="recommendation  col-md-6">
    <div class="re-title row">
      <div class="col-1 bg-success"></div>
      <div class="col-9">Recommendation</div>
      <div class="col-2 bg-light text-center"><router-link :to="{name:'AddRecom'}">Add</router-link></div>
    </div>
    <div class="re-details">
      <ul>
        <li v-for="(recom,index) in this.$store.state.recoms" :key="recom.id" @click="detail">
          <p>{{ recom.coin }}</p>
          <a href="#">{{ recom.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  components: {},
  methods:{
    detail(){
      this.$router.push({name:"RecDetail"})
    }
  },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
/* 标题栏 */
.re-title {
  height: 5rem;
  width: 100%;
  background-color: #eee;
  font-size: 3rem;
  line-height: 5rem;
  display: flex;
}

/* 详情 */
.re-details {
  width: 100%;
  /* height: 8rem; */
}

.re-details ul li {
  height: 8rem;
  display: flex;
}

.re-details ul li p {
  text-align: center;
  line-height: 8rem;
  font-size: 2rem;
  flex: 1 1 20%;
}

.re-details ul li a {
  font-size: 2rem;
  line-height: 8rem;
  text-decoration: none;
  flex: 1 1 80%;
}
</style>
