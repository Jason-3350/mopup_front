<template>
  <div class="row no-gutters">
    <ul class="list-group col-12" v-for="(notice,index) in notices" :key="notice.id">
      <li class="list-group-item">{{ notice.notice }}</li>
    </ul>
  </div>
</template>

<script>
import instance from "../../utils/request";

export default {
  name: "Notice",
  data() {
    return {
      notices: {id: "", notice: ""},
    }
  },
  created() {
    // const userID = JSON.parse(localStorage.getItem('user')).id
    const userID = this.$store.state.userID
    instance.get('/notice/'+userID).then(res => {
      this.notices = res.data;
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>
* {
  padding: 1rem 0;
  font-size: 2rem;
}
</style>
