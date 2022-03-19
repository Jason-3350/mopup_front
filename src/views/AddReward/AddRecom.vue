<template>
  <div class="row">
    <form class="col-12">
      <!--      <div class="form-group">-->
      <!--        <label class="form-control-lg">RecommendID: </label>-->
      <!--        <input type="number" class="form-control form-control-lg" placeholder="RecommendID" v-model="recom.id">-->
      <!--      </div>-->
      <div class="form-group">
        <label class="form-control-lg">Coins: </label>
        <input type="number" class="form-control form-control-lg" placeholder="Coins" v-model="newRecommends.coin">
      </div>
      <div class="form-group">
        <label class="form-control-lg">Name: </label>
        <input type="text" class="form-control form-control-lg" placeholder="Name" v-model="newRecommends.name">
      </div>
      <div class="form-group text-center">
        <button type="button" class="btn btn-primary" @click="back">GoBack</button>
        <button type="submit" class="btn btn-primary" @click="done">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import instance from "../../utils/request";

export default {
  name: "AddRecom",
  data() {
    return {
      newRecommends: {},
    }
  },
  methods: {
    back() {
      this.$router.push({name: "Reward"});
    },
    done() {
      if (window.confirm("Are you sure to add it ?")) {
        instance.post('/recommend', this.newRecommends).then(res => {
          if (res.status === 201) {
            this.$router.push({name: 'Reward'});
          }
        }).catch(err => {
          console.log(err);
        });
      }
    },
  },
}
</script>

<style scoped>
</style>
