const pairsTarget = (arr,target)=>{

    let set = new Set();
    let result = [];

    for(let num of arr){
        let complement = target - num;

        if(set.has(complement)){
            result.push([num,complement])
        }

        set.add(num)
    }

    return result;
}

console.log(pairsTarget([1,7,2,8,4,5,6,3,5],9))