// proto \\\ [[prototype]]

const obj1 ={
    item1:"valu1",
    item2:"Valu2"
}


// connection with obj1 i.e., proto
const obj2=Object.create(obj1)
obj2.item3="Valu3"
console.log(obj2.item1)
// console.log(obj2.__proto__)