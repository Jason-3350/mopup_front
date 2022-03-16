<template>
  <div class="left-sidebar text-center">
    <div class="sidebar-img"><img src="../../assets/avatar.jpg" class="img-thumbnail" alt="logo image"></div>
    <div class="username">{{ username }}</div>
    <div class="sideList">
      <ul>
        <li>
          <router-link :to="{name:'Task'}" class="router-link-exact-active">Task</router-link>
        </li>
        <li>
          <router-link :to="{name:'Reward'}" class="router-link-exact-active">Reward</router-link>
        </li>
        <li>
          <router-link :to="{name:'Settings'}" class="router-link-exact-active">Settings</router-link>
        </li>
        <li>
          <router-link :to="{name:'Notice'}" class="router-link-exact-active">Notification</router-link>
        </li>
      </ul>
    </div>
    <button class="logout" @click="logout">Log Out</button>
  </div>
</template>

<script>
export default {
  name: "Menus",
  data() {
    return {
      username: '',
    }
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user'))
    this.username = user.username
  },
  methods: {
    logout() {
      this.$router.push({name: 'Login'});
      // 退出时删除本地存储数据
      localStorage.clear();
    }
  }
}
</script>

<style scoped>
.router-link-active {
  background-color: #eeeeee;
}

/* 左侧 */
.left-sidebar {
  height: 100%;
  border-right: 5px solid #f6f6f6;
}

/* 左侧头像图片 */
.sidebar-img {
  width: 100%;
  height: 25rem;
  line-height: 25rem;
}

.left-sidebar img {
  width: 13rem;
  height: 13rem;
}

/* 左侧用户名 */
.username {
  font-size: 2rem;
  font-weight: 800;
}

/* 左侧列表栏 */
.sideList {
  font-size: 2rem;
  margin: 2rem auto;
  line-height: 5rem;
  border-top: 5px solid #f6f6f6;
  border-bottom: 5px solid #f6f6f6;
}

.sideList ul {
  list-style: none;
}

.sideList a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
}

/* 左侧登出 */
.logout {
  width: 15rem;
  height: 4rem;
  background-color: transparent;
  background-repeat: no-repeat;
  border: 1px solid #ccc;
  outline: none;
  color: #000;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 2rem;
}
</style>
