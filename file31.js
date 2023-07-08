// this call apply bind continutation
// const person3 ={
//     firstName:"yub",
//     age:22,
//     about:function(){
//         console.log(this.firstName,this.age)
//     }
//     }

// const person2 ={
//     firstName:"shub",
//     age:242

//     }

    // here we take this as person 2 or we assigned this value as person2 here 
// person3.about.call(person2)





function about(hobby,lastName){
    console.log(this.firstName,this.age,hobby,lastName)
}
const person1 ={
    firstName:"yub",
    age:22,
    }

const person2 ={
    firstName:"shub",
    age:242
    }
// call
// about.call(person1,"dontknow","qfqf")


// apply : same as call but pass in array 
// about.apply(person1,["dontknow","qfqf"])


// BIND: just bind this things in function format and we can call it anytime in future
// const myFunc=about.bind(person2,"dontknow","qfqf")
// myFunc()

// arrow function dosent have this 
// it take this from surroundings


const person3 ={
    firstName:"yub",
    age:22,
    about:()=>{
        // not having this in arrow function as it takes this value from its surroundings i.e., window
        console.log(this.firstName,this.age)
    }
}
person3.about()