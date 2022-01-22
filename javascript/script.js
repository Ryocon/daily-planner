// variable to call display the current date at the top of the page using moment
var currentDate = moment().format('dddd - MMMM - Do - YYYY')
$('#currentDay').text(currentDate)

// time set as a global variable using the format I want to read
var time = moment().format('HH:mm') 

// console logging to make sure moment was being called correctly
console.log('The current time is ' + time)
console.log('The current hour is ' + moment().hours())

// a conditional statement used to check if the hour is correct to display present, past and future stylings to each individual timeblock
// debugger
function timeChecker(hour, timeBlock) {
    var currentHour = moment().hours()
    if (currentHour === hour) {
        timeBlock.addClass('present')
        console.log('You are in the Present!')
    } else if (currentHour > hour) {
        console.log(' <- Elements in the Past!')
        timeBlock.addClass('past')
        timeBlock.removeClass('present')
    } else {
        console.log('<- Elements in the Future!')
        timeBlock.addClass('future')
    }
}

// a loop used to cycle through each timeblock and add an integer to the id of #hour- in order to update the styling based on the current time
// string inerpolation is used for this addition to the #hour- id
function timeLoop() {
    for(var i = 9; i <= 18; i++) {
        var timeblockSelector = `#hour-${i}`
        var timeBlock = $(timeblockSelector)
        timeChecker(i, timeBlock)
    }
}

// calling of the timeLoop function
timeLoop()

// jquery interaction with the saveBtn
$('.saveBtn').on('click', function() {
    var current = $(this)
    var eventText = current.siblings('.description').val()
    // var eventText = current.siblings('.description').text()
    var eventTime = current.siblings('.hour').text()

    localStorage.setItem(eventTime, eventText)

}
)

// get event data IT WORKS!
function readEvent() {
$('.hour').each(function() {
    var current = $(this)
    var savedTime = current.text()
    var savedInput = localStorage.getItem(savedTime)
    // console.log(savedTime)

    if (savedInput !== null) {
        current.siblings('.description').val(savedInput)
        return
    }
}
)
}

// calling of readEvent function to display saved values from local storage
readEvent()

// when page is refreshed the events persist (reset daily?)

