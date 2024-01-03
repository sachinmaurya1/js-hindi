// for of loop 

// there are some array specific loops 

["","",""]
[{}, {},{}]

// for of loop for arrays 
const arr = [1,2,3,4,5]

for (const num of arr) {
   // console.log(num);

}

// for of loop for strings
const greetings = "hello world!"
for (const greet of greetings){
   // console.log(`Each char is ${greet}`)
}

// Maps
const map = new Map()
map.set('IN',"India")
map.set('USA', "United State Of America")
// console.log(map);
// for of loop on maps 
for (const [key,value] of map){
    // console.log(key,':- ',value);
}

// for of loop on objects 

const myObject = {
    'game1' : 'NFS',
    'game': 'Spiderman'
}

// for (const [key,value] of myObject){  // this will not work  because objects are not iteratable
//     console.log(key, ':-', value );
// }