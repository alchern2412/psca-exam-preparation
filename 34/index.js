// 34.	Пакет Express. Основные принципы работы. Обработка uri-параметров запроса. Пример (POSTMAN).

// localhost:3000/10/20

const app = require('express')()
const PORT = process.env.PORT || 3000

app.get('/:x/:y', (req, res) => {
    console.log('Query params: ', req.query);

    console.log(`URI params: ${req.params}`);
    console.log(`URI params x: ${req.params.x}`);
    console.log(`URI params y: ${req.params.y}`);
    

    res.send(`URI params ${JSON.stringify(req.params)}`)
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})


