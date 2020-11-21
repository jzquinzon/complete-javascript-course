'use strict';

let numDOM, checkBtn, againBtn, currScoreDOM, highScoreDOM, inputDOM, messageDOM;

numDOM = document.querySelector('.number');
checkBtn = document.querySelector('.btn.check');
againBtn = document.querySelector('.btn.again');
highScoreDOM = document.querySelector('.highscore');
currScoreDOM = document.querySelector('.score');
inputDOM = document.querySelector('.guess');
messageDOM = document.querySelector('.message');

let correctNum, currScore, highScore;

correctNum = Math.ceil(Math.random() * 20);
currScore = 20;
highScore = 0;


console.log(correctNum);

checkBtn.addEventListener('click', ()=>{takeAGuess()} );
againBtn.addEventListener('click', function(){playAgain()} );

const takeAGuess = () => {
    if ( inputDOM.value == "" ){
        messageDOM.textContent = "Enter a number between 1 and 20!";
        return;
    }
    let guess = parseInt(inputDOM.value);

    if( guess < 1 ||
        guess > 20 ){
        messageDOM.textContent = "Enter a number between 1 and 20!";
        return;
    }
    if( guess === correctNum ){
        //update highscore
        updateHighScore( currScore );
        //background green
        document.body.style.backgroundColor = '#60b347';
        //show corrNumber
        numDOM.textContent = correctNum;
    }
    else{
        //update currScore
        updateCurrScore();
        //update message
        hintMessage(guess);
    }
}

const playAgain = () => {
    //reset background;
    document.body.style.backgroundColor = '#222';
    //reset currScore
    currScore = 20;
    currScoreDOM.textContent = currScore;
    //reset input
    inputDOM.value = "";
    //rest numDOM
    numDOM.textContent = '?';
    //reset message
    messageDOM.textContent = "Start guessing";
    //new random number
    correctNum = Math.ceil(Math.random() * 20);
    console.log(correctNum);
}


const updateHighScore = ( score )=>{
    if( highScore < score ){
        highScoreDOM.textContent = score;
    }
}

const updateCurrScore= function(){
    currScore -= 1;
    currScoreDOM.textContent = currScore;
}

function hintMessage( guess ){
    if( guess < correctNum){
        messageDOM.textContent = "Too low!";
    }
    else{
        messageDOM.textContent = "Too high!"
    }
}