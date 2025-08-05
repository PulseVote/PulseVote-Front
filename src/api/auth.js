import axios from "./axios.config.js";

const api = axios;

async function login() {
  try {
    const response = axios.get("/auth/login");
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function register() {
  try {
    const response = axios.post("/auth/register");
    const data = response.data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
