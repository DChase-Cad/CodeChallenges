//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
//  The relative order of the elements should be kept the same.

var removeDuplicates = function (nums) {
    let count = 0;

    if (!nums) { return 0 };


    for (let i = 0; i < nums.length; i++) {
        nums[count]=nums[i]
        console.log(nums)
        while (nums[i] === nums[i + 1]) { i++; }
        count++ 
    
    }
   nums 
   return count;
}



console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));