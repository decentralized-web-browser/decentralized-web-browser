const request = require('request-promise')
const fs = require('fs')
const commander = require('commander')

commander
	.option('-u, --url <url>', 'The url you want to get [url]', 'https://google.com')
	.parse(process.argv)

if(!commander.url) commander.url = 'https://google.com'

init()

async function init() {
	try {
		const page = await request(commander.url)
		fs.writeFileSync('page.html', page)
	} catch (e) {
		console.log('Error when processing the request', e)
	}
}
