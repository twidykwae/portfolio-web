import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  Name: { type: String, required: true },
  email: { type: String, required: true },
  message: String,
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
