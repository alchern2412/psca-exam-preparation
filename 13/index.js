// 13.	Разработка HTTP-сервера в Node.js. Пересылка файла в ответе (download). 
// Пример. Тестирование с помощью браузера.

// http://localhost:3000/?file=test.txt

var http = require('http'),
    url = require('url'),
    fs = require('fs');
 
 
//create the http server listening on port 3000
http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
     
    if (typeof query.file === 'undefined') {
        //specify Content will be an attachment
        res.setHeader('Content-disposition', 'attachment; filename=theDocument.txt');
        res.setHeader('Content-type', 'text/plain');
        res.end("Hello, here is a file for you!");
    } else {
        //read the image using fs and send the image content back in the response
        fs.readFile('./static/' + query.file, function (err, content) {
            if (err) {
                res.writeHead(400, {'Content-type':'text/html'})
                console.log(err);
                res.end("No such file");    
            } else {
                //specify Content will be an attachment
                res.setHeader('Content-disposition', 'attachment; filename='+query.file);
                res.end(content);
            }
        });
    }
 
}).listen(3000);
console.log("Server running at http://localhost:3000/");


