blockchain = [];

let waitingForInput = true;

function getTransanctionValue() {
  const userInput = prompt('Your transaction amount please:');
  return userInput;
}

function getTransanctionValue() {
  let userInput;
  do {
    userInput = prompt('Your transaction amount please:');
    if (isNaN(userInput) || userInput.trim() === '') {
      console.log("Please enter a valid number.");
    }
  } while (isNaN(userInput) || userInput.trim() === '');
  return Number(userInput);
}

function initUserDialog() {
  while (waitingForInput) {
    console.log('Please choose');
    console.log('q: Quit');

    const userChoice = prompt('Please choose');

    if (userChoice === '1') {
      const txAmount = getTransanctionValue();
      console.log(txAmount);
    }
    if (userChoice === 'q') {
      waitingForInput = false;
    }
  }

  console.log('User left');
}


document.addEventListener('keyup', function onKeyPress(event) {
  if (event.key === 'Enter') {
    document.removeEventListener('keyup', onKeyPress);
    initUserDialog();
  }
});