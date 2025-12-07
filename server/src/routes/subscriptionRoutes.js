import express from 'express';
import subscriptionController from '../controllers/subscriptionController.js';

const router = express.Router();

// Public route
router.post('/', subscriptionController.subscribe);

export default router;

