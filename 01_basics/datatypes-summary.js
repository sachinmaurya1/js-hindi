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

//  const id = Symbol('789')
// //  const anotherId = Symbol('789')
// //  console.log(id===anotherId)

// // reference (non Primitive)
// //array, objects, Functions


// // array
// const heros = ["shakiman","batman","ratman"];

// // object jisko ki ek variable me store kiya hai
// let myObj ={
//     name:"sachin",
//     age: 22,
// }

// // function 
// const myFunction =function(){
// console.log("hello world");
// }


// console.log(typeof id)
// console.log(typeof myFunction)


// understanding the concept of memory in js 
// there are basically two types of memory stack and heaps 
// the memory used by the primitive datatypes is stack 
// the memory used by non primiotive datatypes(arrays , objects , functions) are heap


// example of stack memory 
// let shyam = "raja hai mn ka apne ";
// let krishna = shyam;

// krishna = "yasoda ka nand lala";
//  console.log(krishna);
//  console.log(shyam) // isme ouptut "raja wali aayegi " because yaha par stack emory hoti toh actual variable ki copy send ki jati hai atck me 

// example of heap (here non primitive datatype is used )
// let raja  = {
//     email: "raja@yahoo.com",
//     age  : 18,
// }

// let rani = raja;

// raja.email = "ranikiemail@yahoo.com"
// console.log(raja.email)
// console.log(rani.email)
