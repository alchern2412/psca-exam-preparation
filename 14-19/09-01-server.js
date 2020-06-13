var http = require('http');
let url = require('url');

let fs = require('fs');
let qs = require('querystring');

//let stat = require('./m07-01')('./static');

let parseString = require('xml2js').parseString; // npm install xml2js
let xmlbuilder = require('xmlbuilder');  // in xml2js   

let mp = require('multiparty'); // npm install multiparty

var localAddress;
var localPort;
var remoteAddress;
var remotePort;

let h = (r) => {
    let rc = '';
    for (key in r.headers) {
        rc += '<h3>' + key + ':' + r.headers[key] + '</h3>';

    }
    return rc;
}

let http_hander = (req, res) => {
    let p = url.parse(req.url, true)
    let result = '';
    let q = url.parse(req.url, true).query;
    console.log(p.pathname);
    console.log(p.path);
    console.log(p.query);
    switch (req.method) {
        case 'GET':
            switch (p.pathname) {
                case "/png":

                    const fname = './static/gif.gif';
                    let png = null;

                    fs.stat(fname, (err, stat) => {
                        if (err) {
                            console.log('error:', err);
                        } else {
                            png = fs.readFileSync(fname);
                            res.writeHead(200, {
                                // 'Content-Type': 'image/gif',
                                // 'Content-Length': stat.size,
                                'Content-disposition': 'attachment; filename=gif.gif'
                            });
                            res.end(png);
                        }

                    });

                    break;


                case '/connection':
                    var s = server.keepAliveTimeout;
                    if (q.set != undefined) {
                        server.keepAliveTimeout = parseInt(q.set);
                        res.end("KeepAliveTimeOut changed to " + q.set);
                    } else {
                        res.end("KeepAliveTimeOut: " + s.toString());
                    }
                    break;
                case '/headers':
                    res.statusCode = 200;
                    res.statusMessage = "Hello world call +375 29 840 24 12";
                    res.setHeader('X-alex_chernyavsky', 'test_message in header');
                    res.write(
                        '<!DOCTYPE html> <html><head></head>' +
                        '<body>' +
                        '<h2>' + 'method: ' + req.method +
                        '<h2>' + 'url: ' + req.url +
                        '<h2>' + 'version: ' + req.httpVersion +
                        '<h2>' + 'HEADERS' + '</h2>' +
                        h(req) +
                        '</body>' +
                        '</html>'
                    );
                    res.end();



                    break;
                // 3
                case '/parameter':
                    if (!isNaN(parseInt(q.x)) && !isNaN(parseInt(q.y))) {
                        var a1 = parseInt(q.x);
                        var a2 = parseInt(q.y);
                        res.write("Sum:  " + (a1 + a2) + "   ");
                        res.write("Sub:  " + (a1 - a2) + "   ");
                        res.write("Mul:  " + (a1 * a2) + "   ");
                        res.end("Div:  " + (a1 / a2) + "   ");
                    } else {
                        res.end("Error");
                    }


                    //parameter/x/y


                    break;
                // 5
                case '/close':
                    setTimeout(() => {
                        server.close();
                    }, 10000)
                    res.write('Server will close in 10 seconds');
                    res.end();

                    break;

                // 6
                case '/socket':
                    res.write('<html><body>');
                    res.write('localAddress: ' + localAddress + '<br/>');
                    res.write('localPort: ' + localPort + '<br/>');
                    res.write('remoteAddress: ' + remoteAddress + '<br/>');
                    res.write('remotePort: ' + remotePort + '<br/>');
                    res.write('</body></html>');
                    res.end();
                    break;

                // 7
                case '/req-data':
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

                    let buf = '';
                    req.on('data', (data) => {
                        console.log('request.on(data) = ', data.length);
                        buf += data;
                    });
                    req.on('end', () => {
                        console.log('request.on(end) = ', buf.length);
                    });

                    res.write('<h2>Http-server</h2>');
                    res.end('<h3>/req-data</h3>');

                    break;
                case '/resp-status':
                    if (!isNaN(parseInt(q.code)) && q.mess != undefined) {
                        var code = parseInt(q.code);
                        res.statusCode = code;
                        res.statusMessage = q.mess;
                        res.write("Message is sent");

                    } else {
                        res.write('Wrong parms');
                    }

                    res.end();

                    break;
                case '/html': // чтоб открылась форма
                    res.end(fs.readFileSync('./08-01.html'));

                    break;

                case '/files':
                    fs.readdir('./static', (err, files) => {
                        res.end("Count of files of static/files = " + files.length);

                    });
                    break;
                case '/upload':
                    res.end(fs.readFileSync('./upload.html'));

                    break;


                case '/08-10': // чтоб открылась форма
                    res.end(fs.readFileSync('./08-10.html'));

                    break;
                default:
                    res.end("default");

            }
            break;
        case 'POST':
            switch (p.pathname) {

                case '/formparameter':
                    let result = '';
                    req.on('data', (data) => {
                        result += data;
                    });
                    req.on('end', () => {
                        result += '<br/>';
                        let o = qs.parse(result);
                        for (let key in o) {
                            result += `${key} = ${o[key]}<br/>`
                        }
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
                        res.write("<h2>All parameters</h2>");
                        res.end(result);
                    })

                    break;
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
                                "__comment": "Response. Lab 8/10",
                                "x_plus_y": obj.x + obj.y,
                                "Concatination_s_o": "Message: " + obj.o.surname + ", " + obj.o.name,
                                "Length_m": obj.m.length
                            }
                            res.end(JSON.stringify(objjsonObject));
                        } catch {
                            res.end("Error")
                        }
                    });


                    break;
                case '/xml':
                    let xmlText = '';
                    req.on('data', (data) => {
                        xmlText += data;
                    });
                    req.on('end', () => {
                        try {
                            console.log(xmlText);
                            let sum = 0;
                            let concat = '';

                            parseString(xmlText, function (err, result1) {
                                if (!err) {
                                    obj = result1;
                                    console.log('-----parse xml-----');
                                    console.log(result1);

                                    result1.request.x.map((e, i) => {
                                        sum += parseInt(e.$.value);
                                    })
                                    result1.request.m.map((e, i) => {
                                        concat += e.$.value;
                                    })
                                } else {
                                    console.log(err.mess);
                                }
                            })
                            let xmlResponse = xmlbuilder.create('response').att('id', 33);




                            xmlResponse.ele('sum').att('element', 'x').att('result', sum);
                            xmlResponse.ele('concat').att('element', 'm').att('result', concat);

                            res.end(xmlResponse.toString({ pretty: true }));
                        } catch {
                            res.end("Error")
                        }
                    });



                    break;
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
                            res.end(upResult);
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
            }

            break;
        default:

            break;

    }
}



let server = http.createServer();

server.listen(3000, (v) => {
    console.log('server.listen(3000)');
}).on('error', (e) => {
    console.log('server.listen(3000): error.code: ' + e.code);
}).on('request', http_hander)
    .on('connection', (socket) => {
        localAddress = socket.localAddress;
        localPort = socket.localPort;
        remoteAddress = socket.remoteAddress;
        remotePort = socket.remotePort;
    });


