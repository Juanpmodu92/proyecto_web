import { pool } from '../database.js';

// Obtener todos los servicios
export const getServices = async () => {
  const result = await pool.query('SELECT * FROM services');
  return result.rows; // En PostgreSQL, los resultados están en `result.rows`
};
