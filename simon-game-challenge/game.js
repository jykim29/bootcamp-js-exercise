let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let randomChosenColor = '';
let level = 0;
let startFlag = 0;

  $(document).keydown(function() {
    if(startFlag == 0) {
      $('h1').text(`Level 0`);
      nextSequence();
    }
    startFlag = 1;
  });

$('.btn').on('click', function() {
  let userChosenColor = $(this).attr('id');
  playSound(userChosenColor);
  animatedPress(userChosenColor);
  userClickedPattern.push(userChosenColor);
  checkAnswer();
});

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  userClickedPattern = [];
  level += 1;
  $('h1').text(`Level ${level}`);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  playSound(randomChosenColor);
  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
}

function playSound(color) {
  let audio = new Audio(`./sounds/${color}.mp3`);
  audio.play();
}

function animatedPress(currentColor) {
  $(`#${currentColor}`).toggleClass('pressed');
  setTimeout(() => $(`#${currentColor}`).toggleClass('pressed'), 100);
}

function checkAnswer(currentLevel) {
  let userIndex = userClickedPattern.length - 1;
  let gameIndex = gamePattern.length - 1;
  if (userClickedPattern[userIndex] == gamePattern[userIndex]) {
    if(userIndex == gameIndex) {
      setTimeout(nextSequence, 500);
    }
  }
  else if(userClickedPattern[userIndex] !== gamePattern[userIndex]) {
    gameOver();
  }
}

function gameOver() {
  playSound('wrong');
  $('body').toggleClass('game-over');
  setTimeout(() => $('body').toggleClass('game-over'), 200);
  $('h1').text('Game Over, Press Any Key to Restart');
  startOver();
}

function startOver() {  
  level = 0;
  startFlag = 0;
  userClickedPattern = [];
  gamePattern = []
}