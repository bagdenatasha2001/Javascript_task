
// this is a commonjs module in javascript.

// require () // means importing  module  file 

const math = require("./tools.js")

console.log(math.add(10,5));
console.log(math.sub(10,5));
console.log(math.mul(5,5));
console.log(math.divide(15,3)); 




console.log(math.user);
console.log(`user name : ${math.user.name}`);
console.log(`user age : ${math.user.age}`);
console.log(`user phone : ${math.user.phone}`);


console.log(math.arr);
console.log(math.arr.length);
console.log(math.arr.push("saumya"));
console.log(math.arr);
console.log(math.arr.unshift("neha"));
console.log(math.arr);
console.log(math.arr.splice(3,0,"Anvi"));
console.log(math.arr);
console.log(math.arr.pop());
console.log(math.arr.shift());
console.log(math.arr);

console.log(math.msg);


console.log(math.fruits); 