const coding = ["js","ruby",'java','cpp']

 const values = coding.forEach((items) =>{
    console.log(items)
    return items // forEach loop kuch bhi return nhi karta hai
})
console.log(values)

// arrow functions ko 3 tarike se likh saakte hai jaie ki 
// () =>{}
// ()=>()
// ()=>

const myNums = [1,2,3,4,5,6,7]
 //const raja =  myNums.filter((num)=>num>4) // filter function values retrurn karta hai and callback function leta hai 
  const raja = myNums.filter((nums)=>{ // this type arrow function me explixit batana padta hai return condition 
    return nums>4
 })
 console.log(raja)

 // foreach se hi return karvana ho toh fir ye kaam kre 
 const newNums = []
 myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
 })