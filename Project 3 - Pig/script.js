'use strict';

//variables
let finalScore = 100;
let rand = 0; //{1, 6}
let turn = 0; //{0, 1}
let scoreSet = [0, 0];
let setScoreSet = [setScore0, setScore1];
let currentSet = [0, 0];
let setCurrentSet = [setCurrent0, setCurrent1];
let playerSet = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];
let dices = [
  'dice1.png',
  'dice2.png',
  'dice3.png',
  'dice4.png',
  'dice5.png',
  'dice6.png',
];

//buttons
const btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

//funtions
function setScore0(value) {
  scoreSet[0] = value;
  document.querySelector('#score--0').textContent = value;
}
function setScore1(value) {
  scoreSet[1] = value;
  document.querySelector('#score--1').textContent = value;
}

function setCurrent0(value) {
  currentSet[0] = value;
  document.querySelector('#current--0').textContent = value;
}
function setCurrent1(value) {
  currentSet[1] = value;
  document.querySelector('#current--1').textContent = value;
}

function changeTurn() {
  playerSet[turn].classList.remove('player--active');
  turn === 0 ? (turn = 1) : (turn = 0);
  playerSet[turn].classList.add('player--active');
}

function setGameOver(player) {
  playerSet[player].classList.add('player--winner');
  btnHold.removeEventListener('click', holding);
  btnRoll.removeEventListener('click', rolling);
}

function initialValues() {
  setScore0(0);
  setScore1(0);
  setCurrent0(0);
  setCurrent1(0);
  btnRoll.addEventListener('click', rolling);
  btnHold.addEventListener('click', holding);
  playerSet.forEach(el => el.classList.remove('player--winner'));

  if (turn === 1) changeTurn();
}

function rolling() {
  rand = Math.round(Math.random() * 5 + 1);
  document.images[0].src = dices[rand - 1];

  if (rand === 1) {
    setScoreSet[turn](0);
    changeTurn();
  } else {
    let sum = scoreSet[turn] + rand;
    setScoreSet[turn](sum);
  }
}

function holding() {
  let sum = scoreSet[turn] + currentSet[turn];

  setCurrentSet[turn](sum);
  setScoreSet[turn](0);

  if (currentSet[turn] > finalScore) {
    setGameOver(turn);
  } else changeTurn();
}

//main section
initialValues();

btnNew.addEventListener('click', initialValues);
btnRoll.addEventListener('click', rolling);
btnHold.addEventListener('click', holding);