let randoNum=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt') 
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess) || guess>100 || guess<1){
        alert('Please enter a valid number')
        userInput.value=''
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess)
            displayMsg(`Game Over. Random number was ${randoNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===randoNum){
        displayMsg(`You guessed it right!`)
        endGame()
    }
    else if(guess<randoNum){
        displayMsg(`Number is too low`)
    }
    else if(guess>randoNum){
        displayMsg(`Number is too high`)
    }
}
function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess} `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}
function displayMsg(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p)
    playGame=false
    newGame()
}
function newGame(){
    const newGameButton=document.querySelector('#newGame')
    if(newGameButton){
        newGameButton.addEventListener('click',function(e){
            randoNum=parseInt(Math.random()*100+1)
            prevGuess=[]
            numGuess=1
            guessSlot.innerHTML=''
            remaining.innerHTML=`${11-numGuess}`
            userInput.removeAttribute('disabled')
            startOver.removeChild(p)
            playGame=true;
        })
    }

}