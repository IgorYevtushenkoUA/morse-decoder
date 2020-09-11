const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let cipher = []
    for (let i = 0; i < expr.length; i += 10) {
        cipher.push(expr.substring(i, i + 10))
    }
    let line = ''
    for (let i = 0; i < cipher.length; i++) {
        let key = ''
        for (let j = 0; j < cipher[i].length; j += 2) {
            if ((cipher[i].charAt(j) + cipher[i].charAt(j + 1)) === '10') {
                key += '.'
            } else if ((cipher[i].charAt(j) + cipher[i].charAt(j + 1)) === '11') {
                key += '-'
            } else if (cipher[i].charAt(j) + cipher[i].charAt(j + 1) === '**') {
                line += ' '
                break;
            }
        }
        if (key !== '')
            line += MORSE_TABLE[key]
    }
    return line
}

console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'))


module.exports = {
    decode
}
