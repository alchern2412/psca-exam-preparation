// 20.	Разработка Websockets-приложения: Node.js-сервер, браузер-клиент. Пример.

const httpserver = require('http').createServer((req, res) => {
    if (req.method == "GET" && req.url == "/start") {
        res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
        res.end(require('fs').readFileSync("./start.html"));
    }
});

httpserver.listen(4000);
console.log("http://localhost:4000/start");

let k = 0;
let n = 0;

const WebSocket = require("ws"); // npm install ws
const wsserver = new WebSocket.Server({
    port: 3000,
    host: "localhost",
    path: "/wsserver"
});



wsserver.on("connection", (ws) => {
    ws.on("message", message => {
        n++;
        console.log(`Recieved message => ${message}`);
    });
    setInterval(() => {
        ws.send(`10-01-server: ${n}->${++k}`);
    },
    5000);
});

wsserver.on('error', (e) => {
    console.log("ws server error ", e);
});

console.log(`ws server: host: ${wsserver.options.host}, port: ${wsserver.options.port}, path: ${wsserver.options.path}`);




