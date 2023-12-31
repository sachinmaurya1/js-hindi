const user = {
    username: "hitesh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website `);
    }
}

// user.welcomemessage()
// user.username = 'sam'
// user.welcomemessage()

// jab hum node environment ke ander hote hai to this ek empty object ko refer karta hai 
// but jab browser ke ander hum this ko use karte hai toh ye window global object deta hai 

// console.log(this) //jab hum node environment ke ander hote hai to this ek empty object ko refer karta hai 

// we can't use this this inside a function 
// function chai(){
//     let username = "hitesh"
//     console.log(this.username) // yaha par this undefined value deta hai 
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }

// chai()

const chai = () => {
    let username = "hitesh"
        console.log(this.username) // yaha par bhi undefined hi milega 
}

chai()

// basic arrow func  syntex
//  const addTwo = (num1,num2) => {
//     return num1+num2;
//  }

//  console.log(addTwo(3,4))


// another syntex for arrow function
// const addTwo = (num1,num2) => num1 +num2


// anpther syntex for arrow func
// const addTwo = (num1,num2)=> (num1+num2)
// console.log(addTwo(4,5))


// how to return a object in arrow func
// const addTwo = (num1,num2)=>({username:"hitesh"})
// console.log(addTwo(4,5))

// foreach( ) loop bhi hota hai 
