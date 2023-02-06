const form = document.querySelector('#formPost');
const name_Input = document.querySelector('#nomInput');
const firstname_Input = document.querySelector('#prenomInput');
const year_Input = document.querySelector('#anneeInput');
const password_Input = document.querySelector('#mdpInput');
const username_Input = document.querySelector('#identifiantInput');
const NaName = document.querySelector('#NaName');
const NaSname = document.querySelector('#NaSname');
const NaBDay = document.querySelector('#NaBD');
const NaUN = document.querySelector('#NaUN');
const NaPass = document.querySelector('#NaP');
const NaA = document.querySelector('#NaA');

form.addEventListener('submit', (e) => {
    checkInputs();
    if (checkInputs() === false) {
        e.preventDefault();
    }
});

function checkInputs() {
    //check if inputs are empty or not what they should be
    const nameValue = name_Input.value.trim();
    const firstnameValue = firstname_Input.value.trim();
    const yearValue = year_Input.value.trim();
    const passwordValue = password_Input.value.trim();
    const usernameValue = username_Input.value.trim();

    if (checkIfTextInputIsOnlyText(nameValue) === false) {
        NaName.style.display = 'block';
        nameIsValid = false;
    } else {
        NaName.style.display = 'none';
        nameIsValid = true;
    }

    if (checkIfTextInputIsOnlyText(firstnameValue) === false) {
        NaSName.style.display = 'block';
        snameIsValid = false;
    } else {
        NaSName.style.display = 'none';
        snameIsValid = true;
    }

    if (checkIfTextInputIsOnlyText(usernameValue) === false) {
        NaUN.style.display = 'block';
        usernameIsValid = false;
    } else {
        NaUN.style.display = 'none';
        usernameIsValid = true;
    }

    if (checkIfPasswordIsValid(passwordValue) === false) {
        NaPass.style.display = 'block';
        passwordIsValid = false;
    } else {
        NaPass.style.display = 'none';
        passwordIsValid = true;
    }

    if (nameIsValid === false || snameIsValid === false || usernameIsValid === false || passwordIsValid === false) {
        return false;
    } else {
        return true;
    }
}

function checkIfTextInputIsOnlyText(input) {
    const onlyTextRegEx = /^[a-zA-Z\s]+$/;
    return onlyTextRegEx.test(input);
}

function checkIfPasswordIsValid(password) {
    // Define a regex pattern for password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/;

    // Return the result of testing the password against the regex pattern
    return passwordRegex.test(password);
}