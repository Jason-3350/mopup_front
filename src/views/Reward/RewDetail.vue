<template>
  <div>
    <div class="card text-center">
      <div class="row justify-content-center" style="margin:0; padding: 0;">
        <img src="../../assets/MOPUP-logos_transparent.png" class="card-img-top" alt="..."
             style="height: 20rem;width: 20rem">
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ name }}</h3>
        <p class="card-text">You can use {{ coin }} coins to get {{ name }}</p>
        <!--        <a href="#" class="btn btn-primary">Go Back</a>-->
        <router-link :to="{name:'Reward'}" class="btn btn-primary">Go Back</router-link>
        <a href="#" class="btn btn-primary">Convert</a>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RewDetail",
  data() {
    return {
      name: "",
      coin: "",
    }
  },
  created() {
    let rewardInfo = JSON.parse(localStorage.getItem('reward'));
    this.name = rewardInfo.name;
    this.coin = rewardInfo.coin;
  },
  destroyed() {
    localStorage.removeItem('reward');
  }
}
</script>

<style scoped>

</style>
