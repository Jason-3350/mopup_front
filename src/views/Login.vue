<template>
  <div class="login">
    <div class="container">
      <div class="wrapper row align-items-center">
        <div class="logo-left col-md-6 text-center">
          <img src="../assets/MOPUP-logos.jpeg" class="img-responsive center-block" alt="Responsive image">
        </div>
        <div class="login-right col-md-6">
          <h3 style="text-align: center">Sign In</h3>
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
              <button type="button" class="btn btn-outline-secondary" @click="signup">Sign Up</button>
              <button type="submit" class="btn btn-primary" @click.p.prevent="signIn">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import instance from "../utils/request";
import Task from "./Task/Task";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      psw: "",
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
      this.$router.push({name: "SignUp"});
    },
    signIn() {
      instance.post('token', {
        username: this.email,
        password: this.psw,
      }).then(res => {
        // save token and refresh token into vuex
        this.$store.commit('setToken', res.data.access);
        this.$store.commit('refreshToken', res.data.refresh);
        const token = localStorage.getItem('token');
        // Get user_id from token
        let payload = JSON.parse(window.atob(token.split('.')[1]));
        this.$store.state.userID = payload.user_id;
        // 配合router路由守卫部分，获取登录成功后要跳转的路由。
        this.$router.push({name: 'Task'});
      }).catch(err => {
        console.log(err);
      })
    },
  }
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
