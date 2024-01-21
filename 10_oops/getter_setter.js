class User {
    constructor (email,password){
        this.email = email,
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const hitesh  = new User('hi@hitesh.ai','123abc')
console.log(hitesh.password);