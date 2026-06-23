/**
 * THIRD-PARTY MIDDLEWARE
 * Untuk menggunakannya kita perlu menginstall paket npm yang bersangkutan, kemudian mengimportnya, dan memasangnya dengan app.use()
 * Berikut contoh third-party middleware yang populer beserta fungsinya:
 * 1. morgan: HTTP Request logger (Mencatat log detail setiap request HTTP),
 * 2. cors: Mengaktifkan Cross-Origin Resource Sharing (CORS) untuk mengatur akses resource dari domain berbeda,
 * 3. cookie-parser: Mem-parsing header Cookies pada request sehingga mudah diakses (mis. req.cookies),
 * 4. helmet: Mentapkan berbagai HTTP header terkati keamanan untuk mengamankan aplikasi.
 */

// Contoh
const express = require('express');
const cors = require('cors');   // Memasang package cors melalui package manager
const app = express();

// Pasang meddleware pihak ketiga
app.use(cors()); // Mengizinkan semua origin (default behavior)

// Contoh route
app.get('/', (req, res) => {
    res.send('Hallo, Middleware!');
});