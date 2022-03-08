<template>
    <div class="lecture col-md-6">
      <div class="lecture-title row">
        <div class="bg-info col-1"></div>
        <div class="col-11">Lecture</div>
      </div>
      <div class="lecture-list">
        <ul>
          <li>
            <input type="checkbox">
            <div class="lecture-details">
              <p>English</p>
              <p>English Building 14:00-15:00</p>
            </div>
          </li>
          <li>
            <input type="checkbox">
            <div class="lecture-details">
              <p>English</p>
              <p>English Building 14:00-15:00</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "Lecture"
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* 任务栏标题 */
.lecture-title {
  height: 5rem;
  width: 100%;
  background-color: #eee;
  font-size: 2.8rem;
  line-height: 5rem;
  display: flex;
}

/* lecture的详情 */
.lecture-list {
  width: 100%;
}

.lecture-list li {
  width: 100%;
  height: 8rem;
  font-size: 3rem;
  line-height: 8rem;
  list-style: none;
  display: flex;
  cursor: pointer;
  border-bottom: 5px solid #f6f6f6;
}

.lecture-list li input {
  flex: 1 1 20%;
  display: inline-block;
  height: 3rem;
  margin: 2rem auto;
}

.lecture-details {
  height: 8rem;
  line-height: 4rem;
  font-size: 2.5rem;
  flex: 1 1 80%;
  /* border: 1px solid rebeccapurple; */
}

.lecture-details p:nth-child(2) {
  font-size: 1.5rem;
}
</style>
