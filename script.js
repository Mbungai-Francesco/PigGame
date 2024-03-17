'use strict';
var won = false
var player = document.querySelector('.player--active')
const p1 = document.querySelector('.player--0')
const p2 = document.querySelector('.player--1')
const newGame = document.querySelector('.btn--new')
const roll = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')
var playerScore = player.querySelector('p')
// const p2Score = p2.querySelector('p')
var playerCurrent = player.querySelector('.current-score')
// const p2Current = p2.querySelector('.current-score')
const dice = document.querySelector('.dice')

const rollDice = () =>{
  return Math.ceil(Math.random()*6)
}
roll.addEventListener('click', function (){
  if(!won){
    let val = rollDice()
    dice.setAttribute('src',`dice-${val}.png`)
    if(val == 1){
      playerCurrent.textContent = '0'
      switchPlayers()
    }
    else playerCurrent.textContent = Number(playerCurrent.textContent) + val 
  }
})

const switchPlayers = () =>{
  if(!won){
    playerScore.textContent = Number(playerCurrent.textContent) + Number(playerScore.textContent)
    playerCurrent.textContent = 0
    if(Number(playerScore.textContent) >= 100){
      won = true
      player.querySelector('h2').textContent = 'Winner!!'
      player.classList.add('player--winner')
    }
    else{
      p1.classList.toggle('player--active')
      p2.classList.toggle('player--active')
      player = document.querySelector('.player--active')
      playerScore = player.querySelector('p')
      playerCurrent = player.querySelector('.current-score')
    }
  }
}
hold.addEventListener('click', switchPlayers)

const restart = () =>{
  location.reload()
}
newGame.addEventListener('click', restart)