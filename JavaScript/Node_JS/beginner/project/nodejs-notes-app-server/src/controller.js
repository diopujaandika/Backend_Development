import { nanoid } from 'nanoid';
import notes from './notes.js';

export const cre1ateNote = (req, res, next) => {
  const { title = 'untitled', tags, body } = req.body;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = { title, tags, body, id, createdAt, updatedAt };
  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    return res.status(201).json({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: { noteId: id }
    });
  }

  return res.status(500).json({
    status: 'fail',
    message: 'Catatan gagal ditambahkan'
  });
};

export const getNotes = (req, res) => {
  return res.json({
    status: 'success',
    data: { notes }
  });
};