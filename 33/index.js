// 33.	Пакет Express. Основные принципы
// работы. Обработка query-параметров GET-запроса. Пример (POSTMAN).

// http://localhost:3000/?x=5&y=10

const app = require('express')()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log('Query params: ', req.query);

    if (req.query.x) {
        console.log(`'x' = ${req.query.x}`)
    } else {
        console.log(`'x' is undefined`)
    }

    if (req.query.y) {
        console.log(`'y' = ${req.query.y}`)
    } else {
        console.log(`'y' is undefined`)
    }

    res.send(`Query params ${JSON.stringify(req.query)}`)
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})