import express from "express";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import Contact from "../models/contactModel.js"
import { sendMeEmail } from "../utils/emails.js";

const router = express.Router();

const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, 
  message: {
    error: "Too many contact form submissions from this IP, please try again later."
  },
  standardHeaders: true, 
  legacyHeaders: false, 
});
router.options("/contact", (req, res) => {
  res.sendStatus(200);
});

router.post("/contact", contactRateLimiter, async (req, res) => {
  try {
    const { Name, email, message } = req.body;

    if (!Name || !email) {
      return res.status(400).json({ error: "Your name or email is required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    if (mongoose.connection.readyState !== 1) {
      console.error("Database is not connected. Skipping database save.");
    } else {
      try {
        const newContact = new Contact({ Name, email, message });
        await newContact.save();
        console.log(`Contact saved to database for ${email}`);
      } catch (dbError) {
        console.error("Error saving to database:", dbError);
      }
    }

    let emailSent = false;
    try {
      await sendMeEmail({ Name, email, message });
      console.log(`Email sent successfully for contact from ${email}`);
      emailSent = true;
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      // Return error response if email fails to send
      return res.status(500).json({ 
        error: "Failed to send email notification. Your message was saved, but we couldn't send you a confirmation email. Please try again later." 
      });
    }
    
    res.status(201).json({ message: "Contact form submitted successfully!" });

  } catch (error) {
    console.error("Error in /contact:", error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: "Invalid data provided." });
    }
    
    res.status(500).json({ error: "Internal Server Error. Please try again later." });
  }
})

export default router;