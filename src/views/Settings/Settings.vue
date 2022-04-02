<template>
  <!--  导入ics文件-->
  <div class="row no-gutters">
    <div class="col-12">
      <label class="form-control-lg col-12">Import Ics: </label>
    </div>

    <div class="col-12" style="line-height: 3rem">
      <input type="text" class="icsLink" placeholder="Paste the link of icalendar" v-model="icsURL">
      <div class="form-group text-center">
        <button type="submit" class="btn btn-primary" @click="urlDone">Upload URL</button>
      </div>
    </div>

    <div class="col-12" style="line-height: 3rem">
      <input type="file" class="ics" @change="onFileChange">
      <div class="form-group text-center">
        <button type="submit" class="btn btn-primary" @click="icsDone">Upload File</button>
      </div>
    </div>


    <!--    修改个人信息-->
    <form class="col-12">
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
        <button type="submit" class="btn btn-primary" @click="changePwd">Submit</button>
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
      icsURL: "",
      icsFile: "",
    }
  },
  methods: {
    onFileChange(event) {
      this.icsFile = event.target.files[0];
      // console.log(event.target.files[0]);
    },
    back() {
      this.$router.push({name: "Task"});
    },
    urlDone() {
      // let user_id = JSON.parse(localStorage.getItem('user')).id;
      if (window.confirm('Upload Confirm ?')){
        if(this.icsURL){
          let user_id = this.$store.state.userID;
          instance.post('/icalurl', {
            icsUrl: this.icsURL,
            user: user_id,
          }).then(res => {
            if (res.status === 201) {
              alert("Uploaded successfully");
              this.icsURL = "";
            }
          }).catch(err => {
            console.log(err);
            alert("Upload Failed");
          })
        }else {
          alert('URL input empty !');
        }
      }
    },
    icsDone() {
      if (window.confirm("Upload Confirm ?")) {
        if (this.icsFile) {
          // let user_id = JSON.parse(localStorage.getItem('user')).id;
          let user_id = this.$store.state.userID;
          let formData = new FormData();
          formData.append('file', this.icsFile);
          formData.append('user', user_id);
          instance.post('/icalfile', formData, {
            headers: {
              // 要有headers，但是要空的，默认值
            }
          }).then(res => {
            // console.log("Done");
            if (res.status === 201) {
              alert("Uploaded successfully");
            }
          }).catch(err => {
            console.log(err);
            alert("Upload Failed");
          })
        } else {
          alert('File input empty !');
        }
      }
    },
    changePwd() {
      if (confirm("Do you want to change the value ?")) {
        instance.post('/settings', {
          // username: JSON.parse(localStorage.getItem('user')).username,
          username: this.$store.state.user.username,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        }).then(res => {
          console.log(res.status)
          if (res.status === 205) {
            console.log(res.data);
            this.$router.push({name: "Task"});
          } else if (res.status === 203) {
            alert("Old password is incorrect !");
          } else {
            console.log("************")
          }
        }).catch(err => {
          console.log(err);
        })
      }
    },
  },
}
</script>

<style scoped>
.icsLink {
  width: inherit;
  padding: 0 1rem;
  margin: 1rem 0;
  outline: none;
  border: none;
}

.ics {
  width: inherit;
  padding: 1rem 1rem;
  border-top: 1px solid #f6f6f6;
  border-bottom: 1px solid #f6f6f6;
}
</style>
