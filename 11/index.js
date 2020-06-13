// 11.	Разработка HTTP-сервера в Node.js. Обработка  json-сообщения в POST-запросе. Пример. 
// Тестирование с помощью POSTMAN.

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
        case 'POST':
            switch (p.pathname) {
                case '/json':
                    let jsonObject = '';
                    req.on('data', (data) => {
                        jsonObject += data;
                    });
                    req.on('end', () => {
                        try {
                            let obj = JSON.parse(jsonObject);
                            console.log(obj);
                            let objjsonObject = {
                                "x_plus_y": obj.x + obj.y
                            }
                            res.end(JSON.stringify(objjsonObject));
                        } catch {
                            return res.end("Error")
                        }
                    });
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





