//https://tediousjs.github.io/node-mssql/#connection-pools

var http = require('http');
var fs = require('fs');

const sql = require('mssql/msnodesqlv8');
const pool = new sql.ConnectionPool({
    database: "lab14node",
    server: "DESKTOP-CF08RUL",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});

const GET_handler = (req, res) => {
    var parseUrl = require('url').parse(req.url);

    if (parseUrl.pathname.includes("/api/")) {
        var table = parseUrl.pathname.replace("/api/", "");
        console.log("table: " + table);

        pool.connect().then(() => {
            
            pool.request().query(`select * from ${table}`, (err, result) => { // select
                if (err) {
                    return res.end(JSON.stringify({
                        code: 1,
                        message: `Table ${table} does not exist`
                    }))
                } else {
                    console.log(result.recordset);
                    return res.end(JSON.stringify(result.recordset));
                }
                pool.close();
            });
        });
    } else if (parseUrl.pathname === '/') {
        let html = fs.readFileSync('14-03.html');
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8'
        });
        return res.end(html);
    }

    console.log(parseUrl);
}

const http_handler = (req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8"
    })
    console.log(req.method, " - ", req.url);
    switch (req.method) {
        case "GET": GET_handler(req, res); break;
        case "POST": POST_handler(req, res); break;
        case "PUT": PUT_handler(req, res); break;
        case "DELETE": DELETE_handler(req, res); break;
        default: OTHER_handler(req, res); break;
    }
}

let server = http.createServer();
server.listen(3000, (v) => {
    console.log("server.listen(3000)");
}).on('error', (e) => {
    console.log("server.listen(3000); error: ", e);
}).on('request', http_handler);




