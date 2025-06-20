
// this is a commonjs module in javascript.

//  module.exports


function add (a,b){

    return a+b; 
}


function sub(c,d){
return c-d;
}



function mul(c,d){
return c*d;
}



function divide(c,d){
return c/d;
}






const user={
    name: "Natasha Bagde",
    age:23,
    phone:"13256"
}


const arr = ["Natasha","Mahi","Mohit","Ankita","Bhavi","Samar"];



const msg = "Welcome to CommonJS modelue ";


const fruits = ["Apple", "Banana", "Orange","Mango","Watermelon","Grapes"];




module.exports ={ add,sub,mul,divide,user, arr,msg,fruits};