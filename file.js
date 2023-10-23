// fs module
// file handling

const fs = require('fs')

fs.writeFileSync('./test.txt', 'Hey there') // Sync call
fs.writeFile('./test.txt', 'Hehe', (err) => console.log(err)) // Async call

const content = fs.readFileSync('./test.txt', 'utf-8')
console.log(content)

fs.readFile('./test.txt', 'utf-8', (err, content) => {
	if(err) console.log(err)
	else console.log(content)
})

fs.appendFileSync('test.txt', 'New line lmao\n') 

