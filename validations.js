//DOM elements

const inputPassword = document.querySelector('#pass');
const inputLength = document.querySelector('#length');
const inputUpperLetters = document.querySelector('#upletters');
const inputLowerLetters = document.querySelector('#loletters');
const inputNumber = document.querySelector('#numbers');
const inputSymbols = document.querySelector('#symbols');
const buttonGenerate = document.querySelector('button').addEventListener('click', generatePassword);

//Functions

function generatePassword() {
    let password = '';
    if(checkboxNotEmpty()){
        while(password.length < inputLength.value) {
            if(inputUpperLetters.checked)
                password += addUpperLetter();
            if(inputLowerLetters.checked)
                password += addLowerLetter();
            if(inputNumber.checked)
                password += addNumber();
            if(inputSymbols.checked)
                password+= addSymbol();
        }
    }
    inputPassword.value = password;
}

function checkboxNotEmpty() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    let condition = false;
    for(let i = 0; i < checkboxes.length; i++) {
        condition = condition || checkboxes[i].checked
    }
    return condition;
}

function addUpperLetter() {
    const upperLetter = Math.floor(Math.random()*(90-65)+65);
    return String.fromCharCode(upperLetter);
}

function addLowerLetter() {
    const lowerLetter = Math.floor(Math.random()*(122-97)+97);
    return String.fromCharCode(lowerLetter);
}

function addNumber() {
    const number = Math.floor(Math.random()*(57-48)+48);
    return String.fromCharCode(number);
}

function addSymbol() {
    const symbol = Math.floor(Math.random()*(47-33)+33);
    return String.fromCharCode(symbol);
}