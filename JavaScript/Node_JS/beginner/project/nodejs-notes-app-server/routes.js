import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
    res.send('Homepage');
});

router.get('/about', (_, res) => {
    res.send('About page');
});

router.all('/', (_, res) => {
    res.status(405).send('Halaman tidak dapat diakses dengan method tersebut');
});

router.all('/about', (_, res) => {
    res.status(405).send('Halaman tidak dapat diakses dengan method tersbut')
});

router.use((_, res) => {
    
});

export default router;