function guessingGame() {
    return function guessNum(guess){
        let count = 0;
       //logic needs some work, but it it is done with closure.
        
        let targetNum = Math.floor(Math.random() * 99)
        console.log(guess, targetNum)
    
        if(guess === targetNum) return `You win! You found ${guess}!`
        if(guess < targetNum) return `${guess} is too low!`
        if(guess > targetNum) return `${guess} is too high!`
    }
}

const guessGame = guessingGame();

guessGame()

module.exports = { guessingGame };
