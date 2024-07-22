/*-------------------------------- Constants --------------------------------*/
// const correct = () => {green};
// const present = () => {yellow};
// const wrong = () => {grey}; 

const guess1s = document.getElementsByClassName("guess1");
const guess2s = document.getElementsByClassName("guess2");
const guess3s = document.getElementsByClassName("guess3");
const guess4s = document.getElementsByClassName("guess4");
const guess5s = document.getElementsByClassName("guess5");
const guess6s = document.getElementsByClassName("guess6");

const guessButton = document.getElementById("guess");
const userInput = document.getElementById('guessInput');

// /*-------------------------------- Variables --------------------------------*/
// let game = {
//     dailyWord;
//     userInput1;
//     userInput2;
//     userInput3;
//     userInput4;
//     userInput5;
//     userInput6;
// }

// const win =() => {};
// const lose = () => {};

let turnCount = 0;

/*------------------------ Cached Element References ------------------------*/
let dailyWord = ["h","o","r","s","e",]; //remember to change this to empty array
let userInput1 = [];
let userInput2 = [];
let userInput3 = [];
let userInput4 = [];
let userInput5 = [];
let userInput6 = [];

const renderUserInput = () => {
    for (i = 0; i < userInput1.length; i++) {
        guess1s[i].textContent = userInput1[i];
        if (userInput1[i] === dailyWord[i]) {
            guess1s[i].style.backgroundColor = 'green';
        } else if (dailyWord.includes(userInput1[i])) {
            guess1s[i].style.backgroundColor = 'yellow';
        }};
};


const renderUserInput1 = () => {
    for (i = 0; i < userInput2.length; i++) {
    guess2s[i].textContent = userInput2[i];
    if (userInput2[i] === dailyWord[i]) {
        guess2s[i].style.backgroundColor = 'green';
    } else if (dailyWord.includes(userInput2[i])) {
        guess2s[i].style.backgroundColor = 'yellow';
    }};
}

const renderUserInput2 = () => {
    for (i = 0; i < userInput3.length; i++) {
        guess3s[i].textContent = userInput3[i];
        if (userInput3[i] === dailyWord[i]) {
            guess3s[i].style.backgroundColor = 'green';
        } else if (dailyWord.includes(userInput3[i])) {
            guess3s[i].style.backgroundColor = 'yellow';
        }};
};


const renderUserInput3 = () => {
    for (i = 0; i < userInput4.length; i++) {
        guess4s[i].textContent = userInput4[i];
        if (userInput4[i] === dailyWord[i]) {
            guess4s[i].style.backgroundColor = 'green';
        } else if (dailyWord.includes(userInput4[i])) {
            guess4s[i].style.backgroundColor = 'yellow';
        }};
};

const renderUserInput4 = () => {
    for (i = 0; i < userInput5.length; i++) {
        guess5s[i].textContent = userInput5[i];
        if (userInput5[i] === dailyWord[i]) {
            guess5s[i].style.backgroundColor = 'green';
        } else if (dailyWord.includes(userInput5[i])) {
            guess5s[i].style.backgroundColor = 'yellow';
        }};
};

const renderUserInput5 = () => {
    for (i = 0; i < userInput6.length; i++) {
        guess6s[i].textContent = userInput6[i];
        if (userInput6[i] === dailyWord[i]) {
            guess6s[i].style.backgroundColor = 'green';
        } else if (dailyWord.includes(userInput6[i])) {
            guess6s[i].style.backgroundColor = 'yellow';
        }};
};
/*-------------------------------- Functions --------------------------------*/

// function stringToLetters (string) {
//     //separates the string into an array of letters.
// }

// function validate () {
//     if (userInput[1] = dailyWord[i]) {
//      correct();
//     };
// }

// document.getElementById('stringForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get the string from the input field
//     let userInput = document.getElementById('userInput').value;

//     // Store the string in a variable
//     let varString = userInput;

// let userInput = "horse";

//can explore using the 'userInput.split' method for this

//check turnvalue

const checkTurnValue = () => {
    if (turnCount === 0) 
    {pushUserInput();
    } else if (turnCount === 1) {
        pushUserInput1();
    } else if (turnCount === 2) {
        pushUserInput2();
    } else if (turnCount === 3) {
        pushUserInput3();
    } else if (turnCount === 4) {
        pushUserInput4();
    } else if (turnCount === 5) {
        pushUserInput5();
    } else {
        console.log("game");
    }
};

const pushUserInput = () => {
    const userInputValue = userInput.value;
    for (let i = 0; i < userInputValue.length; i++) {
    userInput1.push(userInputValue[i]); 
    };
    renderUserInput();
    userInput.value = '';
    turnCount += 1
    return turnCount;
};

const pushUserInput1 = () => {
    const userInputValue = userInput.value;
    for (let i = 0; i < userInputValue.length; i++) {
    userInput2.push(userInputValue[i]); 
    };
    renderUserInput1();
    userInput.value = '';
    turnCount += 1
    return turnCount;
};

const pushUserInput2 = () => {
    const userInputValue = userInput.value;
    for (let i = 0; i < userInputValue.length; i++) {
    userInput3.push(userInputValue[i]); 
    };
    renderUserInput2();
    userInput.value = '';
    turnCount += 1
    return turnCount;
};

const pushUserInput3 = () => {
    const userInputValue = userInput.value;
    for (let i = 0; i < userInputValue.length; i++) {
    userInput4.push(userInputValue[i]); 
    };
    renderUserInput3();
    userInput.value = '';
    turnCount += 1
    return turnCount;
};

const pushUserInput4 = () => {
    const userInputValue = userInput.value;
    for (let i = 0; i < userInputValue.length; i++) {
    userInput5.push(userInputValue[i]); 
    };
    renderUserInput4();
    userInput.value = '';
    turnCount += 1
    return turnCount;
};

const pushUserInput5 = () => {
    const userInputValue = userInput.value;
    for (let i = 0; i < userInputValue.length; i++) {
    userInput6.push(userInputValue[i]); 
    };
    renderUserInput5();
    userInput.value = '';
    turnCount += 1
    return turnCount;
};

// pushUserInput();
// console.log(userGuess);


/*----------------------------- Event Listeners -----------------------------*/
// const start = () => {
//     guessButton.addEventListener('click', pushUserInput());
// }

// start();

guessButton.addEventListener('click', () => {checkTurnValue()});

