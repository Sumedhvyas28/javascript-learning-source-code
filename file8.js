// functions
// 1..
 const sumOF3Numbers =function (number1 , number2,number3) {

    return number1+number2+number3;
 }

 const additon = sumOF3Numbers(3,4,10);

 console.log(additon)




// function isEven(string1){
    
        
//         return string1[0];


// }




// console.log(isEven("wqfwqfwqfwqfabc"))






const arrayTarget =  (array1,target)=>{

    for(let i=0;i<array1.length;i++){
        if(array1[i]==target){
            return i;
        }
    }
    return -1;


}

const array1=[1,3,6,17,27,26,5]
const ans=arrayTarget(array1,6)
console.log(ans)