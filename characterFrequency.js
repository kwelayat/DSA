const countCharacter = (str)=>{
    let obj = {};

    for(let char of str){
        obj[char] = (obj[char] || 0)+1
    }

    return obj
}

console.log(countCharacter("khushnood"))