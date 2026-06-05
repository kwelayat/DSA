const targetOccurence = (arr,target)=>{
    let count=0
    for(let el of arr){
        if(el === target){
            count++;
        }
    }

    return count;
}


console.log(targetOccurence([1,2,3,3,4,3],2))