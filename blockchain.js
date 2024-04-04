blockchain = [];
let waitingForInput;

function getLastBlockchainValue() {
  console.log('blockchain.length', blockchain.length);
  if (blockchain.length < 1) {
    return null;
  }
  console.log('blockchain[-1]', blockchain[-1]);
  return blockchain[-1];
}

function addTransaction(txAmount, lastTransaction = [1]) {
  if (lastTransaction === null) {
    lastTransaction = [1];
  }
  console.log('blockchain before push', blockchain);
  blockchain.push([lastTransaction, txAmount]);
  console.log('blockchain after push', blockchain);
}

function initiateEnterKeyListener() {
  document.addEventListener('keyup', function onKeyPress(event) {
    if (event.key === 'Enter') {
      document.removeEventListener('keyup', onKeyPress);
      waitingForInput = true;
      startUserInteractionLoop();
    }
  });
}

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

function printBlockchainElements() {
  for (let index = 0; index < blockchain.length; index++) {
    console.log(blockchain[index]);
  }
  console.log('--------------------');
}

function showMenuOptions() {
  console.log('Please choose');
  console.log('1: Add a new transaction value');
  console.log('2: Output the blockchain blocks');
  console.log('q: Quit');
}

function handleUserSelection(userChoice) {
  switch (userChoice) {
    case '1':
      const txAmount = getTransanctionValue();
      console.log(txAmount);
      addTransaction(txAmount, getLastBlockchainValue());
      break;
    case '2':
      printBlockchainElements();
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

initiateEnterKeyListener();
