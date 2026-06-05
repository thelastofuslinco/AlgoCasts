// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 1) {
  if(row > n) return;
  const total = 2 * n - 1
  const mid = Math.floor(total / 2)
  
  let string = ''
  for(let i = 0; i < total; i++){
    if(mid - row < i && mid + row > i){
      string += '#'
    } else{
      string += ' '
    }
  }
  console.log(string)
  
  pyramid(n, row + 1)
}

module.exports = pyramid;
