<template>
  <div class="add">
    <router-link :to="{name:'AddTask'}">Add</router-link>
  </div>
</template>

<script>
export default {
  name: "Add"
}
</script>

<style scoped>
/* 添加任务按钮 */
.add {
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  font-size: 3rem;
  padding: 1.5rem 1rem;
  border-radius: 3rem;
  border: 1px solid rebeccapurple;
}
</style>
