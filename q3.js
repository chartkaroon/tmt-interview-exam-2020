// Question 3
// Second max: Write a function secondMax that receive an array of number. 
// The function will return the second maximum value of the array. 
// If there is no second max, return max instead. 
// If an array is empty, throw and error.

function secondMax(arr) {

    if (arr.length === 0) {
        throw 'Error!';
    }

    // 1. Sort an array
    const sortedArr = arr.sort((a, b) => a - b);

    // 2. Remove duplicate(s)
    const uniqueArr = [...new Set(sortedArr)];

    // 3. Find Max from the last index of the unique array
    const lastIndex = uniqueArr.length - 1
    const max = uniqueArr[lastIndex];

    // 4. Find Second-Max from the second-last index of the unique array
    const secondLastIndex = lastIndex - 1;
    let secondMax;
    if (secondLastIndex >= 0) {
        secondMax = uniqueArr[secondLastIndex];
    } else {
        secondMax = max;
    }
    
    return secondMax;
}

try {
    console.log('result: ', secondMax([2, 3, 4, 5]));
    console.log('result: ', secondMax([9, 2, 21, 21]));
    console.log('result: ', secondMax([4, 4, 4, 4]));
    console.log('result: ', secondMax([4123]));
    console.log('result: ', secondMax([]));
} catch (e) {
    console.error(e);
}

