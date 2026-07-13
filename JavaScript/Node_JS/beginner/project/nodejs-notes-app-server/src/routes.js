import express from 'express';

import {
  createNote,
  getNotes,
} from './controller.js';

const router = express.Router();
router.post('/notes', createNote);
router.get('/notes', getNotes);

export default router;