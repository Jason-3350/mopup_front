<template>
  <div class="added col-md-6">
    <div class="added-title">Added</div>
    <div class="added-list">
      <ul v-for="(todo,index) in todos" :key="todo.id">
        <li class="row align-items-center">
          <div class="added-details col-10">
            <p>{{ todo.goal }}</p>
            <p>{{ todo.location }} {{ todo.start }} - {{ todo.end }}</p>
          </div>
          <div class="col-2 text-center" @click="del(todo.id)">
            <button class="del">Delete</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="done row justify-content-center" @click="done">Done</div>
  </div>
</template>

<script>
import instance from "../../utils/request";

export default {
  name: "Added",
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    done() {
      this.$router.push({name: "Task"});
    },
    getTodos() {
      const userID = JSON.parse(localStorage.getItem('user')).id
      let url = `/users/${userID}/goals`
      instance.get(url).then(res => {
        if (res.status === 200) {
          this.todos = res.data;
          // console.log(res.data);
        }
      }).catch(err => {
        console.log(err);
      })
    },
    del(id) {
      console.log(id);
      if (window.confirm("Are you sure to delete ?")) {
        let url = `/users/${id}/goals`
        instance.delete(url).then(res => {
          if (res.status === 204) {
            this.getTodos()
          }
        }).catch(err => {
          console.log(err);
        })
      }
      // console.log(id);
      // this.$store.commit('removeTodo');
      // console.log('done')
    },
  },
  created() {
    this.getTodos()
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

/* 目标栏标题 */
.added-title {
  background-color: #eee;
  font-size: 2.8rem;
  display: flex;
}

.added-title::before {
  content: '';
  width: 2rem;
  background-color: green;
}

.added-list li {
  font-size: 3rem;
  list-style: none;
}

.del {
  border: none;
  /*text-align: center;*/
  font-size: 2rem;
}

.added-details {
  font-size: 2.5rem;
  padding: 1rem 0;
}

.added-details p:nth-child(2) {
  font-size: 1.5rem;
}

.done {
  padding: 0.5rem 0;
  font-size: 2.5rem;
  background-color: #f6f6f6;
}
</style>
