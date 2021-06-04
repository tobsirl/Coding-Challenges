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
