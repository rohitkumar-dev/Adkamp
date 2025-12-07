// server.js
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import eventRoutes from './routes/eventRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import subscriptionRoutes from './routes/subscriptionRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);
app.use('/contact', contactRoutes);
app.use('/subscribe', subscriptionRoutes);
app.use('/admin', adminRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Error handling middleware (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

