/**
 * clock.js
 */

let doc = document
let outputTime = doc.getElementById( "timeOutput" )
let outputDate = doc.getElementById( "dateOutput" )

updateClock()

var interval = setInterval( updateClock, 1000 );

function updateClock() {
    let dateAndTime = new Date()
    let theDate = dateAndTime.toDateString()

    let theTime = dateAndTime.getHours().toString().padStart( 2, "0" ) + ":"
        + dateAndTime.getMinutes().toString().padStart( 2, "0" ) + ":"
        + dateAndTime.getSeconds().toString().padStart( 2, "0" )

    outputDate.innerText = theDate
    outputTime.innerText = theTime
}
