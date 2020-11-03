'use strict'
/**
Write a function:
 function solution(A, B, K);
that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:
 { i : A ≤ i ≤ B, i mod K = 0 }
 For example, for A = 6, B = 11 and K = 2, your function should return 3, 
because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.
Write an efficient algorithm for the following assumptions:
 * A and B are integers within the range [0..2,000,000,000];
 * K is an integer within the range [1..2,000,000,000];
 * A ≤ B.

 */

const solution = (a, b, k) => {
    
    /* First -> 50 score (performence) */
    /*
    let result = 0;

    for (a, b;  a <= b; a++) {
        if (a%k === 0) result++;
    }
    
    return result;
    */

    let end = b;
    let start = a;

    if ( a === b ) {
        if (   a === k 
            || a === 0
            || a % k === 0 ) return 1;
        return 0;
    }

    console.log(`parseInt(b/k): ${parseInt(b/k)}  , parseInt(a/k): ${parseInt(a/k)}`)
    return parseInt(b/k) - (a%k===0 ? parseInt(a/k)-1 : parseInt(a/k));
}

(() => {
   /** Test */
   try {
       console.log(solution(6,11,2)); // 3
       console.log(solution(0,0,11)); // 1
       console.log(solution(11, 345, 17)); // 20
       
   } catch(err) {
       console.err(err)
   }
   
})();