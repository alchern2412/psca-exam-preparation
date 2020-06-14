// 39.	Пакет Express. Основные принципы работы. upload файла в POST-запросе. Пример (браузер).

// localhost:3000/

const app = require('express')()
const multer = require('multer')

const PORT = process.env.PORT || 3000

const upload = multer({ dest: 'upload/' })

app.post('/upload', upload.single('myfile'), (req, res) => {
    console.log(req.file)

    res.type('txt').send(`file upload ${req.file.originalname}`)   
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})
