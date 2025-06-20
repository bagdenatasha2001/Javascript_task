

// DOM (document object model)
console.log(window.document)

// 1. getElementById
 

const heading = document.getElementById("heading");

console.log(heading);


// changing html contained with js  dom

function changeText() {

 document.getElementById("demo").innerHTML= "New Text";
}


// getElementsByTagName

const msg = document.getElementsByTagName("h3");

console.log(msg);



// getElementsByClassName

const sentence = document.getElementsByClassName("para");


//querySelector
 

function changeValue() {
  let input = document.querySelector(".name"); // by class
  input.value = "Mohit";
}


function changeBoxColor() {
  let box = document.querySelector("#box");  // by id 
  box.style.backgroundColor = "green";

}



function hide() {
  let items = document.querySelectorAll(".hide-me");
  items.forEach(item =>{
    item.style.display="none";
  });
}