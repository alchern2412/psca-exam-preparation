// 40.	Пакет Express. Основные принципы работы. Обработка Cookie.
// Signed cookie. Пример(POSTMAN).

// localhost:3000/

const express = require('express')
const app = express()


// npm i cookie-parser
const cookieparser = require('cookie-parser')()

const PORT = process.env.PORT || 3000

app.use(cookieparser)

app.get('/', (req, res) => {
    let myid = req.cookies.myid

    if (isFinite(myid)) {
        ++myid
    } else {
        myid = 0
    }

    res.cookie('myid', myid)
        .send(`myid = ${myid}`)
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})
