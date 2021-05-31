let word = "Race Car"
word = "Madam, I'm, Adam!"

// RegEx to grab all NON "word" characters
let regex = new RegExp(/[^A-Za-z0-9]/g);

let fixedWord = word.replace(regex,"").toLowerCase()

let wordLength = fixedWord.length
let palindrome = true

for ( let count = 0; count < wordLength; count ++) {
    if (fixedWord[count] != fixedWord[wordLength -1 - count]){
        palindrome = false
        break
    }
}

console.log(word)
console.log(fixedWord)
console.log(palindrome)
