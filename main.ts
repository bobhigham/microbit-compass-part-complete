let heading = ""
basic.forever(function () {
    if (input.compassHeading() < 45) {
        heading = "N"
    } else if (input.compassHeading() < 135) {
        heading = "E"
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
        heading = "N"
    }
    basic.showString(heading)
})
