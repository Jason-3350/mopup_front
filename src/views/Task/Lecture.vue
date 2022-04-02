<template>
  <div class="lecture col-md-6">
    <div class="lecture-title row no-gutters">
      <div class="bg-info col-1"></div>
      <div class="col-11">Lecture</div>
    </div>
    <div class="lecture-list">
      <ul>
        <li v-for="(lecture,index) in lectures" :key="lecture.id">
          <div class="row item align-items-center no-gutters" style="padding: 0.5rem">
            <div class="lecture-details col-10">
              <p>{{ lecture.summary }}</p>
              <p>{{ lecture.start }} - {{ lecture.end }}</p>
              <p>{{ lecture.location }}</p>
            </div>
            <div class="col-2 text-center" @click="updateEvent(lecture.id)">
              <img src="../../assets/circle.svg" alt="circle" style="width: 3rem" v-if="!lecture.status">
              <img src="../../assets/check-circle.svg" alt="checked" style="width: 3rem" v-if="lecture.status">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import instance from "../../utils/request";

export default {
  name: "Lecture",
  data() {
    return {
      // lectures:[ {summary: "", location: "", start_time: "", end_time: ""},]
      lectures: [],
      show: true,
    }
  },
  methods: {
    getTodayLectures() {
      const userID = this.$store.state.userID;
      const curDay = this.$store.state.today;
      let url = `/lectures/${userID}/${curDay}`;
      instance.get(url).then(res => {
        // console.log(res.data);
        this.lectures = res.data;
        this.updateCoins();
        // updateCoins
      }).catch(err => {
        console.log(err);
      })
    },
    updateEvent(lectureID) {
      let url = `users/lectures/${lectureID}`;
      instance.put(url).then(res => {
        if (res.status === 205) {
          this.getTodayLectures();
        }
      }).catch(err => {
        console.log(err);
      })
    },
    updateCoins() {
      let userID = this.$store.state.userID;
      let url = `/users/${userID}/coins`;
      instance.get(url).then(res => {
        if (res.status === 200) {
          this.coin = res.data.coin;
          this.$store.state.coins = res.data;
        }
      }).catch(err => {
        console.log(err);
      })
    },
  },
  created() {
    this.getTodayLectures();
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

/* 任务栏标题 */
.lecture-title {
  background-color: #eee;
  font-size: 3rem;
}

.lecture-list li {
  list-style: none;
  padding: 1rem 2rem 1rem;
}

.item {
  background-color: #f6f6f6;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px #000000;
}

.lecture-details {
  font-size: 1.2rem;
  padding-left: 1rem;
}

.lecture-details p:first-child {
  font-weight: 500;
  font-size: 2rem;
}
</style>
