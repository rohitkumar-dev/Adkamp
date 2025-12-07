import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['branding', 'marketing', 'design']
  },
  date: {
    type: Date,
    required: true
  },
  images: {
    type: [String],
    required: true,
    validate: {
      validator: function(arr) {
        return arr.length >= 1 && arr.length <= 5;
      },
      message: 'Images must be between 1 and 5'
    }
  },
  uploadedUsingDevice: {
    ip: String,
    userAgent: String,
    browser: String,
    os: String,
    device: String
  }
}, {
  timestamps: true
});

export default mongoose.model('Event', eventSchema);

