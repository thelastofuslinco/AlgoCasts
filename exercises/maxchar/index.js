// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {}
    let max = {value: 0};

    for(char of str){
        if(!chars[char]) chars[char] = 0
        chars[char] += 1

        if(chars[char] > max.value) {
            max.value = chars[char]
            max.key = char
        }
    }

    return max.key
}

module.exports = maxChar;
