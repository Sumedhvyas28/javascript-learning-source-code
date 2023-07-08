// some method

// const numbers=[1,3,5,7,9]

// const ans=numbers.some((number)=>number%2===0)
// console.log(ans)


const products=[
    {productId:1,productName:"p1",price:1000},
    {productId:2,productName:"p2",price:100},
    {productId:3,productName:"p3",price:10},
    {productId:4,productName:"p4",price:1000},
    {productId:5,productName:"p5",price:3000}
]

const ans=products.some((cost)=>cost.price>3000)

console.log(ans)

// conclusion :1 if it finds even 1 case it will give true otherwise false


