// const btn = document.querySelector('[data-btn]')
// const input = document.querySelector('[data-input-text]')
const form = document.querySelector("[data-form]")
const link = document.querySelector('a')
// function printClick() {
//     console.log('clicked')
// }
// btn.addEventListener('click',printClick)
// click is what to listen for... everytime event runs then function also runs

// btn.addEventListener('click',() => {
//     console.log("clicked2")
// })


// btn.removeEventListener('click',printClick) // remove event listener

// btn.addEventListener('click', e => {
//     console.log(e)})
// people use 'e' as an event!

// input.addEventListener('change', () => { // checks when you type and then click off then it will console
//     console.log("change")
// })

// input.addEventListener('input', e => { // when you type a new character it wil log
//     console.log(e.target.value === "") // event check if string is empty
// })

// form.addEventListener('submit', e => {
//     e.preventDefault() // prevent the default action so it doesn't reload
//     console.log("submitted form")
// })

link.addEventListener('click', e => {
    e.preventDefault()
    console.log("clicked youtube")
})

window.addEventListener('resize', () => console.log("resize"))