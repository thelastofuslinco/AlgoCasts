// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let left = 0;
    let right = str.length - 1;
    const arr = str.split('')

    while(left < right){
        const aux = arr[left]
        arr[left] = arr[right]
        arr[right] = aux
        left += 1
        right -= 1
    }

    return arr.join('')
}

module.exports = reverse;

// function reverse(str) {
//    return str.split('').reduce((prev, curr)=>{
//     return curr + prev
//    },'')
// }