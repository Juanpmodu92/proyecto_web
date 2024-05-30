import { Router } from 'express';
import {
    renderHomePage,
    renderAboutPage,
    renderContactPage,
    renderServicesPage,
    handleServiceSelection,
    renderSelectionsPage,
    handleNewContact
} from '../controllers/personasController.js';

const router = Router();

router.get('/', renderHomePage);
router.get('/about', renderAboutPage);
router.get('/contact', renderContactPage);
router.post('/contact', handleNewContact);
router.get('/services', renderServicesPage);
router.post('/select-service', handleServiceSelection);
router.get('/selections', renderSelectionsPage);

export default router;
