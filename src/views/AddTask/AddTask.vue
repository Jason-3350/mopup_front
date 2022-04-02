<template>
  <div class="right-main">
    <div class="adding-added row no-gutters">
<!--      通过父组件AddTask调用Added的方法-->
      <Adding @updateTodos="refreshTodos"></Adding>
      <Added ref="refreshTodos"></Added>
    </div>
  </div>
</template>

<script>
import Adding from "./Adding";
import Added from "./Added";

export default {
  name: "AddTask",
  components: {Added, Adding},
  methods: {
    refreshTodos() {
      this.$refs.refreshTodos.getTodos();
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}


</style>
