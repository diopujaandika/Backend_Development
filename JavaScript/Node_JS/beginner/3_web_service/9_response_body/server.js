// const requestListener = (request, response) => {
//     response.write('<html>');
//     response.write('<body>');
//     response.write('<h1>Hello, World!</h1>');
//     response.write('</body>');
//     response.write('</html>');
//     response.end('<html><body><h1>Hello, World!</h1></body></html>');
// }

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
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman ini tidak dapat diakses dengan ${method} request`,
            }));
        }
    }else if(url === '/about'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: `Halo! Ini adalah halaman about`,
            }));
        }else if (method === 'POST'){
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });
        }else{
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman ini tidak dapat diakses menggunakan ${method} request!`,
            }));
        }
    }else{
        response.statusCode = 404;
        response.end (JSON.stringify({
            message: `Halaman tidak ditemukan!`,
        }));
    }
};

const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});