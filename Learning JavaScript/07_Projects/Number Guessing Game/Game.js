let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guessess');
const remaining = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess > 1 && guess > 100) {
    alert(`Please enter a number between 1 to 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayMessage(
        `Game over your chances are exhaused. <br> Answer is ${randomNumber}`
      );
      endGame();
    } else {
      cleanUp(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Your answer is correct <br> Congratulations!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too low');
  } else if (guess > randomNumber) {
    displayMessage('Number is too high');
  }
}

function cleanUp(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
 userInput.value = '';
 userInput.setAttribute = ('disabled' , '');
 p.classList.add('button');
 p.innerHTML = `<h1 id = 'newGame'>Start New Game</h1>`;
 startOver.appendChild(p);
 playGame = true;
 newGame();
}

function newGame() {
  const forNewGame =  document.querySelector('#newGame');
  forNewGame.addEventListener('click' , function(e){
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${11 - numGuess} `;
  userInput.removeAttribute = ('disabled');
  startOver.removeChild(p);
  lowHigh.innerHTML = '';
  
  playGame = true;
 })
}
