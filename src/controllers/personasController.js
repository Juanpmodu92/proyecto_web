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

export const renderServicesPage = async (req, res) => {
  const services = await getServices();
  res.render('personas/services', { title: 'Our Services', services });
};
