const ageAnnée = document.querySelector('#age');
const ageMois = document.querySelector('#ageC');
const button = document.querySelector('button');
button.addEventListener('click', function(e) {
    e.preventDefault();
    ageAnnée.innerHTML = calculateAge();
    ageMois.innerHTML = calculateAgePrecisely();
});

//create function to calculate age
function calculateAge(birthYear) {
    let bd = document.querySelector("#birthday");
    //in bd only check the year
    var year = bd.value.substring(0, 4);
    var today = new Date();
    var age = today.getFullYear() - year;
    return age;
}
//create a function to calculate precisely age
function calculateAgePrecisely(birthYear, birthMonth, birthDay) {
    let bd = document.querySelector("#birthday");
    //in bd only check the year
    var year = bd.value.substring(0, 4);
    var today = new Date();
    var age = today.getFullYear() - year;
    var month = today.getMonth() - bd.value.substring(5, 7);
    var day = today.getDate() - bd.value.substring(8, 10);
    if (month < 0 || (month === 0 && today.getDate() < bd.value.substring(8, 10))) {
        age--;
    }
    if (month < 0) {
        month = 12 + month;
    }
    if (day < 0) {
        day = 31 + day;
    }
    return age + " ans et " + month + " mois " + day + " jours";
}