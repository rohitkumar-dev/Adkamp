import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import upload from '../middlewares/upload.js';
import eventController from '../controllers/eventController.js';
import contactController from '../controllers/contactController.js';
import subscriptionController from '../controllers/subscriptionController.js';

const router = express.Router();

// All routes here require authentication
router.use(authMiddleware);

// Admin event routes
router.post('/events', upload.array('images', 5), eventController.createEvent);

// Admin contact routes
router.get('/contacts', contactController.getContacts);

// Admin subscription routes
router.get('/subscriptions', subscriptionController.getSubscriptions);

export default router;

