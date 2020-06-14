// 37.	Пакет Express. Основные принципы работы. Обработка xml-данных POST-запроса. Пример (POSTMAN).

// localhost:3000/

{/* <calculate>
    <x>10</x>
    <y>20</y>
</calculate> */}

const express = require('express')
const bodyparser = require('body-parser')

const xmlparser = require('express-xml-bodyparser')
const xmlbuilder = require('xmlbuilder')

const app = express()
const PORT = process.env.PORT || 3000

// npm i express-xml-bodyparser
app.use(xmlparser())

app.post('/', (req, res) => {
    const x = req.body.calculate.x[0]
    const y = req.body.calculate.y[0]

    const result = xmlbuilder
        .create('result')
        .att('server', '37')
    result.ele('sum', { value: +x + +y })

    console.log('Res:', result.toString({ pretty: true }));


    res.send(result.toString({ pretty: true }))
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})


