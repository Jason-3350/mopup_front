<template>
  <div class="signUp">
    <div class="container">
      <div class="wrapper row align-items-center">
        <div class="logo-left col-md-6 text-center">
          <img src="../assets/MOPUP-logos.jpeg" class="img-responsive center-block" alt="Responsive image">
        </div>
        <div class="login-right col-md-6">
          <h3 style="text-align: center">Sign Up</h3>
          <form>
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" placeholder="Username" v-model="username">
            </div>
            <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control" placeholder="Email" v-model="email">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Password" v-model="psw">
            </div>
            <div style="text-align: center">
              <button type="button" class="btn btn-outline-secondary" @click="goBack">Go Back</button>
              <button type="submit" class="btn btn-primary" @click.p.prevent="signup">Sign Up</button>
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
  name: "SignUp",
  data() {
    return {
      username: "",
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
    goBack() {
      this.$router.push({name: "Login"});
    },
    signup() {
      if (this.validEmail() !== false) {
        // 上面判断都完成后发送axios请求
        console.log('Sign UP');
        instance.post("/register", {
          username: this.username,
          userEmail: this.email,
          password: this.psw,
        }).then(res => {
          console.log(res.data);
          if (res.status===226) {
            alert('Incorrect Username or Password !')
          }
          if (res.status === 201) {
            // 请求成功接收成功的信息
            alert('Register Done');
            this.username = "";
            this.email = "";
            this.psw = "";
          }
        }).catch(err => {
          console.log(err)
        });
      }
    },
  },
}
</script>

<style scoped>
.signUp {
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
