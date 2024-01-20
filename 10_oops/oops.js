// const user = {
//     username:"hitesh",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log("Got user details from database");
//         console.log(`Username:${this.username}`);
//         console.log(this)
//     }

// }

const user2 = {
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database");
        console.log(`Username:${this.username}`);
        console.log(this)
    }

}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username,loginCount,isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn

    this.greetings = function(){
        console.log(`welcome ${this.username}`);
    }

   //  return this // this is already implicity defined 
}

// const userOne = User('hitesh',12,true) // this is wrong 
// const userTwo  = User("chaiaurcode",13,false) // this is wrong 
// console.log(userOne)

const userOne =  new User('hitesh',12,true)
const userTwo  =  new User("chaiaurcode",13,false)
console.log(userOne)

console.log(userTwo)
