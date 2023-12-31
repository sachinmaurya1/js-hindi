// Immediately Invoked Function Expressions (IIFE)

// global scope se pollution ko avoid ke iife functions likhe jate hai jo ki immediately invked ho jate hai

// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()

// another syntx for writing thw above function isko named iife bhi bolte hai kyuki es function ka name hai chai 

// (function chai(){
//     console.log(`DB CONNECTED`)
// })();



// another syntex for same
(  (name) =>{
    console.log(`DB CONNECTED ${name}`)
})("hitesh")