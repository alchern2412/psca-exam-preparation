// 35.	Пакет Express. Основные принципы работы. Обработка body-параметров POST-запроса. Пример (POSTMAN).

// localhost:3000/
// x-www-form-urlencoded....

const app = require('express')()
const bodyparser = require('body-parser')

const PORT = process.env.PORT || 3000

app.use(bodyparser.urlencoded({ extended: false }))

app.post('/', (req, res) => {
    console.log(`Req.body ${JSON.stringify(req.body)}`)

    res.send(`Request body:  ${JSON.stringify(req.body)}`)
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})


