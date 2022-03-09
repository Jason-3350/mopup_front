<template>
  <div class="search row align-items-center text-center">
    <div class="coin col-2">
      <a href="#">50</a>
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
export default {
  name: "SearchHeader",
  methods:{
    showMenu(){
      this.$emit('change')
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
