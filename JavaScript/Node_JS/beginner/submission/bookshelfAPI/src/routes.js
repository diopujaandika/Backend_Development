import express from 'express';

import {
  createBook,
  editBookById,
  getBooks,
  getBookById,
} from './controller.js';

const router = express.Router();
router.post('/books', createBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.put('/books/:id', editBookById);

export default router;