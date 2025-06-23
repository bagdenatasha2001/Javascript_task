


// API fetch method 

let  p = fetch("https://goweather.herokuapp.com/weather/UK")         //fetch is the function to call the api 
                                                                               
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
//         method:"GET"                      // and Get is the method ,but fetch  function make a get request.

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



 // post 




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



// put 


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




  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});

