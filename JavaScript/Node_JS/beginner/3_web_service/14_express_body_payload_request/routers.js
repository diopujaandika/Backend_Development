import express from 'express';

const router = express.Router()

router.get('/', (_, res) => {
    res.send('Ini adalah halaman Homepage!')
});

router.get('/about', (_, res) => {
    res.send('Ini adalah halaman About Page!')
});

router.get('/hello', (req, res) => {
    const {lang} = req.query;

    if(lang === 'id') {
        return res.send('Hai, Stranger!');
    };
    res.send('Selamat datang, Stranger!');
});

router.get('/hello/:name', (req, res) => {
    const {lang} = req.query;
    const {name} = req.params;

    if(lang === 'id'){
        return res.send(`Hai, ${name}!`);
    }
    res.send(`Selamat datang, ${name}!`);
});

router.all('/', (_, res) => {
    res.statusCode(405).send('Halaman ini tidak dapat diakses dengan method tersebut!');
});

router.all('/about', (_, res) => {
    res.statusCode(405).send('Halaman ini tidak dapat diakses dengan method tersebut!');
});

router.use((_, res) => {
    res.send('Halaman tidak ditemukan!');
});

export default router;