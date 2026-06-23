import express from 'express';

//Menyimpan Catatan
import{
    createNote,
    getNotes,
    getNoteById,
    editNoteById,
} from './controller.js';

const router = express.Router();

router.post('/notes', createNote); 
router.get('/notes', getNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', editNoteById);

export default router;