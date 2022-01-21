

// add running clock? interval func req
var currentDate = moment().format('dddd - MMMM - Do - YYYY')
$('#currentDay').text(currentDate)

// timeblocks to show businness hours
// DONE

var time = moment().format('HH:mm')

// time.isBetween(moment('09:00')), moment('09:59') 

console.log(time)
console.log(moment().hours())

// timeblocks to be colour coded for past, present and future
// DONE
// debugger
function timeChecker(hour, timeBlock) {
    var currentHour = moment().hours()
    if (currentHour === hour) {
        timeBlock.addClass('present')
        console.log('Present!')
    } else if (currentHour > hour) {
        console.log('Past!')
        timeBlock.addClass('past')
        timeBlock.removeClass('present')
    } else {
        console.log('Future!')
        timeBlock.addClass('future')
    }
}

function timeLoop() {
    for(var i = 9; i <= 18; i++) {
        var timeblockSelector = `#hour-${i}`
        var timeBlock = $(timeblockSelector)
        timeChecker(i, timeBlock)
    }
}

// backticks for string inertperlotation (spelling)

timeLoop()




// var backGround = document.getElementById('textarea')



// when text added it is saved by button into local storage

$('.saveBtn').on('click', function() {
    var current = $(this)
    var eventText = current.siblings('.description').val()
    var eventTime = current.siblings('.hour').text()

    localStorage.setItem(eventTime, eventText)

}
)


// get event data NOT WORKING WHY??

function readEvent() {
$('.hour').each(function() {
    var current = $(this)
    var savedTime = current.text()
    var savedInput = localStorage.getItem(savedTime)

    if (savedInput !== null) {
        current.siblings('description').val(savedInput)
        return
    }
}
)
}




// when page is refreshed the events persist (reset daily?)

