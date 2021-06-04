function convertToF(celsius: number): number {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(30);

// Reverse a String
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

reverseString('hello');

// Factorialize a Number
function factorialize(num: number): number {
  if (num === 0) {
    return 1;
  }

  return num * factorialize(num - 1);
}

factorialize(5);

// Find the Longest Word in a StringPassed
function findLongestWordLength(str: string): number {
  return str
    .split(' ')
    .map((word) => word.length)
    .sort((a, b) => b - a)[0];
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

// Return Largest Numbers in Arrays
function largestOfFour(arr: Array<number>): Array<number> {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let maxNum = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maxNum) {
        maxNum = arr[i][j];
      }
    }
    results[i] = maxNum;
  }
  return results;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);