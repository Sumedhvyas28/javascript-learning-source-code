const key1 = "objkeys1"
const key2= "objectkeys2"

const value1="myval1"
const value2="myval2"


// const obj={};

// obj[key1]=value1;
// obj[key2]=value2;
// console.log(obj)

// const obj1={
//     [key1]:value1
//     ,[key2]:value2
// }

const obj1={
    key1:"value1"
    , key2:"value2"
}
const obj2={
    key3:"value3"
    ,key4:"value4"
}
const obj3={
    ...obj1,...obj2
}




console.log(obj3)
