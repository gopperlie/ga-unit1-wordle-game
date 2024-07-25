/*-------------------------------- Constants --------------------------------*/

const guess1s = document.getElementsByClassName("guess1");
const guess2s = document.getElementsByClassName("guess2");
const guess3s = document.getElementsByClassName("guess3");
const guess4s = document.getElementsByClassName("guess4");
const guess5s = document.getElementsByClassName("guess5");
const guess6s = document.getElementsByClassName("guess6");

const guessButton = document.getElementById("guess");
const userInput = document.getElementById('guessInput');

const buttons = document.querySelectorAll('.keyboard-button');

const chosenWord = wordleList[Math.floor(Math.random() * wordleList.length)];
// const chosenWord = 'stone';

// /*-------------------------------- Variables --------------------------------*/
// const lose = () => {};

let turnCount = 0;

/*------------------------ Cached Element References ------------------------*/
let dailyWord = []; //remember to change this to empty array
let userInput1 = [];
let userInput2 = [];
let userInput3 = [];
let userInput4 = [];
let userInput5 = [];
let userInput6 = [];

// const renderUserInput = () => {
//     for (i = 0; i < userInput1.length; i++) {
//         guess1s[i].textContent = userInput1[i];
//         if (userInput1[i] === dailyWord[i]) {
//             guess1s[i].style.backgroundColor = 'rgb(127, 176, 105)';
//             userInput1[i] = ''; //this line does nothing
//         } else if (dailyWord.includes(userInput1[i])) {
//             guess1s[i].style.backgroundColor = 'yellow';
//         }};
// };

const renderUserInput = () => {
    const resultObj = doHighlights([...dailyWord], userInput1);
    for (i = 0; i < userInput1.length; i++) {
    guess1s[i].textContent = userInput1[i];
    guess1s[i].style.backgroundColor = resultObj[i].colour;}
};


const renderUserInput1 = () => {
    const resultObj = doHighlights([...dailyWord], userInput2);
    for (i = 0; i < userInput2.length; i++) {
    guess2s[i].textContent = userInput2[i];
    guess2s[i].style.backgroundColor = resultObj[i].colour;}
}

const renderUserInput2 = () => {
    const resultObj = doHighlights([...dailyWord], userInput3);
    for (i = 0; i < userInput3.length; i++) {
    guess3s[i].textContent = userInput3[i];
    guess3s[i].style.backgroundColor = resultObj[i].colour;}
};


const renderUserInput3 = () => {
    const resultObj = doHighlights([...dailyWord], userInput4);
    for (i = 0; i < userInput4.length; i++) {
    guess4s[i].textContent = userInput4[i];
    guess4s[i].style.backgroundColor = resultObj[i].colour;}
};

const renderUserInput4 = () => {
    const resultObj = doHighlights([...dailyWord], userInput5);
    for (i = 0; i < userInput5.length; i++) {
    guess5s[i].textContent = userInput5[i];
    guess5s[i].style.backgroundColor = resultObj[i].colour;}
};

const renderUserInput5 = () => {
    const resultObj = doHighlights([...dailyWord], userInput6);
    for (i = 0; i < userInput6.length; i++) {
    guess6s[i].textContent = userInput6[i];
    guess6s[i].style.backgroundColor = resultObj[i].colour;}
};
/*-------------------------------- Functions --------------------------------*/

//word0 is a string and the functions push each char of the string into an array(wordArray1).
const pushTheWord = (word0 , wordArray1) => {
    for (let i = 0; i < word0.length; i++) {
        wordArray1.push(word0[i]); 
        };
};

function doHighlights (dailyWordArray, guessWordArray) { //both parameters need to be arrays
    const guessWordObj = {}; //start with an empty object
    guessWordArray.forEach((element, index) => { //for each letter of the guess word, create a new key
        guessWordObj[index] = {['letter']: element, ['colour']: ''};
    });
    
    for (i = 0; i < 5; i++){ 
        if (dailyWordArray[i] === guessWordObj[i].letter) {
        guessWordObj[i].colour = 'rgb(127, 176, 105)';
        dailyWordArray[i] = '';}
        };

    for (i = 0; i < guessWordArray.length; i++) {
        for (j = 0; j < dailyWordArray.length; j++) {
            if (j === i) continue;
            else if (guessWordArray[j] === dailyWordArray[i] && guessWordObj[j].colour === '') {
                guessWordObj[j].colour = 'yellow';
                dailyWordArray[i] = '';
            };}};
    for (i = 0; i < guessWordArray.length; i++) {
        if (guessWordObj[i].colour === '') {
        guessWordObj[i].colour = 'rgb(80, 80, 80)';
        }};
        for (i = 0; i < guessWordArray.length; i++) {
            buttons.forEach((button) => {
                if (button.textContent.toLowerCase() === guessWordArray[i]) {
                    button.style.backgroundColor = guessWordObj[i].colour;
                }})};
return guessWordObj;
};

// function checkWin (guessArray) {
//     for (i = 0; i < guessArray.length; i++) {
//     if (guessArray[i].style.backgroundColor === 'green') {
//         userInput.value = 'you win';
// }}};

function checkWin(guessArray) {
    const userInput = document.getElementById('userInput');
    let allGreen = true; // set to true first, then run to make it untrue;

    for (let i = 0; i < guessArray.length; i++) {
        const computedStyle = window.getComputedStyle(guessArray[i]);
        if (computedStyle.backgroundColor !== 'rgb(127, 176, 105)') { // 'green' in RGB format
            allGreen = false;
            break; // Exit the loop if any element is not green
        }
    }
    if (allGreen) {
        return true;
    } };

//can explore using the 'userInput.split' method for this

// function colourKeyboard () {
//     buttons.forEach((button) => {
//         // Check if the button's text content is 'a'
//         if (button.textContent.toLowerCase() === 'a') {
//             // Change the background color of the button with text 'a'
//             button.style.backgroundColor = 'lightblue';
//         };})};
    
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
        userInput.value = chosenWord;
    }
};

const pushUserInput = () => {
    pushTheWord(chosenWord,dailyWord); //pushes the daily, correct word into the dailWord array
    const userInputValue = userInput.value; //gets the user's input and park it in userInputValue
    pushTheWord(userInputValue,userInput1); //pushes the user's input into an array(userInput1)
    renderUserInput(); //runs the main logic and determine style colour
    if (checkWin(guess1s) === true) { //checks whether user got the word right
        userInput.value = 'You Win!';
    } else {
    userInput.value = ''; //resets the textbox to empty
    turnCount += 1; //increases turn count
    // colourKeyboard ();
    return turnCount;
    };
};

const pushUserInput1 = () => {
    const userInputValue = userInput.value;
    pushTheWord(userInputValue,userInput2);
    renderUserInput1();
    if (checkWin(guess2s) === true) {
        userInput.value = 'You Win!';
    } else {
    userInput.value = '';
    turnCount += 1;
    return turnCount;
    };
};

const pushUserInput2 = () => {
    const userInputValue = userInput.value;
    pushTheWord(userInputValue,userInput3);
    renderUserInput2();
    if (checkWin(guess3s) === true) {
        userInput.value = 'You Win!';
    } else {
    userInput.value = '';
    turnCount += 1
    return turnCount;
    };
};

const pushUserInput3 = () => {
    const userInputValue = userInput.value;
    pushTheWord(userInputValue,userInput4);
    renderUserInput3();
    if (checkWin(guess4s) === true) {
        userInput.value = 'You Win!';
    } else {
    userInput.value = '';
    turnCount += 1;
    return turnCount;
    };
};

const pushUserInput4 = () => {
    const userInputValue = userInput.value;
    pushTheWord(userInputValue,userInput5);
    renderUserInput4();
    if (checkWin(guess5s) === true) {
        userInput.value = 'You Win!';
    } else {
    userInput.value = '';
    turnCount += 1;
    return turnCount;
    };
};

const pushUserInput5 = () => {
    const userInputValue = userInput.value;
    pushTheWord(userInputValue,userInput6);
    renderUserInput5();
    if (checkWin(guess6s) === true) {
        userInput.value = 'You Win!';
    } else {
    userInput.value = '';
    turnCount += 1;
    return turnCount;
    };
};

/*----------------------------- Event Listeners -----------------------------*/

// start();

guessButton.addEventListener('click', () => {checkTurnValue()});

