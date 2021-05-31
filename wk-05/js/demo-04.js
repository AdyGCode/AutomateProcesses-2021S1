/**
 * Filename:    js/demo-04.js
 * Author:      Adrian Gould
 * Purpose:     Input from Form
 */

let doc = document
let inputForm = doc.getElementById( 'inputForm' )
let inputName = doc.getElementById( 'nameInput' )
let outputName = doc.getElementById( 'nameOutput' )

inputForm.addEventListener( "click",
    function ( event ) {
        event.preventDefault()
        let name = inputName.value
        outputName.innerText = name
    }
)
