// object assign = cloning 
// Object.assign

const obj={
    firstName:"Sumedh",
    age:20
}

// const obj2={...obj};
const obj2=Object.assign({},obj)
obj.key3="val3"
console.log(obj)
console.log(obj2)
console.log(Boolean (obj===obj2))