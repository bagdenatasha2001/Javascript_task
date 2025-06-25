
// Session , Cookie , Local storage  in js 


// local storage
// value set in local storage 


localStorage.setItem("Name","Natasha Bagde");  
localStorage.setItem("Age",24);
localStorage.setItem("City","Pune");

console.log("local Storage :", localStorage);

const user = localStorage.getItem("Name");
const  Age = localStorage.getItem("Age");

console.log("User :", user);
console.log("Age :", Age);  



// value access  into local storage using get 


localStorage.setItem("flower","Rose");
localStorage.setItem("fruit","mango");
localStorage.setItem("device","mobile");
localStorage.setItem("name","Mrunali");

console.log("device:",localStorage.device);
console.log("flower :",localStorage.flower);

// or 


const fruit_name = localStorage.getItem("fruit")      
const new_name = localStorage.getItem("name");

console.log("fruit :",fruit_name);
console.log("name :" , new_name);



localStorage.removeItem("Age");   // delete specific data    // like one row data delete
localStorage.removeItem("name");



// localStorage.clear()  // it is used to  delete all the   data in  local storage.




// session storage 


// value  set into the session 

sessionStorage.setItem("fname","Anvi Wankhede ");
sessionStorage.setItem("age", 13);
sessionStorage.setItem("address","pune,wakad ");


console.log(sessionStorage);

console.log("full Name :",sessionStorage.fname);
console.log("Address :",sessionStorage.address);




// acceessing  data into session 

const full_name = sessionStorage.getItem('fname');
const person_Age = sessionStorage.getItem("age");
const Address = sessionStorage.getItem("address");


console.log( "Name :",full_name);
console.log( "Age :",person_Age);
console.log( "Address :",Address);



// remove specific data intoi session 

sessionStorage.removeItem("age");

sessionStorage.removeItem("address");



// removing all data into the session storage .

// sessionStorage.clear();





// cookies  

document.cookie = "name=mohit bagde ; expires= fri, 31 dec 2026 23:59:59 GMT;path=/";         // with  expiry date
document.cookie = "age=21; expires=mon, 7 jul 2025 23:59:59 GMT ;path=/";
document.cookie = "city=Pune; expires=sat, 10 nov  2026 23:59:59 GMT; path=/";




document.cookie = "Address=Mumbai; expires= fri, 31 dec 2026 23:59:59 GMT;path=/";
document.cookie = "state=Maharastra ; expires= fri, 31 dec 2026 23:59:59 GMT ;path=/";
document.cookie = "country= India; expires=fri, 31 dec 2026 23:59:59 GMT; path=/";


document.cookie = "gender=female";               // without  expiry date 
document.cookie = "language=javascript";




document.cookie = "user=kabir; expires=Thu, 01 Jan 1996 00:00:00 UTC; path=/;"; // already expire cookies or delete cookies
document.cookie = "session=Yoga; expires=Mon, 24 Jun 2024 23:59:59 GMT; path=/;";



console.log("cookie :",document.cookie);



// promise  and  async await in js 


// async promise return , means they are not giving output instantly ,they take time to execute the code .

// so they retun promise and then we use this to in a function with  async await  .



 async function serverdata(){

    let data =  await fetch("https://api.thecatapi.com/v1/images/search?limit=10") ;
   console.log(await data.json() );
}


 serverdata();



  async function userdata(){

    let DATA = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log( await DATA.json ());
 }

userdata()



 async function harry(){
    
 let data1  =  await fetch("https://openlibrary.org/search.json?q=harry+potter");

 console.log( await data1. json());
}


harry()

async function products(){

let data2 =  await fetch("https://fakestoreapi.com/products");

console.log( await data2.json());

}

products()




 async function dogs(){

    let data3 =  await fetch("https://dog.ceo/api/breeds/image/random");

    console.log(await data3.json())
}


dogs()





// or .then and .catch  method 


fetch("https://dog.ceo/api/breeds/image/random")
.then((Response)=>{
    console.log(Response);

}).catch((error)=>{
  console.log(error);
});



fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});







 // setTimeout 


//  Runs a task only once after a delay, after the specified time passed.


 setTimeout(() => {
  console.log(" Hello after 3 seconds!");
}, 3000);


setTimeout(() => {
  alert(" This is a alert after 4 seconds!");
}, 4000);


setTimeout(() => {
  console.log("1");
}, 2000);





// setinterval is used to do task again and again after the fixed interval time ,that we satisfied.

setInterval(() => {
  console.log(" Hello every second!");}, 6000);



setInterval(()=>{
    console.log("this is a setinterval  bulid methid in js !")},8000);



 setInterval(() => {
        console.log(" hello Advance topics of javascript");},9000);
        
 


        
 // SetTimeout and SetInterval in js 


function showTime(){

const currentTime = new Date()
const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
document.getElementById("time").innerHTML= time;

 
}




 let interval = setInterval(showTime,1000);


 const button  = document.getElementById("stop-btn")

 button.addEventListener("click", () => {
    clearInterval(interval);
 })

