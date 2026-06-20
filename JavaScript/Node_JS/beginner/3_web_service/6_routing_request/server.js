import http from 'http'

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200
    
    //Routing Request adalah istilah dalam menentukan respons server berdasarkan path atau url yang diminta oleh client.
    const {url, method} = request    
    
    if(url === '/'){   //curl http://localhost:5000/
        if(method === 'GET'){   //curl GET http://localhost:5000/
            response.end('<h1>Ini halaman homepage!</h1>')
        }else{
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request!</h1>`)
        }
    } else if (url === '/about'){   //curl http://localhost:5000/about
        if(method === 'GET') {   //curl GET http://localhost:5000/about
            response.end(`<h1>Halo! Ini adalah halaman about</h1>`)
        } else if(method === 'POST') {   //curl POST http://localhost:5000/about
            let body = []
            request.on('data', (chunk) => {
                body.push(chunk)
            })
            request.on('end', () => {
                body = Buffer.concat(body).toString()
                const {name} = JSON.parse(body)
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1`)
            })
        } else {
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request!</h1>`)
        }
    } else {
        response.end('<h1>Halaman tidak ditemukan!</h1>')
    }

}

const server = http.createServer(requestListener)

const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
    console.log(`Server sedang berjalan pada: http://${host}:${port}`)
})