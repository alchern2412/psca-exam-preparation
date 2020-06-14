// 38.	Пакет Express. Основные принципы работы. download/attachment файлы GET-запроса. Пример (браузер).

// localhost:3000/

const app = require('express')()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log('download')

    res.download('./public/test.txt', 'file.txt')    
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})


