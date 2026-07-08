import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
    res.send('Homepage Bookshelf');
});

router.post('/', (_, res) => {
    res.send('About Page in Bookshelf');
});

export default router;