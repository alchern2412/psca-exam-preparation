// 15.	Разработка HTTP-клиента в Node.js.  Оправка POST-запроса с параметрами в теле.  
// Пример. Тестирование с помощью с Node.js-сервера.

var http = require('http');
var querystring = require('querystring');

let parms = querystring.stringify( {
    x : 3,
    y : 4,
    s : 'xxx'
})
let path = `/formparameter`;

let options = {
    host: 'localhost',
    path: path,
    port: 3000,
    method: 'POST'              // post! 
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

req.write(parms);

req.end();