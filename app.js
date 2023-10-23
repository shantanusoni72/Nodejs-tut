// const math = require('./math')
const http = require('http')

// console.log('Addition: ', math.add(1,3))
// console.log('Substition: ', math.subs(4,2))

const myServer = http.createServer((req, res) => {
	console.log('New Req')
	// console.log(res)
	// res.end('Hello')
	switch(req.url) {
		case '/':
			res.end('Home')
			break
		case '/about':
			res.end('About')
			break
}
})

myServer.listen(8000, () => { console.log('Server Started!') })

