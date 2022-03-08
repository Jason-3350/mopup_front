<template>
  <div class="adding col-md-6">
    <div class="adding-title">Adding</div>
    <div class="adding-list">
          <div class="adding-area">
            <input type="text" placeholder="Add events here" v-model="events.event">
          </div>

          <div class="adding-area">
            <input type="text" placeholder="Add location here" v-model="events.location">
          </div>

          <div class="adding-area">
            <input type="text" placeholder="Add start time" v-model="events.start">
          </div>

          <div class="adding-area">
            <input type="text" placeholder="Add end time" v-model="events.end">
          </div>
    </div>
    <div class="done row justify-content-center" @click="add">Add</div>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: "Adding",
  data() {
    return {
      events: {}
    }
  },
  methods: {
    add() {
      this.$set(this.events, 'id', nanoid());
      this.$set(this.events, 'done', 'false');
      this.$store.commit('addTodo',this.events);
      // console.log(this.events);
      this.events = {};
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
/* 任务栏标题 */
.adding-title {
  background-color: #eee;
  font-size: 3rem;
  display: flex;
}

.adding-title::before {
  content: '';
  width: 2rem;
  background-color: blue;
}

.adding-area input {
  width: 100%;
  border-bottom: 5px;
  font-size: 2rem;
  border: none;
  outline: none;
  padding: 2rem 0;
  background:none;
}

.done {
  padding: 0.5rem 0;
  font-size: 2.5rem;
  background-color: #f6f6f6;
}
</style>
