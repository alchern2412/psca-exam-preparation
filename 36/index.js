// 36.	Пакет Express. Основные принципы работы. Обработка json-данных POST-запроса. Пример (POSTMAN).

// localhost:3000/

// {
//     "x": 10,
//     "y": 20,
//     "testStr": "string param"
// }

const express = require('express')
const bodyparser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.post('/', (req, res) => {
    console.log(`Req.body ${JSON.stringify(req.body)}`)

    res.send(`Request body:  ${JSON.stringify(req.body)}`)
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})


