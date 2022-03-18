<template>
  <div id="index" class="row">
    <Menus class="col-md-3 d-none d-md-inline"></Menus>
    <div class="content col-md-9">
      <SearchHeader @change="menus"></SearchHeader>
      <!--      平时隐藏，只有点击展开才触发函数显示出来-->
      <!--      <Menus class="d-block d-sm-block d-md-none"></Menus>-->
      <router-view></router-view>
    </div>
    <div class="sidebar" v-show="showMenu">
      <div @click="menus">
        <img src="../assets/arrow-right-square.svg" alt="close sidebar" style="height: 3rem;margin: 1rem">
      </div>
      <Menus></Menus>
    </div>
  </div>
</template>

<script>
import Menus from "./Menus/Menus";
import SearchHeader from "./Task/SearchHeader";

export default {
  name: "Index",
  components: {SearchHeader, Menus},
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    menus() {
      this.showMenu = !this.showMenu
    }
  },

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

.sidebar {
  position: fixed;
  right: 0;
  width: 25rem;
  z-index: 3;
  height: 100vh;
  background-color: #f6f6f6;
}
</style>
