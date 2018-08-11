'use strict'
let fs = require('fs');

const getStdin = require('get-stdin');

getStdin().then((content) => {

  let min = 0;
  let max = 10;
    
  let generatedNumber = Math.floor(Math.random() * max) + min;
  console.log("Random Number: " + generatedNumber);

});
