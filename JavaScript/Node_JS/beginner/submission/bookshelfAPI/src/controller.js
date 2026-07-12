import { nanoid } from 'nanoid';
import books from './books.js';

export const createBook = (req, res, next) => {
  const {
    name = 'untitled',
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading } = req.body;
  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = { name, year, author, summary, publisher, pageCount, readPage, reading, id, finished, insertedAt, updatedAt, };
  books.push(newBook);

  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    return res.status(201).json({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: { bookId: id }
    });
  }

  return res.status(500).json({
    status: 'fail',
    message: 'Catatan gagal ditambahkan'
  });
};