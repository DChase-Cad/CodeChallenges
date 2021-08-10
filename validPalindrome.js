//https://leetcode.com/problems/valid-palindrome/
//directions: Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// August 10, 2021


var isPalindrome = function(s) {
    
    let str = s.replace(/[\W_]+/g,'')
    console.log(str)
    return palin(str.toLowerCase());
};

function palin(string) {
    let middle = 0;
    console.log(string)
    let left = '';
    let right = '';

    if (string.length % 2 === 0) {
        middle = string.length / 2 - 1  
        left = string.substring(0, middle + 1);
        right = string.substring(middle + 1);
        console.log(left, right)
    }
    else {
        middle = Math.floor(string.length / 2)
        left = string.substring(0, middle);  
        right = string.substring(middle + 1);
        console.log(left, right);
    }

    return left === reverse(right) ? true : false;
}

function reverse(string) {
    let str = ''
    for (let i = string.length - 1; i >= 0; i--) {
        str += string[i]
        console.log(str)
    }

    return str;
}

console.log(isPalindrome("aaracecaraa"));
