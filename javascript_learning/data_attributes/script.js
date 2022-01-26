// const test = document.querySelector('[data-test]')

// console.log(test.dataset.testTwo)
// //get the data of a specific attribute

// console.log(test.dataset)
// //gives a js object with all data-test attributes

// test.dataset.test = "5555"
// // change the value of the data attribute

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener("click", () =>  {
        const currentClicks = (parseInt(button.dataset.clicks)) // callin the attribute with data-clicks
        button.dataset.clicks = currentClicks + 1
    })
})