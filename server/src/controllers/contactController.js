import Contact from "../models/Contact.js";
import { sendContactNotification } from "../utils/emailService.js";

const contactController = {
  submitContact: async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const contact = await Contact.create({
        name,
        email,
        message,
        metadata: {
          ip: req.ip || req.connection.remoteAddress,
          userAgent: req.headers['user-agent']
        }
      });

      await sendContactNotification( name,
        email,
        message,)

      res.status(201).json({ message: "Message sent successfully", contact });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getContacts: async (req, res) => {
    try {
      let page = parseInt(req.query.page) || 1;
      const limit = 10;

      const contacts = await Contact.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit);

      const total = await Contact.countDocuments();

      res.json({ page, contacts, total, pages: Math.ceil(total / limit) });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default contactController;
