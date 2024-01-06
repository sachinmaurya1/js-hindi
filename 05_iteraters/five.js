const coding = ["js","ruby",'java','cpp']
// for each loop for arrays using callback function
coding.forEach(function (item){
// console.log(item)
})

// forEach loop using arrow function
coding.forEach((item)=>{
// console.log(item)
})

// printMe function
function printMe(items){
console.log(items);
}

coding.forEach(printMe)

coding.forEach((items,index,arr)=> {
    console.log(items,index,arr)
})

// jab arrays ke ander object ho toh unko print karvana hai uding forEach loop 
const myCoding = [
    {
        
name1:"raja",
name2 : "rani"
    },
    {
        name1:"rajajbabau",
        name2 : "ranibabau"
    },
]

console.log();

myCoding.forEach((items)=>{
    console.log(items.name1)
})