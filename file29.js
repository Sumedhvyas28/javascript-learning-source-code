// optional chaining 
// ?: it gives undefined if it does not exist 


const myObj={
    firstName:"Sumedh",
    // age:{me:"sume1",me2:"Sumedh2"}
}

console.log(myObj?.firstName)
console.log(myObj?.age?.me2)