
// *1 Declaration Statements

//  let, var, const


let name = "Natasha Bagde"; 
document.write(name);  //  we can't Redeclare ,we just reassign the value to let variable.


var age ; 
age = 24; 
document.write("<br>")
document.write(age); //  we can Redeclare  and  reassign the value to var variable.


const pi= 3.14;
document.write("<br>")
document.write(pi);     //  we can't Redeclare and update . this  Must be initialized at the time of declaration



// *2 Assignment Statements

let city;
city = "pune";
document.write("<br>")
document.write(city);

let x;
x= 25;
document.write("<br>")
document.write(x);

//  *3 Expression Statements


let addition  = 6 + 8;
let substraction = 10 -6;
let multi = 5*3;
let div = 15/3;
console.log("Hello javascript!");

 confirm("Are you sure ,You want to delete ?");

document.write("<br>")
document.write(addition);
document.write("<br>")
document.write(substraction);
document.write("<br>")
document.write(multi);
document.write("<br>")
document.write(div);

alert("welcome!")

let fullName = "Natasha" + " " + "Bagde";
console.log("Full Name:", fullName);

prompt("Enter your Age !", 30);

let counter = 30;
counter ++;
document.write("<br>")
document.write(counter);
document.write("<br>")

let a = 45;
let b= 28;

let c = a>= b;
console.log(c)



 // *4 Conditional Statements




let Age = 20;
let hasVoterCard = 'yes';

// 1  if, else  if , else .

if (Age >= 18 && hasVoterCard === 'yes') {
    alert("You can vote!");
} else if (Age >= 18 && hasVoterCard !== 'yes') {
    alert("Get your voter ID card!");
} else {
    alert("You can't vote!");
}


// Second nested if-else 

if (Age >= 18) {
    if (hasVoterCard === 'yes') {
        alert("You can vote!");
    } else {
        alert("Get your voter ID card!");
    }
} else {
    alert("You can't vote!");
}


// or

let marks = 92;

if (marks >= 90) {
  console.log("Excellent marks");
} else if (marks >= 70) {
  console.log("Good marks");
} else {
  console.log("Needs Improvement");
}




//  *5 Looping Statements

// do , do while, for.


//while loop
let count = 1;

while(count <20){

document.write("hellow ")
count+=2

}

document.write("<br>")


//while loop

let Counter = 1;
sum=0;

while(Counter<=500){

    if( Counter % 2==0){
       sum = sum + Counter;
    }
  Counter++;
}

document.write(sum);
  document.write("<br>")



// do while loop

let Value= 1;

do {
    
    document.write("javascript ");
    Value+=5;

}
while(Value<=40);



//for loop

for( let step =1; step<=10; step++){
 
      

     
     document.write("<br>")
    document.write(step)
    document.write("<br>")

   for(let step2=1; step2<3; step2++){
      
    if(step==3 ){
      break;
    }

       document.write(" Hello Everyone !" );
        document.write("<br>")

   }

 
};


//   *6 Function Statements

function Statement() {
  
  document.getElementById('demo').innerHTML=(" This is a Javascript Statements and Types of Statements.");
  
  
}

 
///


function Secondfun(){
    console.log("this is a second function");
}


Secondfun();




//*7 control flow statement  

 // break
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i); 
}



// continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); 
}


// return

function add(a, b) {
  return a + b;
}
console.log(add(12, 17)); 




// *8 try and catch statement


try {
  let x = y + 10; 
} catch (error) {
  console.log("Error find: " + error.message);
}


console.log(x)


// *9 Switch Statement

// switch statement  is used in option to conditional statement only with strict comparision

// if input is 1, y, yes ...output  continue..
// if input is 0, n, no ... output is end..


 input= 0;


// switch(input){
//     case 1:
//         console.log("Continue...");
//         break;
 
//     case "y":
//         console.log("Continue...");
//         break;    
   
//     case "yes":
//         console.log("Continue...");
//         break;     

//      case 0:
//         console.log("End...");
//         break;   
    
//      case "n":
//         console.log("End...");
//         break; 
        
//      case "no":
//         console.log("End...");
//         break; 
        
//     default:
//         document.write("Wrong Input...") ;
//}



switch(input){
    case 1:
    case "y":
    case "yes":
         console.log("Continue...");
         break;

     case 0: 
     case "n":  
     case "no":
        console.log("End...");
        break; 
        
    default:
        console.log("Wrong Input...") 

}