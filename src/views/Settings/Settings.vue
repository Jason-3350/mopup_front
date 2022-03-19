<template>
  <!--  导入ics文件-->
  <div class="row no-gutters">
    <div class="col-12">
      <label class="form-control-lg col-12">Import Ics: </label>
    </div>
    <div class="input-group input-group-lg  col-12">
      <div class="custom-file">
        <input type="file" class="custom-file-input" aria-describedby="inputGroupFileAddon04">
        <label class="custom-file-label">Choose file</label>
      </div>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Submit</button>
      </div>
    </div>
    <!--    修改个人信息-->
    <form class="col-12">
      <!--      <div class="form-group">-->
      <!--        <label class="form-control-lg">Username: </label>-->
      <!--        <input type="text" class="form-control form-control-lg" placeholder="Username" v-model="user.name">-->
      <!--      </div>-->
      <div class="form-group">
        <label class="form-control-lg">Old Password: </label>
        <input type="password" class="form-control form-control-lg" placeholder="Old Password" v-model="oldPassword">
      </div>
      <div class="form-group">
        <label class="form-control-lg">New Password: </label>
        <input type="password" class="form-control form-control-lg" placeholder="New Password" v-model="newPassword">
      </div>
      <div class="form-group text-center">
        <button type="button" class="btn btn-primary" @click="back">GoBack</button>
        <button type="submit" class="btn btn-primary" @click="done">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import instance from "../../utils/request";

export default {
  name: "Settings",
  data() {
    return {
      oldPassword: "",
      newPassword: "",
    }
  },
  methods: {
    back() {
      this.$router.push({name: "Task"});
    },
    done() {
      if (confirm("Do you want to change the value ?")) {
        instance.post('/settings', {
          username: JSON.parse(localStorage.getItem('user')).username,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        }).then(res => {
          console.log(res.status)
          if (res.status === 205) {
            console.log(res.data);
            this.$router.push({name: "Task"});
          }else if (res.status===203) {
            alert("Old password is incorrect !");
          }else {
            console.log("************")
          }
        }).catch(err => {
          console.log(err);
        })
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
