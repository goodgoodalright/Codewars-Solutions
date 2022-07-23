// Simple Fun #4 - Phone Call

function phoneCall(min1, min2_10, min11, s) {
    //coding and coding..
    if (s < min1) return 0;
    let sum = 1;
    sum += (s-min1) > (min2_10*9) ? 9 : (s-min1)/min2_10;
    sum += ((s-min1)-(9*min2_10)) < 0 ? 0 : ((s-min1)-(9*min2_10))/min11;
    return Math.round(sum-0.5);
}
//   let time = (min1*3) + (min2_10*9) + (min11*2)
//   let budget = s
//   for (let i = time; i > 0; i - 1) {
//     if (i > 10 && budget !== 0) {
//       budget -= (min11*2)
//     } else if (i > 1 && i < 10 && budget !== 0) {
//       budget -= (min2_10)
//     } else if (i === 1 && budget !== 0) {
//       budget -= (min1*3)
//     } else {
//       return budget
//     }
//   }
//   return budget