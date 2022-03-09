<template>
  <div class="goal col-md-6">
    <div class="goal-title row">
      <div class="col-1 bg-success"></div>
      <div class="col-9">Goals</div>
      <div class="col-2 bg-light text-center">
        <router-link :to="{name:'AddTask'}">Add</router-link>
      </div>
    </div>
    <div class="goal-list">
      <ul v-for="(todo,index) in this.$store.state.todos" :key="todo.id">
        <li>
          <div class="row align-items-center">
            <div class="col-2 text-center">
              <input class="checkbox" type="checkbox">
            </div>
            <div class="goal-details col-10">
              <p>{{ todo.event }}</p>
              <p>{{ todo.location }} {{ todo.start }} -- {{ todo.end }}</p>
            </div>
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
}

/* 目标栏标题 */
.goal-title {
  background-color: #eee;
  font-size: 3rem;
}

.goal-list li {
  list-style: none;
  border-bottom: 5px solid #f6f6f6;
}

.checkbox {
  width: 3rem;
  height: 3rem;
}

.goal-details {
  font-size: 3rem;
}

.goal-details p:nth-child(2) {
  font-size: 1.5rem;
}
</style>
