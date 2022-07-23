// Heron's Formula

let heron = (a, b, c, s) => ((s = (a+b+c)/2), Math.sqrt(s*(s-a)*(s-b)*(s-c)))

// ||

function heron(a, b, c) {
    // sqrt (all)
    // s = (sum of sides)/2
    // s * (s-each side)
    let s = (a + b + c)/2
    return Math.sqrt(s*(s-a)*(s-b)*(s-c))
}

// DESCRIPTION: 
// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

// Heron's formula:

// s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)} 
// s∗(s−a)∗(s−b)∗(s−c)
 
// where

// s=a+b+c2s = \frac{a + b + c} 2s= 
// 2
// a+b+c
 
// Output should have 2 digits precision.