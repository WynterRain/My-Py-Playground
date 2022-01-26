const dataAttributeElement = document.querySelector('[data-test]') // shows just 1 attribute
// querySelectorAll shows all attributes as an array
const divsWithClasses = document.querySelectorAll('.div-class')
const input = document.querySelector("body > input[type = 'text']")
dataAttributeElement.style.color = "green"
Array.from(divsWithClasses)
divsWithClasses.forEach(div => (div.style.color = "red"))

console.log(divsWithClasses)
console.log(input)