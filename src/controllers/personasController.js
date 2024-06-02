// src/controllers/personasController.js
import { getContacts, saveContact } from '../models/contact.js';
import { getServices } from '../models/service.js';


// Renderizar la página principal
export const renderHomePage = (req, res) => {
  res.render('personas/index', { title: 'Inicio' });
};

// Renderizar la página sobre nosotros
export const renderAboutPage = (req, res) => {
  res.render('personas/about', { title: 'Sobre nosotros' });
};

// Renderizar la página de contacto
export const renderContactPage = async (req, res) => {
  res.render('personas/contact', { title: 'Contacto' });
};

// Manejar el envío del formulario de contacto
export const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;
  await saveContact(name, email, message);
  res.redirect('/contact');
};

// Renderizar la página de servicios
export const renderServicesPage = async (req, res) => {
  const services = await getServices();
  res.render('personas/services', { title: 'Servicios', services });
};
