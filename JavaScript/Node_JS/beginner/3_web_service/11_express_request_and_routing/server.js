//1. Install depedencies Express => npm install express

//2. Memasang Express dari modul Express
import express from 'express';

import router from './routes.js';

//3. Buat HTTP Server pada Express dengan kode dasar berikut:
const app = express();      //Membuat server
const port = 3000;          //Membuat port
const host = 'localhost';   //Membuat host

app.use('/', router);
 
app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);
});