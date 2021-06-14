`use strict;`
/**
 * Filename:    wk-17/js/prevent-submit.js
 * Author:      Adrian Gould
 * Purpose:     Demonstrate stopping a form submission
 */

/* aliasing the document from the DOM (Document Object Model) */
let doc = document
let inputForm = doc.getElementById("submit-me")
let products = inputForm.getElementsByTagName('input')
let len = products.length
let dataOutput = doc.getElementById( 'dataOutput' )

/* Listen for the Submit button on the form and prevent the action occurring */
inputForm.addEventListener( "submit",
    function ( event ) {
        event.preventDefault()
        console.log('Submit Prevented')

        let items = ""
        for (let count = 0; count < len; count++) {
            let product = products[count]
            if (product.type === 'checkbox' && product.checked) {
                items += "<li>"+product.value+"</li>"
            }
        }
        dataOutput.innerHTML="<ul>"+items+"</ul>"
    });



