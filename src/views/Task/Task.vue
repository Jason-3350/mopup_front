<template>
  <div class="right-main">
    <Calendar @updateLecture="refreshLectures"></Calendar>
    <div class="task-goal row no-gutters">
      <Lecture ref="refreshLectures"></Lecture>
      <Goal ref="refreshGoals"></Goal>
    </div>
    <div class="add">
      <router-link :to="{name:'AddTask'}">+</router-link>
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar";
import Lecture from "./Lecture";
import Goal from "./Goal";
// import Add from "./Add";
export default {
  name: "Task",
  components: {Goal, Lecture, Calendar},
  methods: {
    refreshLectures(curDay) {
      // console.log(curDay);
      this.$refs.refreshLectures.getTodayLectures(curDay);
      this.$refs.refreshGoals.getTodayGoals(curDay);
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.add{
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  z-index: 5;
  font-size: 3rem;
  width: 5rem;
  height: 5rem;
  background-color: #eeeeee;
  border-radius: 50%;
  text-align: center;
}
</style>
