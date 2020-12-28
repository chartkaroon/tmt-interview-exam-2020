// Question 4
// FizzBuzz...But: You may heard FizzBuzz task. 
// Here we have the same rule. You will write a function fizzBuzz that receive a single parameter it will return the value base on these rule.
// If the input is divisable by 3, return 'Fizz'
// If the input is divisable by 5, return 'Buzz'
// If the input is divisable by both 3 and 5, return 'FizzBuzz'
// BUT we're not allow you to use if/else statement. If there is any if or else word in your code. I will consider this question with 0 score :(

// input % 3 --- fizz
// input % 5 --- buzz
// both --- fizzbuzz

function fizzBuzz(inputNum) {
    let result = '';
    let fizz = '';
    let buzz = '';
    fizz = inputNum % 3 === 0? 'Fizz': ''; ;
    buzz = inputNum % 5 === 0? 'Buzz': ''; ;
    result =  fizz + buzz;
    return result;
}

console.log('result: ', fizzBuzz(21));
console.log('result: ', fizzBuzz(25));
console.log('result: ',fizzBuzz(45));
