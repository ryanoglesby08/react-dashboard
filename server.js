const express = require("express");
const cors = require("cors");

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const chooseNumberRandomly = () => {
  const options = [1,2,3,4,5,6,7,8,9,10];
  return options[getRandomInt(0, options.length)];
};

const port = process.env.PORT|| 3000;
const app = express();

app.use(cors());

app.get('/random', (req, res) => {
  res.json({random: chooseNumberRandomly()});
});

app.get('/build', (req, res) => {
  const number = chooseNumberRandomly();

  let status;
  switch(true) {
    case [1,2,3].includes(number):
      status = "failed";
      break;
    case [4,5].includes(number):
      status = "building";
      break;
    case [6].includes(number):
      status = "canceled";
      break;
    default: 
      status = "success";
  }

  res.json({status});
});

app.listen(port);
console.log(`server started on port ${port}`);
