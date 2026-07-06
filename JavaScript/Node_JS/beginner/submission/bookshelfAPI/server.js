console.log(`Submission Dicoding : Kelas Backend Pemula | Bookshelf API`);

import http from 'http';

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    response.statusCode = 200;
    response.end('<h1>Hallo BookshelfAPI</h1>');
};

const port = 9000;
const host = 'localhost';

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});