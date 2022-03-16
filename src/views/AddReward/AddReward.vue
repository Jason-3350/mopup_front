<template>
    <div class="row">
      <form class="col-12">
<!--        <div class="form-group">-->
<!--          <label class="form-control-lg">RewardID: </label>-->
<!--          <input type="number" class="form-control form-control-lg" placeholder="RecommendID" v-model="reward.id">-->
<!--        </div>-->
        <div class="form-group">
          <label class="form-control-lg">Coins: </label>
          <input type="number" class="form-control form-control-lg" placeholder="Coins" v-model="newReward.coin">
        </div>
        <div class="form-group">
          <label class="form-control-lg">Name: </label>
          <input type="text" class="form-control form-control-lg" placeholder="Name" v-model="newReward.name">
        </div>
        <div class="form-group text-center">
          <button type="submit" class="btn btn-primary" @click="back">GoBack</button>
          <button type="submit" class="btn btn-primary" @click="done">Submit</button>
        </div>
      </form>
  </div>
</template>

<script>
import instance from "../../utils/request";

export default {
  name: "AddReward",
  data(){
    return{
      newReward:{},
    }
  },
  methods:{
    back(){
      this.$router.push({name:"Reward"});
    },
    done(){
      if (window.confirm("Are you sure to add it ?")){
        instance.post('/reward',this.newReward).then(res=>{
          if (res.status===201){
            this.$router.push({name:'Reward'});
          }
        }).catch(err=>{
          console.log(err);
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
