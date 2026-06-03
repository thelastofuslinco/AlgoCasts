// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) return false;
  const charMapA = {};
  const charMapB = {};

  for (let index = 0; index < stringA.length; index++) {
    const element = stringA[index].toLowerCase();
    if (!charMapA[element]) charMapA[element] = 0;
    charMapA[element] += 1;

    const elementB = stringB[index].toLowerCase();
    if (!charMapB[elementB]) charMapB[elementB] = 0;
    charMapB[elementB] += 1;
  }

  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) return false;
  }

  return true;
}

module.exports = anagrams;
