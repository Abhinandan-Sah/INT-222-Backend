const male = {hair: "black", eyes: "brown", complection: "fair", age: 20, weight: 65};

// for(let i=0; i<Object.keys(male).length; i++){
//     console.log(Object.keys(male)[i]);
// }

//OR use for inloop;

var length = Object.keys(male).length;
console.log("Length= " + length);
for(let key in male){
    console.log(male[key]);
}
const female = ["black", "brown"]; //this is array
for(let value of female){
    console.log(value);
}