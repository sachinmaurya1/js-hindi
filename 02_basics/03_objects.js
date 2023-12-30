// singletons
// Object.create

// task here is aapko ek symbol lena usko keys ki use karna hai symbol ki tarah object me and print karvana hai and uska typeof symbol aaye 

const mySym = Symbol("key1")

// objects literals 
 const JsUser = {
    name:"hitesh",
    "full name": "sachin maurya",
    age :18,
   // mySym:"mykey1", // this is wrong way 
    [mySym]:"mykey1", // this is a right way 
    location:"jaipur",
    email:"hitesh@google.com",
    idLoggedIn:false,
    lastloggedDays: ["monday","saturday"]
 }
// console.log(JsUser.email)
// console.log(JsUser[email]) // this is wrong way 

// console.log(JsUser["email"]) // this is a right way

// console.log(JsUser."full name")// wrong way 
// console.log(JsUser["full name"])// this is right way 

// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])
// console.log(JsUser)

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())