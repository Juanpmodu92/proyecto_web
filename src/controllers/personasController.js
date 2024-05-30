import { getContacts, saveContact } from '../models/contact.js';
import { getServices } from '../models/service.js';
import { saveSelection, getSelections } from '../models/selection.js';

/* ----------------------- Renderizar página de inicio ---------------------- */
export const renderHomePage = (req, res) => {
  res.render('personas/index', { title: 'Inicio' });
};

/* ------------------- Renderizar página "Sobre nosotros" ------------------- */
export const renderAboutPage = (req, res) => {
  res.render('personas/about', { title: 'Sobre nosotros' });
};

/* ---------------------- Renderizar página de contacto --------------------- */
export const renderContactPage = async (req, res) => {
  res.render('personas/contact', { title: 'Contacto' });
};

/* ------------------------- Manejar nuevo contacto ------------------------- */
export const handleNewContact = async (req, res) => {
  const { name, email, message } = req.body;
  await saveContact(name, email, message);
  res.redirect('/contact');
};

/* --------------------- Renderizar página de servicios --------------------- */
export const renderServicesPage = async (req, res) => {
  const services = await getServices();
  res.render('personas/services', { title: 'Servicios', services });
};

/* ---------------------- Manejar selección de servicio --------------------- */
export const handleServiceSelection = async (req, res) => {
  const { customerName, customerEmail, serviceId } = req.body;
  await saveSelection(customerName, customerEmail, serviceId);
  res.redirect('/selections');
};

/* -------------------- Renderizar página de selecciones -------------------- */
export const renderSelectionsPage = async (req, res) => {
  const selections = await getSelections();
  res.render('personas/selections', { title: 'Selecciones', selections });
};
