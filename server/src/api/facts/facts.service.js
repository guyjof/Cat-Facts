const fs = require('fs')
const gFacts = require('../../data/facts.json')

module.exports = {
	query,
	save,
	remove,
}

function query() {
	return Promise.resolve(gFacts)
}

function remove(factId) {
	const idx = gFacts.findIndex(fact => fact._id === factId)
	if (idx === -1) return Promise.reject('Error: no fact found!')
	const fact = gFacts.splice(idx, 1)
	_saveFactsToFile()
	return Promise.resolve(gFacts)
}

function save(factToSave) {
	const fact = {
		_id: factToSave._id || _makeId(),
		fact: factToSave.fact,
		length: factToSave.length
	}
	gFacts.unshift(fact)
	_saveFactsToFile().then(() => fact)
	return Promise.resolve(gFacts)
}

function _makeId() {
	return Math.random().toString(36).substring(2)
}

function _saveFactsToFile() {
	return new Promise((resolve, reject) => {
		fs.writeFile('src/data/facts.json', JSON.stringify(gFacts, null, 2), err => {
			if (err) return reject(err)
			resolve()
		})
	})
}
