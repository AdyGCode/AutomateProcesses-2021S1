/**
 * Filename:    js/demo-02.js
 * Author:      Adrian Gould
 * Purpose:     Creating a count...
 */

let countOutput = document.getElementById( 'countOutput' )
countOutput.innerHTML = ""
for ( let count = 1; count <= 10; count++ ) {
    countOutput.innerHTML += "<p>" + count.toString() + "</p>"
}
