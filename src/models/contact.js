import { pool } from '../../database.js';

// Obtener todos los contactos
export const getContacts = async () => {
  const [rows] = await pool.query('SELECT * FROM contacts');
  return rows;
};

// Insertar un nuevo contacto
export const saveContact = async (name, email, message) => {
  const [result] = await pool.query(
    'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
    [name, email, message]
  );
  return result.insertId;
};
