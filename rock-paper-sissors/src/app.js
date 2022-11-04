"use strict";
const allBtns = document.querySelectorAll(".choose-opt");
const mainContainer = document.querySelector(".main");
const paperBtn = document.querySelector(".paper");
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const displayCompChoice = document.querySelector(".comp-choice");
const scoreComp = document.querySelector(".score__comp");
const scorePlayer = document.querySelector(".score__player");
let arr = ["rock", "paper", "scissors"];
//* FUNCTIONS
const elementFromHtml = html => {
	let template = document.createElement("template");

	template.innerHTML = html.trim();

	return template.content.firstElementChild;
};
// console random pc's choise
function randomizer() {
	let random = Math.floor(Math.random() * arr.length);
	return arr[random];
}
let compChoice;
// show on the page what pc chose(dynamic html)
let scissorsImg = elementFromHtml(`	<img
src="../assets/icons/scissors.png"/> " `);

let paperImg = elementFromHtml(`	<img
src="../assets/icons/paper.png"/>"`);

let rockImg = elementFromHtml(`	<img
src="../assets/icons/rock.png"/> "`);

let smithsChoice = elementFromHtml(`<p>Smith's choice</p>`);
smithsChoice.classList.add("smithsChoice");
function showCompChoice() {
	compChoice = randomizer();
	if (compChoice === "scissors") {
		rockImg.style.display = "none";
		paperImg.style.display = "none";
		scissorsImg.style.display = "block";
		displayCompChoice.append(scissorsImg);
		scissorsImg.classList.add("comp-choice");
	}
	if (compChoice === "paper") {
		rockImg.style.display = "none";
		scissorsImg.style.display = "none";
		paperImg.style.display = "block";
		displayCompChoice.append(paperImg);
		paperImg.classList.add("comp-choice");
	}
	if (compChoice === "rock") {
		scissorsImg.style.display = "none";
		paperImg.style.display = "none";
		rockImg.style.display = "block";
		displayCompChoice.append(rockImg);
		rockImg.classList.add("comp-choice");
	}
	return compChoice;
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
		if (humanChoice === "paper" && compChoice === "scissors") {
			scoreComp.textContent++;
		}
		if (humanChoice === "paper" && compChoice === "rock") {
			scorePlayer.textContent++;
		}
		if (humanChoice === "rock" && compChoice === "scissors") {
			scorePlayer.textContent++;
		}
		if (humanChoice === "rock" && compChoice === "paper") {
			scoreComp.textContent++;
		}
		if (humanChoice === "scissors" && compChoice === "paper") {
			scorePlayer.textContent++;
		}
		if (humanChoice === "scissors" && compChoice === "rock") {
			scoreComp.textContent++;
		}

		if (scoreComp.textContent === "5") {
			alert("Comp wins!");
			location.reload();
		}
		if (scorePlayer.textContent === "5") {
			alert("Player wins!");
			location.reload();
		}
	});
});
//TODO modal window with results
//TODO add animation
//TODO refactor JS
