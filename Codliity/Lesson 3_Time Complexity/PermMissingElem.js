'use strict'
/**
 An array A consisting of N different integers is given. 
The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
 Your goal is to find that missing element.
 Write a function:
 function solution(A);
 that, given an array A, returns the value of the missing element.
 For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
 the function should return 4, as it is the missing element.
 Write an efficient algorithm for the following assumptions:
 N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
 */

const solution = arr => {
    /* First -> 50 score */
    /*
    let prevVal = 1;
    arr.sort().some(e => {
        if ( e !== prevVal) return true;
        else prevVal++;
    })
    return prevVal;
    */

    /* Second -> 70 score */
    /*
    for ( let i = 1, len = arr.length + 1 ; i <= len ; i++ ) {
        if ( arr.indexOf(i) === -1 ) return i;
    }
    */

    /* Third -> 50 score(성능은 위 보다 좋음, 하지만 정확도가 떨어짐) */
    /*
    const tmpArr = Array(arr.length+1).fill(0);
    arr.reduce((acc, cur) => {
        tmpArr[cur] = 1;
    }, tmpArr);

    return Number(tmpArr.slice(1).indexOf(0)) + 1;
    */
}

(() => {
   /** Test */
   try {
       console.log(solution([2,3,1,5])); // 4
   } catch(err) {
       console.err(err)
   }
   
})();