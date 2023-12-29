// primitive 

// 7 types : string,Number, Boolen, null, undefined,symbol,big int

// js is dynmacially typed language
// jis bhi language me datatype batana padta hai starting me static typed hoti hai like c++
// but js me datatype nhi batana hota 
// for eg
// const score = 100;
// const scorevalue = 99.08

//  const isloggedIn = false;
//  let userEmail; // this will show undefined 

 const id = Symbol('789')
//  const anotherId = Symbol('789')
//  console.log(id===anotherId)

// reference (non Primitive)
//array, objects, Functions


// array
const heros = ["shakiman","batman","ratman"];

// object jisko ki ek variable me store kiya hai
let myObj ={
    name:"sachin",
    age: 22,
}

// function 
const myFunction =function(){
console.log("hello world");
}


console.log(typeof id)
console.log(typeof myFunction)

