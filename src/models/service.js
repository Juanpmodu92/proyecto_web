import { pool } from '../database.js';

// Obtener todos los servicios
export const getServices = async () => {
  const [rows] = await pool.query('SELECT * FROM services');
  return rows;
};
