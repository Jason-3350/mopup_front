<template>
<!--  导入ics文件-->
  <div class="row">
    <div class="col-12">
      <label class="form-control-lg col-12">Import Ics: </label>
    </div>
    <div class="input-group input-group-lg  col-12">
      <div class="custom-file">
        <input type="file" class="custom-file-input" aria-describedby="inputGroupFileAddon04">
        <label class="custom-file-label" >Choose file</label>
      </div>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Submit</button>
      </div>
    </div>
<!--    修改个人信息-->
    <form class="col-12">
      <div class="form-group">
        <label class="form-control-lg">Username: </label>
        <input type="text" class="form-control form-control-lg" placeholder="Username" v-model="user.name">
      </div>
      <div class="form-group">
        <label class="form-control-lg">Old Password: </label>
        <input type="text" class="form-control form-control-lg" placeholder="Old Password" v-model="user.oldpsw">
      </div>
      <div class="form-group">
        <label class="form-control-lg">New Password: </label>
        <input type="text" class="form-control form-control-lg" placeholder="New Password" v-model="user.newpsw">
      </div>
      <div class="form-group text-center">
        <button type="submit" class="btn btn-primary" @click="back">GoBack</button>
        <button type="submit" class="btn btn-primary" @click="done">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      user: {},
    }
  },
  methods: {
    back() {
      this.$router.push({name: "Task"});
    },
    done() {
      if(confirm("Do you want to change the value ?")){
        console.log(this.user)
        this.$store.commit('changeUserName', this.user.name)
        this.$router.push({name: "Task"});
      }
    },
    // 例子
    // DeleteUser(id, index) {
    //   if(confirm('are you sure?'))
    //     axios.delete('/api/artist/'+id)
    //       .then(resp => {
    //         this.artists.data.splice(index, 1);
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       })
    // },
  },
}
</script>

<style scoped>
</style>
