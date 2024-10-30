import pkg from 'pg';
const { Pool } = pkg;

// Crear una conexión con la base de datos
export const pool = new Pool({
  host: 'localhost',
  user: 'user',       // Reemplaza con tu usuario de PostgreSQL
  password: 'password', // Reemplaza con tu contraseña de PostgreSQL
  database: 'consulting_platform', // Reemplaza con el nombre de tu base de datos en PostgreSQL
  port: 5432,           // Puerto predeterminado de PostgreSQL
});
