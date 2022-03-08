<template>
  <div class="right-main">
    <SearchHeader></SearchHeader>
    <div class="adding-added row">
      <Adding></Adding>
      <Added></Added>
    </div>
  </div>
</template>

<script>
import SearchHeader from "../Task/SearchHeader";
import Adding from "./Adding";
import Added from "./Added";

export default {
  name: "AddTask",
  components: {Added, Adding, SearchHeader},
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* 右侧任务和目标栏 */
.adding-added {
  /*width: 100%;*/
}

</style>
