const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
	'*':' '
};

function decode(expr) {
       let arr = [];
    for (let i=0; i<(expr.length/10);i++) {
        arr[i]=expr.substr( i*10,10)
    }
    console.log(arr)
    const decode1 = function (z){
        let indexOf1 = z.indexOf('1');
        z = z.slice(indexOf1)
        z = z.replace(/10/gm, '.')
        z = z.replace(/11/gm, '-')
        return z
    }
    arr = arr.map(el=>decode1(el))
    console.log(arr)

    const findInMorse = function (y) {
        return MORSE_TABLE[y];
    }

    arr = arr.map(el=>findInMorse(el))
    let res = arr.join('');
    return res
}

module.exports = {
    decode
}