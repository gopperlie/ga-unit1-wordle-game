/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String to Array</title>
</head>
<body>
    <h1>Enter a comma-separated list of values</h1>
    <form id="stringForm">
        <input type="text" id="userInput" placeholder="Enter values separated by commas">
        <button type="submit">Submit</button>
    </form>
    <p id="result"></p>

    <script src="script.js"></script>
</body>
</html>

*/

document.getElementById('stringForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the string from the input field
    let userInput = document.getElementById('userInput').value;

    // Parse the string into an array
    let varArray = userInput.split(',').map(item => item.trim());

    // Display the result
    document.getElementById('result').textContent = `Array: ${JSON.stringify(varArray)}`;
});

/*Explanation:
HTML Form:

An input field where the user can enter a comma-separated string.
A submit button to trigger the form submission.
JavaScript:

Add an event listener to the form to handle the submit event.
Use event.preventDefault() to prevent the default form submission behavior.
Retrieve the value from the input field.
Split the string into an array using split(',') and trim any whitespace from each element using map(item => item.trim()).
Display the resulting array in a paragraph element with the id="result".
This setup will allow the user to input a comma-separated string, and upon submission, it will display the parsed array on the web page.
*/

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String to Variable</title>
</head>
<body>
    <h1>Enter a string</h1>
    <form id="stringForm">
        <input type="text" id="userInput" placeholder="Enter a string">
        <button type="submit">Submit</button>
    </form>
    <p id="result"></p>

    <script src="script.js"></script>
</body>
</html>
*/

// Add event listener to the form
document.getElementById('stringForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the string from the input field
    let userInput = document.getElementById('userInput').value;

    // Store the string in a variable
    let varString = userInput;

    // Display the result
    document.getElementById('result').textContent = `String: ${varString}`;
});

/* 
	1	JavaScript:
	◦	Add an event listener to the form to handle the submit event.
	◦	Use event.preventDefault() to prevent the default form submission behavior, which would cause the page to reload.
	◦	Retrieve the value from the input field using document.getElementById('userInput').value.
	◦	Store the retrieved string in a variable (varString).
	◦	Display the resulting string in the paragraph element with the id="result".
This setup will allow the user to input a string, and upon submission, it will display the entered string on the web page. The varString variable will hold the user's input for further processing if needed.
*/


document.getElementById('stringForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the string from the input field
    let userInput = document.getElementById('userInput').value;

    // Loop through the string and separate each character
    let separatedChars = [];
    for (let i = 0; i < userInput.length; i++) {
        separatedChars.push(userInput[i]);
    }

    // Display the separated characters
    document.getElementById('result').textContent = `Separated Characters: ${separatedChars.join(', ')}`;
});


/*
Summary:
Use innerHTML to insert HTML content.
Use textContent to insert plain text safely.
Use createElement and appendChild to create and append elements dynamically.
Iterate through arrays and dynamically create and append elements for more complex structures.
By using these methods, you can dynamically render and update content on your HTML page from JavaScript.
*/

const guessButton = document.getElementById("guess");
guessButton.addEventListener('click', console.log("xxx"));

guessButton.addEventListener('click', () => {console.log("xxx")});

/*============*/
    // Access the input element and the button
    const userInput = document.getElementById('userInput');
    const submitButton = document.getElementById('submitButton');
    const output = document.getElementById('output');

    // Add an event listener to the button
    submitButton.addEventListener('click', () => {
        // Retrieve the value from the input element
        const userInputValue = userInput.value;

        // Display the value in the <p> element
        output.textContent = `You entered: ${userInputValue}`;
    });

    /*==============*/

    document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('colorBox');
    const changeColorButton = document.getElementById('changeColorButton');

    changeColorButton.addEventListener('click', () => {
        colorBox.style.backgroundColor = 'lightgreen';
    });
});


/* ======== */

window.onload = function() {
    const myDiv = document.getElementById('myDiv');

    // Example condition
    const condition1 = true; // Change to your actual condition
    const condition2 = false; // Change to your actual condition

    if (condition1) {
        myDiv.style.backgroundColor = 'red';
    } else if (condition2) {
        myDiv.style.backgroundColor = 'blue';
    } else {
        myDiv.style.backgroundColor = 'green';
    }
};

for (let i = 0; i < userInputValue.length; i++) {
    userInput1.push(userInputValue[i]); 
    if (userInput[i] === dailyWord[i]) {

    }
    };

    Array.from();



const str = 'hello world';

for (let char of str) {
    if ('aeiou'.includes(char)) {
        console.log(`${char} is a vowel`);
    } else if (char.match(/[a-z]/i)) {
        console.log(`${char} is a consonant`);
    } else {
        console.log(`${char} is not a letter`);
    }
}