// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({

//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD
//   }
// });

// export const sendEmail = async (to, subject, text) => {
//   try {
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to,
//       subject,
//       text,
//       html: `<p>${text}</p>`
//     };

//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw error;
//   }
// };




// utils/emailService.js
import nodemailer from "nodemailer";

let transporter = null;

/** -------------------------------------------------
 *  Validate Environment Variables
 * ------------------------------------------------- */
const hasEmailCreds =
  process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD;

if (!hasEmailCreds) {
  console.error("❌ ERROR: Missing Email Credentials in .env");
  console.error("EMAIL_USER:", process.env.EMAIL_USER ? "✓ Set" : "✗ Missing");
  console.error(
    "EMAIL_APP_PASSWORD:",
    process.env.EMAIL_APP_PASSWORD ? "✓ Set" : "✗ Missing"
  );
  console.error("👉 Fix your .env before trying to send emails.\n");
}

/** -------------------------------------------------
 *  Create Transporter (Only when needed)
 * ------------------------------------------------- */
const getTransporter = () => {
  if (transporter) return transporter;

  if (!hasEmailCreds) {
    throw new Error("Email credentials not configured — cannot send email.");
  }

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // Verify connection once
  transporter.verify((error) => {
    if (error) {
      console.error("❌ Email transporter verification failed:", error.message);
    } else {
      console.log("✓ Email server is ready to send messages");
    }
  });

  return transporter;
};

/** -------------------------------------------------
 *  Generic Email Function
 * ------------------------------------------------- */
export const sendEmail = async (to, subject, text) => {
  try {
    const transporter = getTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html: `<p>${text}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✓ Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw error;
  }
};

/** -------------------------------------------------
 *  Send OTP Email
 * ------------------------------------------------- */
export const sendOtpEmail = async (email, otp) => {
  try {
    const transporter = getTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Admin Login OTP",
      html: `
        <div style="font-family: Arial; padding: 20px; max-width: 600px;">
          <h2>Admin Login OTP</h2>
          <p>Your OTP is:</p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; text-align:center;">
            <h1 style="color:#4CAF50; letter-spacing:5px;">${otp}</h1>
          </div>
          <p>This OTP will expire in 3 minutes.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✓ OTP email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending OTP email:", error.message);
    throw error;
  }
};

/** -------------------------------------------------
 *  Send Contact Form Notification
 * ------------------------------------------------- */
export const sendContactNotification = async (contactData) => {
  try {
    const transporter = getTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission — ${contactData.name}`,
      html: `
        <div style="font-family: Arial; padding: 20px; max-width: 600px;">
          <h2>New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${contactData.message}</p>
          </div>
          <hr/>
          <h4>Metadata</h4>
          <p>IP: ${contactData.metadata?.ip || "N/A"}</p>
          <p>Device: ${contactData.metadata?.device || "N/A"}</p>
          <p>OS: ${contactData.metadata?.os || "N/A"}</p>
          <p>Browser: ${contactData.metadata?.browser || "N/A"}</p>
          <p>Time: ${new Date().toLocaleString()}</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✓ Contact notification sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending contact notification:", error.message);
    throw error;
  }
};
