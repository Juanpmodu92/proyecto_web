import { pool } from '../database.js';

export const getContacts = async () => {
  const [rows] = await pool.query('SELECT * FROM contacts');
  return rows;
};


