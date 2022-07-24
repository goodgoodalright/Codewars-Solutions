// Welcome to Clamping!

function clamp(number, min = 0, max, result){
    // clamp(num, lowBound, highBound, altIfOutOfBounds), min default should be 0
    // if arg4 is a function, return result of arg4(num, min, max) aka RECURSIVE
    // arg4 should only return if num is out of bounds
    // if number is at all within the min && max, do NOT use arg4 (fnc or not)
    if (max == undefined && result == undefined) { // only 2 args
      max = min;
      return Math.min(Math.max(number, 0), max);
    } else { // 3-4 args
      if (number > max || number < min) { // if number is out of bounds
        if (result !== undefined) { // 4 args, result present; only called if num > max && < min
          if (typeof result === 'function') {
            return result(number, min, max);
          } else return result;
        } else return number > max ? (result ? result : max): min; 
      } else { // normal function
        return Math.min(Math.max(number, min), max);
      };
    };
};

// DESCRIPTION:
// Hello happy under-the-stars-burnt-marshmallow-eaters !

// You know what ? This kata ain't for you. 'cause this kata isn't about basking on campfire or snoring in the grass, ... but ... is about:

// c ** L ** amping

// The goal of this kata is to create a clamp function.

// Usually a clamp function is used to keep a number into lower and upper bounds.

// It returns the input number if the number falls within bounds (inclusive) else return either the lower bound or upper bound. If the number equals lower or upper bound then number is returned.

// The signature of usual clamp functions is clamp( number, lowerbound, upperbound )

// eg:

// clamp( 3, 1, 8 ) returns 3 because 3 is betwwen 1 and 8
// clamp( 0, 1, 8 ) returns 1 because 0 is lighter than 1
// clamp( 0, 8, 8 ) returns 8 because 8 equals  8
// clamp( 9, 1, 8 ) returns 8 because 9 is greater than 8
// Your mission
// The goal of this kata is to create a clamp function a bit different.

// Number of arguments may be 2 to 4 :

// clamp( number, max )
// clamp( number, min, max )
// clamp( number, min, max, alternateReturnIfNumberIsOutsideTheBounds )
// if no min arguments is provided its default value should be 0

// if 3 arguments are provided clampworks as usual.

// if there's a fourth argument, this last one provides the return value. This last arguments may be :

// a number, a string, a boolean...
// a function
// The fourth argument provides an alternative to the usual behaviour (ie: reduce "unvalid" numbers to min or max ).

// If last argument is a function, the return value will be the result of that function called with number, min and max arguments.

// The 4th argument return value is ONLY used if the number is OUTSIDE the given range. ( If number fits the interval this fourth arguments (function or not) is NOT used.

// Examples
// clamp( 5, 10 )    // -> 5
// clamp(-5, 10 )    // -> 0
// clamp(15, 10 )    // -> 10

// clamp( 5, 2, 12 ) // -> 5
// clamp( 0, 2, 12 ) // -> 2
// clamp(15, 2, 12 ) // -> 12

// // -- result value provided...
// clamp( 0, 2, 12, 6 )     // -> 6 
// clamp( 0, 2, 12, false ) // -> false
// clamp( 0, 2, 12, "???" ) // -> "???"
// //.. but ...
// clamp( 7, 2, 12, 6 )     // -> 7 ) 
// clamp( 7, 2, 12, false ) // -> 7 } because 7 is in the range [2,12]
// clamp( 7, 2, 12, "???" ) // -> 7 )

// // -- result provided by a function
// var mid = function(n,a,b){ return a+(b-a)/2 }
// clamp( 0, 2, 12, mid ) // -> 7 ( = 2+(12-2)/2 )
// Tests
// You may assume arguments are valid, ie :

// number , min (if provided) & max will always be numbers (integers)
// result (fourth argument) may be :
// a number
// a string
// a boolean
// a date
// a function, whith number, min & max as proper arguments
// .

//      \|/
//      / \      <- just a little teepee
//  _ _/ O \_ _     for disappointed campers