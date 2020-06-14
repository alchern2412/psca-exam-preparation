// 40.	Пакет Express. Основные принципы работы. Обработка Cookie.
// Signed cookie. Пример(POSTMAN).

// localhost:3000/

const express = require('express')
const app = express()

const secret = '1234567890'

const session = require('express-session')({
    resave: false,
    saveUninitialized: false,
    secret
})

const PORT = process.env.PORT || 3000

app.use(session)

app.get('/', (req, res) => {

    if (isFinite(req.session.mySessionValue)) {
        ++req.session.mySessionValue
    } else {
        req.session.mySessionValue = 0
    }

    console.log(`mySessionValue ${req.session.mySessionValue}`)

    res.send(`mySessionValue ${req.session.mySessionValue}`)
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})
