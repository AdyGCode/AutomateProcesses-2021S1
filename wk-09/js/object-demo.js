/**
 * Object Demo
 */

let person = {
    givenName : "Fred",
    familyName : "Bloggs",
    age: 34,
}

console.log("Age", person.age)

for (let prop in person) {
    console.log(prop,":",person[prop])
}
