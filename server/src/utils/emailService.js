import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); 

let transporter = null;

const validateEmailCredentials = () => {
  const EMAIL = process.env.EMAIL_USER;
  const APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;

  if (!EMAIL || !APP_PASSWORD) {
    console.error("❌ ERROR: Missing Email Credentials in .env");
    console.error("EMAIL_USER:", EMAIL ? "✓ Set" : "✗ Missing");
    console.error(
      "EMAIL_APP_PASSWORD:",
      APP_PASSWORD ? "✓ Set" : "✗ Missing"
    );
    console.error("👉 Fix your .env before sending emails.\n");
    return false;
  }

  return true;
};

/** -------------------------------------------------
 * Lazy-load Transporter (creates only once)
 * ------------------------------------------------- */
const getTransporter = () => {
  if (transporter) return transporter;

  if (!validateEmailCredentials()) {
    throw new Error("Email credentials missing — cannot create transporter.");
  }

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

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
 * Generic Email Sender
 * ------------------------------------------------- */
export const sendEmail = async (to, subject, text) => {
  try {
    const mailer = getTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html: `<p>${text}</p>`,
    };

    const info = await mailer.sendMail(mailOptions);
    console.log("✓ Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw error;
  }
};

/** -------------------------------------------------
 * Send OTP Email
 * ------------------------------------------------- */
export const sendOtpEmail = async (email, otp) => {
  try {
    const mailer = getTransporter();

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
          <p>This OTP expires in 3 minutes.</p>
        </div>
      `,
    };

    const info = await mailer.sendMail(mailOptions);
    console.log("✓ OTP email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending OTP email:", error.message);
    throw error;
  }
};

/** -------------------------------------------------
 * Contact Form Email
 * ------------------------------------------------- */
export const sendContactNotification = async ( name,
        email,
        message,) => {
  try {
    const mailer = getTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission — ${name}`,
      html: `
        <div style="font-family: Arial; padding: 20px; max-width: 600px;">
          <h2>New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr/>
        </div>
      `,
    };

    const info = await mailer.sendMail(mailOptions);
    console.log("✓ Contact notification sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending contact notification:", error.message);
    throw error;
  }
};
