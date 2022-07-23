// Calculate Average

function find_average(array) {
    // your code here
    return array.length === 0 ? 0 : array.reduce((a, b) => (a + b))/(array.length);
}

// ||

function find_average(array) {
    // your code here
    if (array.length < 1) { 
      return 0;
    } else {
      let num = 0;
      for (let i = 0; i < array.length; i++) {
        num += array[i];
      }
      return num / array.length;
    }
    return 0;
}

// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.