"use strict";

//get app elements
const id_score0 = document.querySelector("#score--0");
const id_score1 = document.getElementById("score--1");
const img_dice = document.querySelector(".dice");
const btnNewGame = document.querySelector("btn--new");
const btnRollDice = document.querySelector("btn--roll");
const btnHold = document.querySelector("btn--hold");

id_score0.textContent = 0;
id_score1.textContent = 0;
img_dice.classList.add("hidden");

//rolling the dice
