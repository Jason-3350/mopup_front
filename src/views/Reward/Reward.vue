<template>
    <div class="right-main">
      <SearchHeader></SearchHeader>
      <Congrate></Congrate>
      <div class="reward-info row">
        <Recommend></Recommend>
        <AllReward></AllReward>
      </div>
    </div>
</template>

<script>
import SearchHeader from "../Task/SearchHeader";
import Congrate from "./Congrate";
import Recommend from "./Recommend";
import AllReward from "./AllReward";
export default {
  name: "Reward",
  components: {AllReward, Recommend, Congrate, SearchHeader},
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
