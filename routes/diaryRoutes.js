import express from 'express';
import { logFoodEntry } from '../controllers/diaryController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, logFoodEntry);

export default router;
