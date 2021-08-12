//LINK: https://leetcode.com/problems/plus-one/
// Description:
// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.
//completed Aug 12, 2021

const plusOne = (digits) => {
    let end = digits.length - 1;
    let carry = true;

    while (end >= 0 && carry) {
        console.log(end)
        if (digits[end] + 1 === 10) {
            digits
            digits[end] = 0;
            end -= 1;
        }
        else {
            digits[end] += 1;
            carry = false;
        }
    }

    if (carry) { digits.unshift(1) }
    return digits;
};

console.log(plusOne([9]));