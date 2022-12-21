var displayEl = document.getElementById("display");
var keysEls = document.getElementsByTagName("li");
var keysCount = keysEls.length;
var operator;
displayEl.innerHTML = "";
var num1, num2;
var answer;
var equation_firstPrt;
var equation_allPrt;
var clearAfterEqual = false;
var percent_on = false;

function calc_equal() {
    equation_allPrt = displayEl.innerHTML;
    num2 = parseFloat(displayEl.innerHTML.substring(equation_firstPrt.length, equation_allPrt.length)); //extract the string for num2 from the entire display and change it to a number. Take away the first part from the entire part of the equation string.
    if (operator === "+") {
        if (!percent_on) {
            add();
        } else {
            addPercent();
        }
        displayEl.innerHTML = answer;
        percent_on = false;
    }
    if (operator === "-") {
        if (!percent_on) {
            subtract();
        } else {
            subtractPercent();
        }
        displayEl.innerHTML = answer;
        percent_on = false;
    }
    if (operator === "×") {
        if (!percent_on) {
            multiply();
        } else {
            multiplyPercent();
        }
        displayEl.innerHTML = answer;
        percent_on = false;
    }
    if (operator === "÷") {
        if (!percent_on) {
            divide();
        } else {
            dividePercent();
        }
        displayEl.innerHTML = answer;
        percent_on = false;
    }

}

//function to add
function add() {
    answer = parseFloat(num1 + num2);
    answer = Math.floor(answer * 10000000000) / 10000000000;
}

//function to subtract
function subtract() {
    answer = parseFloat(num1 - num2);
    answer = Math.floor(answer * 10000000000) / 10000000000;
}

//function to multiply
function multiply() {
    answer = parseFloat(num1 * num2);
    answer = Math.floor(answer * 10000000000) / 10000000000;
}

//function to divide
function divide() {
    answer = parseFloat(num1 / num2);
    answer = Math.floor(answer * 10000000000) / 10000000000;
}

//percentage functions
//Below

//function to add %
function addPercent() {
    answer = num1 + (num1 * (num2 / 100));
    answer = Math.floor(answer * 10000000000) / 10000000000;
}

//function to subtract %
function subtractPercent() {
    answer = num1 - (num1 * (num2 / 100));
    answer = Math.floor(answer * 10000000000) / 10000000000;
}

//function to multiply %
function multiplyPercent() {
    answer = num1 * (num2 / 100);
    answer = Math.floor(answer * 10000000000) / 10000000000;
}

//function to divide %
function dividePercent() {
    answer = num1 / (num2 / 100);
    answer = Math.floor(answer * 10000000000) / 10000000000;
}

//function to process the calculation.
function calc_process(ope) {
    if (displayEl.innerHTML === "") {
        num1 = 0; //First, check if the display is empty. If so, then put 0 into num1.
    } else //If not, then check below if the string ends with an operator sign like "+ ". 
    if (displayEl.innerHTML.slice(-2) === "+ " || displayEl.innerHTML.slice(-2) === "- " || displayEl.innerHTML.slice(-2) === "× " || displayEl.innerHTML.slice(-2) === "÷ ") {
        //If so, then take away the operator and just cut back to just number1.
        displayEl.innerHTML = displayEl.innerHTML.slice(0, -3);
        num1 = parseFloat(displayEl.innerHTML);
    } else //if the above does not apply, then check if it can find find any non numeric characters (looking for an operator sign). If a sign is found, then calculate the sum. 
    if (displayEl.innerHTML.match(/[^0-9.]/g)) {
        calc_equal();
        num1 = parseFloat(answer);
    } else { //if all the above does not apply then, it must be just a number. So, it will consider what is on the display as num1.    

        num1 = parseFloat(displayEl.innerHTML);

    }

    operator = ope; //use the string passed from the calc_process () function within the addEventListener, as the operator.
    clearAfterEqual = false; //false means do not need to reset the screen.
    if (operator != "=") {
        displayEl.innerHTML = num1 + " " + operator + " "; //add num1 and operator together as a string.
        equation_firstPrt = displayEl.innerHTML; //Then, consider it as the first part of the equation. e.g. "6 + "
    }
}

// Num Keys - function to type numbers only
for (var i = 4; i <= keysCount; i += 1) {
    if (i === 7 || i === 11 || i === 15 || i >= 17) {
        //do nothing here.
    } else {
        //assign eventListener only for numeric keys. 
        keysEls[i].addEventListener("click", function() {
            if (clearAfterEqual === false) {
                displayEl.innerHTML += this.innerHTML;
                percent_on = false;
            } else {
                displayEl.innerHTML = this.innerHTML;
                clearAfterEqual = false;
                percent_on = false;
            }
        });
    }
}
// . key eventlistener
keysEls[17].addEventListener("click", function() {
    if (displayEl.innerHTML.slice(-1) !== ".") {
        if (clearAfterEqual === false) {
            if (displayEl.innerHTML === "") {
                displayEl.innerHTML = "0.";
            } else //If not, then check below if the string ends with an operator sign like "+ ". 
            if (displayEl.innerHTML.slice(-2) === "+ " || displayEl.innerHTML.slice(-2) === "- " || displayEl.innerHTML.slice(-2) === "× " || displayEl.innerHTML.slice(-2) === "÷ ") {
                //If so, then add "0." to the string.
                displayEl.innerHTML = displayEl.innerHTML + "0.";

            } else //if the above does not apply, then check if it can find find any non numeric characters (looking for an operator sign). If a sign is found, then add "."
            if (displayEl.innerHTML.match(/[^0-9.]/g)) {
                equation_allPrt = displayEl.innerHTML;
                num2_str = displayEl.innerHTML.substring(equation_firstPrt.length, equation_allPrt.length);
                if (num2_str.indexOf(".") === -1) {
                    displayEl.innerHTML = displayEl.innerHTML + ".";
                }
            } else { //if all the above does not apply then, it must be just a number. In this case, just add ".".   
                if (displayEl.innerHTML.indexOf(".") === -1) {

                    displayEl.innerHTML = displayEl.innerHTML + ".";
                }
            }
        } else {
            displayEl.innerHTML = "0.";
            clearAfterEqual = false;
        }
    }
});

// AC key function
keysEls[0].addEventListener("click", function() {
    displayEl.innerHTML = "";
    num1 = 0;
    num2 = 0;
});

// + key function
keysEls[15].addEventListener("click", function() {
    calc_process("+");
    percent_on = false;
});

// - key function
keysEls[11].addEventListener("click", function() {
    calc_process("-");
    percent_on = false;
});

// x key function
keysEls[7].addEventListener("click", function() {
    calc_process("×");
    percent_on = false;
});

// / key function
keysEls[3].addEventListener("click", function() {
    calc_process("÷");
    percent_on = false;
});

// % key function
keysEls[2].addEventListener("click", function() {
    percent_on = true;
});

// = key function
keysEls[19].addEventListener("click", function() {
    calc_process("=");
    displayEl.innerHTML = num1; //just leave the answer without any sign.
    clearAfterEqual = true;
    percent_on = false;

});

// clear_entry function for CE key
function clear_entry() {
    if (displayEl.innerHTML === "") {
        num1 = 0; //First, check if the display is empty. If so, then put 0 into num1.
    } else //If not, then check below if the string ends with an operator sign like "+ ". 
    if (displayEl.innerHTML.slice(-2) === "+ " || displayEl.innerHTML.slice(-2) === "- " || displayEl.innerHTML.slice(-2) === "× " || displayEl.innerHTML.slice(-2) === "÷ ") {
        //If so, do nothing.
    } else //if the above does not apply, then check if it can find find any non numeric characters (looking for an operator sign). If a sign is found, then it must be something like "5+3". 
    if (displayEl.innerHTML.match(/[^0-9.]/g)) {
        displayEl.innerHTML = equation_firstPrt; //Take the 2nd number out.(otherwise, just the first part.)   
    } else { //if all the above does not apply then, it must be just a number. Then, set num1 to 0 and clear the display. 
        displayEl.innerHTML = "";
        num1 = 0;
    }
}

function back_space() {
    if (displayEl.innerHTML === "") {
        num1 = 0; //First, check if the display is empty. If so, then put 0 into num1.
    } else //If not, then check below if the string ends with an operator sign like "+ ". 
    if (displayEl.innerHTML.slice(-2) === "+ " || displayEl.innerHTML.slice(-2) === "- " || displayEl.innerHTML.slice(-2) === "× " || displayEl.innerHTML.slice(-2) === "÷ ") {
        //If so, then take away the operator and just cut back to just number1.
        displayEl.innerHTML = displayEl.innerHTML.slice(0, -3);
        num1 = parseFloat(displayEl.innerHTML);
    } else //if the above does not apply, then check if it can find find any non numeric characters (looking for an operator sign). If a sign is found, then it must be something like "5+3". 
    {

        displayEl.innerHTML = displayEl.innerHTML.slice(0, -1);

    }
}

// CE key function
keysEls[1].addEventListener("click", function() {
    clear_entry();
    percent_on = false;
});

// <= key function
keysEls[18].addEventListener("click", function() {
    back_space();
    percent_on = false;
});

//Keyboard using event listener
//check if keypad number is pressed
document.addEventListener("keydown", function(event) {
    if (event.keyCode >= 96 && event.keyCode <= 105) {
        if (clearAfterEqual === false) {
            displayEl.innerHTML += event.key;
            percent_on = false;
        } else {
            displayEl.innerHTML = event.key;
            clearAfterEqual = false;
            percent_on = false;
        }
    }
    //if the key pressed is not a number, then check if it is an operator key.
    else if (event.keyCode === 107 || event.keyCode === 109 || event.keyCode === 106 || event.keyCode === 111) {
        if (event.keyCode === 107) {
            calc_process("+");
        } else if (event.keyCode === 109) {
            calc_process("-");
        } else if (event.keyCode === 106) {
            calc_process("×");
        } else if (event.keyCode === 111) {
            calc_process("÷");
        }
        percent_on = false;
    }
    //if the key pressed is not a number or an operator key, then check if it is a decimal key.
    else if (event.keyCode === 110) {
        if (clearAfterEqual === false) {
            if (displayEl.innerHTML === "") {
                displayEl.innerHTML = "0.";
                clearAfterEqual = false;
            } else //If not, then check below if the string ends with an operator sign like "+ ". 
            if (displayEl.innerHTML.slice(-2) === "+ " || displayEl.innerHTML.slice(-2) === "- " || displayEl.innerHTML.slice(-2) === "× " || displayEl.innerHTML.slice(-2) === "÷ ") {
                displayEl.innerHTML = displayEl.innerHTML + "0.";
            } else //if the above does not apply, then check if it can find find any non numeric characters (looking for an operator sign). If a sign is found, then add "."
            if (displayEl.innerHTML.match(/[^0-9.]/g)) {
                equation_allPrt = displayEl.innerHTML;
                num2_str = displayEl.innerHTML.substring(equation_firstPrt.length, equation_allPrt.length);
                if (num2_str.indexOf(".") === -1) {
                    displayEl.innerHTML = displayEl.innerHTML + ".";
                }
            } else { //if all the above does not apply then, it must be just a number. In this case, just add ".".   
                if (displayEl.innerHTML.indexOf(".") === -1) {
                    displayEl.innerHTML = displayEl.innerHTML + ".";
                }
            }
        } else {
            displayEl.innerHTML = "0.";
            clearAfterEqual = false;
        }
        percent_on = false;
    }
    //if the key pressed is not a number, operator key or decimal key, then check if it is a clear key.
    else if (event.keyCode === 8) {
        back_space();
        percent_on = false;
    }
    //if the key pressed is not a number, operator key, decimal key or clear key, then check if it is a clear_entry key.
    else if (event.keyCode === 46) {
        clear_entry();
        percent_on = false;
    }
    //if the key pressed is not a number, operator key, decimal key, clear key or clear_entry key, then check if it is an equal key.
    else if (event.keyCode === 13) {
        calc_process("=");
        percent_on = false;
    }
    //if the key pressed is not a number, operator key, decimal key, clear key, clear_entry key or equal key, then check if it is a percent key.
    else if (event.keyCode === 80) {
        percent_on = true;
        percent();
    }
    //if the key pressed is not a number, operator key, decimal key, clear key, clear_entry key, equal key or percent key, then check if it is a enter key.
    else if (event.keyCode === 93) {
        clear_all();
        percent_on = false;
    }
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        displayEl.innerHTML = "";
        num1 = 0;
        percent_on = false;
    }
});