/* const grandParent = document.querySelector('#grand-parent')

// grandParent.style.color = "red"

// console.log(grandParent.children)
 // this will give us the parents which are the children of the grandparents

// console.log(grandParent.children[0]) 
// use index to get the specific element (parent)

// const parentOne = grandParent.children[0].style.color = "red"
// change the individual parent to color red

parentOne = grandParent.children[0]
const parentTwo = parentOne.nextElementSibling
// move from first parent to the second parent

// const parentPrev = parentOne.previousElementSibling
// move from first parent to the previous parent

const childOne = parentOne.children[0]
const childTwo = parentOne.children[1]

childTwo.style.color = "red" */

// ---------------------------------------

// const childOne = document.querySelector('#child-one')

// childOne.style.color = "red"

// const parentOne = childOne.parentElement // this is to get the parent of the current element
// const parentOfParent = parentOne.parentElement
// parentOfParent.style.color="red"

// /* element navigation tools
// forward - x.children
// backward - x.parentElement
// next - x.nextElementSibling
// prev - x.previousElementSibling */

// const jumpGrandparent = childOne.closest(".grand-parent") 
// /* .grand-parent == name of the class
// closest selects elements that are a parent any parent; not children
// finds the very first one that matches */
// jumpGrandparent.style.color = "blue"
// -----------------------------------------
const grandParent = document.querySelector('#grand-parent')

const children = grandParent.querySelectorAll('.child')
const parent = grandParent.querySelector(".red")

children.forEach(child => child.style.color = "red")
parent.style.color = "green"