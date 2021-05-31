/**
 * Filename:    js/tooltip.js
 * Author:      YOUR NAME
 * Version:     1.0
 */

tooltip("givenNameControl")
tooltip("familyNameControl")

function tooltip(targetName) {
    let target = document.getElementById( targetName )
    let targetLabels = target.getElementsByTagName( "span" )

    target.addEventListener( "mouseover", function ( event ) {
        if ( targetLabels[0].classList.contains( "hidden" ) ) {
            targetLabels[0].classList.toggle( "hidden" )
        }
    } )

    target.addEventListener( "mouseout", function ( event ) {
        if ( !targetLabels[0].classList.contains( "hidden" ) ) {
            targetLabels[0].classList.toggle( "hidden" )
        }
    } )
}
