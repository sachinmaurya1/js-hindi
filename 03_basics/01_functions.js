// basic function jankari 

// function myname(){
//     console.log("my name is raja babu")
// }

// myname()

// add two numbers // function ke ander jo values dalte hai unko parameter bolte hai 
// function addTwoNum(num1,num2){ // agar focus kro toh ye function kuch bhi return nhi akr raha hai 
//     console.log(num1+num2)
// }
function addTwoNum(num1,num2){ // agar focus kro toh ye function kuch bhi return nhi akr raha hai 
   let result = num1+num2;
    return result;
}


// addTwoNum(2,3) // yaha par 2,3 argument hai 
// addTwoNum(2,"3") // it will give result of 23 bcz it will consider it as string 

const result = addTwoNum(3,4)
// console.log("Result:"+result) // this will return undefined because uper walafunction(10 line) kuch bhi retutn nhi akr raha hai 

function loginUserMessage(username){ // yaha par username = "sam" by kar sakte hai agar koi parameter na mile toh vo sam le lega 
    if(username === undefined){ // esko if(!username) bhi likh sakte hai
console.log("please enter a username")
    }
    return`${username} just logged in`
}

console.log(loginUserMessage("hitesh")) // agar hitesh ki jagah par koi value na de to result undefined aayega 