// 18.	Разработка HTTP-клиента в Node.js.  Пересылка файла на сервер в POST-запросе (upload).   
// Пример. Тестирование с помощью с Node.js-сервера.

var http = require('http');
let fs = require('fs');

let bound = "alc20-alc20-alc20";
let body = `--${bound}\r\n`;
body += 'Content-Disposition:form-data; name="file"; filename="MyFile.txt"\r\n';
body += 'Content-Type:text/plain\r\n\r\n';
body += '11111\n22222\n333\n4444'; // data 
body += fs.readFileSync('./MyFile.txt') // data from file
body += `\r\n--${bound}--\r\n`;

let path = `/upload`;

let options = {
    host: 'localhost',
    path: path,
    port: 3000,
    method: 'POST',              // post!
    headers: {
        'content-type': 'multipart/form-data; boundary=' + bound
    }
}

const req = http.request(options, (res) => {
    console.log('http.request: method = ', req.method);
    console.log('http.request: response = ', res.statusCode);
    console.log('http.request: statusMessage = ', res.statusMessage);
    let data = '';
    res.on('data', (chunk) => {
        console.log('http.request: data: body = ', data += chunk.toString('utf8'));
    });
    res.on('end', () => {
        console.log('http.request: end: body = ', data);
    })
})

req.on('error', (e) => {
    console.log('http.request: error: ', e.message);
})

req.end(body);
