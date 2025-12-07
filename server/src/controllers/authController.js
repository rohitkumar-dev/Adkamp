import Otp from "../models/Otp.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/emailService.js";
import Admin from "../models/Admin.js";

const authController = {
  sendOtp: async (req, res) => {
    try {
      const { email } = req.body;

      if (email !== process.env.ADMIN_EMAIL)
        return res.status(401).json({ message: "Not allowed" });

      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      await Otp.deleteMany({ email });

      await Otp.create({
        email,
        otp,
        expiresAt: new Date(Date.now() + (parseInt(process.env.OTP_EXPIRY_MINUTES) || 10) * 60000),
      });

      await sendEmail(email, "Your OTP", `Your OTP is ${otp}`);

      res.json({ message: "OTP sent successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  verifyOtp: async (req, res) => {
    try {
      const { email, otp } = req.body;

      const record = await Otp.findOne({ email, otp });

      if (!record) return res.status(400).json({ message: "Invalid OTP" });

      if (record.expiresAt < new Date())
        return res.status(400).json({ message: "OTP expired" });

      // Create or update admin
      let admin = await Admin.findOne({ email });
      if (!admin) {
        admin = await Admin.create({ email });
      }

      await Otp.deleteMany({ email });

      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res.cookie('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000
      });

      res.json({ message: "Logged in" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie('authToken');
      res.json({ message: "Logged out successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  checkAuth: async (req, res) => {
    try {
      const admin = await Admin.findOne({ email: req.admin.email });
      if (!admin) return res.status(404).json({ message: "Admin not found" });
      res.json({ message: "Authenticated", admin });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default authController;
