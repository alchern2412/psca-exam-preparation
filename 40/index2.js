// 40.	Пакет Express. Основные принципы работы. Обработка Cookie.
// Signed cookie. Пример(POSTMAN).

// localhost:3000/

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

// npm i cookie-parser
const cookieparser = require('cookie-parser')
const cookiesecret = '1234567890'


app.use(cookieparser(cookiesecret))

app.get('/', (req, res) => {
    let myid = req.signedCookies.myid

    if (isFinite(myid)) {
        ++myid
    } else {
        myid = 0
    }

    console.log(myid)

    res.cookie('myid', myid, { signed: true })
        .send(`myid = ${myid}`)
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})
