import http from 'http';

const requestListener = (request, response) => {
    response.setHeader = ('Content-Type', 'text/html');
    response.statusCode = 200;

    const {method} = request;

    if(method === 'GET'){
        response.end(`This is GET page!`);
    }
    if(method === 'POST'){
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const{name} = JSON.parse(body);
            response.end(`Hai, ${name}!`);
        });
    }
    if(method === 'PUT'){
        response.end(`This is PUT page!`);
    }
    if(method === 'DELETE'){
        response.end(`This is DELETE page!`);
    }
}

const server = http.createServer(requestListener);

const port = 9000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}!`);
});