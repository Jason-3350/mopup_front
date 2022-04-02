<template>
  <div class="calendar text-center">
    <ul class="row list-group list-group-horizontal justify-content-center align-items-center no-gutters">
      <li @click="getZero">{{ theDay[0] }}</li>
      <li @click="getOne">{{ theDay[1] }}</li>
      <li>{{ theDay[2] }}</li>
      <li @click="getThree">{{ theDay[3] }}</li>
      <li @click="getFour">{{ theDay[4] }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      // 一个数组放完整日期，一个只放天的数字
      theDay: [],
      yearMonDate: [],
    }
  },
  methods: {
    getDayAndUpdate(i) {
      this.getAllDays(this.yearMonDate[i]);
      this.saveToLocal();
      this.$emit('updateLecture', this.yearMonDate[i]);
    },
    getZero() {
      this.getDayAndUpdate(0);
    },
    getOne() {
      this.getDayAndUpdate(1);
    },
    getThree() {
      this.getDayAndUpdate(3);
    },
    getFour() {
      this.getDayAndUpdate(4);
    },
    // 查找指定日期的指定某天的完整日期格式
    getNextDate(date, day) {
      let dd = new Date(date);
      dd.setDate(dd.getDate() + day);
      let y = dd.getFullYear();
      let m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return y + "-" + m + "-" + d;
    },
    // 查找指定日期的指定某天的当日格式
    getNextDay(date, day) {
      let dd = new Date(date);
      dd.setDate(dd.getDate() + day);
      return dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
    },
    // 输入某个完整日期，返回前后几天的日期给两个数组
    getAllDays(anyDate) {
      this.theDay = [this.getNextDay(anyDate, -2), this.getNextDay(anyDate, -1), this.getNextDay(anyDate, 0), this.getNextDay(anyDate, 1), this.getNextDay(anyDate, 2)];
      this.yearMonDate = [this.getNextDate(anyDate, -2), this.getNextDate(anyDate, -1), this.getNextDate(anyDate, 0), this.getNextDate(anyDate, 1), this.getNextDate(anyDate, 2)];
      // console.log(this.theDay);
      // console.log(this.yearMonDate);
    },
    saveToLocal() {
      // localStorage.setItem('today', this.yearMonDate[2])
      this.$store.state.today = this.yearMonDate[2];
    }
  },
  created() {
    const curDate = new Date();//获取当前时间
    this.getAllDays(curDate);
    this.saveToLocal();
  },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

/* 右侧日历栏 */
.calendar {
  margin: 2rem auto;
}

.calendar li {
  width: 12%;
  height: 100%;
  font-size: 3.5rem;
  list-style: none;
  text-align: center;
  margin: 0 1rem;
  border: 1px solid black;
  border-radius: 1rem;
}

.calendar li:nth-child(3) {
  font-size: 4rem;
  width: 14%;
  background-color: #eee;
  border: 2px solid black;
}
</style>
