// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, step = 0) {
  if (step >= n) return;

  let string = "";

  for (let i = 0; i < n; i++) {
    if (i <= step) string += "#";
    else string += " ";
  }

  console.log(string);
  // up
  steps(n, step + 1);
}

module.exports = steps;
