// 10.	Разработка HTTP-сервера в Node.js. Обработка параметров POST-запроса. 
// Пример. Тестирование с помощью браузера (<form>) и POSTMAN.

var http = require('http');
let url = require('url');

let fs = require('fs');
let qs = require('querystring');

// let mp = require('multiparty'); // npm install multiparty

// http://localhost:3000/html
// http://localhost:3000/formparameter

let http_hander = (req, res) => {
    let p = url.parse(req.url, true)
    console.log(p.pathname);
    console.log(p.path);
    switch (req.method) {
        case 'GET':
            switch (p.pathname) {
                case '/html': // чтоб открылась форма
                    res.end(fs.readFileSync('./index.html'));
                    break;
            }
        case 'POST':
            switch (p.pathname) {
                case '/formparameter':
                    let result = '';
                    req.on('data', (data) => {
                        result += data;
                    });
                    req.on('end', () => {
                        result += '<br/>';
                        let o = qs.parse(result);
                        for (let key in o) {
                            result += `${key} = ${o[key]}<br/>`
                        }
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
                        res.write("<h2>All parameters</h2>");
                        res.end(result);
                    })
                    break;
                // default:
                //     res.end("NOT FOUND");
                //     break;
            }
            break;
        default:
            res.end('NOT FOUND');
            break;

    }
}


let server = http.createServer();

server.listen(3000, (v) => {
    console.log('server.listen(3000)');
}).on('error', (e) => {
    console.log('server.listen(3000): error.code: ' + e.code);
}).on('request', http_hander);


