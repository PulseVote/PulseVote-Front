import axios from "axious";
const dotenv = require("dotenv");
dotenv.config();
async function fetchTest() {
  try {
    const response = await axios.get("/test");
  } catch (error) {
    console.error(error);
  }
}
