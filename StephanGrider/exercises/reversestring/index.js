// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

reverse('asdf');

module.exports = reverse;

// using reverse
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// old style loop
// function reverse(str) {
//   let reversed = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// for of loop
// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }
