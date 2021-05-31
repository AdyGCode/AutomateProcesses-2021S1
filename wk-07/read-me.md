# Week 07 : Practice JS Exercises

The following are a series of exercises to complete.

Create a new HTML File for each exercise, and a corresponding JS file for the
code.

Use the SCRIPT element to link your code into the HTML file.

All exercises to go into a wk-07 folder.

## Exercise 1

Filenames: `exercise-1.html` and `js/exercise-1.js`

Create a JS Script that checks to see if a word is a palindrome. Palindromes
read the same forwards and backwards. For example "race car". Output results to
the console.

```let word = "race car"```

Hints:

- you will need to remove the non-alphanumeric characters.
- use a for-loop for this problem

## Exercise 2

Filenames: `exercise-2.html` and `js/exercise-2.js`

Create an HTML Document with the following parts:

- an `H1` with `Exercise 2` as its text,
- a `P` which is empty immediately after the `H1`, and
- a form which is placed after the paragraph, with:
    - a text input
    - a label for the input that says "Year:"
    - and a submit button

The JS code is then to do the following:

- Accept an input from the user (presume it is an integer)
- Check to see if the year is a leap year
- Output to the paragraph the text "xxx is a Leap Year" or "xxx is not a Leap
  Year", as appropriate.

The components of the HTML will have the following IDs:

- `form` -- `exercise2`
- `input` -- `yearInput`
- `p` -- `resultOutput`

HINTS:

- Remember to capture the form submit, so it does not refresh the page
- Remember that a year is a leap year when: it is divisible by 4
- Remember that a year is NOT a leap year when: it is divisible by 100
- Remember that a year is a leap year when: it is divisible by 400

## Exercise 3

Filenames: `exercise-3.html` and `js/exercise-3.js`

Create an HTML Document with the following parts:

- an `H1` with `Exercise 3` as its text
- a form with:
    - two text inputs with labels "Number 1" and "Number 2"
    - a submit button
- a `P` which is empty immediately after the `form`

The JavaScript is to:

1. Accept the two inputs
2. Verify that they are both integer
3. If one or both are not integers, then display an error in the Paragraph
4. If they are both integers, display the result of adding the two inputs
   together

HINTS:

- you may want to create a "validateInteger" function that checks if the value
  given to it is an integer.

## Exercise 4

Filenames: `exercise-4.html` and `js/exercise-4.js`

Create a JS function that accepts three numbers and returns True if a triangle
is Right Angled, and False if it is not.

A right-angled triangle is when:

```text
 |\
 | \
B|  \ C
 |   \
 |    \
 +-----\ 
  A
```

C * C == (A * A + B * B)

## Exercise 5

Filenames: `exercise-5.html` and `js/exercise-5.js`

Create an HTML page that has a `H1` with "Week Days" as its content. After the
heading, it then has a `div` with an ID of `days` that is empty.

Using the following definitions:

```js
   let day_index = 0 ;
   let days_of_week = [ 
       "Monday", "Tuesday", "Wednesday", "Thursday",                        
       "Friday", "Saturday", "Sunday" 
   ] ;
```

Create the JavaScript to add an UNORDERED list to the DIV with the week days.

Use a While Loop to complete this exercise.

HINTS:
- Use the `<ul>` element to create the list then the `<li> </li>` element to 
  wrap around the day to be output.
  
Remember an unordered list looks like this:
```html
<ul>
  <li>First Item</li>
  <li>Second Item</li>
  <li>Third Item</li>
</ul>
```


## Exercise 6

Filenames: `exercise-6.html` and `js/exercise-6.js`

Create a JS function that accepts three numbers and returns True if a
triangle is Isosceles, and False if it is not.

Isosceles triangles have two sides the same length.

## Exercise 6

Filenames: `exercise-5.html` and `js/exercise-5.js`

Create a JS function that accepts three numbers and returns True if a
triangle is Equilateral, and False if it is not.

Equilateral triangles have all three sides the same length.


