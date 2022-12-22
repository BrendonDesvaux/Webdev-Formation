function getDateAgo(date, days) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    return newDate.getDate();
}
console.log(getDateAgo(new Date(2015, 0, 2), 1));