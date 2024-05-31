
import mysql from 'mysql2/promise';

// Crear una conexión con la base de datos
export const pool = mysql.createPool({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'consulting_platform'
});
