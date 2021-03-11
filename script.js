let createButtons = 0;

// Create a function for createButtons button
document.querySelector('.createButtons').addEventListener('click', function playGame() {

  let startMessage = document.getElementById('startMessage');
  let winMessage = document.getElementById('winMessage');
  let buttonsCreated = document.getElementById('buttonsCreated');
  const guess = Number(document.querySelector('#number').value);
  

// Create buttons 
  if (createButtons === 0 && guess!== 0 ){
  for(let i = 0; i<guess;i++){
  const button = document.createElement("button");
  button.innerHTML = "Button"+ i;
  button.id=i;
  buttonsCreated.appendChild(button);
  startMessage.removeAttribute("hidden");
    }
    createButtons++;
  
// Random button
    const randomBtn = Math.floor(Math.random() * guess); 
    
// If you guess the button show the win message 
  document.getElementById(parseInt(randomBtn)).addEventListener('click', function(){
     winMessage.removeAttribute("hidden");
  });
  }

// When the button PLAY AGAIN is clicked
  document.querySelector('.playAgain').addEventListener('click', function() {
    createButtons = 0;
    startMessage.setAttribute("hidden", true);
    winMessage.setAttribute("hidden", true);
    document.getElementById('number').value = null;

    var deleteButtons=document.getElementById("buttonsCreated");
    while (deleteButtons.hasChildNodes()) {
      deleteButtons.removeChild(deleteButtons.childNodes[0]);
    }
  });
});