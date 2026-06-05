function numPalindrom(num){

    if(num<0){
        return 0;
    }

    let original = num;
    let reverse = 0;

    while(num>0){
        let digit = num%10;

        reverse = reverse*10+digit;

        num = Math.floor(num/10)
    }

    return original === reverse
}

console.log(numPalindrom(1212))