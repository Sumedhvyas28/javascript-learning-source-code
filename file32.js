// oops

function createUser(firstName,lastName,age,address,email){

    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.address=address;
    user.age=age;
    user.email=email;
    user.about=function(){
        return `user name is ${this.firstName} and age is ${this.age}`
    }
    user.is18=function(){
        return this.age>=18
    }

    return user;
}

const user1=createUser('sumedh','vyas',17,'33231shri','sumedhvyas3@')
console.log(user1)
console.log(user1.is18())
console.log(user1.about())
