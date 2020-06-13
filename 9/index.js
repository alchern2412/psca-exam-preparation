// 9.	Разработка HTTP-сервера в Node.js. Обработка uri-параметров GET-запроса. Пример. 
// Тестирование с помощью браузера.

// http://localhost:3000/parameter/5/7

var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    if (url.parse(request.url).pathname.search('\/parameter\/[a-zA-Z1-9]+\/[a-zA-Z1-9]+$') != (-1)) {
        response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        let p = url.parse(request.url, true);
        let r = decodeURI(p.pathname).split('/');
        let x = +r[2];
        let y = +r[3];
        if (!isNaN(x) && !isNaN(y)) {
            let result = '';
            result += 'x + y = ' + (x + y) + '<br/>';
            result += 'x - y = ' + (x - y) + '<br/>';
            result += 'x * y = ' + (x * y) + '<br/>';
            result += 'x / y = ' + (x / y) + '<br/>';
            response.end(result);
        }
        else response.end(p.pathname);
    } else {
        response.end(url.parse(request.url, true).pathname);
    }
}).listen(3000);