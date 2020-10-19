// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  const string = ['a', 'e', 'i', 'o', 'u'];

  for (let letter of str.toLowerCase()) {
    if (string.includes(letter)) {
      count++;
    }
  }
  return count;
}

// function vowels(str) {
//   const regex = /aeiou/gi;
//   return str.match(regex).length
// }

module.exports = vowels;
