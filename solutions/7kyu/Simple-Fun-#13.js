// Magical Well
const magicalWell = (a, b, n) => n ? a*b + magicalWell(a+1, b+1, n-1) : 0;

// || 

function magicalWell(a, b, n) {
     let payout = 0;
     let round = 0;
     for (n; n > 0; n--) {
          round = a * b;
          a++;
          b++;
          payout += round;
     }
     return payout; 
}

// Task
// You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b increase by 1. You have n magic marbles. How much money will you make?

// Example
// For a = 1, b = 2 and n = 2, the output should be 8

// You will cast your first marble and get $2, after which the numbers will become 2 and 3. When you cast your second marble, the well will give you $6. Overall, you'll make $8. So, the output is 8.

// Input/Output
// [input] integer a

// Constraints: 1 ≤ a ≤ 2000

// [input] integer b

// Constraints: 1 ≤ b ≤ 2000

// [input] integer n

// The number of magic marbles in your possession, a non-negative integer.

// Constraints: 0 ≤ n ≤ 5

// [output] an integer