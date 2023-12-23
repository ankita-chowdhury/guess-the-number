let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSolt = document.querySelector('.prevGuesses');
const remaining = document.querySelector('.remainingGuess');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numOfGuess = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
       const guess = parseInt(userInput.value)
       console.log(guess)
       validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a number more than 1')
    }
    else if(guess > 100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numOfGuess === 11){
            cleanupGuess(guess)
            displayMsg(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            cleanupGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
   if(guess === randomNumber){
    displayMsg(`You guessed it right`);
   }
   else if(guess < randomNumber){
    displayMsg(`Number is too low`)
   }
   else if(guess > randomNumber){
    displayMsg(`Number is too high`)
   }
}

function cleanupGuess(guess){
    userInput.value = ''
    guessSolt.innerHTML += `${guess}, `
    numOfGuess++;
    remaining.innerHTML = `${11 - numOfGuess}`
}

function displayMsg(msg){
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numOfGuess = 1
        guessSolt.innerHTML = ''
        remaining.innerHTML = `${11 - numOfGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

