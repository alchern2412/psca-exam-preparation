// 22.	Разработка  RPC-Websockets-сервера. Пример. Тестирование:  Node.js-клиент. 

// npm install rpc-websockets
const rpcWSS = require('rpc-websockets').Server

let server = new rpcWSS({
    port: 4000, 
    host: 'localhost'
});

server.setAuth((u) => {
    return (u.login == 'alchern' && u.password == '1234');
});

// public rpc-s
server.register('square', (params) => {
    let result;
    if (params.length == 1) {
        result = params * params * Math.PI;
    } else if(params.length == 2) {
        result = params[0] * params[1];
    } else {
        result = -1;
    }
    return result;
}).public();

server.register('sum', (params) => {
    let sum = 0;
    params.forEach(element => {
        sum += element;
    });
    return sum;
}).public();

server.register('mul', (params) => {
    let mul = 1;
    params.forEach(element => {
        mul *= element;
    });
    return mul;
}).public();

// protected rpc-s

server.register('fib', (params) => {
    let n = params[0];
    if (n == 1) {
        return [0];
    }
    var fibonacci = [0, 1];
    for (i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    return fibonacci;
}).protected();

server.register('fact', (params) => {
    let n = params[0];
    var fact = 1;
    for (i = 1; i < n; i++) {
        fact = fact * i;
    }
    return fact;
}).protected();



