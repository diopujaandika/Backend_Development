/**
 * ERRPR-HANDLING MIDDLEWARE
 * Untuk membuat error-handling middleware kita membutuhkan 4 parameter: (err, req, res, next)
 * 1. err
 * 2. req,
 * 3. res, dan
 * 4. next.
 */

//Contoh
app.use((err, req, res, next) => {
    console.error(err.stack);   //log stack error ke console (untuk debugging)
    res.status(500).json({
        success: false,
        message: err.message
    });
});