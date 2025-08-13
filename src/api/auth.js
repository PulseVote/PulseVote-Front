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
    if (!response) {
      output.message = "No response found, check if you are on the internet";
    }
    switch (response.status) {
      case 400:
        output.message = "You have sent an invalid email or password format";
      case 404:
        output.message = "User does not exist";
    }
    const accessToken = response.headers["authorization"].split(" ")[1];
    if (!accessToken == null) {
      output.message = "Something was not right with logging you in.";
    }
    getAccessToken(token);
    output.message = `Successfully logged in ${email}`;
    output.success = true;
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

    const message = response.data.message;
    if (response.status == 400) {
      throw Error("You sent invalid data");
    }
    if (response.status == 409) {
      throw Error("This email is already in use");
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
