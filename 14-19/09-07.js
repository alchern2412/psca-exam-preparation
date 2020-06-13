var http = require('http');
let fs = require('fs');

let bound = "alc20-alc20-alc20";
let body = `--${bound}\r\n`;
body += 'Content-Disposition:form-data; name="file"; filename="pngFile.png"\r\n';
body += 'Content-Type:application/octet-stream\r\n\r\n';
// body += '11111\n22222\n333\n4444'; // data from file
// body += fs.readFileSync('C:\\Users\\Alexey Chernyavsky\\Downloads\\Univer\\Crossplatf\\labs\\lab9\\MyFile.txt') // data from file
// body += `\r\n--${bound}--\r\n`;



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
        console.log('http.request: data: body = ', data += chunk);
    });
    res.on('end', () => {
        console.log('http.request: end: body = ', Buffer.byteLength(data));
    })
})

req.on('error', (e) => {
    console.log('http.request: error: ', e.message);
})

req.write(body); // send 1 part

let stream = new fs.ReadStream('C:\\Users\\Alexey Chernyavsky\\Downloads\\Univer\\Crossplatf\\labs\\lab9\\static\\pngFile.png');
stream.on('data', (chunk) => {
    req.write(chunk);
    console.log("portion: ", Buffer.byteLength(chunk));
}); // send 2 part with portion
stream.on('end', () => {
    req.end(`\r\n--${bound}--\r\n`);
}); // send 3 part with portion
