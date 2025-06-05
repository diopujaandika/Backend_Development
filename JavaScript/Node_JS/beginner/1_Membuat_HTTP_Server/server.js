console.log('Halo, kita akan belajar membuat server')

const http = require('http')    //HTTP modules digunakan untuk membangun web server
/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const requestListerner = (request, response) => {
    response.setHeader('Content-Type', 'text/html')

    response.statusCode = 200
    response.end('<h1>Hallo HTTP Server!</h1>')
}

const server = http.createServer(requestListerner) //Method yang berfungsi untuk membuat HTTP server 

//4 parameter method listen() yang digunakan untuk membuat http.server
const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`)
})