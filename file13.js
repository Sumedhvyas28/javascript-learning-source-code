// param destructuring


const person ={
    gender:"male",
    age:40,
    name:"sumedh"
}

function getDetails({name,age,gender}){
    console.log(gender)
    console.log(name)
    console.log(age)


}
console.log(getDetails(person))