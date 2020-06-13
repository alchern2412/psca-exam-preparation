// 21.	Разработка Websockets-приложения:  обработка json-сообщений, Node.js-сервер, Node.js-клиент.
// Пример.

const WebSocket = require('ws');
const wss = new WebSocket.Server({
    port: 4000,
    host: "localhost"
});

let k = 0;

wss.on("connection", (ws) => {
    let x = "";
    
    ws.on("message", (data) => {
        let message = JSON.parse(data);
        x = message.client;

        console.log('on message: ', message);

        let t = new Date().toLocaleTimeString();

        ws.send(JSON.stringify({
            server: ++k,
            client: x,
            timestamp: t
        }));

    });
});



