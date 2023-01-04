//show the age of mozard when he died
const mozard = new Date(1756, 1, 27);
const today = new Date();
const mozardDeath = new Date(1791, 11, 5);
const mozardAge = mozardDeath.getFullYear() - mozard.getFullYear();
let mozardDeathMonth = mozardDeath.getMonth() - mozard.getMonth();
let mozardDeathDay = mozardDeath.getDate() - mozard.getDate();
let mozardMonth = today.getMonth() - mozard.getMonth();
let mozardDay = today.getDate() - mozard.getDate();
let MozardActualAge = today.getFullYear() - mozard.getFullYear();
if (mozardMonth < 0 || (mozardMonth === 0 && today.getDate() < mozard.getDate())) {
    MozardActualAge--;
}
if ((mozardMonth < 0) || (mozardDeathMonth < 0)) {
    mozardMonth = 12 + mozardMonth;
}
if ((mozardDay < 0) || (mozardDeathDay <= 0)) {
    mozardDay = 31 + mozardDay;
    mozardDeathDay = 31 + mozardDeathDay;
}
console.log(`Mozart est mort a ${mozardAge} ans, ${mozardDeathMonth} mois et ${mozardDeathDay} jours`);
console.log(`Mozart aurait eu ${MozardActualAge} ans, ${mozardMonth} mois et ${mozardDay} jours aujourd'hui`);