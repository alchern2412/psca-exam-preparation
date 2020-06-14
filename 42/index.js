// 42.	Пакет Express. Основные принципы работы. Переадресация. Пример(POSTMAN).

// localhost:3000/

const app = require('express')()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log('/')

    res.redirect(`/red`)
})

app.get('/red', (req, res) => {
    console.log('/red')

    res.send('/ => /red')
})

app.post('/A', (req, res) => {
    console.log('POST /A');
    res.type('html').send('POST /A')
})

app.post('/B', (req, res) => {
    console.log('POST /B');
    res.redirect(308, '/A') // -> post /A
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})
