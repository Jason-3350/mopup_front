<template>
  <div class="added col-md-6">
    <div class="added-title">Added</div>
    <div class="added-list">
      <ul v-for="(todo,index) in this.$store.state.todos" :key="todo.id">
        <li class="row align-items-center">
          <div class="added-details col-10">
            <p>{{todo.event}}</p>
            <p>{{todo.location}} {{todo.start}} - {{todo.end}}</p>
          </div>
          <div class="col-2 text-center">
            <button class="del">Delete</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="done row justify-content-center" @click="done">Done</div>
  </div>
</template>

<script>
export default {
  name: "Added",
  data(){
    return{
    }
  },
  methods:{
    done(){
      this.$router.push({name:"Task"});
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
.done{
  padding: 0.5rem 0;
  font-size: 2.5rem;
  background-color: #f6f6f6;
}
</style>
