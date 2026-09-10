const express = require('express')
const

const app = express()
const port = 3000

app.get('/', (req, res ) => {
    res.send('server rodando')
})

app.listen(port, () => {
    console.log('backend rodando na porta ${port}')
})