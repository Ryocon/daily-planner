// setInterval with a jquery on an ID to call and display the current date with a running clock at the top of the page using moment
setInterval(function () {
    $('#currentDay').text(moment().format('dddd - MMMM - Do - YYYY - H:mm:ss'))
}, 1000);

// time set as a global variable using the format I want to read for the functions below
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
// using 'this' to grab the sibling elements around the targeted button ID that started the event to set each sibling to a variable and saving them to local storage
$('.saveBtn').on('click', function() {
    var eventText = $(this).siblings('.description').val()
    var eventTime = $(this).siblings('.hour').text()
    localStorage.setItem(eventTime, eventText)
    } 
)

// the function used to write the value saved in local storage onto the page
// the '.hour' class is targeted using jquery and passes through each of elements with the matching class using 'each'
// a variable of currentTime is set targeting the text of the '.hour' class using 'this'
// savedTime then 'gets' from local storage a key that matches the text read from currentTime
// siblings are then targetted and the '.description' value that matches the key is then written to the page
function readEvent() {
$('.hour').each(function() {
var currentTime = $(this).text()
var savedTime = localStorage.getItem(currentTime)
$(this).siblings('.description').val(savedTime)
        }
    )
}

// calling of readEvent function to display saved values from local storage
readEvent()

// when page is refreshed the events persist (reset daily?)

