<template>
  <div class="congregate row justify-content-center no-gutters">
    <div class="text-nowrap">Congratulations, You Got {{this.$store.state.coins.coin}} coins !!!</div>
  </div>
</template>

<script>
export default {
  name: "Congrate"
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.congregate {
  height: 5rem;
  line-height: 5rem;
  font-size: 2rem;
  text-align: center;
  margin: 2rem auto;
}
</style>
