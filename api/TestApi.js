const axios = require("axios");

axios
  .get("/test")
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
