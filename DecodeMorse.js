const MORSE_CODE = require('./Utilities/MorseCodeTable')

const decodeMorse = (morseCode) => {
    const decodeWord = (word) => {
        return word.split(' ').map((letter) => MORSE_CODE[letter]).join('');
    }
    return morseCode.trim().split('  ').map(decodeWord).join(' ').toUpperCase();
}




console.log(decodeMorse('      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  '));