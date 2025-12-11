import Subscription from "../models/Subscription.js";
import { sendEmail } from "../utils/emailService.js";

const subscriptionController = {
  subscribe: async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      // Check if already subscribed
      const existing = await Subscription.findOne({ email });
      if (existing) {
        return res.status(400).json({ message: "Already subscribed" });
      }

      const subscription = await Subscription.create({
        email,
        metadata: {
          ip: req.ip || req.connection.remoteAddress,
          userAgent: req.headers['user-agent']
        }
      });

      await sendEmail(process.env.COMPANY_EMAIL, "New Subscriber", email)

      res.status(201).json({ message: "Subscribed successfully" });
    } catch (err) {
      // Handle duplicate key error
      if (err.code === 11000) {
        return res.status(400).json({ message: "Email already subscribed" });
      }
      res.status(500).json({ error: err.message });
    }
  },

  getSubscriptions: async (req, res) => {
    try {
      let page = parseInt(req.query.page) || 1;
      const limit = 10;

      const subscriptions = await Subscription.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit);

      const total = await Subscription.countDocuments();

      res.json({ page, subscriptions, total, pages: Math.ceil(total / limit) });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default subscriptionController;
