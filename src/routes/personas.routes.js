import { Router } from 'express';
import {
  renderHomePage,
  renderAboutPage,
  renderContactPage,
  handleContactForm,
  renderServicesPage,
} from '../controllers/personasController.js';

const router = Router();

router.get('/', renderHomePage);
router.get('/about', renderAboutPage);
router.get('/contact', renderContactPage);
router.post('/contact', handleContactForm);
router.get('/services', renderServicesPage);

export default router;
