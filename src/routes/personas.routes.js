// src/routes/personas.routes.js
import { Router } from 'express';
import { renderHomePage, renderAboutPage, renderContactPage, renderServicesPage } from '../controllers/personasController.js';

const router = Router();

router.get('/', renderHomePage);
router.get('/about', renderAboutPage);
router.get('/contact', renderContactPage);
router.get('/services', renderServicesPage);

export default router;
