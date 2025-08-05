import axios from "./axios.config.js";

const api = axios;

async function login() {
  try {
    const response = axios.get("/login");
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
