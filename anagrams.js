const checkAnagram = (str1,str2)=>{
    if(str1.length !== str2.length) return false;

    let freq = {};

    for(let char of str1){
        freq[char] = (freq[char]||0)+1
    }

    for(let ch of str2){
        if(!freq[ch]) return false;
        freq[ch]--;
    }

    return true
}

console.log(checkAnagram("abcd","dcabe"))