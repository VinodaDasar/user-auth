const express = require('express')
const app = express()
const configureDB = require('./config/database')
configureDB()
const router = require('./config/route')
const port = 3050

app.use(express.json())
app.use('/', router)

app.listen(port, () => {
    console.log('listening on port', port)
})