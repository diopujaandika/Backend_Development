const http = require('http');

const requestListener = (request, response) => {
    //response.setHeader('Content-Type', 'text/html');
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Powered-By', 'Node,js');

    response.statusCode = 404;   //Memberitahu client bahwa request resource yang diminta tidak ada.
    response.statusMessage = 'User is not found';  //404 Defaultnya adalah 'Not Found'

    const {method, url} = request;

    if(url === '/'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman ini tidak dapat diakses dengan ${method} request</h1>`);
        }
    }else if(url === '/about'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end(`<h1> Halo! Ini adalah halaman about</h1>`);
        }else if (method === 'POST'){
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });
        }else{
            response.statusCode = 400;
            response.end(`<h1>Halaman ini tidak dapat diakses menggunakan ${method} request!</h1>`);
        }
    }else{
        response.statusCode = 404;
        response.end (`<h1> Halaman tidak ditemukan!</h1>`);
    }
};

const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});