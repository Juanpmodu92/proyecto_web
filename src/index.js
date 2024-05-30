import express from 'express';
import { engine } from 'express-handlebars';
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import personasRoutes from './routes/personas.routes.js';


const __dirname = dirname(fileURLToPath(import.meta.url));

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configuración de Handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(path.resolve(), 'src/views'));

// Archivos estáticos
app.use(express.static(path.join(path.resolve(), 'src/public')));

/* ------------------------------ Public files ------------------------------ */

app.use(express.static(join(__dirname, 'public')))

// Rutas
app.use(personasRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
