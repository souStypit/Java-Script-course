'use strict';

let rand = Math.round(Math.random() * 19 + 1);
let hs = document.querySelector('.highscore').textContent;
let score = 20;
let notGuessed = true;
let finish = false;

const setGuessMessage = (text) => document.querySelector('.guess-message').textContent = text;
const setScore= (value) => document.querySelector('.score').textContent = value;
const setQuest = (text) => document.querySelector('.question').textContent = text;

const setBodyStyle = () => document.querySelector('body').style;
const setQuestStyle = () => document.querySelector('.question').style;

//BUTTON Again
document.querySelector('.again').addEventListener('click', () => {
  //start values
  setQuest('???');
  setGuessMessage('Начни угадывать');
  setBodyStyle().backgroundColor = '#000';
  setQuestStyle().width = '25rem';

  //restart game and score
  if (finish) {
    score = 20;
    setScore(score);
    finish = false;
  }

  rand = Math.round(Math.random() * 20 + 1);
  notGuessed = true;

  //change highscore
  if (score > hs) {
    hs = score;
    document.querySelector('.highscore').textContent = hs;
  }
});

//BUTTON Checking
document.querySelector('.check').addEventListener('click', () => {
  //input
  const guessingNumber = Number(document.querySelector('.number-input').value);

  //if number wasn't entered
  if (!guessingNumber) {
    setGuessMessage('Введите число!');
    return;
  }

  //************input section************
  if (guessingNumber === rand) {
    setGuessMessage('Угадал!');
    setQuest(rand);
    setBodyStyle().backgroundColor = '#217e24';
    setQuestStyle().width = '50rem';

    if (notGuessed) score += 5;
    setScore(score);
    notGuessed = false;
    return;
  }

  //input !== rand
  if (score > 1) {
    if (guessingNumber !== rand)
      setGuessMessage(guessingNumber > rand ? 'Меньше!' : 'Больше!');

    setScore(--score);
    setBodyStyle().backgroundColor = '#e89c32';
    return;
  }

  //if score = 0
  setGuessMessage('Конец игры');
  setScore(0);
  setBodyStyle().backgroundColor = '#c53b3b';
  finish = true;
  console.log(finish);
  return;
  
  //************end input section************
});
