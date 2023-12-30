 // dates 

 let myDate = new Date()
//  console.log(myDate)

//  console.log(myDate.toString());
//  console.log(myDate.toJSON())

// console.log(myDate.toLocaleString('en-IN'))

// console.log(myDate.toDateString())
// 
// console.log(typeof myDate)// date is object 

// let myCreateDate = new Date(2023,11,23)
// console.log(myCreateDate.toDateString())

// let myTimeStamp =  Date.now()
// console.log(myTimeStamp)

// console.log(myCreateDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)

// ` ${newDate.getDay()} and time `

newDate.toLocaleString('default',{
    weekday: "long",

})