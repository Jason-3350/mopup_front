<template>
  <div class="goal col-md-6">
    <div class="goal-title row no-gutters">
      <div class="col-1 bg-success"></div>
      <div class="col-9">Goals</div>
    </div>
    <div class="goal-list">
      <ul>
        <li v-for="(todo,index) in todos" :key="todo.id">
          <div class="row item align-items-center no-gutters" style="padding: 0.5rem">
            <div class="goal-details col-10">
              <p>{{ todo.goal }}</p>
              <p>{{ todo.start }} - {{ todo.end }}</p>
              <p>{{ todo.location }}</p>
            </div>
            <div class="col-2 text-center" @click="updateEvent(todo.id)">
              <img src="../../assets/circle.svg" alt="circle" style="width: 3rem" v-if="!todo.status">
              <img src="../../assets/check-circle.svg" alt="checked" style="width: 3rem" v-if="todo.status">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import instance from "../../utils/request";

export default {
  name: "Goal",
  data() {
    return {
      todos: [],
      show: true,
    }
  },
  methods: {
    getTodayGoals() {
      // localStorage拿到当前登录用户的id
      // const userID = JSON.parse(localStorage.getItem('user')).id;
      const userID = this.$store.state.userID;
      // const curDay = localStorage.getItem('today');
      const curDay = this.$store.state.today;
      let url = `/goals/${userID}/${curDay}`
      instance.get(url).then(res => {
        if (res.status === 200) {
          this.todos = res.data
          // console.log(res.data)
          this.updateCoins();
        }
      }).catch(err => {
        console.log(err)
      });
    },
    updateEvent(todoId) {
      let url = `users/goals/${todoId}`;
      instance.put(url).then(res => {
        if (res.status === 205) {
          this.getTodayGoals();
        }
      }).catch(err => {
        console.log(err);
      })
    },
    updateCoins() {
      let userID = this.$store.state.userID;
      let url = `/users/${userID}/coins`;
      instance.get(url).then(res => {
        if (res.status === 200) {
          this.coin = res.data.coin;
          this.$store.state.coins = res.data;
        }
      }).catch(err => {
        console.log(err);
      })
    },
  },
  created() {
    this.getTodayGoals();
  },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

/* 目标栏标题 */
.goal-title {
  background-color: #eee;
  font-size: 3rem;
}

.goal-list li {
  list-style: none;
  padding: 1rem 2rem 1rem;
}

.item {
  background-color: #f6f6f6;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px #000000;
}

.goal-details {
  font-size: 1.2rem;
  padding-left: 1rem;
}

.goal-details p:first-child {
  font-weight: 500;
  font-size: 2rem;
}
</style>
