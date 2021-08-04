//link to challenge: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript
//converts a hexadecimal color string into a rgb object
//completed 8/4/2021

function hexStringToRGB(hex) {
    return {
        r: parseInt(hex.slice(1,3), 16),
        g: parseInt(hex.slice(3,5), 16),
        b: parseInt(hex.slice(5), 16)
    }
}

console.log(hexStringToRGB("#FF9933"), { r: 255, g: 153, b: 51 });