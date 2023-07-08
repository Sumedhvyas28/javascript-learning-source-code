// continuation oops

// suppose if we make previous function we have to make million time in object which is about and is even
// function to over come this we do this
const userMethods={
    about:function(){
        return `user name is ${this.firstName} and age is ${this.age}`
    },
    is18:function(){
        return this.age>=18
    }
}

function createUser(firstName,lastName,age,address,email){

    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.address=address;
    user.age=age;
    user.email=email;
    user.about=userMethods.about;
    user.is18=userMethods.is18;

    return user;
}

const user1=createUser('sumedh','vyas',17,'33231shri','sumedhvyas3@')
console.log(user1)
console.log(user1.is18())
console.log(user1.about())
