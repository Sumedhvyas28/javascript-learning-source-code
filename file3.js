
// object 2 

const person={name:"sumedh",age:20
    ,hobbies:["sleeping","games","swimming","cube","guitar"]
}


// for(let keys in person){
//     console.log(`${keys} : ${person[keys]}`)
// }

// console.log(Object.keys(person))
for(let key of Object.keys(person)){
    console.log(key,person[key])
}