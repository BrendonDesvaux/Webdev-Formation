const randomButton = document.getElementById("haz");
const changeColor = document.getElementById("colorChange");
const addHuno = document.getElementById("addHuno");
const addP = document.getElementById("addP");
const showHide = document.getElementById("showHide");
const para = document.getElementById("para");
const toog = document.getElementById("toogle");
const del = document.getElementById("del");

function randomBakcgroundColor() {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + color;
}

function buttonInvertColor() {
    switch (changeColor.style.backgroundColor) {
        case "white":
            changeColor.style.color = "white";
            changeColor.style.backgroundColor = "black";
            break;
        case "black":
            changeColor.style.color = "black";
            changeColor.style.backgroundColor = "white";
            break;
        case "":
            changeColor.style.color = "white";
            changeColor.style.backgroundColor = "black";
            break;
    }
}

function addH1() {
    const h1 = document.createElement("h1");
    const erase = document.createElement("button");
    let title = prompt("Enter a title");
    h1.textContent = title;
    document.body.appendChild(h1);
    erase.textContent = "X";
    erase.id = "del";
    h1.appendChild(erase);

    erase.addEventListener("click", function() {
        h1.remove();
    });


}

function addParagraph() {
    const p = document.createElement("p");
    const butt = document.createElement("button");
    const erase = document.createElement("button");
    p.textContent = "I am a stegosaurus";
    p.id = "para";
    butt.textContent = "toogle";
    butt.id = "toogle";
    erase.textContent = "X";
    erase.id = "del";
    document.body.appendChild(p);
    p.appendChild(butt);
    p.appendChild(erase);

    erase.addEventListener("click", deleteParagraph);
    butt.addEventListener("click", function() {
        if (p.style.display === "none") {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    });

}

function deleteParagraph() {
    const p = document.getElementById("para");
    const butt = document.getElementById("toogle");
    const erase = document.getElementById("del");
    p.remove();
}


function toogleParagraphs() {
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i <= paragraphs.length; i++) {
        if (paragraphs[i].style.display === "none") {
            paragraphs[i].style.display = "block";
        } else {
            paragraphs[i].style.display = "none";
        }
    }
}


showHide.addEventListener("click", toogleParagraphs);
addP.addEventListener("click", addParagraph);
addHuno.addEventListener("click", addH1);
changeColor.addEventListener("click", buttonInvertColor);
randomButton.addEventListener("click", randomBakcgroundColor);