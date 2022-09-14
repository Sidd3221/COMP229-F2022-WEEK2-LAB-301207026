const connect = require('connect');
const app = connect();

function htmlResponse(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1>Hello from NodeJS Application as html</h1>");
}


function plainResponse(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello from NodeJS Application");
}


function jsonResponse(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"message": "Hello from NodeJS Application as json"}));
}

app.use('/html',htmlResponse);
app.use('/json',jsonResponse);
app.use('/', plainResponse);


app.listen(3000);