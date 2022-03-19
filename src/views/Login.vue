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
              <button type="submit" class="btn btn-primary" @click.p.prevent="signin">Sign In</button>
            </div>
            <div class="text-center" v-if="status">{{ status }}</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      this.$router.push({name: "SignUp"});
    },

    signin() {
      if (this.validEmail() !== false) {
        console.log('Sign IN');
        // 拿到用户输入的账号密码发送axios请求到后端
        instance.post("/login", {
          username: this.email,
          password: this.psw,
        }).then(res => {
          console.log(res.data);
          console.log(res.status);
          if (res.status === 200) {
            // 后端返回的email和前端一致则通过验证
            if (res.data.email === this.email) {
              this.$store.commit("updateUser", res.data);
              // 登录成功把数据存储在本地浏览器
              localStorage.setItem("user", JSON.stringify(res.data));
              this.$router.push({name: 'Task'});
            } else {
              this.status = res.data.msg;
            }
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
