<template>
  <div class="adding col-md-6">
    <div class="adding-title">Adding</div>
    <div class="adding-list">
      <div class="adding-area">
        <input type="text" placeholder="Add goal here" v-model="goal">
      </div>
      <div class="adding-area">
        <input type="text" placeholder="Add location here" v-model="location">
      </div>
      <div class="adding-area">
        <vue-timepicker placeholder="Start Time" input-width="100%" style="font-size: 2rem;"
                        v-model="startTimeValue" close-on-complete></vue-timepicker>
      </div>
      <div class="adding-area">
        <vue-timepicker placeholder="End Time" input-width="100%" style="font-size: 2rem;"
                        v-model="endTimeValue" close-on-complete></vue-timepicker>
      </div>
    </div>
    <div class="done row justify-content-center no-gutters" @click="add">Add</div>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'
import instance from "../../utils/request";

export default {
  name: "Adding",
  components: {VueTimepicker},
  data() {
    return {
      goal: "",
      location: "",
      startTimeValue: "",
      endTimeValue: "",
    }
  },
  methods: {
    add() {
      if (window.confirm("Are you sure to add it ?")) {
        // const curDate = new Date();//获取当前时间
        // // 获取日期格式并转换成django要求的数据格式
        // const today = curDate.toLocaleDateString().replaceAll('/', '-');//获取当前日期
        // const userID = JSON.parse(localStorage.getItem('user')).id
        const userID = this.$store.state.userID;
        // const today = localStorage.getItem('today');
        const today = this.$store.state.today;
        instance.post('/users/addgoals', {
          goal: this.goal,
          location: this.location,
          date: today,
          start: this.startTimeValue,
          end: this.endTimeValue,
          status: '0',
          // user: JSON.parse(localStorage.getItem('user')).id,
          user: this.$store.state.userID,
        }).then(res => {
          if (res.status === 201) {
            // 通过父组件AddTask调用Added的方法
            this.$emit("updateTodos");
            // console.log(res.data);
            this.goal = "";
            this.location = "";
            this.startTimeValue = "";
            this.endTimeValue = "";
          }
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

/* 任务栏标题 */
.adding-title {
  background-color: #eee;
  font-size: 3rem;
  display: flex;
}

.adding-title::before {
  content: '';
  width: 2rem;
  background-color: blue;
}

.adding-area input {
  width: 100%;
  border-bottom: 5px;
  font-size: 2rem;
  border: none;
  outline: none;
  padding: 2rem 0;
  background: none;
}

.done {
  padding: 0.5rem 0;
  font-size: 2.5rem;
  background-color: #f6f6f6;
}
</style>
