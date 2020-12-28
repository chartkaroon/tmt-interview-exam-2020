// Question 1
// Fibonacci Sequence: Write a function fib that return the value of n-th order of fibonacci sequence.
// In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, 
// called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of 
// the two preceding ones:
function fib(inputNum) {
    if (inputNum <= 0) {
        console.log('This function accepts only positive integer number');
        return undefined;
    }

    if (inputNum === 1 || inputNum === 2) {
        return 1;
    }

    const fibArr = [1, 1];
    const fibArr2 = [1, 1, 2, 3];
    let fib;
    
    for (let i=2; i < inputNum; i++) {
        fib = fibArr[i-1] + fibArr[i-2]
        fibArr.push(fib);
    } 

    return fib;
}

console.log('result: ', fib(1));
console.log('result: ', fib(3));
console.log('result: ', fib(12));