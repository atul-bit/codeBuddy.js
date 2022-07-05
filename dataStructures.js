// level {1/2/3}

// level 2

//1.Write a function to remove all even numbers from an Array

function checkEvenNumber(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 == 0){
            result.push(arr[i]);
        }
    }
    return result
}

// 2.Replace all the vowels in a string with uppercase vowels

function replaceUpperCase(s){
    return s.replace(/[a-z]/g, function(c) {
        return c.toUpperCase();
    });
}

// 3. Write a function to find the maximum number in an array.

function highestNumber(arr){
    arr.sort((a,b) => a-b);
    return arr.pop()

}