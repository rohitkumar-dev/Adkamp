// scripts/seedAdmin.js
// This script creates an initial admin account in the database

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Admin from '../models/Admin.js';

dotenv.config();

const seedAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('Connected to MongoDB');

    // Admin email to create
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log(`Admin with email ${adminEmail} already exists!`);
      process.exit(0);
    }

    // Create new admin
    const admin = await Admin.create({
      email: adminEmail,
      isActive: true
    });

    console.log('✓ Admin created successfully!');
    console.log(`Email: ${admin.email}`);
    console.log(`ID: ${admin._id}`);
    console.log('\nYou can now use this email to login via OTP.');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();

