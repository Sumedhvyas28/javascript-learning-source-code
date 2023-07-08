// Sets
// 1 no repetation or duplicacy in set it will ignore it and move on 
// 2 no index based value order is not defined 
// 3 it store data and iterables (strings and array )

// const numbers = new Set(["item1","item2"]);
// numbers.add(1)
// numbers.add(2)
// numbers.add(3)
// numbers.add(4)
// numbers.add(5)
// numbers.add(6)
// for(let number of numbers){
//     console.log(number)
// }

const myArray=[1,4,15,6,41,1,4,4,6]
const  uniqueElement= new Set(myArray);
let lenght=0;
for (let element of uniqueElement){
    lenght++;
}
console.log(lenght)

console.log(uniqueElement)
console.log(myArray)



