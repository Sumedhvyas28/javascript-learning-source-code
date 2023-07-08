// every method 

// const numbers=[0,9,2,4,6,8,]

// const ans=numbers.every((number)=>number%2===0)
// console.log(ans)

const products=[
    {productId:1,productName:"p1",price:1000},
    {productId:2,productName:"p2",price:100},
    {productId:3,productName:"p3",price:10},
    {productId:4,productName:"p4",price:4000},
    {productId:5,productName:"p5",price:3000}
]
const ans=products.every((cost)=>cost.price<10000)
console.log(ans)

// conclusion:1 as the name suggest every gives true only when every thing checked and condition is true
//            2 first parameter then object keys revise