// const http = require('http')

// const fs = require('fs')

// const readStream = fs.createReadStream(__dirname + '/read-me.txt', 'utf-8');
// const writeStream = fs.createWriteStream(__dirname + '/write-me.txt')

// readStream.on('data', (chunk) => {
//     console.log('new data received')
//     console.log(chunk)
//     writeStream.write(chunk)
// })

// SKIP PIPE --- 

// server with html
// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html'})
//     const readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8')

//     readStream.pipe(res)
// })

// server.listen(3000, '127.0.0.1')

// server with js
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'})
    
    const person = {
        name: 'Heona',
        email: 'meimeiliu@gmail.com',
        job: 'artist'
    }

    res.end(JSON.stringify(person))
})

server.listen(3000, '127.0.0.1')