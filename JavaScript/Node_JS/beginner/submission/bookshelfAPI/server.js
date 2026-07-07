import http from 'http';

const requestListener = (request, response) => {
    response.setHeader = ('Content-Type', 'application/json');
    response.setHeader = ('Powered-By', 'Node.js');
    response.statusCode = 404;
    response.statusMessage = `User is not found!`

    const {url, method} = request;

    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: `Your ${method} found on ${url}homepage!`,
            }));
        }else {
            response.statusCode = 404;
            response.end(JSON.stringify({
                message: `Your ${method} is not found something!`,
            }));
        }
    } else if(url === '/about') {
        if(method === "GET") {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: `Your ${method} found on ${url} page!`,
            }));
        }else if(method === "POST") {
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const{name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Hello, ${name}! This is ${url} page!`,
                }));
            })
        }else{
            response.statusCode = 400;
            response.end(JSON.stringify({
               message: `Your method ${method} is not found at ${url}page!`,
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: `Your ${method} and ${url} not found!`,
        }));
    }
};

const server = http.createServer(requestListener);

const port = 9000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});