// Abbreviate a Two-Word Name

function abbrevName(name){
    let initials = name.split(' ').map((x, i) => x[0]);
    return initials.join('.').toUpperCase();
}

// ||

function abbrevName(name){
    let entry = name.split(' ');
    let abbrev = entry[0][0] + '.' + entry[1][0];
    return abbrev.toUpperCase();
}

// ||

function abbrevName(name){
    let abbr = name.split(' ');
    return (abbr[0][0] + '.' + abbr[1][0]).toUpperCase();
}

// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F