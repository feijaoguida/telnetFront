import axios from "axios";

const api = axios.create({
  baseURL: "https://telnetback.herokuapp.com",
});

export default api;
