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
        <vue-timepicker placeholder="Start Time" input-width="100%" style="font-size: 2rem;"
                        v-model="startTimeValue"></vue-timepicker>
      </div>

      <div class="adding-area">
        <vue-timepicker placeholder="End Time" input-width="100%" style="font-size: 2rem;"
                        v-model="endTimeValue"></vue-timepicker>
      </div>


    </div>
    <div class="done row justify-content-center" @click="add">Add</div>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'

export default {
  name: "Adding",
  components: {VueTimepicker},
  data() {
    return {
      events: {},
      startTimeValue:"",
      endTimeValue: "",
    }
  },
  methods: {
    add() {
      this.$set(this.events, 'id', nanoid());
      this.$set(this.events, 'done', 'false');
      this.$set(this.events, 'start', this.startTimeValue);
      this.$set(this.events, 'end', this.endTimeValue);
      this.$store.commit('addTodo', this.events);
      console.log(this.startTimeValue);
      this.events = {};
    }
  }
}
</script>

<style scoped>
* {
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
  background: none;
}

.done {
  padding: 0.5rem 0;
  font-size: 2.5rem;
  background-color: #f6f6f6;
}
</style>
