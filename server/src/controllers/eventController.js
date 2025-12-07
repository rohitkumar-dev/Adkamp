import Event from "../models/Event.js";
import cloudinary from "../utils/cloudinary.js";
import streamifier from "streamifier";

const eventController = {
  createEvent: async (req, res) => {
    try {
      const { title, description, category, date } = req.body;

      if (!req.files || req.files.length < 1)
        return res.status(400).json({ message: "At least 1 image required" });

      if (req.files.length > 5)
        return res.status(400).json({ message: "Max 5 images allowed" });

      const uploadedUrls = [];

      for (let file of req.files) {
        // Upload to cloudinary from buffer
        const result = await new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "events" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );
          streamifier.createReadStream(file.buffer).pipe(stream);
        });
        uploadedUrls.push(result.secure_url);
      }

      const event = await Event.create({
        title,
        description,
        category,
        date,
        images: uploadedUrls,
      });

      res.status(201).json({ message: "Event created", event });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getEvents: async (req, res) => {
    try {
      let page = parseInt(req.query.page) || 1;
      const limit = 10;

      const events = await Event.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit);

      res.json({ page, events });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getEventById: async (req, res) => {
    try {
      const { id } = req.params;
      const event = await Event.findById(id);

      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }

      res.json({ event });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default eventController;
