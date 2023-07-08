


// const userMethods={
//     about:function(){
//         return `user name is ${this.firstName} and age is ${this.age}`
//     },
//     is18:function(){
//         return this.age>=18
//     }
// }

function createUser(firstName,lastName,age,address,email){
    // creating a bond btw user and userMethods
    const user=Object.create(createUser.prototype);// {}
    user.firstName=firstName;
    user.lastName=lastName;
    user.address=address;
    user.age=age;
    user.email=email;
    
    

    return user;
}
createUser.prototype.about=function(){
            console.log(`user name is ${this.firstName} and age is ${this.age}`)
        }

createUser.prototype.is18=function(){
        return this.age>=18
}   



const user1=createUser('sumedh','vyas',17,'33231shri','sumedhvyas3@')
console.log(user1)
console.log(user1.is18())
user1.about()