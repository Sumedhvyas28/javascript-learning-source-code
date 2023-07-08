// sorting in js 

// const numbers=[1,4,24,5,54,515]

// numbers.sort((a,b)=>b-a);
// console.log(numbers)



const products=[
    {productId:1,productName:"p1",price:1000},
    {productId:2,productName:"p2",price:100},
    {productId:3,productName:"p3",price:10},
    {productId:4,productName:"p4",price:4000},
    {productId:5,productName:"p5",price:3000}
]

const lowToHigh=products.slice(0).sort((a,b)=>a.price-b.price)
console.log(lowToHigh)


// conclusion:1 sort is mutable i.e to change an Array
//            2 in sort a-b has to be done for asceding (see negative or positve like 800-300)
