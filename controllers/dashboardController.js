import DiaryEntry from '../models/DiaryEntry.js';
import WaterLog from '../models/WaterLog.js';
import WeightLog from '../models/WeightLog.js';
import mongoose from 'mongoose';

export const getDailySummary = async (req, res) => {
  try {
    const { date } = req.query;
    const userId = req.user.id;

    const start = new Date(date);
    start.setHours(0, 0, 0, 0);

    const end = new Date(date);
    end.setHours(23, 59, 59, 999);

    const foodStats = await DiaryEntry.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(userId),
          logDate: { $gte: start, $lte: end } // ✅ use logDate, not log_date
        }
      },
      {
        $lookup: {
          from: 'foods',
          localField: 'food',
          foreignField: '_id',
          as: 'foodDetails'
        }
      },
      { $unwind: '$foodDetails' },
      {
        $group: {
          _id: '$user',
          total_calories: {
            $sum: { $multiply: ['$quantity', '$foodDetails.calories'] }
          },
          total_protein: {
            $sum: { $multiply: ['$quantity', '$foodDetails.protein'] }
          },
          total_carbs: {
            $sum: { $multiply: ['$quantity', '$foodDetails.carbs'] }
          },
          total_fat: {
            $sum: { $multiply: ['$quantity', '$foodDetails.fat'] }
          }
        }
      }
    ]);

    const waterLogs = await WaterLog.find({
      user: userId,
      logDate: { $gte: start, $lte: end }
    });

    const weightLogs = await WeightLog.find({
      user: userId,
      logDate: { $gte: start, $lte: end }
    });

    res.json({
      summary: foodStats[0] || {
        total_calories: 0,
        total_protein: 0,
        total_carbs: 0,
        total_fat: 0
      },
      waterLogs,
      weightLogs
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
};
