import http from 'http'

const requestListener = (request, response) => {
    response.setHeader('Content-Type','text/html')
    response.statusCode = 200

    //Membuat logika dalam mengganti permintaan dari method yang berbeda.
    //Kita akan menggunakan parameter request yang merupakan instance dari http.ClientRequest
    const {method} = request //Properti method itu berbentuk String (GET, POST, PUT, DELETE, DLL)
    if(method === 'GET'){
        response.end ('<h1>Anda melakukan GET pada server!</h1>')
    }
    if(method === 'POST'){
        response.end ('<h1>Anda melakukan POST pada server!</h1>')
    }
    if(method === 'PUT'){
        response.end('<h1>Anda melakukan POST pada server!</h1>')
    }
    if(method === 'DELETE'){
        response.end('<h1>Anda melakukan DELETE pada server!</h1>')
    }
}

const server = http.createServer(requestListener)

const port = 5000 
const host = 'localhost'   
server.listen(port, host,() => {
    console.log(`Server berjalan pada http://${host}:${port}`)
})