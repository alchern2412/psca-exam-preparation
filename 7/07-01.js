// 7.	Разработка HTTP-сервера в Node.js. Обработка запросов к статическим ресурсам:  
// html, css, js, png, msword.  Пример. Тестирование с помощью браузера.

// http://localhost:3000/png/07-01.png || http://localhost:3000/07-01.html

var http = require('http');
let stat = require('./m07-01')('./static');

let http_hander = (req, res) => {
    console.log(req.url);
    switch (req.method) {
        case 'GET':
            if (stat.isStatic('html', req.url)) {
                stat.sendFile(req, res, { 'Content-Type': 'text/html; charset=utf-8' });
            } else if (stat.isStatic('js', req.url)) {
                stat.sendFile(req, res, { 'Content-Type': 'text/javascript; charset=utf-8' });
            } else if (stat.isStatic('css', req.url)) {
                stat.sendFile(req, res, { 'Content-Type': 'text/css; charset=utf-8' });
            } else if (stat.isStatic('png', req.url)) {
                stat.sendFile(req, res, { 'Content-Type': 'image/png' });
            } else if (stat.isStatic('mp4', req.url)) {
                stat.sendFile(req, res, { 'Content-Type': 'video/mp4' });
            } else if (stat.isStatic('xml', req.url)) {
                stat.sendFile(req, res, { 'Content-Type': 'application/xml' });
            } else if (stat.isStatic('docx', req.url)) {
                stat.sendFile(req, res, { 'Content-Type': 'application/msword' });
            } else if (stat.isStatic('json', req.url)) {
                stat.sendFile(req, res, { 'Content-Type': 'application/json' });
            }
            else {
                stat.writeHTTP404(res);
            }

            break;
        default: stat.writeHTTP405(res);
            break;

    }
}



let server = http.createServer();

server.listen(3000, (v) => {
    console.log('server.listen(3000)');
}).on('error', (e) => {
    console.log('server.listen(3000): error.code: ' + e.code);
}).on('request', http_hander);
