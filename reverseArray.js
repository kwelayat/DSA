const swap = (arr,i,j)=>{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

const reverseArray = (arr)=>{
    let left = 0;
    let right = arr.length - 1;

    while(left< right){
        // [arr[left],arr[right]] = [arr[right],arr[left]];
        swap(arr,left,right)
        left++;
        right--;
    }

    return arr;
}

const arr = [4,7,8,9,1,5]

console.log(reverseArray(arr));