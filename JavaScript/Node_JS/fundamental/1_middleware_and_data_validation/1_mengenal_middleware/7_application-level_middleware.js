/**
 * APPLICATION-LEVEL MIDDLEWARE
 * Digunakan untuk kebutuhan yang bersifat global atau melibatkan banyak rute dalam aplikasi. Ini ideal untuk hal-hal yang memang harus berlaku konsisten di seluruh bagian aplikasi.
 */

const express = require('express');
const app = express();

// Application-level middleware (global untuk semua rute)
app.use((req, res, next) => {
    console.log(`Waktu: ${Date.now()}`);
    next();
});

// Contoh route di aplikasi
app.get('/dasboard', (req, res) => {
    res.send('Halaman Dasboard');
})