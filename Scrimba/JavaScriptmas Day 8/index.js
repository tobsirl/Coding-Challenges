/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function changeDice() {
  const diceNumber = rollDice();
  console.log(diceNumber);

  const diceToDotNumbers = {
    1: [4],
    2: [2, 6],
    3: [2, 4, 6],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8],
  };

  const showDots = diceToDotNumbers[diceNumber];

  let j = 0;
  for (let i = 0; i < dots.length; i++) {
    if (i === showDots[j]) {
      dots[i].classList.remove('hide');
      j++;
    } else {
      dots[i].classList.add('hide');
    }
  }
  const display = document.querySelector('.display');
  display.innerHTML = `<h1>Roll: ${diceNumber}</h1>`
}

const dice = document.querySelector('.dice');
const dots = Array.from(document.querySelectorAll('.dice div'));




dots[4].classList.remove('hide');
dice.addEventListener('click', () => changeDice());

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
