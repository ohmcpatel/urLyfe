const axios = require('axios');

const data = {
  userId: "hfreiru",
  username: "dhuide",
  email: "dhjede",
  fullname: "djhediehd",
};

axios.post('http://localhost:4500/addUser', data)
  .then(response => {
    console.log("Response Data:", response.data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
