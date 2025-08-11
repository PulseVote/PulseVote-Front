import { api } from "./axios.config.js";

export async function login(userInfo) {
  try {
    const response = api.get("/auth/login");
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// we will send an object to this so thatt we can deconstruct it
export async function register(userInfo) {
  try {
    if (!userInfo) throw Error("Invlaid data exception");
    const signUpDate = new Date();
    const { username, email, password } = userInfo;
    const response = await api.post("/auth/register", {
      username: username,
      password: password,
      email: email,
      signUpDate: signUpDate,
    });
    const data = response.data;
    return response.data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

