const express = require('express')
const path = require('path')
const app = express()

app.use('/public/bundle.js', express.static(path.join(__dirname, 'bundle.js')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'))
})

const server = app.listen(8765, () => {
    const host = server.address().address
    const port = server.address().port

    console.log(`START SERVER - LISETENING AT http://${host}:${port}`)
})