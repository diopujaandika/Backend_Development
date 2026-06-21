import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
    res.send('This is Homepage!');
});
router.get('/about', (_, res) => {
    res.send('This is About Page!');
});

// Route 1: Menangani permintaan tanpa parameter nama
router.get('/hello', (req, res) => {
    const {lang} = req.query;

    if(lang === 'id'){
        return res.send('Hai, stranger!');
    }
    res.send('Selamat datang, stranger!')
});

//Route 2: Menangani permingaan dengan parameter nama
router.get('/hello/:name', (req, res) => {
    const {name} = req.params;
    const {lang} = req.query;
    
    if (lang === 'id'){
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