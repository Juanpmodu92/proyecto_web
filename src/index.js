import express from 'express';
import { engine } from 'express-handlebars';
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import personasRoutes from './routes/personas.routes.js';

// Load environment variables
dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handlebars setup
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(path.resolve(), 'src/views'));

// Static files
app.use(express.static(path.join(path.resolve(), 'src/public')));

/* ------------------------------ Public files ------------------------------ */

app.use(express.static(join(__dirname, 'public')))


// Routes
app.use(personasRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

