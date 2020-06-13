// 19.	Разработка HTTP-клиента в Node.js. Обработка ответа с файлом (download).
// Пример. Тестирование с помощью с Node.js-сервера.   

var http = require('http');
var fs = require('fs');

var file = fs.createWriteStream("file.gif");
var file2 = fs.createWriteStream("file2.gif");

let options = {
    host: 'localhost',
    path: '/png',
    port: 3000,
    method: 'GET'
}

var req = http.request(options, (res) => {
    console.log('http.request: method = ', req.method);
    console.log('http.request: response = ', res.statusCode);
    console.log('http.request: statusMessage = ', res.statusMessage);
    let data = '';
    res.on('data', (chunk) => {
        console.log('http.request: data: body = ', data += chunk);
    });
    res.on('end', () => {
        console.log('http.request: end: body = ', data);

        //data.pipe(file2);
    })
    res.pipe(file);
});

req.on('error', (e) => {
    console.log("http.request: error: ", e.message);
});
req.end();




