const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acc,currval){
   // console.log(`acc: ${acc} and currval :${currval}`);
    return acc+currval
},0)

const myTotal1 = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal1);

const shoppingCart = [
    {
        itemBuy:"py course",
        price:199
    },
    {
        itemBuy:"js course",
        price:299
    },
    {
        itemBuy:"mob dev course",
        price:399
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=>(acc+item.price),0)

console.log(priceToPay)