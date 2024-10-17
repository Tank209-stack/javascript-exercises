const palindromes = function (str) {
    let alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    let cleanedString = str
    .toLowerCase()
    .split('')
    .filter(character => alphanumerical.includes(character))
    .join('');

    let reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString
};
console.log(palindromes('racecar'))

// Do not edit below this line
module.exports = palindromes;
