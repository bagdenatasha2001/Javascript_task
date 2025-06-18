

// Hoisting in js

console.log(a); // it show undefine 

var a = 10;


myFunction(); // this also runs


function myFunction() {
  console.log("Hello js!");
}


myFunction(); 



// console.log(b);  //  it gives ReferenceError

// let b = 20;     // we can't use  const and let to the hoisting beacause its does't take auto declared  here. only let can do this.


// console.log(c); // ReferenceError
// const c = 30;   // let, const  this is not accessible before  the  declaration.
 

function test() {
  console.log(x); // undefined
  var x = 5;
}

test();



console.log(p, q); // undefined undefined
var p = 5, q = 8;



console.log(msg); // undefined
var msg = "Welcome!";



var msg = "Welcome!";
console.log(msg); // undefined



//  This keyword in js 



console.log(this);


function show_this() {
  console.log(this);
}
show_this(); // window (in non-strict mode)


// object 
let person = {
    firstName: "Natasha",
    lastName :'Bagde',
    sayhi(){      // function or method  in object 
    console.log("Hi Everyone my name is " + this.firstName + " i have "  + car.brand  +" car")
    }
};


let car ={

    brand : "Tata",
    model:"safari"

}

console.log(person);

person.sayhi();



let student = {
    Name: "Rohini",
    surName: "Meshram",
    city: "Pune",
    section : "B",
    marks: 378,
     showDetails() {
        console.log("Name:", this.Name);
        console.log("Surname:", this.surName);
        console.log("City:", this.city);
        console.log("Section:", this.section);
        console.log("Marks:", this.marks);
    }
};

student.showDetails();



// Use Strict in js 

// this both are work 

 y = 30 ;

document.write("<br>");
document.write("<br>");
 document.write(y);


 

 function  check(){

    document.write("<br>"); 
     document.write("<br>");
    document.write ("Use strict in js !")
 }

 check()



 // class in js 


 class Calculator {
  addition(a, b) {
    return a + b;
  }
}

let calc = new Calculator();
console.log(calc.addition(3, 7));



 class user{
    constructor( n, a){
     this.name = n;
     this.age = a;
    }

    say(){
        console.log("hello javascript !")
    }

    static mproperty = "What is there ? " // static  property

    static hello(){                               // staic method              
        console.log("classes in js !")
    }
 
 }

let user1 = new user("natasha",25);

user1.say();
console.log(user1);

user.hello(); // it is a static method so its not called using object , its called by class name 

console.log(user.mproperty);



class Student{
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log("Hello, " + this.name);
  }
}

let S1 = new Student("Rohini");

S1.greeting();





class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  show_info() {
    console.log(`${this.title} by ${this.author}`);
  }
}

let B = new Book("The Power of Your Subconscious Mind", "Dr. Joseph Murphy.");
B.show_info(); 



// JSON in js 

//   JSON.parse // it  converts a JSON string into a JavaScript object or array . and this is useful  when we have to receive data from a server.


//  this is a json  string 

data = `{
    "name" : "Mohit",
    "surname":"Bagde",
    "age": 21,
    "is_student":true,
    "passport_no":null,
    "p_lang":[ "c","c++","java","python"],
    "address":{
        "city":"Nagpur",
        "state":"maharshtra",
        "pincode" :441804

    }
    
}`

// it convert the json string into the json object and store the data into dobject  variable 

let dobject = JSON.parse(data);

console.log(data);

console.log(dobject);


// we can access using both the way dot and [] bracket 
console.log(dobject["name"]);
console.log(dobject["passport_no"]);
console.log(dobject["address"]);
console.log(dobject["address"]["pincode"]);
console.log(dobject["p_lang"]);
console.log(dobject["p_lang"][3]);


//  this is a json  string 

let kia_Car= `{
  "brand": "Kia",
  "model": "Seltos",
  "variant": "GT Line",
  "year": 2024,
  "fuel_type": "Petrol",
  "transmission": "Automatic",
  "features": ["Ventilated Seats", "Sunroof", "Touchscreen Display", "ADAS"],
  "price_in_lakhs": 17.8
}`;

// it convert the json string into the json object and store the data into  kiaCar_data  variable 

let kiaCar_data = JSON.parse(kia_Car);

console.log(kia_Car);
console.log(kiaCar_data);
console.log(kiaCar_data.model);        
console.log(kiaCar_data["features"][2]);  




//  this is a json  string 
let bookData = `{
  "title": "The Power of Your Subconscious Mind",
  "author": "Dr. Joseph Murphy",
  "published_year": 1963,
  "genre": "Self-help / Psychology",
  "rating": 4.6,
  "pages": 320,
  "language": "English",
  "summary": "This book explores how the subconscious mind can be trained through affirmations and belief to overcome fears, achieve goals, and attract success, health, and happiness."
}`;


// it convert the json string into the json object and store the data into book  variable 
let book = JSON.parse(bookData);



// we can access using both the way dot and [] bracket 
console.log(book); 
console.log(book.title);      
console.log(book.summary);   
console.log(book.rating);   
console.log(book.pages);

 

 // JSON stringify

// it converts a JavaScript object or array into a JSON string . and this is used when we have to send data to  the server.


 let Person = {
  name: "Mrunali",
  age: 19,
  city: "Nagpur",
  isStudent: true,
  hobby: "badminton"
};

let jsonString = JSON.stringify(Person);

console.log(jsonString);

console.log(Person.name);     
console.log(Person.age);      
console.log(Person.hobby);  




let marks = {
  name: "Anjali",
  math: 88,
  science: 92,
  english: 85,
  result: "Pass"
};

let jsonMarks = JSON.stringify(marks);

console.log(jsonMarks);

console.log(marks.name);     
console.log(marks.science);  
console.log(marks.result); 




let phone = {
  brand: "Samsung",
  model: "Galaxy S22",
  price: 59999,
  is5G: true,
  color: "Phantom Black"
};

let jsonPhone = JSON.stringify(phone);

console.log(jsonPhone);

console.log(phone.brand);  
console.log(phone.price);  
console.log(phone.is5G);


let destination = {
  country: "India",
  city: "Pune",
  famousFor: "A Major Educational ,IT , and automobiles hub in India",
  visaRequired: false,
  currency: "Indian rupee "
};

let jsonDestination = JSON.stringify(destination);

console.log(jsonDestination);

console.log(destination.country);   
console.log(destination.city);
console.log(destination.famousFor);


// Debugging  in js  


//  incorrect code or, Buggy Code
// function greet(name {
//   console.log("Hello " + name);
// }

// correct code 

function greet(name) {
  console.log("Hello " + name);
}

greet("Natasha");




//  incorrect code or , Buggy Code
let score = 100;

// if (score = 100) {
//   console.log("Perfect score!");
// }



// correct code  OR   Debugging code 
if (score === 100) {
  console.log("Perfect score!");
}




let value = "abc";
let result = parseInt(value) + 10;

console.log("Result:", result);  //  NaN - not a number



let userName = "Anjali";

// console.log(username);   //  it show ReferenceError


console.log(userName);



let num = "100";
let Result = num + 50;

// console.log("Result:", Result); //  (string + number)



num = Number(num);
Result = num + 50; // 150
console.log("Result:", Result);




// debugger;    // Pause code here when running in browser.


// if YOU want to show this remove the comment form debugger


let c = 5;
let d = 10;

// debugger; 

let sum = c + d;
console.log("Sum:", sum);



let fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit, index) => {
  // debugger;
  console.log(index + ": " + fruit);
});



let Score = 34;

if (Score < 35) {
  // debugger; 
  console.log("Fail");
} else {
  console.log("Pass");
}





