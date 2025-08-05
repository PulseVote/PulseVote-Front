import axios from "axios";

const api = axios.create({
  baseURL: `https://localhost:443/`,
});

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
