import express from 'express';
import routes from '../routes/index.js';
import cors from 'cors';
import ErrorHandler from '../middlewares/error.js';
 
const app = express();
 
app.use(ErrorHandler)
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use(routes);
 
export default app;