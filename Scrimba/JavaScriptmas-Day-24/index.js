//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
let pushed = false; //Has the stop button been pushed - false is default
let targetInt; //The target number to stop the wheel on
let spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document
  .getElementById('buttonPressed')
  .addEventListener('click', buttonPressed);

//When the stop button is pushed
function buttonPressed() {
  pushed = true;
}

//set the target Int
function setTargetInt() {
  let targetElem = document.getElementById('targetNum');
  targetInt = Math.floor(Math.random() * 101);
  targetElem.innerHTML = targetInt;
}

//sleep const
function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

//EDIT THIS FUNCTION
async function spin() {
  //WRITE YOUR CODE HERE
  for (let i = 0; i <= 100; i++) {
    if (i === 100) {
      i = 0;
    }

    if (pushed == true) {
      stop(i); //Trigger this function when the STOP button has been pushed
      break;
    } else {
      spinningElem.innerHTML = i;
      await sleep(75); ///Paste this wherever you need to sleep the incrimentor
    }
  }
}

//EDIT THIS FUNCTION
function stop(i) {
  //WRITE YOUR CODE HERE
  let offBy = Math.abs(targetInt - (i - 1));
  let message;

  if (offBy == 0) {
    message = 'You Win!';
  } else {
    message = 'Oh no, you lose! Off by ' + offBy.toString();
  }
  let result = document.getElementById('result');
  result.innerHTML = message;
}

//main
setTargetInt();
spin();
