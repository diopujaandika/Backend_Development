/**
 * BUILT-IN MIDDELWARE EXPRESS
 * Express menyediakan tiga middleware bawaan utama:
 * 1. express.static: Menyediakan file statis (HTML, gambar, CSS, JavaScript, dll) dari direktori yang ditentukan,
 * 2. express.json: Mem-parsing payload JSON yang dikirim dalam body request. Sehingga secara otomatis middleware secara otomatis membaca body request bertipe JSON dan membuatnya tersedia di req.body,
 * 3. express.urlencoded: Mem-parsing payload URL-encoded (seperti data form HTML) dan menempatkannya di req.body. Biasanya digunakan untuk menangani submission form dan content-type: application/x-www-form-urlencoded.
 */

// Contoh:
const express = require('express');
const app = express();

// Mengaktifkan middleware bawaan
app.use(express.json());    //Memastikan setiap request POST/PUT dengan body JSON atau form dapat diaskses melalui req.body
app.use(express.urlencoded({extended: false})); //Memastikan setiap request POST/PUT dengan body JSON atau form dapat diaskses melalui req.body
app.use(express.static('public'));  //Otomatis melayani file apapun yang cocok di folder "public" ketika ada request HTTP GET ke path yang sesuai.

// Contoh route untuk menguji middleware
 app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Data login diproses!');
 })
 
 /**
  * Dengan menggunakan middleware bawaan ini, kita tidak perlu menulis kode pasing atau penyajian file statis secara manual.
  */