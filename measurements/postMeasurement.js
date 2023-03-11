const axios = require('axios');

const API_URL = 'http://localhost:3000/measurements';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function postMeasurement() {
  const sensor_id = 1;
  const celcius = parseFloat((getRandomInt(20, 25) + Math.random()).toFixed(5));
  const humidity = parseFloat((getRandomInt(30, 50) + Math.random()).toFixed(5));

  const measurement = {
    sensor_id,
    celcius,
    humidity,
  };

  axios.post(API_URL, measurement, {
    headers: {
      Authorization: 'Basic ' + btoa('myuser:secret')
    }
  })
  
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

setInterval(() => {
  postMeasurement();
}, 5000); // send random data every 5 seconds
