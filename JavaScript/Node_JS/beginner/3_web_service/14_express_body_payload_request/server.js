import express from 'express';
import router from './routers.js';

const app = express();
const host = 'localhost';
const port = 3000;

//Middleware untuk parsing JSON body
app.use(express.json());

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    res.send(`Welcome ${username}!`);
});

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`); 
});
