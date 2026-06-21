import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
    res.send('This is HOMEPAGE!');
});

router.get('/about', (_, res) => {
    res.send('This is ABOUT PAGE!');
});

router.get('/hello{/:name}', (req, res) => {
    const {name = 'stranger'} = req.params;
    res.send(`Hello, ${name}!`);
});

router.all('/', (_, res) => {
    res.statusCode(405).send('Halaman tidak dapat diakses dengan method tersebut!')
});

router.all('/about', (_, res) => {
    res.statusCode(405).send('Halaman ini tidak dapat diaskes dengan method tersebut!');
});

router.use((_, res) => {
    res.send('Halaman tidak ditemukan!')
})

export default router;