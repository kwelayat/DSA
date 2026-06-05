const reverseWord = (str)=>{
    let words = str.split(" ");
    let left = 0;
    let right = words.length-1;

    while(left < right){
        [words[left],words[right]] = [words[right],words[left]];
        left++;
        right--;
    }

    return words.join(" ")
}

console.log(reverseWord("this is a very nice code"))