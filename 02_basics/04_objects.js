 const tinderUser = new Object() // this is singleton  object declaration ka tarika 

 // const tinderUser = {} // this is not singleton object 
 // dono tarike shi hai 
 // this tutorail we will work on singleton onbject method 

 tinderUser.id = "123abc"
 tinderUser.name = "sam"
 tinderUser.isLoggedIn = false
//  console.log(tinderUser)

// now object ke ander object  ko fetch karke dekhte hai 

// combining two objects using (assign) or we can do it using spread syntex(...)

// const obj1 = {1:"q",2:"e"}
// const obj2 = {3:"t",4:"y"}
// const Obj3 = Object.assign({},obj1,obj2) // using assign 
// const Obj4 = {...obj1,...obj2} // this is way using spread method 
//  console.log(Obj4)


// array of objects bhi hota hai ye moslty databases se value jab aati tab hota hai 

// const users = [
//     {
//         id:"object 1 details"
//     },
//     {
//         id:" object 2 details"
//     }
// ]
// console.log(users[0].id)


// yaha par object ka keys/values ka array milta hai and entries ka array ke ander form milta hai 
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


// when we have to search for  object property  in large object

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// destructing of objects 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}
// console.log(course.courseInstructor) // this is a ugly way but definitely not a wrong way 

const {courseInstructor: raja} = course
// console.log(raja) // esi ko destructur karna bolte hai jab hum kisi object ki key to durse name se print karva le jaise yaha par raja se karva raha hu 

// API ki values JSON(object hi hota hai) me aati hai 
// eg of JSON Object mostly inka name nhi hota hai jaise ki object me hota hai and key bhi string me hoti hai 

// {
// "name":"hitesh",
// "id":"123wer"
// }

// kafi times API Arrays ki gform me bhi milti hai 
// [
//     {

//     },
//     {

//     }
// ]