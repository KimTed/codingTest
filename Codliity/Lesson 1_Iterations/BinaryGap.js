'use strict'

/**
 *  A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
 *  For example, number 9 has binary representation 1001 and contains a binary gap of length 2. 
 * The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
 * The number 20 has binary representation 10100 and contains one binary gap of length 1. 
 * The number 15 has binary representation 1111 and has no binary gaps. 
 * The number 32 has binary representation 100000 and has no binary gaps.
 *  Write a function:
 *     function solution(N);
 *  that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
 *  For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. 
 * Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
 *  Write an efficient algorithm for the following assumptions:
 *  N is an integer within the range [1..2,147,483,647].
 */

const solution1 = num => {
    // if ( num % 2 === 0 ) return 0;
    const gapArr = [];
    let gapCnt = 0;
    let isFirst = true;
    let isSwitch = false;

debugger;
    while ( num != 1 ) {
        debugger
        let rest = num % 2;
        
        if ( rest === 1 && isFirst === false ) {
             gapArr.push(gapCnt); 
             gapCnt = 0;
        }
        if ( rest === 0 ) gapCnt++;
        if ( isFirst ) isFirst = false;
        num = parseInt(num / 2);
    }

    if ( gapArr.length !== 0 && gapCnt !== 0 ) gapArr.push(gapCnt);
    
    return gapArr.length === 0 ? 0 : Math.max(...gapArr);
}
const solution = num => {
    // const binaryStr = num.toString(2);
    // const binaryStr = (num).toString(2).split(1).slice(0,-1);
    
    // console.log(`num: ${num} => numbinary: ${binaryStr} `);

    let gapArr = (num).toString(2).split(1).slice(0,-1).reduce((acc, cur)=>{
        if ( cur.length !== 0 ) acc.push(cur.length);
        return acc;
    },[]);
    // if ( gapArr.length === 0 ) return 0;

    return Math.max(...gapArr);
}
(() => {
    console.log(solution(32)); //0
    console.log(solution(1041)); // 5
    console.log(solution(15)); // 0
    console.log(solution(20)); // 1
})();