`use strict;`
/**
 * Filename:    wk-17/js/prevent-submit.js
 * Author:      Adrian Gould
 * Purpose:     Demonstrate stopping a form submission
 */

/* aliasing the document from the DOM (Document Object Model) */
let doc = document
let inputForm = doc.getElementById("submit-me")
let productListOutput = doc.getElementById("productList")

let dataOutput = doc.getElementById( 'dataOutput' )

/**
 * Define a list of products.
 *
 * This is often retrieved from a JSON source that is retrieved and saved to an array.
 */
let productList = ['Apples','Bananas','Cherries','Dates','Grapes','Kiwifruit','Pears']
let products = ""

/**
 * Create a dynamic list of checkboxes using the productList
 */
for (let count=0; count < productList.length; count++){
    products +=    '<div class="my-3">\n' +
        '                <label for="product-$count">\n' +
        '                    '+productList[count]+':\n' +
        '                </label>\n' +
        '                <input name="products[]" type="checkbox" value="'+productList[count]+'" id="product-$count"/>\n' +
        '            </div>'
}
/**
 * Display the list of products and the checkboxes in the productListOutput area
 */
productListOutput.innerHTML =  products

/**
 *  Listen for the Submit button on the form and prevent the action occurring
 */
inputForm.addEventListener( "submit",
    function ( event ) {
        event.preventDefault()
        console.log('Submit Prevented')

        /**
         * Get a complete list of the dynamically created INPUT elements contained in the form
         */
        let productCheckboxes = inputForm.getElementsByTagName('input')
        let len = productCheckboxes.length

        let items = ""
        /**
         * Loop through all the dynamically created input elements, grabbing each in turn,
         * then checking to see if it is a checkbox and if it is if the checkbox is ticked
         *
         * When the checkbox is ticked we add it to a new list that contains selected products
         */
        for (let count = 0; count < len; count++) {
            let product = productCheckboxes[count]
            if (product.type === 'checkbox' && product.checked) {
                items += "<li>"+product.value+"</li>"
            }
        }

        /**
         * Display the HTML list of checked items in the dataOutput area
         */
        dataOutput.innerHTML="<ul>"+items+"</ul>"
    });



