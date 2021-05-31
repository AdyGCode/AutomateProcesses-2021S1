`use strict;`
/**
 * Filename:    wk-16/js/demo-01.js
 * Author:      Adrian Gould
 * Purpose:     Demonstrate reading of JSON data from a file
 *              on the server
 */

/* aliasing the document from the DOM (Document Object Model) */
let doc = document
/* find the location of the tableData ID in the HTML */
let tablePeopleData = doc.getElementById( "tablePeopleData" )
let tablePlacesData = doc.getElementById( "tablePlacesData" )


/* create a new XMLHttpRequest object */
let ajax = new XMLHttpRequest();


/* prepare the request for the json data file */
ajax.open( "GET", "js/data.json", true );
/* send the ajax request for the data.json file */
ajax.send();

/* create an anonymous function to monitor for any changes in the
   ajax request (Asynchronous JavaScript And XML)
 */
ajax.onreadystatechange = function () {
    /* readyState = 4 --> the transaction is DONE */
    /* status = 200 --> OK, 404 --> NOT FOUND */
    /* if request is done and ok */
    if ( this.readyState == 4 && this.status == 200 ) {
        /* Grab the response data */
        let data = ajax.responseText;
        /* convert to JSON */
        let jsonData = JSON.parse( data )
        processPeopleData( jsonData )
        processPlacesData( jsonData )
    } /* end if */
} /* end onreadystatechange */


function processPeopleData( theData ) {
    /* output text is set to blank */
    let output = ""
    /* define variables count and total of Ages */
    let count = 0
    let totalOfAges = 0
    /* get the people from the JSON Data */
    let people = theData["people"]
    /* Process each item of the JSON Data array */
    for ( const item in people ) {
        /* TODO: check if item contains required data */
        /* get a person from the parsed JSON data */
        let person = people[item]
        /* increment the counter */
        count++
        /* construct the line of output for the table */
        /* output is output plus .... */
        output += "<tr>"
        output += "<td>" + count + "</td>"
        output += "<td>" + person.city + "</td>"
        output += "<td>" + person.name + "</td>"
        output += "<td>" + person.age + "</td>"
        output += "</tr>"
        totalOfAges += person.age
        /* Use RegEx to replace the <td>'s and <tr>'s with the styled
           versions */
        output = output.replace( /<td>/gi,
            '<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">' );
        output = output.replace( /<tr>/gi,
            '<tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">' );
    } /* end for */
    /* send output to the HTML DOM at the tableData location */
    tablePeopleData.innerHTML = output
    /* do the same for the average age, but in the table footer */
    let summaryOutput = "<p>Avg Age: " + totalOfAges / count + "</p>"
    doc.getElementById( "tablePeopleSummary" ).innerHTML = summaryOutput
}

function processPlacesData( theData ) {
    /* output text is set to blank */
    let output = ""
    /* define count variable */
    let count = 0
    let places = theData["places"]
    /* Process each item of the JSON Data array */
    for ( const item in places ) {
        /* TODO: check if item contains required data */
        /* get a person from the parsed JSON data */
        let location = places[item]
        /* increment the counter */
        count++
        /* constucting the line of output for the table */
        /* output is output plus .... */
        output += "<tr>"
        output += "<td>" + count + "</td>"
        output += "<td>" + location.name + "</td>"
        output += "<td>" + location.state + "</td>"
        output += "<td>" + location.country + "</td>"
        output += "</tr>"
    } /* end for */
    output = output.replace( /<td>/gi,
        '<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">' );
    output = output.replace( /<tr>/gi,
        '<tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">' );
    /* send output to the HTML DOM at the tableData location */
    tablePlacesData.innerHTML = output
    let summaryOutput = "<p>Total Places: " + count + "</p>"
    doc.getElementById( "tablePlacesSummary" ).innerHTML = summaryOutput
}
