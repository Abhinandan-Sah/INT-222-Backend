const readlineSync = require('readline-sync');

//Get user input for their name
const userName = readlineSync.question('enter you distance from lpu');

//Display a personalized greeting
console.log(`${userName}, sorry! this is not good enough to teach the students of b.tech`);