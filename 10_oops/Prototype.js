// let myName  = "hitesh    "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ['thor', 'spider']

let heroPower = {
    thor: 'hammer',
    spider:'sling',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)

    }
}

Object.prototype.hitesh = function(){
    console.log('hitesh is present in all object  ')
}
Array.prototype.heyhitesh = function(){
    console.log('hitesh is present  hello in all object  ')
}




// heroPower.hitesh()
// myHeros.hitesh()

// ******************// inheritance *****************

const User = {
    name:'chai',
    email:'chai'

}
const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:'js assignment',
    fulltime:true,
    __proto__ :TeachingSupport
}
Teacher.__proto__ = User

// modern syntex for above __proto__

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiAurCode"

String.prototype.trueLength = function() {
console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);

}

anotherUsername.trueLength()
"hitesh".trueLength()
