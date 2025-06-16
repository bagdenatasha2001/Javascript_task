

let map = new Map();


map.set("fruits" ,"Apple");
map.set("flower","Rose");
map.set("Tree","peepal");

console.log(map.get("flower"));
console.log(map.get("Tree"));
console.log(map.get("fruits"));



let map1 = new Map();
map1.set("name", "Natasha");
map1.set("age", 25);
console.log(map1.get("name"));
console.log(map1.get("age"));
console.log(map1);


let map2 = new Map();

map2.set(1, "One");
map2.set(2, "Two");
console.log(map2.get(2)); 


// createing a  map object 

let map3 = new Map([["key1","value1"],
    [10,"hellow"],
    ["name","mrunali"]

]);

// add , update- adding element in the map and update the map
console.log(map3);

map3.set("mobile", "8007930381")
map3.set("name","Ankita");
console.log(map3);


map1.forEach((value, key) => {
  console.log(key + " = " + value);
});


//  accessing values and key 

console.log(map3.keys());
console.log(map3.values());


 // has - cheking this keys are present or not in the map

console.log(map3.has("mobile"));
console.log(map3.has("Name"));


// size - cheking  size of the map 
console.log(map1.size);
console.log(map3.size);



//  clear
map2.clear();

console.log(map2);


// delete - removing the element from the map 

map.delete("fruits");

console.log(map);



//  entries- give iterator with key and value pair

console.log(map3.entries());
console.log(map1.entries());


// foreach 

map3.forEach((value, key) => {
  console.log(key + " : " + value);
});



// 


map1.forEach((key,value) => {

  document.write(value,key);
  document.write("<br>");


});

// get - for accessing value or key


document.write(map3.get("name")); 
document.write("<br>");
document.write(map1.get("age")); 
document.write("<br>");
document.write(map.get("Tree"));
document.write("<br>");
document.write(map.get("flower"));
document.write("<br>");





let map4 = new Map([
  ["math", 90],
  ["science", 85],
  ["english", 88],
  ["marathi", 92],
  ["hindi", 78]
]);

let total = 0;
for (let score of map4.values()) {
  total += score;
}
document.write("Total Marks:", total);



let likes = new Map([
  ["Post 1", 120],
  ["Post 2", 95],
  ["Post 3", 143],
  ["Post 4", 87]
]);

let totalLikes = 0;
for (let like of likes.values()) {
  totalLikes += like;
}

document.write("<br>");
document.write(" Total Likes: " + totalLikes);




// Regex

// Search and replace, and i is used to ignore the case 



let text1 = "Say Hello to everyone!";

document.write("<br>");
document.write(text1.search(/say/i)); 



let text2 = "The Sun is bright today";
document.write("<br>");
document.write(text2.search(/Bright/i)); 


let text3 = "the book";
 
document.write("<br>");
document.write(text3.replace(/book/i, "Sun"));

let text4 = "I love  Mango";

document.write("<br>");
document.write(text4.replace(/like/i, "like"));



// Error Handling in javascript


try{
 const res  = prompt("Are you A Robot ?");

 if (res=='yes'){
  throw new Error("Robot Found !");
 }
}catch(error){
  console.log(error.message);

}





try {
  let result = 10 / 0;
  console.log("Result is", result);
} catch (error) {
  console.log("Something went wrong:", error.message);
}

document.write("<br>");




let age = -5;

try {
  if (age < 0) {
    throw new Error("Age cannot be negative!");
  }
} catch (error) {
  document.write("Caught an error:", error.message);
}


document.write("<br>");



try {
  console.log("Trying to run code");
  throw new Error("Oops!");
} catch (error) {
  console.log("Caught:", error.message);
} finally {
  console.log("Always runs, error or not");
}


document.write("<br>");

// Scope 

// Block scope



if (true) {
  let message = "Hello from block scope in js !";
  document.write(message);
}

// console.log(message); // this not work outside the block 


document.write("<br>");  

for (let i = 0; i < 1; i++) {
  const greeting = "Hi there!";
  document.write(greeting); 
}


document.write("<br>");  

if (true) {
  let city = "Pune";
 document.write(city); 
}





// Function scope


function msg() {
  let msg = "Hello!";
  console.log(msg); //
}

msg();

// console.log(message);// this not work outoff the funtion



document.write("<br>"); 



let x = 20; // Global variable

function show() {
let x = 10; // local variable
  document.write(x); 
}

show();

document.write("<br>"); 
document.write("out of  x value is " ,  x); 


document.write("<br>"); 


function first() {
  let color = "Red";
 document.write(color); 
}



function second() {
  let color = "Pink";
  document.write(color); 
}

first();
document.write("<br>"); 
second();





function outer() {
  let outerVar = "I'm outerside  function!";

  function inner() {
    console.log(outerVar); }   // access outer function in the inner function but can't access inner function to outer fuction  
  inner();
  
}

outer();


document.write("<br>"); 



// Global scope
 



const language = "JavaScript";

if (true) {
  document.write(language); 
}


document.write("<br>"); 

var subject = "Math"; 

function study() {
document.write("Studying " + subject); 
}

study();



// Spread 


let Str = "world";
console.log([...Str]); 


let colors = ["red", "green"];
let moreColors = [...colors, "blue","pink"];
console.log(moreColors); 



let nums = [2, 3, 4];
let newNums = [1, ...nums, 5];

console.log(newNums); 




// object destructuring 


let person = { Name: "Natasha", Age: 22 };

let { Name, Age } = person;

console.log(Name); 
console.log(age);  




let car = { brand: "Tata", model: "Nexon" };

let { brand: carBrand, model: carModel } = car;

console.log(carBrand); 
console.log(carModel);





let student = {
  name: "Natasha",
  address: {
    city: "Pune",
    pin: 411001
  }
};

let { address: { city, pin } } = student;

console.log(city);
console.log(pin);  
