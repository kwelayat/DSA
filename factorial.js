// function factorial(num){
//     let res = 1;

//     for(let i =1; i<=num;i++){
//         res = res*i
//     }

//     return res
// }

function factorial(num){
    if(num ===0 || num === 1){
        return 1;
    }

    return num * factorial(num-1)
}

console.log(factorial(6))