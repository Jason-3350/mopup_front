<template>
  <div class="login">
  <div class="container">
    <div class="wrapper row align-items-center">
      <div class="logo-left col-md-6 text-center">
        <img src="../assets/MOPUP-logos.jpeg" class="img-responsive center-block" alt="Responsive image">
      </div>
      <div class="login-right col-md-6">
        <form>
          <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control" placeholder="Email" v-model="email">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Password" v-model="psw">
          </div>
          <div style="text-align: center">
            <button type="submit" class="btn btn-default" @click="signup">Sign Up</button>
            <button type="submit" class="btn btn-default" @click="signin">Sign In</button>
          </div>
          <div class="text-center" v-if="status">{{ status }}</div>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import instance from "../utils/request";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      psw: "",
      status: "",
    }
  },
  methods: {
    validEmail() {
      // 判断邮箱和密码输入是否为空
      if (this.email === "") {
        console.log(this.email);
        alert("Email cannot be empty !");
        return false;
      }
      if (this.psw === "") {
        alert("Password cannot be empty !");
        this.psw = "";
        return false;
      }
      // 当邮箱不为空时，判断邮箱格式否则正确
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!reg.test(this.email)) {
        alert('Please enter a valid Email !');
        return false;
      }
    },

    signup() {
      if (this.validEmail() !== false) {
        // 上面判断都完成后发送axios请求
        console.log('Sign UP');
        instance.post("/register", {
          userEmail: this.email,
          password: this.psw,
        }).then(res => {
          console.log(res.data);
          if (res.data.result === true) {
            // 请求成功接收成功的信息
            this.status = res.data.msg;
          }
          if (res.data.result === false) {
            // 接收并显示后端报错的信息
            this.status = res.data.msg;
          }
        }).catch(err => {
          console.log(err)
        });
      }
    },

    signin() {
      if (this.validEmail() !== false) {
        console.log('Sign IN');
        // 拿到用户输入的账号密码发送axios请求到后端
        instance.post("/login", {
          userEmail: this.email,
          password: this.psw,
        }).then(res => {
          console.log(res.data);
          if (res.data.result === true) {
            this.$router.push({name: 'Task'});
          }
          if (res.data.result === false) {
            this.status = res.data.msg;
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
  },
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  border: 2px solid #eeeeee;
  box-shadow: 1rem 1rem 1rem #000000;
}

img {
  height: 28rem;
}

.login-right {
  margin: 5rem auto;
}
</style>
