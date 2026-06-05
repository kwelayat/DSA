const bubbleSort = (arr)=>{
    let n = arr.length;
    for(let i=0;i<n -1;i++ ){
        for(let j=0;j< n-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }

    return arr;
}

console.log(bubbleSort([0,1,0,2,3,4,1]))