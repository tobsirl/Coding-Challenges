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

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ]);

// Confirm the EndingPassed
function confirmEnding(str: string, target: string): boolean {
  return str.substring(str.length - target.length) === target;
}

confirmEnding('Bastian', 'n');

// Repeat a String Repeat a StringPassed
function repeatStringNumTimes(str: string, num: number): string {
  let string = '';
  for (let i = 0; i < num; i++) {
    string += str;
  }
  return string;
}

repeatStringNumTimes('abc', 3);

// Truncate a StringPassed
function truncateString(str: string, num: number): string {
  return str.length > num ? str.slice(0, num) + '...' : str;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

// Finders KeepersPassed
function findElement(arr: number[], func) {
  return arr.find(func);
}

findElement([1, 2, 3, 4], (num: number) => num % 2 === 0);

// boo who
function booWho(bool) {
  return typeof bool === 'boolean'
}

booWho(null);