const today = new Date()
const day = today.getDate()
const month = today.getMonth()
let revolutionaryMonth
if ((day >= 22 && month == 8) || (day <= 21 && month == 9)) {
    revolutionaryMonth = 'Vendémiaire'
} else if ((day >= 22 && month == 9) || (day <= 21 && month == 10)) {
    revolutionaryMonth = 'Brumaire'
} else if ((day >= 22 && month == 10) || (day <= 21 && month == 11)) {
    revolutionaryMonth = 'Frimaire'
} else if ((day >= 22 && month == 11) || (day <= 20 && month == 0)) {
    revolutionaryMonth = 'Nivôse'
} else if ((day >= 21 && month == 0) || (day <= 19 && month == 1)) {
    revolutionaryMonth = 'Pluviôse'
} else if ((day >= 20 && month == 1) || (day <= 21 && month == 2)) {
    revolutionaryMonth = 'Ventôse'
} else if ((day >= 22 && month == 2) || (day <= 19 && month == 3)) {
    revolutionaryMonth = 'Germinal'
} else if ((day >= 20 && month == 3) || (day <= 19 && month == 4)) {
    revolutionaryMonth = 'Floréal'
} else if ((day >= 20 && month == 4) || (day <= 18 && month == 5)) {
    revolutionaryMonth = 'Plairial'
} else if ((day >= 19 && month == 5) || (day <= 18 && month == 6)) {
    revolutionaryMonth = 'Messidor'
} else if ((day >= 19 && month == 6) || (day <= 17 && month == 7)) {
    revolutionaryMonth = 'Thermidor'
} else if ((day >= 18 && month == 7) || (day <= 17 && month == 8)) {
    revolutionaryMonth = 'Fructidor'
} else {
    revolutionaryMonth = 'Jours supplémentaires'
}
console.log(revolutionaryMonth)