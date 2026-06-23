/**
* MIDDLEWARE di Express merupakan sebuah fungsi yang memiliki akses penuh terhadap
* 1. objek request(req), 
* 2. objek response(res), dan
* 3. fungsi next()
*/

//Contoh:
const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time', Date.now())
  next()
})

/**
 * Dengan tiga hal ini, Middleware dapat melalukan beberapa tugas:
 * 1. Menjalankan kode apapun,
 * 2. Memodifikasi objek req atau res,
 * 3. Mengakhiri siklus request-response,
 * 4. Meneruskan ke middleware berikutnya dengan memanggil fungsi next().
 */

//Dalam mendesain middleware harus disusun dalam urutan yang logis

/**
 * JENIS-JENIS MIDDLEWARE DI EXPRESS
 * 1. Middleware bawaan (built-in): Middleware yang sudah tersedia dalam paket Express itu sendiri,
 * 2. Middleware pihak ketiga (third-party): Middleware yang dibuat oleh komunitas/third-party dan diinstall terpisah dari Express,
 * 3. Middleware kustom (custom): Middleware yang kita tulis sendiri sesuai kebutuhan spesifik aplikasi,
 * 4. Middelware pengangan error (error-handling): Middleware khusus untuk menangani error dalam aplikasi
 */