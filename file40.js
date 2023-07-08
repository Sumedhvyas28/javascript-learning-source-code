function CreateUser(firstName,lastName,age,address,email){
    
    this.firstName=firstName;
    this.lastName=lastName;
    this.address=address;
    this.age=age;
    this.email=email;
    
    


}
CreateUser.prototype.about=function(){
            console.log(`user name is ${this.firstName} and age is ${this.age}`)
        }

CreateUser.prototype.is18=function(){
        return this.age>=18
}   



const user1=new CreateUser('sumedh','vyas',17,'33231shri','sumedhvyas3@')
const user2=new CreateUser('banms','sha',171,'shri','fqfqfqf3@')
const user3=new CreateUser('yubv','ra',174,'','yu b@')

// every element cming
// for(let key in user1 ){
//     console.log(key)
// }

// hasownproperty
for(let key in user1 ){
    if(user1.hasOwnProperty(key))
    console.log(key)
}