const male = {hair: "black", eyes: "brown", complection: "fair", age: 20, weight: 65};

const female = ["black", "brown"]; //this is array
//to access properties of an object by using dot operator
console.log(male.hair);
// by using square braces
console.log(male["hair"]);
//typeof
console.log(typeof(male));
//access by index number
console.log(female[1]);

console.log(female.length);
console.log(female);
female.push("hello");
console.log(female)