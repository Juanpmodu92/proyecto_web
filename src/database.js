import pkg from 'pg';
const { Pool } = pkg;

// Base de datos en el servidor
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})


// Base de dato local
/*export const pool = new Pool({
  host: 'localhost',
  user: 'postgres',   
  password: '031222', 
  database: 'consulting_platform', 
  port: 5432,           
});*/ 

