const moveAllZeroes = (arr)=>{
   let j = 0; // position for next non-zero
   
   for(let i=0; i< arr.length; i++){
        if(arr[i] !== 0){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            j++
        }
   }

   return arr
}

console.log(moveAllZeroes([0,1,2,0,3,0,6]))