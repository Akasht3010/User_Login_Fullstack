const express = require('express')
const path = require('path')
const app = express()
const port = 3000 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "html", "signIn.html"))
})

app.get('/dashboard', (req, res) => {
    res.send("I am dashboard")
})

app.listen(port, () => {
    console.log(`Your server is running at port: localhost:${port}/`)
})