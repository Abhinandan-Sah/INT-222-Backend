//requiring the 'lodash' third-party module
const calculate = require('lodash');

//Sample data
const numbers = [1, 2, 3, 4, 5];

//using 'lodash' functions
const sum = calculate.sum(numbers);
console.log('Sum: ', sum);