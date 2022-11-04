"use strict";
const allBtns = document.querySelectorAll(".choose-opt");
const paperBtn = document.querySelector(".paper");
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const displayCompChoice = document.querySelector(".comp-choice");
let arr = ["rock", "paper", "scissors"];
//* FUNCTIONS
const elementFromHtml = html => {
	let template = document.createElement("template");

	template.innerHTML = html.trim();

	return template.content.firstElementChild;
};
// console random pc's choise
function computerChoice() {
	let random = Math.floor(Math.random() * arr.length);
	return arr[random];
}

// show on the page what pc chose(dynamic html)
let scissorsImg = elementFromHtml(`	<img
src="../assets/icons/scissors.png"/> class="comp-choice" `);

let paperImg = elementFromHtml(`	<img
src="../assets/icons/paper.png"/> class="comp-choice"`);

let rockImg = elementFromHtml(`	<img
src="../assets/icons/rock.png"/> class="comp-choice"`);

let smithsChoice = elementFromHtml(`<p>Smith's choice</p>`);
smithsChoice.classList.add("smithsChoice");

function showCompChoice(choice) {
	choice = computerChoice();
	if (choice === "scissors") {
		displayCompChoice.remove(paperImg);
		displayCompChoice.remove(rockImg);
		displayCompChoice.append(scissorsImg);
		scissorsImg.classList.add("comp-choice");
		displayCompChoice.before(smithsChoice);
	}
	if (choice === "paper") {
		displayCompChoice.remove(rockImg);
		displayCompChoice.remove(scissorsImg);
		displayCompChoice.append(paperImg);
		paperImg.classList.add("comp-choice");
		displayCompChoice.before(smithsChoice);
	}
	if (choice === "rock") {
		displayCompChoice.remove(paperImg);
		displayCompChoice.remove(scissorsImg);
		displayCompChoice.append(rockImg);
		rockImg.classList.add("comp-choice");
		displayCompChoice.before(smithsChoice);
	}
	return choice;
}
//* EVENT LISTENERS
// вывести, что выбрал челоек и что выбрал комп
let humanChoice;
rockBtn.addEventListener("click", () => {
	humanChoice = "rock";
});

paperBtn.addEventListener("click", () => {
	humanChoice = "paper";
});

scissorsBtn.addEventListener("click", () => {
	humanChoice = "scissors";
});
allBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		showCompChoice();
		console.log(humanChoice);
	});
});
// function addScore() {
// 	console.log(showCompChoice(), humanChoice);
// }
// addScore();
// add number to the score
// open modal window with info about results
