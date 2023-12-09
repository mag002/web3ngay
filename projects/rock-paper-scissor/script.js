"use strict";

//hope you won'nt find any mistakes in this code
const imageSrcs = {
  "assets/paper.svg": "paper",
  "assets/rock.svg": "rock",
  "assets/scissors.svg": "scissors",
};
const resetButton = document.getElementById("reset");
resetButton.style.display = "none";
const image = document.getElementById("opponent_image");
const buttons = document.getElementsByClassName("buttons");
Array.from(buttons).forEach((v) => v.addEventListener("click", finish));
const message = document.getElementById("message");
const container = document.getElementById("first-container");
let pastRandom;
function randomer() {
  //for avoiding duplication in random:
  image.src =
    Object.keys(imageSrcs)[
      Math.floor(Math.random() * Object.keys(imageSrcs).length)
    ];

  //for rotating opponent_image 180deg (and 90deg for the hand-scissor)

  //to check if everything is working fine:
  //onsole.log(pastRandom==image.src);

  pastRandom = image.src;
}
let Interval;
function restart() {
  Array.from(buttons).forEach((v) => (v.disabled = false));
  Interval = setInterval(randomer, 100);

  message.innerText = "";
  message.style.transition = "none";
  message.style.fontSize = "0em";
  resetButton.style.display = "none";
  container.style.backgroundColor = "#2c2d2e";
}
restart();
resetButton.onclick = restart;

let winnerKey = {
  paper: "rock",
  rock: "scissors",
  scissors: "paper",
};

function finish() {
  clearInterval(Interval);
  Array.from(buttons).forEach((v) => (v.disabled = true));
  const you = this.dataset.value;
  const opponent = imageSrcs[image.src];

  if (winnerKey[you] === opponent && you != opponent) {
    message.innerText = "you won";
    message.style.color = "rgb(74, 146, 228)";
    resetButton.style.color = "rgb(250, 250, 250)";
  } else if (you == opponent) {
    message.innerText = "draw";
    message.style.color = "rgb(255, 232, 128)";
    resetButton.style.color = "rgb(78, 78, 78)";
  } else {
    message.innerText = "you lost";
    message.style.color = "rgb(228, 74, 74)";
    resetButton.style.color = "rgb(250, 250, 250)";
  }
  resetButton.style.display = "block";
  message.style.fontSize = "3em";
  message.style.transition = "font-size 700ms ease-in-out";
  resetButton.style.backgroundColor = message.style.color;
  container.style.backgroundColor = message.style.color;
}
