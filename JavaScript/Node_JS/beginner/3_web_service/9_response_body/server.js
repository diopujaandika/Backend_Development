import http from 'http';

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Power-By', 'Node.js');

    const {url, method} = request;

    if(url === '/'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message:  `Ini adalah halaman HOMEPAGE!`,
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request!`,
            }));
        }
    } else if (url === '/about'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: `Halo! Ini adalah halaman ABOUT!`,
            }));
        } else if (method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman ABOUT!`,
                }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method} request!`
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: `Halaman tidak ditemukan!`
        }));
    }
}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server sedang berjalan pada: http://${host}:${port}`);
});