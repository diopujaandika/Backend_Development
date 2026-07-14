import { nanoid } from 'nanoid';
import books from './books.js';

export const createBook = (req, res, next) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading } = req.body;

  if (!name) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
    });
  }

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
    message: 'Buku gagal ditambahkan'
  });
};

export const getBooks = (req, res) => {
  return res.json({
    status: 'success',
    data: { books }
  });
};