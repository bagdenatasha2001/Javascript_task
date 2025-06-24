

// API fetch method 

let  p = fetch("https://goweather.herokuapp.com/weather/UK")        //fetch is the function to call the api 
                                                                               
p.then((value1)=>{

    console.log(value1.status);
    console.log(value1.ok)
    console.log(value1.url)
     console.log(value1.headers)
    return value1.json()

}).then((value2)=>{

   console.log(value2);

})

// or 


// let  p = fetch("https://goweather.herokuapp.com/weather/japan",
//     {
//         method:"GET"              // and Get is the method ,but fetch  function make a get request.

//     }
// )

// p.then((value1)=>{

//     console.log(value1.status);
//     console.log(value1.ok)
//     console.log(value1.url)
//     return value1.json()

// }).then((value2)=>{

//    console.log(value2);

// })



// cat data api

let URL = fetch("https://api.thecatapi.com/v1/images/search?limit=10")

    URL.then((res)=>{

    console.log(res.status);
    console.log(res.ok)
    console.log(res.url)
     console.log(res.headers)
    return res.json()

}).then((res)=>{

   console.log(res);

})


// user data api  //fetch  function 

 let users = fetch("https://jsonplaceholder.typicode.com/users")

 users.then((user1)=>{
     console.log(user1.status);
    console.log(user1.ok)
    console.log(user1.url)
    console.log(user1.headers)

    return user1.json()

 }).then((user1)=>{

  console.log(user1);

 })



 // POST


const data = {
  title: "this is title",
  body: "this is post body",
  userId: 2
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json" 
  }
})
.then((response) => {
  return response.json();
})
.then((result) => {
  console.log(result); 
})


//


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) =>{ 

   return  response.json();

}).then((json) =>{ 
    console.log(json)
});  



// PUT


fetch('https://jsonplaceholder.typicode.com/posts/5', {
  method: 'PUT',
  body: JSON.stringify({
    id: 5,
    title: 'hello',
    body: 'this is a body',
    userId: 5,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) =>{
   return   response.json()
}) .then((json) =>{ console.log(json)
});



// POST method 

fetch("https://jsonplaceholder.typicode.com/posts", {
    method:"Post",
    body:JSON.stringify({
      title:"hi",
      id:2,
      body:"this is a body"
    }),
    headers:{"content-type":"application/jason"

    }
})

.then((response )=>{

   return response.json()
}).then((response1)=>{
  console.log(response1)
});



// GET method



let url = fetch("https://jsonplaceholder.typicode.com/posts/20",{
  method:"Get"
});

url.then((res)=>{
  return res.json()
}).then((res1)=>{
  console.log(res1)
})







 
 // PATCH method 

fetch('https://jsonplaceholder.typicode.com/posts/5', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'hello javascript!, this is a patch method in API to updated some part',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));



  // DELETE



  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});



 
// fetch


let Users = fetch("https://jsonplaceholder.typicode.com/users")

 Users.then((user1)=>{
     console.log(user1.status);
    console.log(user1.ok)
    console.log(user1.url)
    console.log(user1.headers)

    return user1.json()

 }).then((user1)=>{

  console.log(user1);

 })


// Post


 fetch("https://jsonplaceholder.typicode.com/users",{
  method:"POST",
  body:JSON.stringify({
    id:11,
    name:"Natasha Bagde",
    username:"Natasha",
    email:"example@gmail.com",
    address:"abc"

  }),
  headers:{
    "content-type":"application/json"
  },

 }).then((res)=>{

  return res.json()

 }).then((res1)=>{

  console.log(res1)
 });
 


 fetch("https://jsonplaceholder.typicode.com/users",{
  method:"POST",
  body:JSON.stringify({
    id:12,
    name:"Mohit Bagde",
    username:"Mohit",
    email:"mohit@gmail.com",
    address:"pqr"
  }),
  headers:{
   "content-type":"application/json"
  },
 }).then((response)=>{

  return response.json()

 }).then((res2)=>{

  console.log(res2)

 });



// pUT


 fetch("https://jsonplaceholder.typicode.com/users/1", {

  method:"PUT",

  body:JSON.stringify({
    id:1,
    name:"Mrunali Bagde",
    username:"Mrunali",
    email:"example@gmail.com",
    address:"mumbai"
   
  }),
  headers:{
    "content-type":"application/json"
  },

 }).then((response)=>{

  return response.json()

 }).then((response)=>{
  console.log(response)
 });


 // PUT


 fetch("https://jsonplaceholder.typicode.com/users/9",{

  method:"PUT",

  body:JSON.stringify({
    id:9,
    name:"Ankita Bagde",
    username:"Ankita",
    email:"ankita@gmail.com",
    address:"pune"
   
  }),
  headers:{
    "content-type":"application/json"
  },

 }).then((response)=>{

  return response.json()

 }).then((response)=>{

  console.log(response)
 
 })

 


 // patch        //In this method only given part is updated like 1 or 2 line or more ,but in the PUT method totally object is updated 


fetch("https://jsonplaceholder.typicode.com/users/9",{
  method:"PATCH",
  body:JSON.stringify({
    name:"Anvi wankhede",
  
  }),
  headers:{
    "content-type":"application/json"
  },
  
}).then((Response)=>{

  return Response.json()

}).then((Response1)=>{
  console.log(Response1)
})


// DELETE


fetch("https://jsonplaceholder.typicode.com/users/3",{
  method:"DELETE"
})




fetch("https://jsonplaceholder.typicode.com/users/1",{
  method:"DELETE"
})



  fetch('https://jsonplaceholder.typicode.com/posts/8', {
  method: 'DELETE',
});




// debugging 



// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "content-type": "application/jason"             //  Wrong spelling in jason, it should be json // 
//   },
//   body: JSON.stringify({
//     title: "Fix content-type"
//   })
// })
//   .then((res) =>{
//      return  res.json()
//     })
//   .then((data) =>{ console.log(data)
//   });





  
//  fetch("https://jsonplaceholder.typicode.com/userrs")       // wrong  url
//   .then((res) =>{
//      return  res.json()
//     })
//   .then((data) =>{
//     console.log(data)
//   });



// fetch("https://jsonplaceholder.typicode.com/users/9", {     
//   method: "PATCH",
//   body: JSON.stringify({
//     name: "Debug name"
//   }),
//                                        // without headers 
// })
//   .then(res => res.json())
//   .then(data => console.log(data));



// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//     headers:{                                    // body part missing, not a stringify
//     "Content-Type": "application/json"
//   }
// })
//   .then(res => res.json())
//   .then(data => console.log(data));

