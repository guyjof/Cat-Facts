const factService = require('./facts.service')

async function getFacts(req, res) {
	try {
		const facts = await factService.query()
		res.send(facts)
	} catch (err) {
		console.log(err)
		throw err
	}
}

async function removeFact(req, res) {
	try {
		const { id } = req.params
		const facts = await factService.remove(id)
		res.send(facts)
	} catch (err) {
		console.log(err)
		throw err
	}
}

async function saveFact(req, res) {
	try {
		const facts = await factService.save(req.body)
		res.send(facts)
	} catch (err) {
		console.log(err)
		throw err
	}
}

module.exports = {
	getFacts,
	saveFact,
	removeFact,
}
