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

let productList = ['Apples','Bananas','Cherries','Dates','Grapes','Kiwifruit','Pears']
let products = ""

for (let count=0; count < productList.length; count++){
    products +=    '<div class="my-3">\n' +
        '                <label for="product-$count">\n' +
        '                    '+productList[count]+':\n' +
        '                </label>\n' +
        '                <input name="products[]" type="checkbox" value="'+productList[count]+'" id="product-$count"/>\n' +
        '            </div>'
}

productListOutput.innerHTML =  products

/* Listen for the Submit button on the form and prevent the action occurring */
inputForm.addEventListener( "submit",
    function ( event ) {
        event.preventDefault()
        console.log('Submit Prevented')

        let products = inputForm.getElementsByTagName('input')
        let len = products.length

        let items = ""
        for (let count = 0; count < len; count++) {
            let product = products[count]
            if (product.type === 'checkbox' && product.checked) {
                items += "<li>"+product.value+"</li>"
            }
        }
        dataOutput.innerHTML="<ul>"+items+"</ul>"
    });



