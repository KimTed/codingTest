'use strict'
/**
 A non-empty array A consisting of N integers is given.
 A permutation is a sequence containing each element from 1 to N once, and only once.
For example, array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.
 The goal is to check whether array A is a permutation.
Write a function:
 function solution(A);
that, given an array A, returns 1 if array A is a permutation and 0 if it is not.
 For example, given array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.
Given array A such that:
    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.
 Write an efficient algorithm for the following assumptions:
 N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
*/

const solution = (arr) => {
    /* Third -> 58 score */
    /*
    const maxVal = Math.max(...arr);
    const excepDup = Array.from(new Set(arr)); // 이렇게 하는 순간 빅오 표기가 'O(N) or O(N * log(N))' 가 안됨(?)
    return maxVal === excepDup.length ? 1 : 0;
    */

    const maxVal = Math.max(...arr);
    const sortedArr = arr.sort((a, b) => a - b);
    let pivotNum = 1;
    for (let i = 0, len = sortedArr.length; i < len ; i++) {
        if (sortedArr[i] == pivotNum) pivotNum++;
        else return 0;
    }
    return 1;
}

(() => {
   /** Test */
   try {
       console.log(solution([4,1,3])); // 0
       console.log(solution([4,1,3,2])); // 1
       console.log(solution([9, 5, 7, 3, 2, 7, 3, 1, 10, 8])); // 0
       console.log(solution([1, 1])); // 0
   } catch(err) {
       console.err(err)
   }
   
})();