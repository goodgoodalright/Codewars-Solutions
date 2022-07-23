// Square(n) Sum

function squareSum(numbers){
    return numbers.reduce((sum, num) => sum + (num * num), 0);
}

// ||

function squareSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]**2;
    }
    return sum;
}

// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.