// 35.	Пакет Express. Основные принципы работы. Обработка body-параметров POST-запроса. Пример (POSTMAN).

// localhost:3000/
// x-www-form-urlencoded....

const app = require('express')()
const bodyparser = require('body-parser')

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log('download')

    res.download('./public/test.txt', 'file.txt')    
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})


