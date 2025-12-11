import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Admin from '../models/Admin.js';

dotenv.config();

const seedAdmin = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_URI);

    console.log('Connected to MongoDB');

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';

    const existingAdmin = await Admin.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log(`Admin with email ${adminEmail} already exists!`);
      process.exit(0);
    }

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

