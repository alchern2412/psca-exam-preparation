// 30.	Пакет Express. Основные принципы работы. Middleware-код. Пример.

const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

// middleware
app.use((req, res, next) => {
    console.log('handler-01-forward')
    next()
    console.log('handler-01-back')
})

app.get('/', (req, res) => {
    console.log('get request')
    res.send('get request')
})
app.post('/', (req, res) => {
    console.log('get request')
    res.send('get request')
})
app.put('/', (req, res) => {
    console.log('get request')
    res.send('get request')
})
app.delete('/', (req, res) => {
    console.log('get request')
    res.send('get request')
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})