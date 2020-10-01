'use strict'

/**
 A small frog wants to get to the other side of a river.
The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1).
Leaves fall from a tree onto the surface of the river.
 You are given an array A consisting of N integers representing the falling leaves.
A[K] represents the position where one leaf falls at time K, measured in seconds.
 The goal is to find the earliest time when the frog can jump to the other side of the river.
The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves).
You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.
 For example, you are given integer X = 5 and array A such that:
  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
 In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.
 Write a function:
 function solution(X, A);
 that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.
 If the frog is never able to jump to the other side of the river, the function should return −1.
 For example, given X = 5 and array A such that:
  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
 the function should return 6, as explained above.
 Write an efficient algorithm for the following assumptions:
 N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X].
 */

const solution = (position, arr) => {
    /* First -> 18 score */
    /*
    return arr.indexOf(position);
    */

    /* Second -> 9 score */
    /*
    if ( arr.indexOf(position) === -1 || 1 !== arr[0]) return -1;

    let cnt = 0;
    let pre, cur;
    for (let i = 0, len = arr.length; i < len; i++) {
        cur = arr[i];
        if (position === cur) break;
        else {
            if (pre !== cur) {
                cnt++;
                pre = cur;
            }
            else continue;
        }
    }
    return cnt;
    */

    /* Third -> 27 score */
    const set = new Set(arr);
    if (Math.max(...set) !== set.size || position > set.size) return -1
    else return position === 1 ? 0 : position +1 ;

    /* Other solution -> 100 score */
    /*
    const holdValues = new Set();
    for(let i = 0, len = arr.length ; i < len ; i++) {
        holdValues.add(arr[i]);
        if(holdValues.size === position) return i;
    }

    return -1;
    */
}

(() => {
   /** Test */
   try {
       console.log(solution(1, [2,3,1,5]));             // -1
       console.log(solution(5, [1,3,1,4,2,3,5,4]));     // 6
       console.log(solution(2, [2, 2, 2, 2, 2]));       // -1
       console.log(solution(1, [1]));                   // 0
       console.log(solution(5, [1, 2, 3, 5, 3, 1]));    // -1
       console.log(solution(3, [1, 3, 1, 3, 2, 1, 3])); // 4
       console.log(solution(2, [1, 1, 1, 1]));          //-1
   } catch(err) {
       console.err(err)
   }
   
})();