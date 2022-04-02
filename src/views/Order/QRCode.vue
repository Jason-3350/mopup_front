<template>
  <div>
    <div class="card text-center">
      <div class="row justify-content-center no-gutters" style="margin:0; padding: 0;">
        <img src="../../assets/MOPUP-logos_transparent.png" class="card-img-top" alt="..."
             style="height: 20rem;width: 20rem">
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ this.$store.state.order.coin }} Coins {{ this.$store.state.order.rewards }}</h3>
        <router-link :to="{name:'Order'}" class="btn btn-primary">Go Back</router-link>
      </div>
      <div class="card-footer"></div>
      <div class="code">
        <vue-qr class="vue-qr" :logo-src="logoSrc"
                :size="191"
                :margin="0"
                :auto-color="true"
                :dot-scale="1"
                :text=this.$store.state.order.qr
                colorDark="white"
                colorLight="black"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VueQr from 'vue-qr'

export default {
  name: "QRCode",
  components: {VueQr},
  data() {
    return {
      logoSrc: "",
    }
  },
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
