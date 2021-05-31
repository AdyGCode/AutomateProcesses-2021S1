/**
 * Filename:    js/validate-integer.js
 * Author:      Adrian Gould
 * Purpose:     Validate input on page as an integer
 *              between 1 and 9 inclusive
 */

let doc = document // create a shortcut to document object
let dataError1 = doc.getElementById( 'dataError1' )
let dataError2 = doc.getElementById( 'dataError2' )
let dataOutput = doc.getElementById( 'dataOutput' )
let dataInput1 = doc.getElementById( 'numberOne' )
let dataInput2 = doc.getElementById( 'numberTwo' )
let inputForm = doc.getElementById( 'validate-me' )

inputForm.addEventListener( "submit",
    function ( event ) {
        event.preventDefault()
        dataError1.innerText = ""
        dataOutput.innerText = "Waiting..."
        dataError2.innerText = ""

        hideError( dataError1 )
        hideError( dataError2 )

        let data1 = validateInteger( dataInput1.value, dataError1, "BOO!" )
        let data2 = validateInteger( dataInput2.value, dataError2 )

        if ( data1 !== false && data2 !== false ) {
            let total = data1 + data2
            dataOutput.innerText = "The total is " + total
        }
    }
)

function validateInteger( data, errorLocation = "", errorMessage = "" ) {
    if ( data.length > 1 || !parseInt( data )
        || parseInt( data ) < 1 || parseInt( data ) > 9 ) {
        if ( errorLocation !== "" ) {
            msg = errorMessage || "ERROR! Enter a whole" +
                " number between 1 and 9 inclusive."
            errorLocation.innerText = msg
            showError( errorLocation )
        }
    } else {
        return parseInt( data )
    }
    return false
}


function hideError( locationToHide = "" ) {
    if ( locationToHide !== "" && !locationToHide.classList.contains( "hidden" ) ) {
        locationToHide.classList.toggle( "hidden" )
    }
}

function showError( locationToShow = "" ) {
    if ( locationToShow !== "" && locationToShow.classList.contains( "hidden" ) ) {
        locationToShow.classList.toggle( "hidden" )
    }
}
