// function returning function

function myfunc(){
    function myFunc2(){
        console.log("inside fun2")
    }
    return myFunc2;
}
const ansForFunc=myfunc();
ansForFunc()