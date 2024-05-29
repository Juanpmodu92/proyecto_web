// src/models/service.js
import { pool } from '../database.js';

export const getServices = async () => {
  const [rows] = await pool.query('SELECT * FROM services');
  return rows;
};
