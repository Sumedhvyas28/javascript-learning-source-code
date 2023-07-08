// add all


const myFunc=(...c)=>{
    let total=0;
    for(let number of c){
        total=total+number;

    }
    return total;
}

const ans= myFunc(1,2,4,5,3)
console.log(ans)