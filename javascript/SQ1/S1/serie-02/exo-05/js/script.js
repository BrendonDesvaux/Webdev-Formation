//get input entered by user and store in variable x
let x = document.getElementById("x");
//get input entered by user and store in variable y
let y = document.getElementById("y");
//get the paragraph element
let p = document.querySelector("#p");



//add event listener on y input
y.addEventListener("input", compare);

function compare() {
    if (x.value > y.value) {
        p.innerHTML = ">";
    } else if (x.value < y.value) {
        p.innerHTML = "<";
    } else if (x.value === y.value) {
        p.innerHTML = "=";
    } else {
        p.innerHTML = "?";
    }
    //if values are not numbers or empty, display error message
    if (isNaN(x.value) || isNaN(y.value) || x.value === "" || y.value === "") {
        p.innerHTML = "?";
    }
    console.log(x.value);
    console.log(y.value);
}