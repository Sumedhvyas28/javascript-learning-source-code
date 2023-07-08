class animal{
        

    constructor(firstName,age){
        this.firstName=firstName
        this.age=age
    }
    eat(){
        console.log(`the animal which is ${this.firstName} eats meat`)
    }
    isCute(){
        return this.age<=1;
    }
    isOld(){
        return this.age>=2;
    }


}

class dog extends animal{
    // no new constructor it can inherit from parent class
    //now for super keyword
    constructor(firstName,age,speed){
        super(firstName,age)
        this.speed=speed;
    }
}

const tommy = new dog("tommuy",2,45)
// const user1 =new animal("tiger",21)
// user1.eat()
tommy.eat()
console.log(tommy.isOld())
console.log(tommy)