const request = require('request-promise')
const fs = require('fs')
// Take the latest parameter as the url
const url = process.argv[process.argv.length - 1]

async function init() {
	try {
		const page = await request(url)
		fs.writeFileSync('page.html', page)
	} catch (e) {
		console.log('Error when processing the request', e)
	}
}

init()
