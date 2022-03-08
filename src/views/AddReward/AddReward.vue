<template>
    <div class="row align-content-center">
      <form class="col-12">
        <div class="form-group">
          <label class="form-control-lg">RewardID: </label>
          <input type="number" class="form-control form-control-lg" placeholder="RecommendID" v-model="reward.id">
        </div>
        <div class="form-group">
          <label class="form-control-lg">Coins: </label>
          <input type="number" class="form-control form-control-lg" placeholder="Coins" v-model="reward.coin">
        </div>
        <div class="form-group">
          <label class="form-control-lg">Name: </label>
          <input type="text" class="form-control form-control-lg" placeholder="Name" v-model="reward.name">
        </div>
        <div class="form-group text-center">
          <button type="submit" class="btn btn-primary" @click="back">GoBack</button>
          <button type="submit" class="btn btn-primary" @click="done">Submit</button>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: "AddReward",
  data(){
    return{
      reward:{}
    }
  },
  methods:{
    back(){
      this.$router.push({name:"Reward"});
    },
    done(){
      // console.log(this.reward);
      this.$store.commit('addReward',this.reward);
      this.$router.push({name:'Reward'});
    }
  }
}
</script>

<style scoped>
.row{
  height: 100%;
}
</style>
