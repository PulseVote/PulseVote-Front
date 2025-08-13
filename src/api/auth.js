import { api } from "./axios.config.js";

export async function login(userInfo) {
  try {
    if (!userInfo) throw Error("Invlaid data exception");
    const { email, password } = userInfo;
    const response = await api.get("/auth/login", {
      username: username,
      password: password,
    });
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// we will send an object to this so thatt we can deconstruct it

export async function register(userInfo) {
  try {
    console.log(userInfo);
    if (!userInfo) throw Error("Invlaid data exception");

    const signUpDate = new Date();
    const { username, email, password } = userInfo;
    const response = await api.post("api/auth/register", {
      username: username,
      password: password,
      email: email,
      signUpDate: signUpDate,
    });

    const message = response.data.message;
    if (response.status == 400 || response.status == 409) {
      throw Error("There was an error trying to register");
    }
    if (response.status == 500) {
      throw Error(
        "There was an issue registerring " + response.data.errorMessage
      );
    }
    return message;
  } catch (err) {
    console.log(err);
  }
}
