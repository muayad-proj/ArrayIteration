//console.log("asdfs")
// Append the katas to this element:
const main = document.querySelector('main')
function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes1) 
console.log(greenEyes1)


// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// kata 1

isActive = users.filter(user => user.isActive === true)
printKata(1, isActive)
// Kata 2
let userEmail = users.map(user => user.email)
printKata(2, userEmail)
// Kata 3
let componyName = users.some( user => user.company ==="OVATION") 
printKata(3, componyName)

//kata 4
let firstuser= users.find(user => user.age > 38)
printKata(4, firstuser)
//kata 5
let firstuserActive = users.filter( user => user.isActive).find( user => user.age>38)
printKata(5, firstuserActive)

// kata 6
let userbalance = users.filter( user => user.company === "ZENCO") .map( user => user.balance)
printKata(6, userbalance)
console.log(userbalance)

let userAgeFugiat= users.filter(user => user.tags.includes("fugiat")) .map( user =>user.age) 
printKata(7, userAgeFugiat)

