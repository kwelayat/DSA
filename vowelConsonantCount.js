const count = (str)=>{
    const vowels = 'aeiouAEIOU';

    let vowelsCount = 0;
    let consonantsCount = 0;

    for(let char of str){
        if(/[a-zA-z]/.test(char)){
            if(vowels.includes(char)){
                vowelsCount++
            }else{
                consonantsCount++
            }
        }
    }

    return {
        vowelsCount,consonantsCount
    }
}

console.log(count("khushnood"))