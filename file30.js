// this method
// this is obj which is its from reffered to take value from runtime othertime undefined

// const person ={
//     firstName:"Sumedh",
//     age:20,
//     about:function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`)
//     }
// }
// person.about()

function myInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age} `)
}

const person ={
    firstName:"Sumedh",
    age:20,
    about:myInfo
    }

const person2 ={
    firstName:"vans",
    age:21,
    about:myInfo
    }

const person3 ={
    firstName:"yub",
    age:22,
    about:myInfo
    }

person3.about()
// this here is person3 taking runtime values comes very handy

person2.about()
// this here is person2 taking runtime values comes very handy

person.about()
// this here is person taking runtime values comes very handy
