//1. Install dependencies Express => npm install express

//2. memasang Express dari modul Express
import express from 'express';

//3. Buat HTTP Server pada Express dengan kode dasar berikut:
const app = express();      //HTTP Server dibuat melalui fungsi express()
const port = 3000;
const host = 'localhost';

//4. Buat method/verb request dan routing => app.METHOD(PATH, HANDLER)
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/', (req, res) => {
    res.send('POST request to the HOMEPAGE!');
});

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);
});