<template>
  <div class="right-main">
    <Calendar></Calendar>
    <div class="task-goal row no-gutters">
      <Lecture></Lecture>
      <Goal></Goal>
    </div>
    <!--    <Add></Add>-->
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
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
