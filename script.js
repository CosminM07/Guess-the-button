// Create a function for GO button
document.querySelector('.go').addEventListener('click', function playGame() {

  var array_btn = []; 
  let startMessage = document.getElementById('startMessage');
  let winMessage = document.getElementById('winMessage');
  let playing =0;
  let div = document.getElementById('div');
  const guess = Number(document.querySelector('#number').value);

// Create buttons
  playing++;
  if(playing === 1){   
  startMessage.removeAttribute("hidden");
  function createButtons() {
  for(let i = 0; i<guess;i++){
  const button = document.createElement("button");
  button.innerHTML = "Button"+ i;
  button.id=i;
  div.appendChild(button);
  }}
  createButtons();

// Make an extra array for random button 
  for (let i=0; i<guess;i++){
    array_btn[i]=i;
    }
// Random button
    const randomBtn = array_btn[Math.floor(Math.random() * array_btn.length)];
    
// If you guess the button show the win message 
  document.getElementById(parseInt(randomBtn)).addEventListener('click', function(){
     winMessage.removeAttribute("hidden");
     
  });
}
// Make a function for the button PLAY AGAIN 
  document.querySelector('.playAgain').addEventListener('click', function() {
    playing=0;
    array_btn = [];
    startMessage.setAttribute("hidden", true);
    winMessage.setAttribute("hidden", true);
    document.getElementById('number').value = null;
    var div=document.getElementById("div");
    while (div.hasChildNodes()) {
      div.removeChild(div.childNodes[0]);
    }
  });
});
