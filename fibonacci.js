// function fibonacci(n){
//     if(n===0) return 0;
//     if(n===1) return n;

//     return fibonacci(n-1)+ fibonacci(n-2)
// }

// function fibSeries(n){
//     const arr = [];

//     for(let i=0;i<n;i++){
//         arr.push(fibonacci(i))
//     }

//     return arr;
// }


function fibSeries(n){
    let series = [0,1];

    for(let i=2;i<n;i++){
        series.push(series[i-1]+series[i-2])
    }

    return series
}

console.log(fibSeries(7))