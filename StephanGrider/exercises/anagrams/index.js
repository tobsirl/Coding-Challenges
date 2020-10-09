// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function formatString(str) {
  return str.replace(/[^\w]/g).toLowerCase();
}

function sortString(str) {
  return str.split('').sort().join('');
}

function anagrams(stringA, stringB) {
  const formatA = formatString(stringA);
  const formatB = formatString(stringB);

  const sortA = sortString(formatA);
  const sortB = sortString(formatB);

  console.log(`A: ${sortA}
B: ${sortB}
  `);

  return sortA === sortB;
}

module.exports = anagrams;

// function formatString(string) {
//   return string.replace(/[^\w]/g).toLowerCase();
// }

// function buildCharMap(string) {
//   let charMap = {};

//   for (let key of string) {
//     charMap[key] = charMap[key] + 1 || 1;
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const wordOne = formatString(stringA);
//   const wordTwo = formatString(stringB);

//   let firstString = buildCharMap(wordOne);
//   let secondString = buildCharMap(wordTwo);

//   if (Object.keys(firstString).length !== Object.keys(secondString).length) {
//     return false;
//   }

//   for (let char in firstString) {
// Not checking the keys, checking numbers
//     if (firstString[char] !== secondString[char]) {
//       return false;
//     }
//   }
//   return true;
// }
