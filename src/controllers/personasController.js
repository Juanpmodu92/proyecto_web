import { getContacts } from '../models/contact.js';
import { getServices } from '../models/service.js';

export const renderHomePage = (req, res) => {
  res.render('personas/index', { title: 'Home' });
};

export const renderAboutPage = (req, res) => {
  res.render('personas/about', { title: 'About Us' });
};

export const renderContactPage = async (req, res) => {
  const contacts = await getContacts();
  res.render('personas/contact', { title: 'Contact Us', contacts });
};

// Define la función para manejar el formulario de contacto
export const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body; // Suponiendo que el formulario envía estos datos
  // Aquí puedes agregar la lógica para procesar el formulario
  // Por ejemplo, guardarlo en la base de datos o enviar un correo electrónico
  
  // Redirigir o renderizar una página después de manejar el formulario
  res.redirect('/contact'); // O renderizar otra página
};

export const renderServicesPage = async (req, res) => {
  const services = await getServices();
  res.render('personas/services', { title: 'Our Services', services });
};
