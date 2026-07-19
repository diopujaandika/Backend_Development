import express from 'express';

const app = express();
const port = 9001;
const host = 'localhost';

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);
})