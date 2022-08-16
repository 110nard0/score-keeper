const scoreOne = document.querySelector('#one');
const scoreTwo = document.querySelector('#two');

const board = document.querySelector('form');
const buttonOne = document.querySelector('#playerOne');
const buttonTwo = document.querySelector('#playerTwo');
const buttonThree = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#highScore');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

buttonOne.addEventListener('click', () => {
	if (!isGameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			isGameOver = true;
		}
		scoreOne.textContent = p1Score;
	}
})

buttonTwo.addEventListener('click', () => {
	if (!isGameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			isGameOver = true;
		}
		scoreTwo.textContent = p2Score;
	}
})

winningScoreSelect.addEventListener('change', function () {
	winningScore = +(this.value);
	reset();
})

buttonThree.addEventListener('click', reset)

function reset() {
	isGameOver = false;
	p1Score = 0;
	p2Score = 0;
	scoreOne.textContent = 0;
	scoreTwo.textContent = 0;
}