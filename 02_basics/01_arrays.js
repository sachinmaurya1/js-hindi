// arrays 

const myArr = [9,8,0,"ram","shyam"]

// const myHeros = ["shakiman","rajababau"]

// const myArr2 = new Array(1,2,3)
// console.log(myArr[3])

// arrays methods

// myArr.push(6)// push element in the last
// console.log(myArr);

// myArr.unshift(8)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// const newArr = myArr.join()
// console.log(typeof newArr)
// console.log(newArr)

// slice and splice 
//slice 
// console.log(myArr)
// const myn1 = myArr.slice(2,4)

// console.log(myn1)

// splice ( it becasically includes the last range and actually decreses the actual array size ye un elements ko bahar le leta hai )

console.log(myArr)

const myn2 = myArr.splice(2,4)

console.log(myn2)
console.log(myArr)