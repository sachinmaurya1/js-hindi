const marvel_heros = ["thor","Ironman", "spiderman"]
const dc_heros = ["superman","flash", "batman"]

// marvel_heros.push(dc_heros) // yaha par dc heros marvel heros me as a array chala jayega 
// console.log(marvel_heros)

// console.log(marvel_heros[3][1])

// concat is also used for the same 

 const all_heros = marvel_heros.concat(dc_heros)

// console.log(all_heros)

// spread is also used for the same and here we can any no of arrays 

const all_new_heros =[...marvel_heros,...dc_heros]
// console.log(all_new_heros)

// flat is used to solve jab array ke array ho and uske ander array ho tab flat sare ko flat karke simple arrray bna deta 

const another_Array = [12,3,4,[56,7],5,[5,6,7,[8,9]]]

const real_another_array = another_Array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("hitesh"))
console.log(Array.from('hitesh'))

console.log(Array)