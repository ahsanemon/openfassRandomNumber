'use strict'

module.exports = (content, callback) => {    
    let min = 0;
    let max = 10;
    
    let generatedNumber = Math.floor(Math.random() * max) + min;
    
    callback(null, generatedNumber);
};
