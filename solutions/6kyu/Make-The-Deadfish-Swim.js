// Make the Deadfish Swim

// Return the output array, and ignore all non-op characters
function parse( data ) {
    let result = [];
    data.split('').reduce((value, ltr) => {
      if (ltr === 'i') value++;
      if (ltr === 'd') value--;
      if (ltr === 's') value *= value;
      if (ltr === 'o') result.push(value);
      return value
    }, 0)
    return result
}

// DESCRIPTION:
// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]