// 1 select all elements
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')
// 2 when submit, add new element

form.addEventListener('submit', e => {
    e.preventDefault()

    // 1 create new item
    const item = document.createElement('div')
    item.innerText = input.value
    item.classList.add('list-item')
    //2 add item to list
    list.appendChild(item)
    // 3 clear nput
    input.value = ''
    // 4 set up eventlistener to delete on click
    item.addEventListener('click', () => item.remove())
})