// const events = require('events')
// const util = require('util')

// const teams = function (name) {
//   this.name = name
// }

// util.inherits(teams, events.EventEmitter)

// const Meizie = new teams('Meizie')
// const Kaybzie = new teams('Kaybzie')
// const Familizie = new teams('Familizie')

// const teamArray = [Meizie, Kaybzie, Familizie]

// teamArray.forEach((team) => {
  
  
//   team.on('nation', function(nation){
//       console.log(team.name + ' is ' + nation + ' club')
//   })
// })

// Meizie.emit('nation', 'china')
// Kaybzie.emit('nation', 'turkish')
// Familizie.emit('nation', 'mcdonald island')

const fs = require('fs');

// fs.readFile('read-me.txt', 'utf-8', function(error, data) {
//   fs.writeFile('write.txt', data, function(error){
//     if (error) {
//       console.log(error)
//     }
//   } 
    
//   )
//   console.log(data)
// })

// fs.writeFileSync('write.txt', text)
// write inside file ^^^         ^^^^
//          file u want to write | what you want to write

// fs.unlink('write.txt', (error) => {
//   console.log(error)
// })

// fs.rmdirSync('myfldr');
// ^^ add dir

//fs.rmdirSyng('myfldr)


// ** to make the action ASYNCROUNOUS remove the sync

// fs.mkdir('myfldr', () => {
//   fs.readFile('read-me.txt', 'utf-8', (error, data) => {
//     fs.writeFile('./myfldr/writestuff.txt', data, () => {

//     })
//   })
// });

fs.unlink('./myfldr/writestuff.txt', (error) => {
  console.log(error)
})

fs.rmdir('myfldr', (error) => {
  console.log(error)
})