const divWithId = document.getElementById("div-id")

divWithId.style.color = "purple" // set color

const divsWithClass = document.getElementsByClassName("div-class")
console.log(divsWithClass)

const divsWithClassArray = Array.from(divsWithClass) // converts something similar to an array, to an actual array
divsWithClass[2].style.color = "green"
// divsWithClassArray.forEach(div => (div.style.color = "green")) 