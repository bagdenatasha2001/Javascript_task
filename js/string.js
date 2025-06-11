//  Javascript Events

// onclick events 

let btn1 = document.querySelector("#btn1")

btn1.onclick = () =>{
    alert("This button was Clicked ! ")
}

// ondblclick events 
let btn2 = document.querySelector("#btn2")

btn2.ondblclick = ()=>{
console.log("button is clicked 2 Times")
}




//
function showText() {
      document.getElementById("info").style.display = "block";
    }

    function hideText() {
      document.getElementById("info").style.display = "none";
    }

 


    //




 function showKey() {
    document.getElementById("output1").innerText = "You released: " + e.key;
  }


//




function showMessage() {
    document.getElementById("msg1").innerText = "You pressed a key!";
  }



   function showKey(e) {
    document.getElementById("msg2").innerText = "You pressed: " + e.key;
  }


  let keyCount = 0;
  function countKeys() {
    keyCount++;
    document.getElementById("msg3").innerText = "Keys Pressed: " + keyCount;
  }



  // strings in js 


 let message = "Hello, javascript !. this is the javascript strings it is used to store the text data in a double quotes or signle quotes ";
console.log(message);


//Concated string

  let str1 = "I am learning JavaScript because it is one of the most powerful and widely used programming languages in the world. ";
  
  let str2= "With JavaScript, I can build dynamic websites, interactive apps, and even work on server-side development using Node.js.";

  let combinestring =str1 + str2;

  console.log(combinestring);
  document.write("<p>" + combinestring + "</p>");



 //  in Template literals strings



 let user = "Mohit Bagde !";

console.log("hello "+ user);

console.log(`hello ${user}`)



let name = "Mahi";
let course = "JavaScript & React_js";
let duration = "6 weeks";

let Message = `Hello ${name}, Welcome to the ${course} course ! 
Your course duration is ${duration};`

console.log(Message);



//String Length




let text = "hellow world !";

console.log(text);
console.log(text.length);

console.log(message);
console.log(message.length);

console.log(user);
console.log(user.length);

console.log(message);
console.log(message.length);


//  how to prinbt Backslash in strings 

let path = "C:\\Program Files\\JavaScript";
console.log(path);  


let backslash = "This is a backslash: \\";
console.log(backslash); 


//  how to print Double quote in strings 

let quote1 = "She said, \"JavaScript is awesome!\" and i love javascript .";
console.log(quote1);  


let quote2 = 'He replied,  i am "Absolutely fine !" ';
console.log(quote2);  


//  how to print single quote in strings 

let sentence1 = 'It\'s a great day to code!';
console.log(sentence1);  

let sentence2 = "Don't give up! you can do it.";
console.log(sentence2); 




//  strings methos in js

//length

console.log(text);
console.log(user);
console.log(user.length);

console.log(message);
console.log(message.length);

let a = "1244567";
console.log(a.length);


// toUpperCase
console.log(sentence2);
console.log(sentence2.toUpperCase());       
     

console.log(message);
console.log(message.toUpperCase());  


// tolowerCase

console.log(sentence1);
console.log(sentence1.toLowerCase());  

console.log(user);
console.log(user.toLowerCase());


//trim


 let  d =  " This  is javascript tutorial.it is a good tutorial for biginners. "
 console.log(d)


let para = "  hello world   ";
console.log(para); 
console.log(para.trim());  
console.log(d.trim())



//replace
console.log(sentence1.replace('great','wonderful'))
console.log(d.replace('good','best'))



// includes


console.log(d.includes('html'))
console.log(d.includes('javascript'))


// indexof

console.log(str1.indexOf("programming languages"));
console.log(sentence1.indexOf("day"));
console.log(d.lastIndexOf("a"))



// javascript  strings search 

// indexof

let text3 = "JavaScript is fun";

console.log(text3.indexOf("Java"));  

console.log(text3.indexOf("is")); 

console.log(text3.indexOf("fun")); 

console.log(text3.indexOf("Python"));    


// lastindexof



console.log(str2.lastIndexOf("dynamic "));  

console.log(str2.lastIndexOf(" Node.js"));  

console.log(str2.lastIndexOf("server-side")); 

console.log(str2.lastIndexOf("app"));   






// startwith

console.log(str2.startsWith("With"));

console.log(str2.startsWith("js")); 

console.log(str2.startsWith("w")); 
 
console.log(str2.startsWith("W"));    





// Endwith

console.log(str1.endsWith("world"));   

console.log(str1.endsWith("languagers"));  

console.log(str1.endsWith("I"));     

console.log(str1.endsWith("World"));       
