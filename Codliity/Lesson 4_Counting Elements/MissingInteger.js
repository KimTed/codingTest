'use strict'
/**
This is a demo task.
Write a function:
    function solution(A);
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.
Write an efficient algorithm for the following assumptions:
    * N is an integer within the range [1..100,000];
    * each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

const solution = (arr) => {
    /* First -> 33 score */
    /*
    let min = Math.min(...arr);
    if (1 !== min) return 1;

    let max = Math.max(...arr);
    let result = 1;
    const exceptDup = Array.from(new Set(arr.sort()));

    if (exceptDup.length === max) return ++max;

    for (let i = 0, len = exceptDup.length; i < len; i++) {
        if (result === exceptDup[i]) result++;
        else return result;
    }
    */

    /* Second -> 44 score */
    /*
    const exceptDup = Array.from(new Set(arr.sort()));
    let min = 1;
    for (let i in exceptDup) {
        if (exceptDup[i] === min) min++;
    }

    return min;
    */

    /* Third(after Cheat) -> 44 score */
    /*
    arr.sort();
    let min = 1;
    
    for (let i in arr) {
        if (arr[i] > 0 && arr[i] == min) {
            min++;
        }
    }
    
    return min;
    */

    /* Cheat -> 100 score */
    arr.sort((a, b) => a-b);
    
    let min = 1;
    
    for (let i in arr) {
        if (arr[i] > 0 && arr[i] == min) {
            min++;
        }
    }
    
    return min;
}

(() => {
   /** Test */
   try {
       console.log(solution([1, 3, 6, 4, 1, 2]));  // 5
       console.log(solution([1, 2, 3]));  // 4
       console.log(solution([-1, -3]));  // 1
   } catch(err) {
       console.err(err)
   }
   
})();