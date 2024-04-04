let waitingForInput;

function addEnterEventlistener() {
  document.addEventListener('keyup', function onKeyPress(event) {
    if (event.key === 'Enter') {
      document.removeEventListener('keyup', onKeyPress);
      waitingForInput = true;
      initUserDialog();
    }
  });
}

addEnterEventlistener();

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

function displayUserOptions() {
  console.log('Please choose');
  console.log('1: Add a new transaction value');
  console.log('q: Quit');
}

function initUserDialog() {
  while (waitingForInput) {
    displayUserOptions();
    const userChoice = prompt('Please choose');

    // if (userChoice === '1') {
    //   const txAmount = getTransanctionValue();
    //   console.log(txAmount);
    // }
    // if (userChoice === 'q') {
    //   waitingForInput = false;
    // }

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

  console.log('User left');
  addEnterEventlistener();
}
