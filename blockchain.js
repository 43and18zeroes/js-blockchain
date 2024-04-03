blockchain = [];

document.addEventListener('keypress', function onKeyPress(event) {
    function getLastBlockchainValue() {}

    function getUserChoice() {
      let userInput = prompt('Bitte gib etwas ein:');
      return userInput;
    }
    
    let waitingForInput = true;
    
    while (waitingForInput) {
      console.log('Please choose');
      console.log('q: Quit');
    
      userChoice = getUserChoice();
    
      if (userChoice === 'q') {
        waitingForInput = false;
      }
    }

    console.log('User left');
});
