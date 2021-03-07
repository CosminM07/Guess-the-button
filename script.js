var array_btn = []; 
let startMessage = document.getElementById('startMessage');
let winMessage = document.getElementById('winMessage');
let lostMessage = document.getElementById('lostMessage');
let playing =0;



let div = document.getElementById('div');


document.querySelector('.go').addEventListener('click', function playGame() {
  playing++;
  if(playing === 1){
  
  const guess = Number(document.querySelector('#number').value);
  
  startMessage.removeAttribute("hidden");
  function createButtons() {
  for(let i = 0; i<guess;i++){
  const button = document.createElement("button");
  button.innerHTML = "Button"+ i;
  button.id=i;
  div.appendChild(button);
  console.log(button);}}
 
  for (let i=0; i<guess;i++){
    array_btn[i]=i;
    console.log(array_btn[i]);}
    console.log('Length:' + (array_btn.length));
    const randomBtn = array_btn[Math.floor(Math.random() * array_btn.length)];
    console.log('teast',randomBtn,document.getElementById(parseInt(randomBtn)));
  
    createButtons();

  
  
  document.getElementById(parseInt(randomBtn)).addEventListener('click', function(){
     winMessage.removeAttribute("hidden");
     
  });
}

  document.querySelector('.playAgain').addEventListener('click', function() {
    playing=0;
    array_btn = [];
    console.log(array_btn);
    startMessage.setAttribute("hidden", true);
    winMessage.setAttribute("hidden", true);
    document.getElementById('number').value = null;
    var div=document.getElementById("div");
    while (div.hasChildNodes()) {
      div.removeChild(div.childNodes[0]);
    }
    
    
   
    
    console.log('play agian');
    
  });
});



