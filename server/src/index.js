const express = require('express')
const cors = require('cors')
const factsRoutes = require('./api/facts/facts.routes')
const app = express()
const PORT = 3030

app.use(express.json())
app.use(cors())

app.use('/api/facts', factsRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
