//kata to see if sum of each digit squared, is evenly divisible by the starting number
//6kyu codewars link: https://www.codewars.com/kata/5552101f47fc5178b1000050


function digPow(n, p) {
    // ...
    let sum = 0
    let numArray = n.toString().split('')
    for (let i = 0; i < numArray.length; i++) {
        sum += Math.pow(+numArray[i], p + i)
    }
    if ((sum % n) == 0) {
        console.log('TRUE')
        return sum / n
    }
    else {
        console.log('False')
        return -1
    }
}

console.log(digPow(89, 1))
console.log(digPow(695,2))
console.log(digPow(34,1))