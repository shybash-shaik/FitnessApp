import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import Food from '../models/Food.js';

const require = createRequire(import.meta.url);
const csvParser = require('csv-parser');

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MongoDB connection
try {
  await mongoose.connect(process.env.DB);
  console.log('✅ MongoDB Connected');
} catch (err) {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
}

const results = [];

const csvPath = path.join(__dirname, '../data/food.csv');

fs.createReadStream(csvPath)
  .pipe(csvParser())
  .on('data', (row) => {
    results.push({
      name: row.name,
      weight: parseFloat(row.weight),
      calories: parseFloat(row.calories),
      protein: parseFloat(row.protein),
      carbs: parseFloat(row.carbs),
      fat: parseFloat(row.fat),
      isVeg: row.isVeg === 'true' || row.isVeg === 'TRUE',
      micronutrients: {} // optional: can be extended later
    });
  })
  .on('end', async () => {
    try {
      await Food.insertMany(results);
      console.log(`✅ Inserted ${results.length} food items`);
    } catch (err) {
      console.error('❌ Insertion error:', err);
    } finally {
      mongoose.connection.close();
    }
  });
