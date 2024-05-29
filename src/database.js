import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'consulting_platform'
});
