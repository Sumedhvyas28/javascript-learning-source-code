// map 
// like object take key value pair 
// main difference is key can be of any type ; in obj key has to be a string not in these case;


// const person =new Map();
// person.set(1,"one")
// person.set("hello","one man")
// person.set("firstName","oni")



// console.log(person)
// console.log(person.keys())

// for (let key of person.keys()){
//     console.log(key)
// }

const person1={
    id:1,
    firstName:"sumedh"
}
const person2={
    id:13,
    firstName:"yuvb"
}
const person3={
    id:12,
    firstName:"vansh"
}


const myMap = new Map()
myMap.set(person1,{age:7,gender:"male"}) 
myMap.set(person2,{age:79,gender:"female"}) 
myMap.set(person3,{age:73,gender:"yumale"}) 
console.log(myMap.get(person2).gender)




// conslcusion :
// like object take key value pair 
// main difference is key can be of any type ; in obj key has to be a string not in these case;