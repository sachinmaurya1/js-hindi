// var c = 300

let a = 300
if(true){
    let a =9;
    let b =3;
    let c =5;
    console.log("inner",a) // inner a ka scope function ke ander tak hi hai 
}

// console.log(a) // yaha par bahar wala a print hoga 


// yaha par hum function ke ander scope dekh rahe hai
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()


// yaha par hum if statment ke ander scope dekh rhe hai 
if(true){
    const username = "hitesh"
    if(username==="hitesh"){
        const website ="youtube"
        // console.log(username + website)
    }
    // console.log(website) // it will give error 
}

// console.log(username) // this will give error


// +++++++++++++++++++++++++++++++++++  interesting ++++++++++++++++++++++
console.log(addone(3))

function addone(num){ // this will work and can take value from the 
    return num+1;
}

addTwo(2)

const addTwo = function(num){ // es tarike se function declare kro toh vo apne uper wale varibales ko access nhi kar pata hai and this is called hoisting
    return num +2
}
