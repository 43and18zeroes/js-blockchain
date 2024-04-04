blockchain = [];

let waitingForInput = true;

function getTransanctionValue() {
  const userInput = prompt('Your transaction amount please:');
  return userInput;
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


document.addEventListener('keypress', function onKeyPress(event) {
  if (event.key === 'Enter') {
    document.removeEventListener('keypress', onKeyPress); // Entferne den Listener, damit die Schleife nicht erneut startet
    initUserDialog();
  }
});