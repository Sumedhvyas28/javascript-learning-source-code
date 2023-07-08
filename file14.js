// call back function


function myFunc(callback){
    console.log("first func")
    callback()
}

function myFunc2(){
    console.log("helklws")
}

myFunc(myFunc2)