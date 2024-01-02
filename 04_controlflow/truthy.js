const userEmail = []

if(userEmail){ // yaha pr usermail emial ko vo true man lega 
    console.log("got user email");
} else {
    console.log("Don't have user email")
}


// falsy values // kin kin values ko assume kiya jata hai 
// false,0,-0, BigInt (0n), null, undefined, NaN

// truthy values
// "0",'false'," ",[],{},function(){}

// if (userEmail.length === 0){
//     console.log("array is empty")
// }

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// nullish coalescing operator(??)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// terniary operator
// syntex
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80"): console.log("more than 80")