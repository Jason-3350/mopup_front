<template>
  <div class="right-main">
    <SearchHeader></SearchHeader>
    <Calendar></Calendar>
    <div class="task-goal row">
      <Lecture></Lecture>
      <Goal></Goal>
    </div>
    <!--    <Add></Add>-->
  </div>
</template>

<script>
import SearchHeader from "./SearchHeader";
import Calendar from "./Calendar";
import Lecture from "./Lecture";
import Goal from "./Goal";
// import Add from "./Add";
export default {
  name: "Task",
  components: {Goal, Lecture, Calendar, SearchHeader},
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
