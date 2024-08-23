"use strict";

let message = document.querySelector(".message");
const btnCheck = document.querySelector(".check");
let secretNumber = Math.trunc(Math.random() * 21);
let scoreDom = document.querySelector(".score");
let number = document.querySelector(".number");
let score = 20; // state variable
let bodySel = document.querySelector("body");
const btnPlayAgain = document.querySelector(".again");
let guessNumber = document.querySelector(".guess");
let highScore = 0;
let scoreSelector = document.querySelector(".highscore");

btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(secretNumber);
  //when theres no input
  if (!guess) {
    message.textContent = "no number"; //when the guess button is clicked it changes the message text content to no number if guess is a falsy value

    //when player wins
  } else if (guess === secretNumber) {
    message.textContent = "you got it!";
    bodySel.style.backgroundColor = "green";
    number.style.width = "30rem";
    number.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      scoreSelector.textContent = highScore;
    }

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      //if we did not lose yet then keep playing
      message.textContent = "lower!";
      score--; //goes 1 score down. from 20 to 19 for example
      scoreDom.textContent = score; //our score gets updated in the dom.
    } else {
      //if we did lose, well, youve lost the game! scoredom.textcontent = 0 is just to get it to stay at 0
      message.textContent = "youve lost the game!";
      scoreDom.textContent = "0";
    }
    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      //if we did not lose yet then keep playing
      message.textContent = "higher!";
      score--; //goes 1 score down. from 20 to 19 for example
      scoreDom.textContent = score; //our score gets updated in the dom.
    } else {
      //if we did lose, well, youve lost the game! scoredom.textcontent = 0 is just to get it to stay at 0
      message.textContent = "youve lost the game!";
      scoreDom.textContent = "0";
    }
  }
});

btnPlayAgain.addEventListener("click", function () {
  scoreDom.textContent = "20";
  secretNumber = Math.trunc(Math.random() * 21);
  score = 20;
  message.textContent = "Start guessing...";
  number.textContent = "?";
  scoreDom.textContent = score;
  guessNumber.value = "";
  bodySel.style.backgroundColor = "#222";
  number.style.width = "15rem";
});
