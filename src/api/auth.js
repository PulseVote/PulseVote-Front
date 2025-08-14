import { api, getAccessToken } from "./axios.config.js";

export async function login(userInfo) {
  try {
    if (!userInfo) throw Error("Invlaid data exception");
    const { email, password } = userInfo;
    const response = await api.post("/auth/login", {
      email: email,
      password: password,
    });
    const output = {
      message: "",
      success: false,
    };
    if (response.status >= 400 && response.status < 500) {
      output.message = response.data.errorMessage;
    }
    if (response.status == 200) {
      const { accessToken } = response.headers["authorization"].split(" ")[1];
      accessToken != null
        ? getAccessToken(accessToken)
        : (output.message = "There was an error authorizing you.");
    }
    return output;
  } catch (error) {
    console.log(error);
    return {
      message: `There was an error when trying to login: ${error}`,
      success: false,
    };
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
    const output = {
      message: "",
      success: false,
    };
    output.success = response.status === 201; // if its true, return true
    output.message = response.data.message;
    return output;
  } catch (err) {
    console.log(err);
    return { message: "Unable to register user", success: false };
  }
}
