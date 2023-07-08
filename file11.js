// lexical scope 
const var1="me toh bahar hu "
function myApp(){

    const func1=() =>{

        const func2=()=>{
            const var32="cfqnfq"
            console.log("inside func2",var1,var32)
        }

     


        func2()
        console.log("helloworld")
    }





func1();
}
myApp();


// function ke bahar ki value dekh sakta hai 
// pehle lexical scope me dkhe ga 
// fir function me pure 
// fir globally search karskta hai 