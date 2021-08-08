//https://leetcode.com/problems/happy-number/
// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not

//completed 8/8/2021

const isHappy = (n) => {
    let ans = []
    let sum = 0;
    let arr = n.toString().split('');

    do {
        sum = 0;
        for (let i = 0; i < arr.length; i++) {

            sum += arr[i] * arr[i]
        }
        arr = sum.toString().split('');
    } while (sum > 0 && sum > 5)

    return sum === 1 ? true : false

}










console.log(isHappy(19113113123));