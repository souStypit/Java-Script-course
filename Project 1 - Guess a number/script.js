'use strict';

// document.querySelector('.guess-message').textContent;

// document.querySelector('.guess-message').textContent = 'Правильно!';

// document.querySelector('.question').textContent = 7;

// document.querySelector('.score').textContent = 11;

// document.querySelector('.number-input').value = 13;

let rand = Math.round(Math.random() * 19 + 1);
let score = 20;
let notGuessed = true;
let endGame = false;

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.question').textContent = '???';
  document.querySelector('.guess-message').textContent = 'Начни угадывать';
  document.querySelector('body').style.backgroundColor = '#000';

  if(endGame) score = 20;
  rand = Math.round(Math.random() * 20 + 1);
  notGuessed = true;
});

document.querySelector('.check').addEventListener('click', () => {
  //input
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(rand);

  //if number wasn't entered
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
    return;
  }

  //input section
  if (guessingNumber === rand) {
    document.querySelector('.guess-message').textContent = 'Угадал!';
    document.querySelector('.question').textContent = rand;
    document.querySelector('body').style.backgroundColor = '#217e24';

    if (notGuessed) score += 5;
    document.querySelector('.score').textContent = score;
    notGuessed = false;
    return;
  }

  if (score > 1) {
    //input > rand
    if (guessingNumber > rand) {
      document.querySelector('.guess-message').textContent = 'Меньше!';
      document.querySelector('.score').textContent = --score;
    }
    //input < rand
    else {
      document.querySelector('.guess-message').textContent = 'Больше!';
      document.querySelector('.score').textContent = --score;
    }

    document.querySelector('body').style.backgroundColor = '#e89c32';
    return;
  }

  //if score = 0
  document.querySelector('.guess-message').textContent = 'Конец игры';
  document.querySelector('.score').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#c53b3b';
  endGame = true;
  return;
});
