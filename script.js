let Do = document.getElementById("do");
let Re = document.getElementById("re");
let Mi = document.getElementById("mi");
let Fa = document.getElementById("fa");
let Sol = document.getElementById("sol");
let La = document.getElementById("la");
let Ti = document.getElementById("ti");
let Do1 = document.getElementById("do1");

let domElements = [Do, Re, Mi, Fa, Sol, La, Ti, Do1];

const audio1 = new Audio("music/do-80236.mp3");
const audio2 = new Audio("music/re-78500.mp3");
const audio3 = new Audio("music/mi-80239.mp3");
const audio4 = new Audio("music/fa-78409.mp3");
const audio5 = new Audio("music/sol-101774.mp3");
const audio6 = new Audio("music/la-80237.mp3");
const audio7 = new Audio("music/si-80238.mp3");
const audio8 = new Audio("music/do-80236.mp3");
// const audio8 = new Audio("cymbal-crash-7-167701.mp3");

let audioArr = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8];

domElements.forEach((key, index) => {
  key.addEventListener("mouseover", () => {
    audioArr[index].play();
  });
});
