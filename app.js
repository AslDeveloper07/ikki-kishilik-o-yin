'use strict'
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const curren0El = document.getElementById('current--0')
const curren1El = document.getElementById('current--1')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')

score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

let score, currentScore, activePlayer, playing
const init = () => {
	score = [0, 0]
	currentScore = 0
	activePlayer = 0
	playing = true

	score0El.textContent = 0
	score1El.textContent = 0
	curren0El.textContent = 0
	curren1El.textContent = 0

	diceEl.classList.add('hidden')
	player0El.classList.remove('player--winner')
	player1El.classList.remove('player--winner')
	player0El.classList.add('player--active')
	player1El.classList.remove('player--active')
}
init()
const switchPlayer = () => {
	document.getElementById(`current--${activePlayer}`).textContent = 0
	currentScore = 0
	activePlayer = activePlayer === 0 ? 1 : 0
	player0El.classList.toggle('player--active')
	player1El.classList.toggle('player--active')
}

btnRoll.addEventListener('click', () => {
	if (playing) {
		const dice = Math.trunc(Math.random() * 6) + 1
		diceEl.classList.remove('hidden')
		diceEl.src = `dice-${dice}.png`


		if (dice !== 1) {
			currentScore += dice
			document.getElementById(`current--${activePlayer}`).textContent = currentScore
		} else {
			switchPlayer()
		}
	}
})


btnHold.addEventListener('click', () => {
	if (playing) {
		score[activePlayer] += currentScore
		document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

		if (score[activePlayer] >= 40) {
			playing = false
			diceEl.classList.add('hidden')
			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

		} else {
			switchPlayer()
		}

	}
})

btnNew.addEventListener('click', init)
