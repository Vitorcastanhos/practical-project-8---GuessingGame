// variables
let inputNumber = document.querySelector("#inputNumber");
let firstScreen = document.querySelector(".firstScreen");
let secondScreen = document.querySelector(".secondScreen");
let btn = document.querySelector("#btn");
let reset = document.querySelector("#reset");
let error = document.querySelector(".error");
let randomNumber;
// contador de tentativas.
let attempts = 1;

// events
btn.addEventListener("click", handleEmptyInput);
reset.addEventListener("click", handleReset);
document.addEventListener("keydown", clickEnter);

// functions
function handleEmptyInput(event) {
	event.preventDefault();
	if (inputNumber.value == "") {
		error.innerText = `Please, enter a number.`;
	} else if (inputNumber.value > 10) {
		error.innerHTML = `Only one number allowed.`;
	} else {
		error.classList.add("hide");
		handleClick();
	}
}

function handleClick() {
	// lógica para gerar número aleatório.
	randomNumber = Math.round(Math.random() * 10);
	console.log(randomNumber);

	if (Number(inputNumber.value) == randomNumber) {
		handleScreens();
		secondScreen.querySelector("h2").innerText = `You got it with ${attempts} attempts. Congrats!`;
	}
	inputNumber.value = "";
	attempts++;
}

function handleReset() {
	handleScreens();
	attempts = 1;
}

function handleScreens() {
	firstScreen.classList.toggle("hide");
	secondScreen.classList.toggle("hide");
}

function clickEnter(e) {
	if (e.key == "Enter" && firstScreen.classList.contains("hide")) {
		handleReset();
	}
}
