<template>
  <div>
    <div class="card text-center">
      <div class="row justify-content-center no-gutters" style="margin:0; padding: 0;">
        <img src="../../assets/MOPUP-logos_transparent.png" class="card-img-top" alt="..."
             style="height: 20rem;width: 20rem">
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ name }}</h3>
        <p class="card-text">You can use {{ coin }} coins to get {{ name }}</p>
        <!--        <a href="#" class="btn btn-primary">Go Back</a>-->
        <router-link :to="{name:'Reward'}" class="btn btn-primary">Go Back</router-link>
        <a href="#" class="btn btn-primary" @click="convert">Convert</a>
      </div>
      <div class="card-footer"></div>
      <div class="code" v-show="qrcode">
        <vue-qr class="vue-qr" :logo-src="logoSrc"
                :size="191"
                :margin="0"
                :auto-color="true"
                :dot-scale="1"
                :text="appSrc"
                colorDark="white"
                colorLight="black"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VueQr from 'vue-qr'
import instance from "../../utils/request";

export default {
  name: "RewDetail",
  components: {VueQr},
  data() {
    return {
      name: "",
      coin: "",
      logoSrc: "",
      appSrc: "Mopup",
      qrcode: false,
    }
  },
  methods: {
    convert() {
      if (window.confirm('Are you sure to convert it ?')) {
        if (this.$store.state.coins.coin - this.coin < 0) {
          alert('Balance insufficient');
        } else {
          const curDate = new Date();
          let day = curDate.toLocaleDateString().replaceAll('/', '-');
          let str = curDate.toTimeString(); //"10:55:24 GMT+0800
          let timeStr = str.substring(0, 8); //'10:55:24'
          // let user = JSON.parse(localStorage.getItem('user'));
          let user = this.$store.state.user;
          this.appSrc = user.id + "/" + user.username + "/" + user.email + "/" + day + "/" + timeStr;
          this.qrcode = true;
          this.$store.state.coins.coin = this.$store.state.coins.coin - this.coin;
          this.updateCoins();
          this.updateOrder();
        }
      }
    },
    updateCoins() {
      let userID = this.$store.state.user.id
      let url = `users/${userID}/coins`
      instance.put(url, {
        newCoin: this.$store.state.coins.coin
      }).then(res => {
        if (res.status === 205) {
          console.log('Updated Coin');
        }
      }).catch(err => {
        console.log(err);
      })
    },
    updateOrder() {
      let userID = this.$store.state.userID;
      instance.post('/users/addorder', {
        coin: this.coin,
        rewards: this.name,
        qr: this.appSrc,
        user: userID,
      }).then(res => {
        if (res.status === 201) {
          console.log('Updated Order');
        }
      }).catch(err => {
        console.log(err);
      })
    },
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
.code {
  display: flex;
  justify-content: center;
}

.vue-qr {
  background-color: #eeeeee;
  padding: 1rem;
}
</style>
