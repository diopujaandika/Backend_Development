import express from 'express';

//4. Buat method/verb request dan routing => app.METHOD(PATH, HANDLER)
const router = express.Router();

router.get('/', (_, res) => {
    res.send('Homepage!');
});

router.get('/about', (_, res) => {
    res.send('About Page!');
});

//router.all berfungsi untuk mengakases seluruh method HTTP (GET, POST, PUT, DELETE, DLL)
router.all('/', (_, res) => {
    res.status(405).send('Halaman tidak dapat diakses dengan method tersebut!');
});

router.all('/about', (_, res) => {
    res.status(405).send('Halaman tidak dapat diakses dengan method tersebut!');
});

//router.use berfungsi untuk menangani permintaan masuk pada path yang BELUM ANDA TENTUKAN sebelumnya. Biasanya digunakan untuk membuat routing dinamnis di Express dan umunya menampilkan halaman 404 Not Found
router.use((_, res) => {
    res.send('Halaman tidak ditemukan!');
});

export default router;