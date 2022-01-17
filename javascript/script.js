// var currentDayEl = document.getElementById('currentDay')

// function currentDayFunction() {
//     moment().format('dddd')
// }

// currentDayEl.innerText(moment().format('dddd'))

var currentDayEl = moment().format('dddd')
$('#currentDay').text(currentDayEl)