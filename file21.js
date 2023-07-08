//  find method 

// const myArray=["dog","cat","lion","tiger"]

// const isLenght3=myArray.find((String)=>{
//     return String.length===3;
// })
// console.log(isLenght3)

const users=[
    {userId:1,userName:"sumedh"},
    {userId:41411,userName:"412sumedh"},
    {userId:1414,userName:"31sumedh"},
    {userId:141,userName:"11sumedh"}
]
const vip=users.find((String)=>String.userId==41411)
console.log(vip)

// conclusion : 1 take string as a input
//              2 first parameter then object keys (imp)
//              3 use to find different different user with unique user id 