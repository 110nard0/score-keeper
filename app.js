const scoreOne = document.querySelector('#one');
const scoreTwo = document.querySelector('#two');

const buttonOne = document.querySelector('#playerOne')
const buttonTwo = document.querySelector('#playerTwo')
const buttonThree = document.querySelector('#reset')

let newScoreOne = 0;
let newScoreTwo = 0;


//select highest possible score playable 
// const highScore = ;

//add click event to player 1 score
buttonOne.addEventListener('click', () => {
	newScoreOne++;
	scoreOne.innerText = newScoreOne;
})

//add click event to player 2 score
buttonTwo.addEventListener('click', () => {
	newScoreTwo++;
	scoreTwo.innerText = newScoreTwo;
})

//add click event to reset button
buttonThree.addEventListener('click', () => {
	buttonOne.classList.add('disabled');
	buttonTwo.classList.add('disabled');
})