// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const  newString = n.toString()
    const arr = newString.split('')

    let left = 0
    let right = arr.length -1

    while(left < right) {
        const aux = arr[left]
        arr[left] = arr[right]
        arr[right] = aux
        
        left ++
        right --
    }

    const sign = Math.sign(n)

    if(sign === 1 || sign === 0){
        return Number(arr.join(''))
    }

    arr.pop()
    return - Number(arr.join(''))
}

module.exports = reverseInt;
