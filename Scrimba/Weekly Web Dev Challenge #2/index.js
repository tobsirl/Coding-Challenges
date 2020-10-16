const mainContainer = document.getElementById('main-container');
const equationField = document.getElementById('equation-field');
const solveButton = document.getElementById('solve-button');
const solutionDisplay = document.getElementById('solution-display');

solveButton.addEventListener('click', function () {
  // Clears the solution contents on each click
  solutionDisplay.innerHTML = ``;

  // Write your code here 👇
  const input = equationField.value.split(' ');
  const firstDigit = input[0];
  const operator = input[1];
  const secondDigit = input[2];
  let answer = 0;

  if (operator === '+') {
    answer = parseInt(firstDigit) + parseInt(secondDigit);
  } else if (operator === '-') {
    answer = parseInt(firstDigit) - parseInt(secondDigit);
  } else if (operator === '/') {
    answer = parseInt(firstDigit) / parseInt(secondDigit);
  } else {
    answer = parseInt(firstDigit) * parseInt(secondDigit);
  }

  solutionDisplay.innerHTML = `<div class="equation-component">${firstDigit} ${operator} ${secondDigit} = ${answer}</div>`;
});

/*
Part 1 (Calculation): 
    +Your first goal is to solve a simple text-based
        math problem entered in the input field
    +The problem can be add/sub/multiply/divide
    +Here are few examples: 
        "3 + 3" -> 6
        "10 - 3" -> 7
        "44 / 2" -> 22
        "2 * 8" -> 16 
    +When the 'Solve' button is clicked
        -Create a new div with the
            class 'equation-component'
            its text value should be the solution
            to the input equation
        -This element should be added as a child of 
            the `solutionDisplay` div

    Note: You can assume there will always only be 2 values, 
        both whole integers, and always a space between each 
        integer and the operator as in the above examples


Part 2 (Flex Display): 
    Then, you'll Flex your Flexbox skills!
    + Vertically stack the contents of the mainContainer
    + Center the content horizontally
    + Display all components of the equation 
        in the solutionDisplay using a horizontal Flexbox
        with `space around` each component
    
Skills: 
    Event Listeners, String Manipulation, Array Manipulation, 
Arithmetic, DOM Manipulation, Flexbox



STRETCH GOALS:
    +Accept and solve more complex problems with more than 2 inputs
    +Signal the different types of components (operator/value/solution) with different colors
    +Accept strings without spaces
    +Can you improve the overall design?
*/
