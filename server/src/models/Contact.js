import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  message: {
    type: String,
    required: true
  },
  metadata: {
    ip: String,
    userAgent: String,
    browser: String,
    os: String,
    device: String
  }
}, {
  timestamps: true
});

export default mongoose.model('Contact', contactSchema);

