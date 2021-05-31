`use strict;`
/**
 * Filename:    wk-14/js/demo-01.js
 * Author:      Adrian Gould
 * Purpose:     Demonstrate reading of JSON data from a file
 *              on the server
 */

/* aliasing the document from the DOM (Document Object Model) */
let doc = document
/* find the location of the tableData ID in the HTML */
let tableData = doc.getElementById("tableData")
/* define a variable, count */
let count = 0

/* create a new XMLHttpRequest object */
let ajax = new XMLHttpRequest();


/* prepare the request for the json data file */
ajax.open("GET", "js/data.json", true);
/* send the ajax request for the data.json file */
ajax.send();

/* create an anonymous function to monitor for any changes in the
   ajax request (Asynchronous JavaScript And XML)
 */
ajax.onreadystatechange = function() {
    /* readyState = 4 --> the transaction is DONE */
    /* status = 200 --> OK, 404 --> NOT FOUND */
    /* if request is done and ok */
    if (this.readyState == 4 && this.status == 200) {
        /* Grab the response data */
        let data = ajax.responseText;
        /* convert to JSON */
        let jsonData = JSON.parse(data)
        processOutputData(jsonData)
    } /* end if */
} /* end onreadystatechange */


function processOutputData(theData){
    /* output text is set to blank */
    let output = ""
    let totalOfAges = 0
    /* Process each item of the JSON Data array */
    for ( const item in theData ) {
        /* TODO: check if item contains required data */
        /* get a person from the parsed JSON data */
        let person = theData[item]
        /* increment the counter */
        count++
        /* constucting the line of output for the table */
        /* output is output plus .... */
        output += "<tr>"
        output += "<td>" + count + "</td>"
        output += "<td>" + person.city + "</td>"
        output += "<td>" + person.name + "</td>"
        output += "<td>" + person.age + "</td>"
        output += "</tr>"
        totalOfAges += person.age
    } /* end for */
    /* send output to the HTML DOM at the tableData location */
    tableData.innerHTML = output
    /* do the same for the verage age, but in the table footer */
    let summaryOutput = "<p>Avg Age: "+totalOfAges/count+"</p>"
    doc.getElementById("tableSummary").innerHTML = summaryOutput
}
