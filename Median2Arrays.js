//challenge link: https://leetcode.com/problems/median-of-two-sorted-arrays/
//finds the median of an array that is combination of 2 input arrays combined
//finisihed 8/6/2021

var findMedianSortedArrays = function (nums1, nums2) {
    let arr = nums1.concat(nums2)
    if (!arr.length) return 0;
    arr.sort(function (a, b) { return a - b; });

    let middle = Math.floor((arr.length) / 2);

    if (arr.length % 2 === 0) { return (arr[middle] + arr[middle - 1]) / 2; }

    return arr[middle];
}

console.log(findMedianSortedArrays([], [1]));