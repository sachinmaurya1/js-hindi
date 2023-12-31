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

// console.log(loginUserMessage("hitesh")) // agar hitesh ki jagah par koi value na de to result undefined aayega 


// rest and spread operator ko ... se represent kiya jata hai but usecase ke according usko rest ya spread bolte hai 
function calculateCartPrice(val1,val2, ...num1){ // ye hai rest oprator matlab func me multiple value kiase pass hoti hai  and val1,val2 staring ke values hogi as by common sense 
    return num1

}

// console.log(calculateCartPrice(1,2,3,4,5))


// how to pass object in functions 

const user = {
    username :"hitesh",
    price:34
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
username:"rajababu",
price:1
})

// how to handle arrays in functions 

const myNewArray =[1,2,3,4,5]

function returnsecondvalue(getArray){
    console.log(getArray[2])
}

// returnsecondvalue(myNewArray)

returnsecondvalue([1,2,3,4])
