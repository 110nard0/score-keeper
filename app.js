const scoreOne = document.querySelector('#one');
const scoreTwo = document.querySelector('#two');

const board = document.querySelector('form');
const buttonOne = document.querySelector('#playerOne');
const buttonTwo = document.querySelector('#playerTwo');
const buttonThree = document.querySelector('#reset');


// add event to select input to set highest possible score
const highScore = board.elements.highScore;
let highestScore = 5;

highScore.addEventListener('change', (e) => {
	highestScore = +(e.target.value);
	reset();
})

// add click event to player 1 score
let newScoreOne = 0;
buttonOne.addEventListener('click', () => {
	newScoreOne++;
	scoreOne.innerText = newScoreOne;

	if (newScoreOne === highestScore) {
		scoreOne.classList.add('text-success');
		scoreTwo.classList.add('text-danger');
		disableButton();
	}
})

// add click event to player 2 score
let newScoreTwo = 0;
buttonTwo.addEventListener('click', () => {
	newScoreTwo++;
	scoreTwo.innerText = newScoreTwo;

	if (newScoreTwo === highestScore) {
		scoreTwo.classList.add('text-success');
		scoreOne.classList.add('text-danger');
		disableButton();
	}
})


// add click event to reset button
buttonThree.addEventListener('click', reset)


function disableButton() {
	buttonOne.classList.add('disabled');
	buttonTwo.classList.add('disabled');
}

function reset() {
	newScoreOne = 0;
	scoreOne.innerText = 0;
	scoreOne.classList.remove('text-success', 'text-danger');
	buttonOne.classList.remove('disabled');

	newScoreTwo = 0;
	scoreTwo.innerText = 0;
	scoreTwo.classList.remove('text-success', 'text-danger');
	buttonTwo.classList.remove('disabled');
}
