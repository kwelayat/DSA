const maxMin = (arr)=>{
    let min = 0;
    let max = 0;

    for(let i=1; i<= arr.length; i++){
        if(arr[i]< arr[min]){
            min = i
        }
        if(arr[i]>arr[max]){
            max = i
        }
    }

  return {min:arr[max],max:arr[min]}
}