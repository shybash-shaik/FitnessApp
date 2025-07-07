import express from 'express';
import { getDashboard } from '../controllers/diaryController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/dashboard', auth, getDashboard);

export default router;
