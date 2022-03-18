<template>
  <div class="recommendation  col-md-6">
    <div class="re-title row">
      <div class="col-1 bg-success"></div>
      <div class="col-9">Recommendation</div>
      <div class="col-2 bg-light text-center">
        <router-link :to="{name:'AddRecom'}">Add</router-link>
      </div>
    </div>
    <div class="re-details">
      <ul>
        <li class="row" v-for="(recommend,index) in recommends" :key="recommend.id" @click="detail(recommend.id)">
          <p class="col-2 text-center">{{ recommend.coin }}</p>
          <div class="recommend_name col-10">{{ recommend.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import instance from "../../utils/request";

export default {
  name: "Recommend",
  data() {
    return {
      recommends: "",
    }
  },
  components: {},
  methods: {
    detail(id) {
      // console.log(id);
      instance.get('/recommend/' + id).then(res => {
        if (res.status === 200) {
          // console.log(res.data);
          localStorage.setItem('recommend', JSON.stringify(res.data));
          this.$router.push({name: "RecDetail"});
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    instance.get('/recommend').then(res => {
      if (res.status === 200) {
        this.recommends = res.data;
      }
    }).catch(err => {
      console.log(err);
    })
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

/* 标题栏 */
.re-title {
  background-color: #eee;
  font-size: 3rem;
}

.re-details ul li p {
  line-height: 8rem;
  font-size: 2rem;
}

.recommend_name {
  line-height: 8rem;
  font-size: 2rem;
  color: blue;
}
</style>
