import express from 'express';
import router from './routers.js';

const app = express();
const host = 'localhost';
const port = 3000;

app.use('/', router);

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`); 
});
