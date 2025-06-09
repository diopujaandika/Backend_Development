console.log('Hallo, kita akan belajar membuat server!')

const http = require('http')

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */

const requestListener = (request, response) => {   
    //Response
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200
    //response.end('<h1>Hallo HTTP Server!</h1>')

    //Request
    const {method} = request
    if(method === 'GET'){
        response.end('<h1>Hello Server! Your request is GET</h1>')
    }
    if(method === 'POST'){
        response.end('<h1>Hello Server! Your request is POST</h1>')
    }
    if(method === 'PUT'){
        response.end('<h1>Hello Server! Your request is PUT</h1>')
    }
    if(method === 'DELETE'){
        response.end('<h1>Hello Server! Your request is DELETE</h1>')
    }
}

const server = http.createServer(requestListener)

//Parameter penting yang digunakan dalam method listen() => Method untuk membuat http.server
const port = 5000
const host = 'localhost'
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`)
})