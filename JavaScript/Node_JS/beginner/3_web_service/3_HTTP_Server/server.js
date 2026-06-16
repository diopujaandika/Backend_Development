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

};

const server = http.createServer(requestListener) //Untuk membuat server kita mambutuhkan satu method yaitu: http.createServer(), sesuai namanya method ini berfungsi untuk membuat HTTP server.
