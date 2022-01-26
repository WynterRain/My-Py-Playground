const URL = "https://jsonplaceholder.typicode.com/comments"
const button = document.querySelector('button')
// fetch(URL)
//     .then(response => {
//     return response.json()
//     })
//     .then(data => {
//         console.log(data.map(user => user.name))
//         // console.log(data)
// }) 
// fetch is acutally async; 

async function fetchApi() {
    const response = await fetch(URL, {
        method: 'POST', // posting data
        headers:{
            'Content-Type':"application/json" 
        } ,
        body: JSON.stringify({
            title : "ugly meimei"
        })
    })
    // (response.ok) checks if no 404 error true or
    
    const post = await response.json()
    console.log(post)
    
}

fetchApi()

fetch(URL).then(res => res.json()).then(comments => {
    console.log(comments)
})