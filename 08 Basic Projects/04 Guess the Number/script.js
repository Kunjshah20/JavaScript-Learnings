let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const userInput = document.getElementById("guessField");
const submit = document.getElementById("subt");
const guessSlot = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numberOfGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);

    if (numberOfGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage(`You guessed the number ${randomNumber} right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is high`);
  }
};

const displayGuess = (guess) => {
  userInput.value = ""; // basically cleanup method
  guessSlot.innerHTML += `${guess}, `;
  remainingGuesses.innerHTML = `${10 - numberOfGuesses}`;
  numberOfGuesses++;
};

const displayMessage = (message) => {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

const newGame = () => {
  console.clear();
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    lowOrHigh.innerHTML = "";
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);
    prevGuess = [];
    numberOfGuesses = 0;
    guessSlot.innerHTML = "";
    remainingGuesses.innerHTML = `${10 - numberOfGuesses} `;
    numberOfGuesses++;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
};
