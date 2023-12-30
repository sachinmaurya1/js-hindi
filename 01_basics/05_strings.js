const raja = "sachin"
const  umer  = 21

console.log( `my name is  ${raja}  and my age  is ${umer} `)
// es dollar wale tarike se jab string ko add karte hai usko string interpolation bolte hai 

// naya tarika of desclaring the string 
const gameName = new String('rajababu-bu-hu')
// console.log(gameName[0]);
// console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('u'))
// console.log(gameName.charAt(3))

// substring and slice method 
// slice me negative valus bhi use kar sakte hai 

// const newString = gameName.substring(0,5)
// console.log(newString)
// const NewString1 = gameName.slice(-8,-6)
// console.log(NewString1)

// const newStringOne = "     hitesh   "
// console.log(newStringOne)
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20','-'))

console.log(gameName.split('-'))