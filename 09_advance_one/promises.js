const promiseOne = new Promise(function(resolve, reject){
    // do an asyn task 
    // db calls 

    setTimeout(function() {
        resolve()
        console.log('async task is complete ');
        // resolve()
    }, 1000);
})
promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
setTimeout(function(){
    console.log('async task2 is complete ');
    resolve()
},1000)
}).then(function(){
    console.log("promise2 consumed")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email:"riya@gmail.com"})
    },1000)
})

promiseThree.then(function(user){

    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hitesh",password:"123"})
        } else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

// promiseFour.then().catch() // values lene ke kaam aata hai 
 const username = promiseFour
 .then((user)=>{
        console.log(user);
        return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolve or reject")
})




const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",password:"123"})
        } else{
            reject('ERROR: js went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response  = await promiseFive
    console.log(response)
    }catch(error){
        console.log(error)
    }

}

consumePromiseFive( )

async function getAllUser(){
    
}
