<template>
  <div class="lecture col-md-6">
    <div class="lecture-title row">
      <div class="bg-info col-1"></div>
      <div class="col-11">Lecture</div>
    </div>
    <div class="lecture-list">
      <ul>
        <li>
          <div class="row align-items-center">
            <div class="col-2 text-center">
              <input class="checkbox" type="checkbox">
            </div>
            <div class="lecture-details col-10">
              <p>English</p>
              <p>English Building 14:00-15:00</p>
            </div>
          </div>
        </li>
        <li>
          <div class="row align-items-center">
            <div class="col-2 text-center">
              <input class="checkbox" type="checkbox">
            </div>
            <div class="lecture-details col-10">
              <p>Math</p>
              <p>Math Building 14:00-15:00</p>
            </div>
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
  border-bottom: 5px solid #f6f6f6;
}

.checkbox {
  width: 3rem;
  height: 3rem;
}

.lecture-details {
  font-size: 2.5rem;
}

.lecture-details p:nth-child(2) {
  font-size: 1.5rem;
}
</style>
