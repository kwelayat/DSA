function countDigits(n){

    if(n===0) return 1;

    let count = 0

    while(n>0){
        count++;

        n = Math.floor(n/10)
    }

    return count
}

console.log(countDigits(1331))