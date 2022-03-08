<template>
  <div class="goal col-md-6">
    <div class="goal-title row">
      <div class="col-1 bg-success"></div>
      <div class="col-9">Goals</div>
      <div class="col-2 bg-light text-center"><router-link :to="{name:'AddTask'}">Add</router-link></div>
    </div>
    <div class="goal-list">
      <ul v-for="(todo,index) in this.$store.state.todos" :key="todo.id">
        <li>
          <input type="checkbox">
          <div class="goal-details">
            <p>{{ todo.event }}</p>
            <p>{{ todo.location }} {{ todo.start }} -- {{ todo.end }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goal",
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* 目标栏标题 */
.goal-title {
  height: 5rem;
  width: 100%;
  background-color: #eee;
  font-size: 2.8rem;
  line-height: 5rem;
  display: flex;
}

/*.goal-title::before {*/
/*  content: '';*/
/*  width: 2rem;*/
/*  height: 5rem;*/
/*  background-color: green;*/
/*}*/

/* goal的详情 */
.goal-list {
  width: 100%;
  height: 8rem;
  /* background-color: aqua; */
}

.goal-list li {
  width: 100%;
  height: 8rem;
  font-size: 3rem;
  line-height: 8rem;
  list-style: none;
  display: flex;
  cursor: pointer;
  border-bottom: 5px solid #f6f6f6;
}

.goal-list li input {
  flex: 1 1 20%;
  display: inline-block;
  height: 3rem;
  margin: 2rem auto;
}

.goal-details {
  height: 8rem;
  line-height: 4rem;
  font-size: 2.5rem;
  flex: 1 1 80%;
  /* border: 1px solid rebeccapurple; */
}

.goal-details p:nth-child(2) {
  font-size: 1.5rem;
}
</style>
