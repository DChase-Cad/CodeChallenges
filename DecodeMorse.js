//link to code challenge: https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
//decodes a string of morse code into text and trims spaces
//completed 8/4/2021

const MORSE_CODE = require('./Utilities/MorseCodeTable')

const decodeMorse = (morseCode) => {
    const decodeWord = (word) => {
        return word.split(' ').map((letter) => MORSE_CODE[letter]).join('');
    }
    return morseCode.trim().split('  ').map(decodeWord).join(' ').toUpperCase();
}




console.log(decodeMorse('      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  '));