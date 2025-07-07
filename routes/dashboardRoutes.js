import express from 'express';
import { getDailySummary } from '../controllers/dashboardController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getDailySummary);

export default router;
