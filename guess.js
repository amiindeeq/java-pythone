const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGuessingGame() {
  const numberToGuess = generateRandomNumber(1, 100);
  let attempts = 0;

  console.log('Welcome to the Guessing Game!');
  console.log('I have chosen a number between 1 and 100.');

  function makeGuess() {
    rl.question('Enter your guess: ', (guess) => {
      attempts++;

      if (isNaN(guess)) {
        console.log('Invalid input. Please enter a valid number.');
        makeGuess();
      } else {
        guess = parseInt(guess);

        if (guess < numberToGuess) {
          console.log('Too low! Try again.');
          makeGuess();
        } else if (guess > numberToGuess) {
          console.log('Too high! Try again.');
          makeGuess();
        } else {
          console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
          rl.close();
        }
      }
    });
  }

  makeGuess();
}

playGuessingGame();