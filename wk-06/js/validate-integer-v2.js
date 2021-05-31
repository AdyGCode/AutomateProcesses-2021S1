/**
 * Filename:    js/validate-integer.js
 * Author:      Adrian Gould
 * Purpose:     Validate input on page as an integer
 *              between 1 and 9 inclusive
 */

let doc = document // create a shortcut to document object
let dataError = doc.getElementById( 'dataError' )
let dataOutput = doc.getElementById( 'dataOutput' )
let dataInput = doc.getElementById( 'dataInput' )
let inputForm = doc.getElementById( 'validate-me' )

inputForm.addEventListener( "submit",
    function ( event ) {
        event.preventDefault()
        dataError.innerText = ""
        dataOutput.innerText = "Waiting..."
        let data = dataInput.value

        if ( validateInteger(data, dataError) ){
            dataOutput.innerText = "The number was " + data
        }
    }
)

function validateInteger(data, errorLocation="") {
    if ( data.length > 1 || !parseInt( data )
        || parseInt( data ) < 1 || parseInt( data ) > 9  ){
        if (errorLocation != "") {
            errorLocation.innerText = "ERROR! Enter a whole number between 1 and 9 inclusive."
        }
    } else {
        return parseInt(data)
    }
    return false
}
