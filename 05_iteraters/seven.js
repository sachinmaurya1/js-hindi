const myNumbers = [1,2,3,4,5,6,7]

 // const newNums = myNumbers.map((num)=>num+10)
 // const newNums = myNumbers.map((num)=>{return num+10}) // scope open kar diya hai to explicit return karvana pad raha hai 


 // chaining matlab map.map and map.map.map.filter es tarah se kafi se methods ek sath lagana 

 const newNums = myNumbers
                .map((num)=>num *10)
                .map((num)=>num+1)
                .filter((num)=> num>20)
 console.log(newNums);