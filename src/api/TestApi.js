import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:5000/`,
});

export async function fetchTest() {
  try {
    const response = await api.get("/hello");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


