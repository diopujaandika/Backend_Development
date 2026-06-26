/**
 * 1. Digunakan untuk mendaftarkan route milik notes yang ada di services/notes/routes.
 */

import { Router } from 'express';
import notes from '../services/notes/routes/index.js';
 
const router = Router();
 
router.use('/', notes);
 
export default router;