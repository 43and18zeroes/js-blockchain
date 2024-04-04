blockchain = [];

let waitingForInput = true;
let userChoice;

function initUserDialog() {
  while (waitingForInput) {
    console.log('Please choose');
    console.log('q: Quit');

    userChoice = prompt('Bitte gib etwas ein:');

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