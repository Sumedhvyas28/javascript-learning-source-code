
// new keyword is mandatory

class CreateUser{

    constructor(firstName,lastName,age,address,email){
    this.firstName=firstName;
    this.lastName=lastName;
    this.address=address;
    this.age=age;
    this.email=email;
    }
    about(){
        console.log(`user name is ${this.firstName} and age is ${this.age}`)
    }
    is18(){
        return this.age>=18
    }

}



const user1=new CreateUser('sumedh','vyas',17,'33231shri','sumedhvyas3@')
const user2=new CreateUser('banms','sha',171,'shri','fqfqfqf3@')
const user3=new CreateUser('yubv','ra',174,'','yu b@')

 console.log(user1.is18())
 console.log(user2.is18())
 console.log(Object.getPrototypeOf(user1))




