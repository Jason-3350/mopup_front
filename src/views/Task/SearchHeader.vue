<template>
  <div class="search row align-items-center text-center no-gutters">
    <div class="coin col-2">
      <!--      <a href="#">{{ coin }}</a>-->
      <a href="#">{{ this.$store.state.coins.coin }}</a>
    </div>
    <!--    <input type="text" placeholder="Search..." class="col-7">-->
    <div class="dashboard col-8">
      <p>{{ curDay }}</p>
      <p>Dashboard</p>
    </div>
    <div class="col-2 d-block d-sm-block d-md-none" @click="showMenu">
      <img src="../../assets/justify.svg" width="40" height="40" alt="">
    </div>
  </div>
</template>

<script>
import instance from "../../utils/request";

export default {
  name: "SearchHeader",
  data() {
    return {
      coin: "00",
      curDay: "",
    }
  },
  methods: {
    showMenu() {
      this.$emit('change')
    },
    getCurDay() {
      let curDate = new Date();
      let y = curDate.getFullYear();
      let m = curDate.getMonth() + 1 < 10 ? "0" + (curDate.getMonth() + 1) : curDate.getMonth() + 1;
      let d = curDate.getDate() < 10 ? "0" + curDate.getDate() : curDate.getDate();
      this.curDay = d + "-" + m + "-" + y;
    },
    getCoin() {
      // 发请求，从coin表中拿到数据存到vuex
      let userID = this.$store.state.userID;
      let url = `/users/${userID}/coins`;
      instance.get(url).then(res => {
        if (res.status === 200) {
          this.coin = res.data.coin;
          this.$store.state.coins = res.data;
        }
      }).catch(err => {
        console.log(err);
      })
    },
  },
  created() {
    this.getCurDay();
    this.getCoin();
  },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

/* 搜索栏 */
.search {
  border-bottom: 5px solid #f6f6f6;
}

.dashboard p {
  font-size: 1.5rem;
  padding: 0.5rem 0;
}

/* 金币 */
.coin a {
  font-size: 3rem;
  padding: 0.5rem;
  border-radius: 20%;
  border: 1px solid black;
}

</style>
