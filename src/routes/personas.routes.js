import { Router } from 'express';
import {
  renderHomePage,
  renderAboutPage,
  renderContactPage,
  handleContactForm,
  renderServicesPage,
  renderSelectionsPage,
  handleServiceSelection
} from '../controllers/personasController.js';

const router = Router();

router.get('/', renderHomePage);
router.get('/about', renderAboutPage);
router.get('/contact', renderContactPage);
router.post('/contact', handleContactForm);
router.get('/services', renderServicesPage);
router.post('/services', handleServiceSelection);
router.get('/selections', renderSelectionsPage);

export default router;
