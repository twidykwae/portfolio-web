import nodemailer from "nodemailer";

export const sendMeEmail = async ({ Name, email, message }) => {
  // Check if required environment variables are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_RECEIVER) {
    throw new Error("Email configuration is missing. Please check your environment variables.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Verify transporter configuration
  try {
    await transporter.verify();
    console.log("Email server is ready to send messages");
  } catch (error) {
    console.error("Email server verification failed:", error);
    throw new Error("Email server configuration is invalid.");
  }

  const mailOptions = {
    from: `"${Name || "Contact Form"}" <${process.env.EMAIL_USER}>`,
    replyTo: email, // So you can reply directly to the sender
    to: process.env.EMAIL_RECEIVER,
    subject: `New Contact Form Message from ${Name || "Unknown"}`,
    text: `You received a new message from the contact form:\n\nName: ${Name || "Not provided"}\nEmail: ${email}\n\nMessage:\n${message || "No message provided"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Message</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${Name || "Not provided"}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        </div>
        <div style="margin: 20px 0;">
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${message || "No message provided"}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
