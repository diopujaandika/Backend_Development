import http from 'http';

const requestListener = (request, response) => {
    response.setHeader = ('Content-Type', 'text/html');
    response.statusCode = 200;

    const {url, method} = request;

    if(url === '/') {
        if(method === 'GET') {
            response.end(`Your ${method} find ${url}homepage!`);
        }else {
            response.end(`Your ${method} is not found something!`);
        }
    } else if(url === '/about') {
        if(method === "GET") {
            response.end(`Your ${method} find ${url} page!`);
        }else if(method === "POST") {
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const{name} = JSON.parse(body);
                response.end(`Hello, ${name}! This is ${url} page!`);
            })
        }
    } else {
        response.end(`Your ${url} not found!`);
    }
}

const server = http.createServer(requestListener);

const port = 9000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});