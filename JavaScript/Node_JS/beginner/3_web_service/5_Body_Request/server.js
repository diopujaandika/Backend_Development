import http from 'http';

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const {method} = request;
    if(method === 'GET'){
        response.end ('<h1>Anda melakukan GET pada server!</h1>');
    }
    if(method === 'POST'){
        let body = [] ;      //Variabel body dengan value array kosong berfungsi untuk menampung buffer pada stream

        request.on('data', (chunk) => { 
            body.push(chunk);
        })

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const {name} = JSON.parse(body); //JSON.parse() digunakan untuk mengubah JSON String menjadi JavaScript Objek
            response.end (`<h1>Hai ${name}!, Anda melakukan POST pada server!</h1>`);
        })
    }
}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host,() => {
    console.log(`Server sedang berjalan pada http://${host}:${port}`);
})