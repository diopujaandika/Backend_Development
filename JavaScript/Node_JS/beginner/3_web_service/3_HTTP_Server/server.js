/**
 * MEMBUAT HTTP SERVER
 */

import http from 'http';
    //import    => syntax ES Module untuk mengambil kode dari modul lain
    //http      => variable yang dibuat untuk menampung modul tersebut
    //'http'    => nama modul bawaaan dari Node.JS

/**
 * Logika untuk menangani dan menaggapi request dituliskan pada fungsi ini
 * 
 * @param request : objek yang berisikan informasi terkait permintaan
 * @param response : objek yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html')

    response.statusCode = 200
    response.end('<h1> Halo HTTP Server!</h1>')
};

const server = http.createServer(requestListener) //Untuk membuat server kita mambutuhkan satu method yaitu: http.createServer(), sesuai namanya method ini berfungsi untuk membuat HTTP server.

//Method listen() => method yang membuat http.server selalu standby untuk menangani permintaan yang masuk dari client. terdiri dari
    const port = 5000                   //port(number)  : jalur yang digunakan untuk mengakses HTTP server
    const host = 'localhost'            //host(string)  : nama domain yang digunakan oleh HTTP server
    server.listen(port, host, () => {   //listeningListener(funtion): callback yang akan dipanggil ketika HTTP server sedang bekerja
        console.log(`Server berjalan pada http://${host}:${port}`)
    })