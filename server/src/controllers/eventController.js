import Event from "../models/Event.js";
import cloudinary from "../utils/cloudinary.js";
import streamifier from "streamifier";

const eventController = {
  // createEvent: async (req, res) => {
  //   try {
  //     const { title, description, category, date } = req.body;

  //     if (!req.files || req.files.length < 1)
  //       return res.status(400).json({ message: "At least 1 image required" });

  //     if (req.files.length > 5)
  //       return res.status(400).json({ message: "Max 5 images allowed" });

  //     const uploadedUrls = [];

  //     for (let file of req.files) {
  //       const uploadResult = await new Promise((resolve, reject) => {
  //         const stream = cloudinary.uploader.upload_stream(
  //           { folder: "events" },
  //           (error, result) => {
  //             if (error) reject(error);
  //             else resolve(result);
  //           }
  //         );

  //         streamifier.createReadStream(file.buffer).pipe(stream);
  //       });

  //       uploadedUrls.push(uploadResult.secure_url);
  //     }

  //     const event = await Event.create({
  //       title,
  //       description,
  //       category,
  //       date,
  //       images: uploadedUrls,
  //     });

  //     res.status(201).json({
  //       success: true,
  //       message: "Event created successfully",
  //       event,
  //     });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ error: err.message });
  //   }
  // },

  // Pagination events
  
  
createEvent: async (req, res) => {
  const sessionUploads = []; // store uploaded public_ids for rollback

  try {
    const { title, description, category, date } = req.body;

    // ---------------------------
    // 1. Validate files
    // ---------------------------
    if (!req.files || req.files.length < 1)
      return res.status(400).json({ message: "At least 1 image required" });

    if (req.files.length > 5)
      return res.status(400).json({ message: "Max 5 images allowed" });

    // ---------------------------
    // 2. Parse & Validate date
    // ---------------------------
    let formattedDate = date;

    // Convert DD/MM/YYYY → YYYY-MM-DD
    if (date.includes("/")) {
      const parts = date.split("/");
      if (parts.length !== 3)
        return res.status(400).json({ message: "Invalid date format" });

      const [day, month, year] = parts;
      formattedDate = `${year}-${month}-${day}`;
    }

    // Validate ISO date
    const finalDate = new Date(formattedDate);
    if (isNaN(finalDate.getTime()))
      return res.status(400).json({
        message: "Invalid date. Use YYYY-MM-DD or DD/MM/YYYY.",
      });

    // ---------------------------
    // 3. Upload images to Cloudinary
    // ---------------------------

    const uploadedUrls = [];

    for (let file of req.files) {
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

      // push uploaded image URL
      uploadedUrls.push(result.secure_url);

      // Save to rollback tracker
      sessionUploads.push(result.public_id);
    }

    // ---------------------------
    // 4. Create event in DB
    // ---------------------------
    const event = await Event.create({
      title,
      description,
      category,
      date: finalDate,
      images: uploadedUrls,
    });

    return res.status(201).json({
      success: true,
      message: "Event created successfully",
      event,
    });

  } catch (err) {
    console.error("Upload error:", err);

    // ------------------------------------
    // 5. Rollback: Delete any uploaded images
    // ------------------------------------
    if (sessionUploads.length > 0) {
      for (let publicId of sessionUploads) {
        try {
          await cloudinary.uploader.destroy(publicId);
        } catch (destroyErr) {
          console.error("Cloudinary cleanup failed:", destroyErr);
        }
      }
    }

    return res.status(500).json({
      success: false,
      message: "Error creating event",
      error: err.message,
    });
  }
}
,
  
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

  // Single event by ID
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
  },
};

export default eventController;






