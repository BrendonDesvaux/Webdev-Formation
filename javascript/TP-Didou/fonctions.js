//get all elements in li which is an img
const images = document.querySelectorAll('li img');
//get all elements inputs
const buttons = document.querySelectorAll('input');
//get the element with id "id_quoi"
const animal = document.querySelector('#id_quoi');

//loop through the images
for (var i = 0; i < images.length; i++) {
    //add onclick event to each image
    images[i].addEventListener('click', onClickImage);
}
//loop through the buttons
for (var i = 0; i < buttons.length; i++) {
    //add onclick event to each button
    buttons[i].addEventListener('click', onClickButton);
}

//onclick on an image in the list
function onClickImage() {
    let imgCentre = document.querySelector('#id_image');
    var imgCentreSrc = imgCentre.getAttribute('src');
    //get the source of the image
    var src = this.getAttribute('src');
    switch (src) {
        case 'images/chien.jpg':
            imgCentre.setAttribute('src', 'images/chien.jpg');
            animal.textContent = 'un chien...';
            break;
        case 'images/chouette.jpg':
            imgCentre.setAttribute('src', 'images/chouette.jpg');

            animal.textContent = 'une chouette...';
            break;
        case 'images/dauphin.jpg':
            imgCentre.setAttribute('src', 'images/dauphin.jpg');
            animal.textContent = 'un dauphin...';
            break;
        case 'images/loup.jpg':
            imgCentre.setAttribute('src', 'images/loup.jpg');
            animal.textContent = 'un loup...';
            break;
        case 'images/mouton.jpg':
            imgCentre.setAttribute('src', 'images/mouton.jpg');
            animal.textContent = 'un mouton...';
            break;
        case 'images/singe.jpg':
            imgCentre.setAttribute('src', 'images/singe.jpg');
            animal.textContent = 'un singe...';
            break;
        case 'images/didou.jpg':
            imgCentre.setAttribute('src', 'images/didou.jpg');
            animal.textContent = 'un animal...';
            break;
    }

}

function onClickButton() {
    let imgCentre = document.querySelector('#id_image');
    let imgCentreSrc = imgCentre.getAttribute('src');
    //get the value of the button clicked
    var value = this.getAttribute('value');
    switch (value) {
        case 'chien':
            imgCentre.setAttribute('src', 'images/chien.jpg');
            animal.textContent = 'un chien...';
            break;
        case 'chouette':
            imgCentre.setAttribute('src', 'images/chouette.jpg');
            animal.textContent = 'une chouette...';
            break;
        case 'dauphin':
            imgCentre.setAttribute('src', 'images/dauphin.jpg');
            animal.textContent = 'un dauphin...';
            break;
        case 'loup':
            imgCentre.setAttribute('src', 'images/loup.jpg');
            animal.textContent = 'un loup...';
            break;
        case 'mouton':
            imgCentre.setAttribute('src', 'images/mouton.jpg');
            animal.textContent = 'un mouton...';
            break;
        case 'singe':
            imgCentre.setAttribute('src', 'images/singe.jpg');
            animal.textContent = 'un singe...';
            break;
        case 'reset':
            imgCentre.setAttribute('src', 'images/didou.jpg');
            animal.textContent = 'un animal...';
            break;
    }
};