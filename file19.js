// reduce method 

// const numbers =[1,2,3,4,5,10]

// const sum=numbers.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// })


// 1         2               3
// 3         3               6
// 6         4               10
// 10        5               15
// 15       10               25 

const userCart =[
    {userId:1,productName:2,price:10},
    {userId:2,productName:2421,price:1},
    {userId:3,productName:414,price:2},
    {userId:4,productName:412,price:3}
]
const sum2=userCart.reduce((totalPrice,currentPrice)=>{
    return totalPrice+currentPrice.price;
},0)
console.log(sum2)

// CONCLUSION:1 GIVES A SINGLE VALUE AFTER RETURN 
//            2 TAKES ACCUMULATOR + CURRENT VALUE AS RETURN VALUE AND PASS A VALUE 