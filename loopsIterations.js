// level {1/2/3}

//level 2
function fibonacci(number){
    let n1 = 1, n2 = 1, nextTerm;
    let result = [];

    for (let i = 1; i <= number; i++) {
        
        console.log(n1);
        result.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;

    }
    // console.log(result)
    let sum = 0;

    for(let i = 0; i < result.length ; i++){
        sum = sum + result[i];
    }
 return sum;
}