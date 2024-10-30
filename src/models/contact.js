// contact.js
import { pool } from '../database.js';

// Obtener todos los contactos
export const getContacts = async () => {
  const result = await pool.query('SELECT * FROM contacts');
  return result.rows; // En PostgreSQL, los resultados están en `result.rows`
};

// Insertar un nuevo contacto
export const saveContact = async (name, email, message) => {
  const result = await pool.query(
    'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING id',
    [name, email, message]
  );
  return result.rows[0].id; // Devolver el ID insertado
};
