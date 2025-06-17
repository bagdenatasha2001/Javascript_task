

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



//

