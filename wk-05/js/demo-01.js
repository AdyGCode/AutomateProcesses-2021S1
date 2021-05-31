/**
 * Filename:    js/demo-01.js
 * Author:      Adrian Gould
 * Purpose:     Demonstrate content on web page
 */

let target = "content"
let contentLocation = document.getElementById( target )

// To change the text only inside the element use innerText
let message = "Hello World"
contentLocation.innerText = message

// To change the HTML inside the element use innerHTML
let message2 = "<h1>Bonjour, tout le monde!</h1>"
contentLocation.innerHTML = message2
contentLocation.innerHTML += "<p>" + message + "</p>"
