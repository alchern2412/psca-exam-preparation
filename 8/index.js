// 8.	Разработка HTTP-сервера в Node.js. Обработка query-параметров GET-запроса. Пример. 
// Тестирование с помощью браузера.

// http://localhost:3000/?x=10&y=20

const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    let p = url.parse(request.url, true);
    console.log(p);

    let x = +p.query.x;
    let y = +p.query.y;
    if (!isNaN(x) && !isNaN(y)) {
        let result = '';
        result += 'x + y = ' + (x + y) + '<br/>';
        result += 'x - y = ' + (x - y) + '<br/>';
        result += 'x * y = ' + (x * y) + '<br/>';
        result += 'x / y = ' + (x / y) + '<br/>';
        response.end(result);
    }
    else {
        response.end(p.pathname);
    }
}).listen(3000);