/**
 * CUSTOM MIDDLEWARE
 * Untuk membuat custom middleware kita membutuhkan: (req, res, next)
 * 1. req,
 * 2. res, dan
 * 3. next.
 */

//Contoh
function validateApiKey(req, res, next) {
    const apiKey = req.query.apiKey;
    if(!apiKey) {
        //Jika apiKey tidak ada, kirim error response dan akhiri request
        return res.status(400).json({error: 'API key is missing'});
    }
    //Bisa tambahkan pengecekan apiKeu valid, dsb.
    next(); //apiKey ada, lanjut ke middleware berikutnya.
}

//Pasang middleware hanya untuk route / api dan turunannya.
app.use('/api', validateApiKey);