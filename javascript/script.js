

// add running clock? interval func req
var currentDayEl = moment().format('dddd - MMMM - Do - YYYY')
$('#currentDay').text(currentDayEl)

// timeblocks to show businness hours
// DONE

var time = moment().format('HH:mm')

// time.isBetween(moment('09:00')), moment('09:59') 

console.log(time)
console.log(moment().hours())

// timeblocks to be colour coded for past, present and future
// DONE
// debugger
function timeChecker(hour, timeblockEl) {
    var currentHour = moment().hours()
    if (currentHour === hour) {
        timeblockEl.addClass('present')
        console.log('Present!')
    } else if (currentHour > hour) {
        console.log('Past!')
        timeblockEl.addClass('past')
        timeblockEl.removeClass('present')
    } else {
        console.log('Future!')
        timeblockEl.addClass('future')
    }
}

function timeLoop() {
    for(var i = 9; i <= 18; i++) {
        var timeblockSelector = `#hour-${i}`
        var timeblockEl = $(timeblockSelector)
        timeChecker(i, timeblockEl)
    }
}

// backticks for string inertperlotation (spelling)

timeLoop()




var backGround = document.getElementById('textarea')







// when timeblock is clicked an event can be added

function addEvent () {}

// when text added it is saved by button into local storage

function saveEvent () {}

// when page is refreshed the events persist (reset daily?)

