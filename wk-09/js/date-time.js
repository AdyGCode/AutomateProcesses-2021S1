/**
 * date-time.js
 */

// Atomic
let epoc = new Date(1970, 1, 1, 0, 0, 0, 0); // 1st Jan 1970 at Midnight
console.log(epoc)

// Timestamp
let epoc2 = new Date( 7839264378 ) // Milliseconds
console.log(epoc2)

// String
let epoc3 = new Date('1970-01-01 00:00:00.0 UTC+08:00')
console.log(epoc3)

let epoc4 = new Date('1970-01-01 GMT+10:00')
console.log(epoc4)

console.log( epoc2.getDate())
console.log( epoc2.getDay())
console.log( epoc2.getMonth())
console.log( epoc2.getFullYear())
console.log( epoc2.getHours())
console.log( epoc2.getMinutes())
console.log( epoc2.getSeconds())
console.log( epoc2.getMilliseconds())
console.log(new Date().getTime())

console.log(epoc2.toString())
console.log(epoc2.toDateString())
console.log(epoc2.toISOString())
console.log(epoc2.toLocaleDateString())
console.log(epoc2.toTimeString())
console.log(epoc2.toUTCString())
console.log(epoc2.getTimezoneOffset())

epoc2.setFullYear(2000)
console.log(epoc2.toString())

let dateInMonth = epoc2.getDate()
dateInMonth += 6
epoc2.setDate(dateInMonth)
console.log(epoc2.toString())

let now = (new Date()).getTime()
let now2 = Date.now();

let days = 14
const SECONDS_IN_A_DAY = 1000 * 60 * 60 * 24
let interval = SECONDS_IN_A_DAY * days
let newTimeStamp = now + interval
let theNewDate = new Date(newTimeStamp)
console.log(theNewDate)

let difference = epoc2 - Date.now()
console.log(difference)


