const scoreOne = document.querySelector('#one');
const scoreTwo = document.querySelector('#two');

const board = document.querySelector('form');
const buttonOne = document.querySelector('#playerOne');
const buttonTwo = document.querySelector('#playerTwo');
const buttonThree = document.querySelector('#reset');



// add click event to player 1 score
let newScoreOne = 0;
buttonOne.addEventListener('click', () => {
	newScoreOne++;
	scoreOne.innerText = newScoreOne;
})

// add click event to player 2 score
let newScoreTwo = 0;
buttonTwo.addEventListener('click', () => {
	newScoreTwo++;
	scoreTwo.innerText = newScoreTwo;
})

// add select event  buttons on maxScore
const highScore = board.elements.highScore;
const highestScore = hghScore.value;

highScore.addEventListener('change', (e) => {
	highestScore = e.target.value
})


if (scoreOne.innerText === highestScore) {
	scoreOne.classList.add('text-success');
	scoreTwo.classList.add('text-danger');
	disableButton();
} else if (scoreTwo.innerText === highestScore) {
	scoreTwo.classList.add('text-success');
	scoreOne.classList.add('text-danger');
	disableButton();
}



// add click event to reset button
buttonThree.addEventListener('click', () => {
	scoreOne.innerText = 0;
	scoreOne.classList.add('text-dark');
	buttonOne.classList.remove('disabled');

	scoreTwo.innerText = 0;
	scoreTwo.classList.add('text-dark');
	buttonTwo.classList.remove('disabled');

	highScore.value = 5;
})



function disableButton() {
	buttonOne.classList.add('disabled');
	buttonTwo.classList.add('disabled');
}