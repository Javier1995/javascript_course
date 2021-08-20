'use strict'


var secretNumber = Math.trunc(Math.random()*20) + 1;
var scoreNumber = 20;
var highScoreValue = 0;
const checkButton = document.querySelector('.check');

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function(number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function(score) {
  document.querySelector('.score').textContent = score;
};





document.querySelector('.check').addEventListener('click', function(e){
  const guess = Number(document.querySelector('.guess').value);

  if(!guess) {

    displayMessage('⛔ No number');

  } else if (guess === secretNumber) {
    document.querySelector('body').classList.add('win');
    displayNumber( secretNumber );
    displayMessage('🍕 Correct number');
    checkButton.disabled = true;
    checkButton.classList.add('disabled');
    /*  */
    if(highScoreValue < scoreNumber ){
    
      highScoreValue = scoreNumber;
      document.querySelector('.highscore').textContent = highScoreValue;
      
      return highScoreValue;
  
    } else {
  
      return highScoreValue;
  
    }


  } else if(guess > secretNumber){

    scoreNumber--;
    displayMessage('Too high!');

  } else if(guess < secretNumber){

    scoreNumber--;
    displayMessage('Too low!');

  } else {

    displayMessage('Incorrect number');

  }
  displayScore(scoreNumber);
  if(scoreNumber <= 0){
    displayMessage('😆 You lose');
    displayScore( 0 );
  }
});

document.querySelector('.again').addEventListener('click', function(){
  secretNumber = Math.trunc(Math.random()*20) + 1;
  scoreNumber = 20;
  document.querySelector('body').classList.remove('win');
  displayMessage('Start guessing...');
  displayScore( scoreNumber );
  checkButton.removeAttribute('disabled');
  document.querySelector('.guess').value = '';
  displayNumber('?');
});