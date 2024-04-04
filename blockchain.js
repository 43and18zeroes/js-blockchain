blockchain = [];

const mainForm = document.getElementById('mainForm');
const mainInput = document.getElementById('mainInput');

let waitingForInput = true;
let userChoice;

// document.addEventListener('keypress', function onKeyPress(event) {
//   if (event.key === 'Enter') {
//     document.removeEventListener('keypress', onKeyPress); // Entferne den Listener, damit die Schleife nicht erneut startet

//     mainForm.style.display.block;

//     let waitingForInput = true;
//     let userChoice;

//     while (waitingForInput) {
//       console.log('Please choose');
//       console.log('q: Quit');

//       // userChoice = prompt('Bitte gib etwas ein:');

//       if (userChoice === 'q') {
//         waitingForInput = false;
//       }
//     }

//     console.log('User left');
//   }
// });

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