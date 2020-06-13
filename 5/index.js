// 5.	Разработка простейшего HTTP-сервера в Node.js. Извлечение данных из HTTP-запроса, 
// формирование данных HTTP-ответа.  Пример. Тестирование с помощью браузера AJAX (XMLHTTPRequest/Fetch). 
var http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

http.createServer((request, response) => {

    if (request.url === '/html') {
        let html = fs.readFileSync('./index.html');
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(html);
    } else {
        console.log('method', request.method)
        console.log('url', request.url)
        console.log('headers', request.headers)

        response.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        })
        response.end('Чернявский Алексей Леонидович');
    }



}).listen(PORT);

console.log(`Server is running ${PORT}`);