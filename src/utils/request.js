import axios from "axios";

const instance = axios.create({
  baseURL: "https://mopupapi.herokuapp.com",
  timeout: 10000,
  // baseURL: "http://127.0.0.1:8000",
  // timeout: 5000,
})

export default instance;
