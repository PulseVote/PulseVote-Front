import axios from "axios";

const api = axios;

export async function fetchTest() {
  try {
    const response = await api.get("/hello");
    const data = response.data;
    console.log(data.message);
    return data.message;
  } catch (error) {
    console.error(error);
  }
}
