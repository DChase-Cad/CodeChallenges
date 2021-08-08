// //link to challenge: https://leetcode.com/problems/minimum-size-subarray-sum/
// //finds the minimum length of concurrent numbers in an array that sum >= a given target or return 0 if it can't be achieved
// //completed 8/3/2021

// //my solution
// function minSub(target, nums) {
//     let short = Number.POSITIVE_INFINITY;
//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j <= nums.length; j++) {
//             if (sum >= target) {
//                 if ((j - i) < short) {
//                     short = j - i;
//                     console.log(short)
//                 }
//                 break;
//             }
//             sum += nums[j];
//         }
//     }
//     return short !== Number.POSITIVE_INFINITY ? short : 0;
// }

// //sliding window solution -- intuitive solution that uses a window of elements to determine minimum length cutting down on iterations
// //  ***** NOT MY SOLUTION ******   //


// console.log(minSub(11, [1, 4, 9, 2, 11]))




//1. find first window
//2. move left end and test to meet target, if so new min length is achieved
//3. if not move right until target is met again
//4. repeat 2-3 until end of array

function myWindow(target, nums) {
    let left = 0;
    let right = 0;
    let length = Number.POSITIVE_INFINITY;
    let sum = 0;

    while (right < nums.length) {
        sum += nums[right];
        while(sum>=target){
            sum-=nums[left];
            length=Math.min(length,(right-left+1));
            left++;
        }
        right++;
    }

    return length===Number.POSITIVE_INFINITY ? 0 : length;
}

console.log(myWindow(7, [2, 3, 1, 2, 4, 3,]));