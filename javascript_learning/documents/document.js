console.log(document)

// document shows the html of our pate

// show body
console.log(document.documentElement) // just shows the html portion of the file

const element = document.createElement("span")
element.innerText = 'Hai meimei'
document.body.appendChild(element)