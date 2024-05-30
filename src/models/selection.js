import { pool } from '../database.js';

// Guardar selección de servicio
export const saveSelection = async (customerName, customerEmail, serviceId) => {
    const [result] = await pool.query(
    'INSERT INTO selections (customer_name, customer_email, service_id) VALUES (?, ?, ?)',
    [customerName, customerEmail, serviceId]);
    return result.insertId;
};

// Obtener todas las selecciones
export const getSelections = async () => {
    const [rows] = await pool.query(`
    SELECT s.id, s.customer_name, s.customer_email, sv.title
    FROM selections s
    JOIN services sv ON s.service_id = sv.id`);
    return rows;
};
