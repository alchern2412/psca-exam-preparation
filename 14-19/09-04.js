// 16.	Разработка HTTP-клиента в Node.js.  Оправка POST-запроса с json-сообщением.  
// Пример. Тестирование с помощью с Node.js-сервера.

// 17.	Разработка HTTP-клиента в Node.js. Обработка json-ответа. 
// Пример. Тестирование с помощью с Node.js-сервера.   


var http = require('http');

let jsonm = JSON.stringify({
    "__comment": "Request. Lab 8/10",
    "x": 1,
    "y": 2,
    "s": "Message",
    "m":["a", "b", "c", "d"],
    "o" : {
        "surname" : "Ivanov",
        "name" : "Ivan"
    }
});

let path = `/json`;

let options = {
    host: 'localhost',
    path: path,
    port: 3000,
    method: 'POST',              // post!
    headers: {
        'content-type' : 'application/json', 
        'accept':'application/json'
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
        console.log('http.response: end: parse(body) = ', JSON.parse(data));
    })
})

req.on('error', (e) => {
    console.log('http.request: error: ', e.message);
})

req.end(jsonm);
