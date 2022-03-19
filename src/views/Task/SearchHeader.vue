<template>
  <div class="search row align-items-center text-center">
    <div class="coin col-2">
      <a href="#">{{ coin }}</a>
    </div>
    <!--    <input type="text" placeholder="Search..." class="col-7">-->
    <div class="dashboard col-8">
      <p>Semester 1 - 2022</p>
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
      coin: 0,
    }
  },
  methods: {
    showMenu() {
      this.$emit('change')
    }
  },
  created() {
    const userID = JSON.parse(localStorage.getItem('user')).id;
    let url = `/users/${userID}/coins`;
    instance.get(url).then(res => {
      if (res.status === 200) {
        this.coin = res.data.coin
        console.log(res.data)
      }
    }).catch(err => {
      console.log(err)
    })
  }
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
