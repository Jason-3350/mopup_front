<template>
  <div>
    <table class="table text-center">
      <thead>
      <tr>
        <th scope="col">Coin</th>
        <th scope="col">Reward</th>
        <th scope="col">QRCode</th>
        <th scope="col">Del</th>
      </tr>
      </thead>
      <tbody v-for="(order,index) in orders" :key="order.id">
      <tr v-show="order.status">
        <td>{{ order.coin }}</td>
        <td>{{ order.rewards }}</td>
        <td>
          <router-link :to="{name:'QRCode'}" @click.native="saveToLocal(order)">Code</router-link>
        </td>
        <td><img src="../../assets/trash.svg" alt="trash" @click="delOrder(order.id)"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import instance from "../../utils/request";

export default {
  name: "Order",
  data() {
    return {
      orders: [],
    }
  },
  methods: {
    saveToLocal(order) {
      this.$store.state.order = order;
    },
    getOrder() {
      let userID = this.$store.state.userID;
      let url = `/users/${userID}/order`
      instance.get(url).then(res => {
        // console.log(res.data);
        this.orders = res.data;
      }).catch(err => {
        console.log(err);
      })
    },
    delOrder(orderID) {
      if (window.confirm('Are you sure to delete it ?')){
        let url = `users/${orderID}/order`
        instance.put(url).then(res => {
          if (res.status === 205) {
            // console.log('done');
            this.getOrder();
          }
        }).catch(err => {
          console.log(err);
        })
      }
    },
  },
  created() {
    this.getOrder()
  }
}
</script>

<style scoped>
.table {
  font-size: 1.5rem;
  line-height: 3rem;
}
</style>
