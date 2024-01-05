const myObject ={
    js:'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift : "swift by apple"
} 

// for in loop 

for (const key in myObject) {
console.log(`${key} shortcut is for ${myObject[key]}`)
    
}

const programming = ["js","rb","py","java"]

for (const key in programming){
    console.log(programming[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('USA', "United State Of America")

for (const key in map){
    console.log(key) // this will not print anything because maps are not itertable 
}

// objects ke mostly hum for in loops lga denge 

// arrays ke uper hum for of loop lga denge 