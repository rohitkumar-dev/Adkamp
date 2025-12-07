import express from 'express';
import contactController from '../controllers/contactController.js';

const router = express.Router();

// Public route
router.post('/', contactController.submitContact);

export default router;

