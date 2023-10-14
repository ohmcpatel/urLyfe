const axios = require('axios');

const data = {
  userId: 'yourUserId', // Replace with the actual user ID
};

axios.post('http://localhost:3000/addUser', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
