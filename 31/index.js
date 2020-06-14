//31.	Пакет Express. Основные принципы работы. Маршрутизация. Пример.

const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

// middleware
app.use('/api/users', require('./routes/api/users'))

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