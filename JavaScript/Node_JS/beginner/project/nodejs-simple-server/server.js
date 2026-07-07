import http from 'http';

const requestListener = (request, response) => {
    response.setHeader ('Content-Type', 'application/json');
    response.setHeader ('Powered-By', 'Node.js');
    response.statusCode = 404;
    response.statusMessage = `User Not Found!`;

    const {url, method} = request;

    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: `Method ${method} ditemukan pada halaman ${url}.`,
            }));
        } else { 
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Method ${method} tidak ditemukan pada halaman ${url}.`,
            }));
        }
    } else if (url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: `Method ${method} ditemukan pada halaman ${url}.`,
            }));
        } else if (method === 'POST' ) {
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Selamat datang di halaman ${url}!`,
                }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Method ${method} tidak ditemukan pada halaman ${url}.`,
            }));
        }
    } else { 
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: `Method ${method} dan url ${url} tidak ditemukan!`,
        }));
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server sedang berjalan pada http://${host}:${port}`);
})