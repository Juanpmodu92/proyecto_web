import { pool } from '../database.js';

// Obtener las selecciones de servicios junto con la información del cliente
export const getSelections = async () => {
    const [rows] = await pool.query(`
    SELECT s.id, s.customer_name, s.customer_email, srv.title
    FROM selections s
    JOIN services srv ON s.service_id = srv.id`);
    return rows;
};

// Agregar una nueva selección de servicio
export const addSelection = async (customerName, customerEmail, serviceId) => {
    const [result] = await pool.query(`
    INSERT INTO selections (customer_name, customer_email, service_id)
    VALUES (?, ?, ?)`, [customerName, customerEmail, serviceId]);
    return result;
};
