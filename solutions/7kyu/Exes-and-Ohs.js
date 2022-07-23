// Exes and Ohs

function XO(str) {
    //code here
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

// ||

function XO(str) {
    //code here
    let check = Array.from(str.toLowerCase());
    let sumX = 0;
    let sumY = 0;
    for (let i = 0; i < check.length; i++) {
        if (check[i] === 'x') {
            sumX++;
        } else if (check[i] === 'o') {
            sumY++;
        }
    }
    return sumX === sumY ? true : false;
}

// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false