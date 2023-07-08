// mew keyword
// 1: khali object will create empty object
// 2: return this {}
// 3: object.create ki zarrurat puri  

function createUser(firstName,age){
    this.firstName=firstName
    this.age=age
    
}
createUser.prototype.about=function(){
    console.log(this.firstName,this.age)
}
const user1=new createUser("s",134)


console.log(user1)