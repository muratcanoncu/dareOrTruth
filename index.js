"use strict";
let players = [
  "Murat Can",
  "Okan",
  "Furkan",
  "Melis",
  "Berna",
  "Dilara",
  "Ilke",
  "Asim(Kasim)",
  "Kemal",
  "Zeycan",
  "Emre",
  "Batikan",
  "Isil",
  "Aysegül",
  "Pinar",
  "Damla",
];

let truths = [
  "Have you ever sucked a dick?",
  "How many times have you had sex?",
  "Have you ever loved?",
  "What is your biggest fear?",
  "Who do not you like in this game?",
  "Have you ever fucked your teacher? ",
];
let dares = [
  "Masturbate",
  "Go out naked",
  "Drink 3 beer in 10 minute",
  "Smoke a joint with out break",
  "Ring neighbors bell only with boxer",
  "Shower with cold water",
  "Call police and ask how are you",
];

let twist = document.querySelector("#twist");
let who = document.querySelector("#who");
let whom = document.querySelector("#whom");
let gamer = document.querySelectorAll("span");

twist.addEventListener("click", function () {
  let index;
  for (let i = 0; i < 2; i++) {
    index = Math.floor(Math.random() * players.length);
    let player = players[index];
    gamer[i].innerHTML = player;
    gamer[i].style.textDecoration = "underline";
  }
});

let truthButton = document.querySelector("#truth");

let dareButton = document.querySelector("#dare");
let answer = document.querySelector("#answer");

truthButton.addEventListener("click", function () {
  let truthIndex = Math.floor(Math.random() * truths.length);
  let truthSelected = truths[truthIndex];
  answer.innerText = truthSelected;
  answer.style.cssText = `
  color:red;
  margin: 10px auto;
  font-weight:bold`;
});

dareButton.addEventListener("click", function () {
  let dareIndex = Math.floor(Math.random() * dares.length);
  let dareSelected = dares[dareIndex];
  answer.innerText = dareSelected;
  answer.style.cssText = `
  color:red;
  margin: 10px auto;
  font-weight:bold`;
});
