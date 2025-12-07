import mongoose from 'mongoose';

const deviceMetadataSchema = new mongoose.Schema({
  ip: String,
  userAgent: String,
  browser: String,
  os: String,
  device: String,
  timestamp: { type: Date, default: Date.now }
}, { _id: false });

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  lastLogin: Date,
  lastLoginDevices: {
    type: [deviceMetadataSchema],
    default: []
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Keep only last 5 login devices
adminSchema.methods.addLoginDevice = function(deviceInfo) {
  this.lastLoginDevices.unshift(deviceInfo);
  if (this.lastLoginDevices.length > 5) {
    this.lastLoginDevices = this.lastLoginDevices.slice(0, 5);
  }
};

export default mongoose.model('Admin', adminSchema);

