const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:4000');

let parm0 = process.argv[0]; // path node
let parm1 = process.argv[1]; // path application
let parm2 = process.argv[2]; // first parameter


ws.on('open', () => {
    ws.on('message', data => {
        console.log("on message: ", JSON.parse(data));
    });
    let x = parm2;
    let t = new Date().toLocaleTimeString();
    ws.send(JSON.stringify({
        client: x,
        timestamp: t
    }));

});


