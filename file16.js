// array methods

// const numbers=[1,4,5,6,8]

// numbers.forEach(function(number,index){
//     console.log(number*2,index)
// })

// for each console one not return one 

const users=[
    {firstname:"sumedh",age:18},
    {firstname:"vansh ",age:20},
    {firstname:"uv",age:19},
    {firstname:"khu",age:22}
]


// users.forEach(function(users){
//     console.log(users.firstname)
// })

// for (let user of users){
//     console.log(user.firstname)
// }


users.forEach((users)=>{
    console.log(users.firstname)
})
