import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;

// Configuración para el entorno de producción (servidor)
const productionPool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Configuración para el entorno de desarrollo (local)
const developmentPool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 5432,
});

// Seleccionar la conexión adecuada dependiendo del entorno
export const pool = process.env.NODE_ENV === 'production' ? productionPool : developmentPool;
