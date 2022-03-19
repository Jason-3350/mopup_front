<template>
    <div class="calendar text-center">
      <ul class="row list-group list-group-horizontal justify-content-center align-items-center no-gutters">
        <li>{{ dateList[0] }}</li>
        <li>{{ dateList[1] }}</li>
        <li>{{ dateList[2] }}</li>
        <li>{{ dateList[3] }}</li>
        <li>{{ dateList[4] }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      dateList: [],
    }
  },
  created() {
    let oneDayTime = 24*60*60*1000   //一天的时间
    const curDate = new Date();//获取当前时间
    const today = curDate.getDate();//获取当前日期
    const oneDayAgo =  new Date(curDate.getTime() - oneDayTime).getDate(); //获取前一天的时间
    const twoDayAgo =  new Date(curDate.getTime() - oneDayTime*2).getDate(); //获取前两天的时间
    const oneDayAfter =  new Date(curDate.getTime() + oneDayTime).getDate(); //获取后一天的时间
    const twoDayAfter =  new Date(curDate.getTime() + oneDayTime*2).getDate(); //获取后两天的时间
    this.dateList=[twoDayAgo,oneDayAgo,today,oneDayAfter,twoDayAfter];
  },
}
</script>

<style scoped>
*{
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
