// Question 2
// Array shift: Write a function shift that shifts the elements of array to left or right by n elements in an infinite loop.
// The function receives 3 parameters, 1st is an array, 2nd is the direction ('left' or 'right'), 
// 3rd is the number of elements which will be shifted.


// left = plus index
// right = minus index
function shift(arr, direction, places) {
    let actualPlaces = 0;
    let startIndex = 0;
    let shiftedArr = [];

    if (arr.length > places) {
        actualPlaces = places;
    } else {
        actualPlaces = places % arr.length;
    }
    console.log('actualPlaces: ', actualPlaces);

    if (actualPlaces === 0) {
        return arr;
    }

    if (direction === 'left') {
        startIndex = actualPlaces;
        arr.splice(startIndex).forEach(element => {
            shiftedArr.push(element);
        });
        arr.splice(0).forEach(element => {
            shiftedArr.push(element);
        });

    } else if (direction === 'right') {
        startIndex = arr.length - actualPlaces;
        arr.splice(startIndex).forEach(element => {
            shiftedArr.push(element);
        });
        arr.splice(0).forEach(element => {
            shiftedArr.push(element);
        });        
    }

    return shiftedArr;
}

console.log('result: ', shift([1, 2, 3, 4 ,5], 'right', 3));
console.log('result: ', shift([1, 2, 3, 4 ,5], 'right', 8));
console.log('result:', shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));
console.log('result:', shift(['john', 'jane', 'sarah', 'alex'], 'left', 6));


