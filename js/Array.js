
// template Literals  

// it is used only in the blacktick 

let name = "Natasha Bagde";
let course = "JavaScript";
let message = `Hello, my name is ${name} and I'm learning ${course}.`;
console.log(message);


let text = " this is a javascript template literals ";

console.log(`hellow world ! ${text}`);


let str1 = "I am learning JavaScript because it is one of the most powerful and widely used programming languages in the world. ";
  
console.log(`With JavaScript, I can build dynamic websites, interactive apps, and even work on server-side development using Node.js.${str1}`);


let sentence1 = "It\'s a great day to code! ";
console.log(`Don't give up! you can do it.${sentence1}`);  




// Arrays

let books= ["english","marathi","hindi","maths"];
console.log(books);
console.log(typeof books);
console.log(Array.isArray(books));
console.log(books.length);
console.log(books.toString());


let fruits = ["apple", "banana", "cherry","Grapes", "Orange","Strawberry", "Watermelon", "Dragon fruit"];
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits[5]);



 let x = ["mahi","mohit","natasha","samyak","mrunali"];
 console.log(x);
 console.log(typeof x);
 console.log(Array.isArray(x));
 console.log(x[4]);
 console.log(x[1]);
 console.log(x[6]);
 console.log(x.length);
 console.log(x.toString());


 // Array Methods


 // push  

 fruits.push("Pineapple");
 console.log(fruits);

 books.push("science","biology","computer science");
 console.log(books);

 x.push("Ankita","shishir","anvi",15);
 console.log(x);



// pop


fruits.pop()
 console.log(fruits);

 books.pop();
 console.log(books);

 x.pop();
 console.log(x);


 // shift

 fruits.shift()
 document.write(fruits);
  document.write("<br>");
  document.write("<br>");


 books.shift();
 document.write(books);
  document.write("<br>");
  document.write("<br>");

 x.shift();
 document.write(x);
  document.write("<br>");
  document.write("<br>");



 // unshift()

 fruits.unshift("Kiwi","Papaya")
 document.write(fruits);
 document.write("<br>");
 document.write("<br>");

 books.unshift("novel","physics","chemistry");
 document.write(books);
 document.write("<br>");
 document.write("<br>");

 x.unshift( "kabir","erica");
 document.write(x);
  document.write("<br>");
  document.write("<br>");


 

  //splice

["apple", "banana", "cherry","Grapes", "Orange","Strawberry", "Watermelon", "Dragon fruit"];
document.write(fruits);
document.write("<br>");
document.write("<br>");  

fruits.splice(3,2,"Guava");
document.write(fruits);
document.write("<br>");
document.write("<br>"); 

fruits.splice(5,0,"Coconut");
document.write(fruits);
document.write("<br>");
document.write("<br>"); 



 
 // slice 

let colors = ["red ", "green ", " blue", " pink"," purple"] ;
let firstTwo = colors.slice(0, 3);
document.write(firstTwo); 
document.write("<br>");
document.write("<br>");

let nums = [10, 20, 30, 40,50, 60];
let mid = nums.slice(1, 5);
document.write(mid); 
document.write("<br>");
document.write("<br>");

let cities = ["Pune ", "Nagpur ", "Mumbai " ,"Bangalore ","Hyderabad ", "Ahmedabad ", "Chennai ","Kolkata ","Surat "];
document.write(cities.slice(1)); 
document.write("<br>");
document.write("<br>");


let letters = ["a", "b", "c", "d","e","f","g","h"];
document.write(letters.slice(-5)); 
document.write("<br>");
document.write("<br>");


// filter 


let num2 = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10];
let even = num2.filter(n => n % 2 === 0);
document.write(even);
document.write("<br>");
document.write("<br>");


let names = ["Natasha ", "Mohit", "Neha ", "Mahi","naynish"," bhavi","Nehal "];
let result = names.filter(name => name.startsWith("N"));
document.write(result); 
document.write("<br>");
document.write("<br>");


let marks = [90,50, 54, 85,76,79,97,63, 60, 45, 67, 89, 23, 55];
let pass = marks.filter(mark => mark >= 55);
document.write(pass);
document.write("<br>");
document.write("<br>"); 



let longFruits = fruits.filter(fruit => fruit.length >6);
document.write(longFruits);
document.write("<br>");
document.write("<br>"); 



// map 


[1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10];
let doubled = num2.map(num2 => num2 * 7);
document.write(doubled); 
document.write("<br>");
document.write("<br>"); 



let upperNames = names.map(name => name.toUpperCase());
document.write(upperNames); 
document.write("<br>");
document.write("<br>"); 



let updatedMarks = marks.map(m => m + 2);
document.write(updatedMarks);
document.write("<br>");
document.write("<br>");  


// concat

 let combine_arr= names.concat(x);
 document.write(combine_arr);
 document.write("<br>");
document.write("<br>");  


 let combine_arr2 = num2.concat(marks);
 document.write(combine_arr2);
 document.write("<br>");  
 document.write("<br>");  


 //includes 

 document.write( marks.includes(89));
 document.write("<br>");  

 document.write(fruits.includes("Watermelon"));
 document.write("<br>");  

 document.write(fruits.includes("Pomegranate"));
 document.write("<br>");  

 document.write(num2.includes(10));
 document.write("<br>");  

 document.write(num2.includes(17));
 document.write("<br>");  


// fill flat join

 //join 
  document.write(cities.join('--'));
  document.write("<br>");  
  document.write("<br>");  

  document.write(fruits.join(' * '));
   document.write("<br>");  


   //falt 

   arr = [1,2,3,4,[5,6,7,8]];
   console.log(arr.flat());
   document.write("<br>");  
   document.write("<br>"); 


   arr2 = [1,2,3,4,[5,6,7,8, [ 9,10,11,[12,13,14]]]];
   console.log(arr2.flat(4));
   document.write("<br>");  




   // fill 


let items = ["A","B","C","D","E","F","G"];
items.fill("#");
console.log(items); 


let data = [1, 2, 3, 4, 5, 6, 7];
data.fill("X", 2, 5);
console.log(data); 



// reverse 

 console.log(fruits.reverse());

 console.log(cities.reverse()); 

console.log(names.reverse());

console.log(fruits.reverse());


// sort 


 console.log(marks.sort());

 console.log(fruits.sort());

 console.log(cities.sort());




// some 
console.log(marks.some(marks => marks>50)); //if the  one value is  greater than 50 they can return true  they not complasory check every value in the array 

console.log(marks.some(marks => marks>99));



// every 


console.log(marks.every(marks => marks>20));    // in this arr every value should be checked and after that they give result if the condition is true

console.log(marks.every(marks => marks>100));