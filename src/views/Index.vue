<template>
  <div id="index" class="row">
    <Menus class="menus col-md-3 d-none d-md-inline"></Menus>
    <div class="content col-md-9">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import Menus from "./Menus/Menus";

export default {
  name: "Index",
  components: {Menus}
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#index {
  width: 100%;
  height: 100%;
}

.menus {
  height: 100%;
}

.content {
  height: 100%;
}
</style>
