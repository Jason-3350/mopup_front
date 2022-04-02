<template>
  <div class="all-rewards  col-md-6">
    <div class="re-title row no-gutters">
      <div class="col-1 bg-success"></div>
      <div class="col-11">All Rewards</div>
<!--      <div class="col-2 bg-light text-center">-->
<!--        <router-link :to="{name:'AddReward'}">Add</router-link>-->
<!--      </div>-->
    </div>
    <div class="re-details">
      <ul>
        <li class="row no-gutters" v-for="(reward,index) in rewards" :key="reward.id" @click="detail(reward.id)">
          <p class="col-2 text-center">{{ reward.coin }}</p>
          <div class="reward_name col-10">{{ reward.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import instance from "../../utils/request";

export default {
  name: "AllReward",
  data() {
    return {
      rewards: "",
    }
  },
  components: {},
  methods: {
    detail(id) {
      instance.get('/reward/' + id).then(res => {
        if (res.status === 200) {
          localStorage.setItem('reward', JSON.stringify(res.data));
          this.$router.push({name: "RewDetail"});
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    instance.get('/reward').then(res => {
      if (res.status === 200) {
        this.rewards = res.data;
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

.reward_name {
  line-height: 8rem;
  font-size: 2rem;
  color: blue;
}
</style>
