/**
 * Filename:    js/demo-03.js
 * Author:      Adrian Gould
 * Purpose:     Displaying a list of names (from an array)
 */
/* CMD+ALT+L CTRL+ALT+L == Reformat code */
let listOutput = document.getElementById( 'listOfNames' )
listOutput.innerHTML = ""
let names = [
    'Adrian', 'Kenn', 'Jonathan', 'Odin', 'Hannes',
    'Kieren', 'Bruce', 'Karl', 'Subham',
    'Oscar', 'Jaskaran', 'Gianni', 'Bradley', 'Nachi',
]
let nameCount = names.length
for ( let count = 0; count < nameCount; count++ ) {
    listOutput.innerHTML += "<li>" + names[count] + "</li>"
}
