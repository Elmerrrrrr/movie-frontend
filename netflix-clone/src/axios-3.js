import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:2021",
});

export default instance;
