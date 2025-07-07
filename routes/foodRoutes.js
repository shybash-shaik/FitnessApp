import express from 'express';
import { searchFoods, getFoodById } from '../controllers/foodcontroller.js';
import auth from '../middleware/authMiddleware.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { logWater } from '../controllers/waterController.js';
import { logWeight } from '../controllers/weightController.js';

const router = express.Router();

router.get('/search', auth, searchFoods);
router.get('/:id', auth, getFoodById);
router.post('/waterlog',authMiddleware,logWater);
router.post('/weightlog',authMiddleware,logWeight);
export default router;
