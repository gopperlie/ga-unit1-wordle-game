/*-------------------------------- Constants --------------------------------*/
// const correct = () => {green};
// const present = () => {yellow};
// const wrong = () => {grey}; 

const userGuess11 = document.getElementById("guess11");
const userGuess12 = document.getElementById("guess12");
const userGuess13 = document.getElementById("guess13");
const userGuess14 = document.getElementById("guess14");
const userGuess15 = document.getElementById("guess15");

// const userGuess21 = document.getElementById("guess21");
// const userGuess22 = document.getElementById("guess22");
// const userGuess23 = document.getElementById("guess23");
// const userGuess24 = document.getElementById("guess24");
// const userGuess25 = document.getElementById("guess25");

const guess2s = document.getElementsByClassName("guess2");


const userGuess31 = document.getElementById("guess31");
const userGuess32 = document.getElementById("guess32");
const userGuess33 = document.getElementById("guess33");
const userGuess34 = document.getElementById("guess34");
const userGuess35 = document.getElementById("guess35");

const userGuess41 = document.getElementById("guess41");
const userGuess42 = document.getElementById("guess42");
const userGuess43 = document.getElementById("guess43");
const userGuess44 = document.getElementById("guess44");
const userGuess45 = document.getElementById("guess45");

const userGuess51 = document.getElementById("guess51");
const userGuess52 = document.getElementById("guess52");
const userGuess53 = document.getElementById("guess53");
const userGuess54 = document.getElementById("guess54");
const userGuess55 = document.getElementById("guess55");

const userGuess61 = document.getElementById("guess61");
const userGuess62 = document.getElementById("guess62");
const userGuess63 = document.getElementById("guess63");
const userGuess64 = document.getElementById("guess64");
const userGuess65 = document.getElementById("guess65");

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
    userGuess11.textContent = userInput1[0];
    if (userInput1[0] === dailyWord[0]) {
        userGuess11.style.backgroundColor = 'green';}
    userGuess12.textContent = userInput1[1];
    if (userInput1[1] === dailyWord[1]) {
        userGuess12.style.backgroundColor = 'green';}
    userGuess13.textContent = userInput1[2];
    userGuess14.textContent = userInput1[3];
    userGuess15.textContent = userInput1[4];
};

// const renderUserInput1 = () => {
//     userGuess21.textContent = userInput2[0];
//     userGuess22.textContent = userInput2[1];
//     userGuess23.textContent = userInput2[2];
//     userGuess24.textContent = userInput2[3];
//     userGuess25.textContent = userInput2[4];
// };

const renderUserInput1 = () => {
    for (i = 0; i < guess2s.length; i++) {
    guess2s[i].textContent = userInput2[i];
    if (userInput2[i] === dailyWord[i]) {
        guess2s[i].style.backgroundColor = 'green';
    } else if (userIinput2[i] === dailyWord)
    };
}

const renderUserInput2 = () => {
    userGuess31.textContent = userInput3[0];
    userGuess32.textContent = userInput3[1];
    userGuess33.textContent = userInput3[2];
    userGuess34.textContent = userInput3[3];
    userGuess35.textContent = userInput3[4];
};


const renderUserInput3 = () => {
    userGuess41.textContent = userInput4[0];
    userGuess42.textContent = userInput4[1];
    userGuess43.textContent = userInput4[2];
    userGuess44.textContent = userInput4[3];
    userGuess45.textContent = userInput4[4];
};

const renderUserInput4 = () => {
    userGuess51.textContent = userInput5[0];
    userGuess52.textContent = userInput5[1];
    userGuess53.textContent = userInput5[2];
    userGuess54.textContent = userInput5[3];
    userGuess55.textContent = userInput5[4];
};

const renderUserInput5 = () => {
    userGuess61.textContent = userInput6[0];
    userGuess62.textContent = userInput6[1];
    userGuess63.textContent = userInput6[2];
    userGuess64.textContent = userInput6[3];
    userGuess65.textContent = userInput6[4];
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

