'use strict'


const secretNumber = Math.trunc(Math.random()*20) + 1;
var scoreNumber = 20;



document.querySelector('.check').addEventListener('click', function(e){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if(!guess) {
    document.querySelector('.message').textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🍕 Correct number';
  } else if(guess > secretNumber){
    scoreNumber--;
    document.querySelector('.message').textContent = 'Too high!';
  } else if(guess < secretNumber){
    scoreNumber--;
    document.querySelector('.message').textContent = 'Too low!';
  } else {
    document.querySelector('.message').textContent = 'Incorrect number';

  }
  document.querySelector(".score").textContent = scoreNumber;
  if(scoreNumber <= 0){
    document.querySelector(".message").textContent = 'You lose';
    
  }
  

})