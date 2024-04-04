let waitingForInput;

function initiateEnterKeyListener() {
  document.addEventListener('keyup', function onKeyPress(event) {
    if (event.key === 'Enter') {
      document.removeEventListener('keyup', onKeyPress);
      waitingForInput = true;
      startUserInteractionLoop();
    }
  });
}

initiateEnterKeyListener();

blockchain = [];

function getTransanctionValue() {
  let userInput;
  do {
    userInput = prompt('Your transaction amount please:');
    if (isNaN(userInput) || userInput.trim() === '') {
      console.log('Please enter a valid number.');
    }
  } while (isNaN(userInput) || userInput.trim() === '');
  return Number(userInput);
}

function showMenuOptions() {
  console.log('Please choose');
  console.log('1: Add a new transaction value');
  console.log('q: Quit');
}

function handleUserSelection(userChoice) {
  switch (userChoice) {
    case '1':
      const txAmount = getTransanctionValue();
      console.log(txAmount);
      break;
    case 'q':
      waitingForInput = false;
      break;
    default:
      console.log('Invalid option, please choose again.');
  }
}

function startUserInteractionLoop() {
  while (waitingForInput) {
    showMenuOptions();
    const userChoice = prompt('Please choose');
    handleUserSelection(userChoice);
  }

  console.log('User left');
  initiateEnterKeyListener();
}
