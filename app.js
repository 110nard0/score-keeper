const player1 = {
	score: 0,
	display: document.querySelector('#one'),
	button: document.querySelector('#playerOne')
}

const player2 = {
	score: 0,
	display: document.querySelector('#two'),
	button: document.querySelector('#playerTwo')
}


const buttonThree = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#highScore');
let winningScore = 5;
let isGameOver = false;

player1.button.addEventListener('click', () => {
	updateScores(player1, player2)
})

player2.button.addEventListener('click', () => {
	updateScores(player2, player1)
})

winningScoreSelect.addEventListener('change', function () {
	winningScore = +(this.value);
	reset();
})

buttonThree.addEventListener('click', reset)

function updateScores(player, opponent) {
	if (!isGameOver) {
		player.score++;
		if (player.score === winningScore) {
			isGameOver = true;
			player.display.classList.add('text-success');
			opponent.display.classList.add('text-danger');
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		player.display.textContent = player.score;
	}
}

function reset() {
	isGameOver = false;
	for (let p of [player1, player2]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove('text-success', 'text-danger');
		p.button.disabled = false;
	}
}