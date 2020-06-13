// 6.	Разработка HTTP-сервера в Node.js. Обработка GET, POST, PUT и DELETE-запросов.  
// Генерация ответа с кодом 404. Пример. Тестирование с помощью POSTMAN. 

var http = require('http');

http.createServer((request, response) => {
    if (request.url.includes('404')) {
        response.writeHead(404);
        console.log(response.statusCode);
        response.statusMessage = "Error 404";
        console.log(response.statusMessage);
        response.end("Error");
        return
    }

    switch (request.method) {
        case 'GET':
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end("<h1>GET-REQUEST</h1>")
            break;
        case 'POST':
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end("<h1>POST-REQUEST</h1>")
            break;
        case 'PUT':
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end("<h1>PUT-REQUEST</h1>")
            break;
        case 'DELETE':
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end("<h1>DELETE-REQUEST</h1>")
            break;
    }
}).listen(3000);