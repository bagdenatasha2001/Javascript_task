

// conditional statement

let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}



let marks = 78;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}



let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}



let isLoggedin = 0; // if 0 show  login anf if 1 show logout button 

if( isLoggedin == 0){
 alert("login")
} else{
    alert("logout")
}




let day = "Monday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend!");
} else {
  console.log("It's a working day.");
}



// else if 

let temperature = 45;

if (temperature > 30) {
  console.log("Hot Weather");
} else if (temperature >= 15 && temperature <= 30) {
  console.log("Pleasant Weather");
} else {
  console.log("Cold Weather");
}




let username = "admin";
let password = "1234";

if (username === "admin" && password === "admin123") {
  console.log("Login Successful");
} else if (username === "admin") {
  console.log("Incorrect Password");
} else {
  console.log("User not found");
}




// loops 

// while loop


let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}


let count = 6;

while (count > 0) {
  console.log("Countdown:", count);
  count--;
}


let answer = "";

while (answer !== "yes") {
  answer = prompt("Type 'yes' to continue:");
}

console.log("Thanks for saying yes!");



let num = 2;

while (num <= 10) {
  console.log(num);
  num +=2;
}



// do while 


let x = 3;


do {
  console.log(x);
  x++;
} while (x <= 5);



let y = 7;

do {
  console.log("Runs at least once!");
} while (y < 5);




// let input;

// do {
//   input = prompt("Enter the password:");
// } while (input !== "open123");

// console.log("Correct password!");



let m = 4;

do {
  console.log(3 * m);
  m++;
} while (m <= 5);



let str = "javascript";
let index = 4;

do {
  console.log(str[index]);
  index++;
} while (index < str.length);




// for loop



for (let z = 1; z <= 5; z++) {
  document.write(" ",z);
  
}
document.write("<br>");
document.write("<br>");


for (let i = 0; i < 5; i++) {
  document.write("Hello ");
}

document.write("<br>");
document.write("<br>");


let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

document.write("Total sum:", sum);

document.write("<br>");
document.write("<br>");
  



let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
document.write(" ",fruits[i]);
}

document.write("<br>");
document.write("<br>");



for (let i = 1; i <= 20; i++) {
  document.write(i * i," ");
}

document.write("<br>");
document.write("<br>");

// for in loop  

//used in array
// used to accessing index  


let person = { name: "Natasha", age: 23, city: "Pune" };

for (let key in person) {
  document.write(key  + ":" +person[key]);
  document.write("<br>");
}


document.write("<br>");
document.write("<br>");

 ["apple", "banana", "cherry"];

for (let index in fruits) {
  document.write(index + ": " + fruits[index]);
   document.write("<br>");
  
}



// for of loop 

// used in array

// used to accessing value in the aaray.  but its a loop 
 

let score = [89,40,75,79,90,85 ];

for( let x of score){

    console.log(x);
}


let str1 = "How beautiful you are!"
for( let p of str1){
    console.log(p);

}



// for each loop 



// index,value , total array

 ["apple", "banana", "cherry"];

 fruits.forEach(function (value,index,array){

    console.log(value);
    console.log(index);
   
 })


 // iterable 

// it is  work same as for of loop for accessing single value in the aaary or string but it it not loop .

 let word = "hello";
for (let char of word) {
  console.log(char);
}


 let Fruits = ["apple", "banana", "cherry"];
for (let fruit of Fruits) {
  console.log(Fruits);
}


let numbers = new Set([1, 2, 3]);
for (let num of numbers) {
 console.log(num);
}




//  spread


let Str = "world";
console.log([...Str]); 


let colors = ["red", "green"];
let moreColors = [...colors, "blue","pink"];
console.log(moreColors); 







// try catch 


try {
 alert(X); 
} catch (error) {
 alert("Error Catch : " + error.message);
}



try{
 console.log(Age);
}catch(error){
 
  console.log(error.name);
  console.log(error.message);
}


try{
 const res  = prompt("Are you A Robot ?");

 if (res=='yes'){
  throw new Error("Robot Found !");
 }
}catch(error){
  console.log(error.message);

}



try {
  let password = "1869";

  if (password.length < 6) {
    throw "Password too short! Must be at least 6 characters.";
  }

  console.log("Password accepted.");
} catch (error) {
  console.log("Error:", error);
}




try {
  let email = "@example.com";

  if (!email.includes("@")) {
    throw "Invalid email address!";
  }

  console.log("Email is valid.");
} catch (error) {
  console.log("Error:", error);
}
