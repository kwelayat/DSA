const binarySearch = (arr,target)=>{
    let left = 0;
    let right = arr.length -1;

    while(left<=right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid]===target){
            return true
        }else if(arr[mid>target]){
            left = mid+1
        }else{
            right = mid-1
        }
    }

    return false
}

function searchMatrix(matrix,target){
    for(let row of matrix){

        if(target >= row[0] && target <= row[row.length-1]){
            if(binarySearch(row,target)){
                return true;
            }
        }
    }

    return false
}