/**
 * ROUTER-LEVEL MIDDLEWARE
 *  Digunakan untuk kebutuhan yang spesifik pada sekelompok rute tertentu saja. Pendekatan ini juga meningkatkan keteraturan kode dengan memanfaatkan Express Router sebagai modular route handler.
 */

const router = express.Router();

//Router-level middleware (hanya berlaku di router ini)
router.use((req, res, next) => {
    console.log('Permintaan ke URL: ', req-originaURL);
    next();
});

// Contoh route di dalam router
router.get('/profile', (req, res) => {
    res.send('Profile Pengguna');
});

//Memasang router pada aplikasi di bawah path '/user'
app.use('/user', router);