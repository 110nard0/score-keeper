const scoreOne = document.querySelector('#one');
const scoreTwo = document.querySelector('#two');

const board = document.querySelector('form');
const buttonOne = document.querySelector('#playerOne');
const buttonTwo = document.querySelector('#playerTwo');
const buttonThree = document.querySelector('#reset');


// add event to select input to set highest possible score
const highScore = board.elements.highScore;
let highestScore;

highScore.addEventListener('change', (e) => {
	highestScore = e.target.value;
	console.log(e.target.value);
})

// add click event to player 1 score
let newScoreOne = 0;
buttonOne.addEventListener('click', () => {
	newScoreOne++;
	scoreOne.innerText = newScoreOne;

	if (scoreOne.innerText === highestScore) {
		console.log('i')
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

	if (scoreTwo.innerText === highestScore) {
		scoreTwo.classList.add('text-success');
		scoreOne.classList.add('text-danger');
		disableButton();
	}
})

// add click event to reset button
buttonThree.addEventListener('click', () => {
	scoreOne.innerText = 0;
	scoreOne.classList.add('text-dark');
	buttonOne.classList.remove('disabled');
	newScoreOne = 0;

	scoreTwo.innerText = 0;
	scoreTwo.classList.add('text-dark');
	buttonTwo.classList.remove('disabled');
	newScoreTwo = 0;

	highScore.value = 5;
})



function disableButton() {
	buttonOne.classList.add('disabled');
	buttonTwo.classList.add('disabled');
}


let player = [
	playerOne: {
		button: buttonOne,
		score: scoreOne,
	},

	playerTwo: {
		button: buttonTwo,
		score: scoreTwo,
	}
]