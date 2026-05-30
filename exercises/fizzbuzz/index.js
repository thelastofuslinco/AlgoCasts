// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let index = 1; index < n + 1; index++) {
        const three = index % 3 === 0
        const five = index % 5 == 0

        if(three && five) console.log('fizzbuzz')
        else if(three) console.log('fizz')
        else if (five) console.log('buzz')
        else console.log(index)
    }
}

module.exports = fizzBuzz;
