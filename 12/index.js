// 12.	Разработка HTTP-сервера в Node.js. Пересылка файла    в POST-запросе (upload). 
// Пример. Тестирование с помощью браузера.

var http = require('http');
let url = require('url');

let fs = require('fs');
let qs = require('querystring');

let mp = require('multiparty'); // npm install multiparty

// http://localhost:3000/html

let http_hander = (req, res) => {
    let p = url.parse(req.url, true)
    console.log(p.pathname);
    console.log(p.path);
    switch (req.method) {
        case 'GET':
            switch (p.pathname) {
                case '/html': // чтоб открылась форма
                    res.end(fs.readFileSync('./upload.html'));
                    break;
            }
        case 'POST':
            switch (p.pathname) {
                case '/upload':
                    let upResult = '';
                    let form = new mp.Form({ uploadDir: './static' });
                    form.on('field', (name, value) => {
                        console.log(name, value);
                        upResult += `<br/>---${name} = ${value}`;
                    });

                    form.on('file', (name, file) => {
                        console.log(name, file);
                        upResult += `<br/>---${name} = ${file.originalFilename} : ${file.path}`;
                        form.on('close', () => {
                            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                            res.write('<h1>Form</h1>');
                            res.write(upResult);
                            res.end();
                        })
                    });
                    form.on('error', (err) => {
                        console.log("err = " + err);
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.write('<h1>Form/Error</h1>');
                        res.end();
                    });

                    form.parse(req);
                    break;
                // default:
                //     res.end("NOT FOUND");
                //     break;
            }
            break;
        default:
            // res.end('NOT FOUND');
            break;

    }
}


let server = http.createServer();

server.listen(3000, (v) => {
    console.log('server.listen(3000)');
}).on('error', (e) => {
    console.log('server.listen(3000): error.code: ' + e.code);
}).on('request', http_hander);


