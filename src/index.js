module.exports = function toReadable(number) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numString = number.toString();


    if (number === 0) {
        return 'zero';
    } else if (number < 20) {
        return units[number];
    } else if (numString.length === 2 && numString[1] === '0') {
        return tens[numString[0]];
    } else if (numString.length === 2) {
        return tens[numString[0]] + ' ' + units[numString[1]];
    } else if (numString.length === 3) {
        if (numString[1] === '0' && numString[2] === '0') {
            return (units[numString[0]] + ' ' + 'hundred');
        } else {
            return units[numString[0]] + ' ' + 'hundred' + ' ' + toReadable(+(numString[1] + numString[2]));
        }
    }
}
