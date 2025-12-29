import { Resend } from "resend";

export const sendMeEmail = async ({ Name, email, message }) => {
  // Check if required environment variables are set
  if (!process.env.RESEND_API_KEY || !process.env.EMAIL_RECEIVER) {
    throw new Error("Email configuration is missing. Please check your environment variables (RESEND_API_KEY and EMAIL_RECEIVER).");
  }

  // Initialize Resend with API key
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Use your verified domain or Resend's default sending domain
  // If you have a custom domain, use: `contact@yourdomain.com`
  // Otherwise, use Resend's default: `onboarding@resend.dev`
  const fromEmail = process.env.EMAIL_FROM || "onboarding@resend.dev";

  const emailData = {
    // This makes it clear who sent the message
    from: `"${Name || "Contact Form Visitor"} via Contact Form" <${fromEmail}>`,
    to: process.env.EMAIL_RECEIVER, // Your email address
    reply_to: email, // Visitor's email - when you hit reply, it goes directly to them
    subject: `New Contact Form Message from ${Name || "Unknown"}`,
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
    const data = await resend.emails.send(emailData);
    
    // Log the full response for debugging
    console.log("Resend API response:", JSON.stringify(data, null, 2));
    
    if (data.error) {
      console.error("Resend API error:", data.error);
      throw new Error(`Resend API error: ${JSON.stringify(data.error)}`);
    }
    
    if (data.id) {
      console.log("Email sent successfully. Email ID:", data.id);
    } else {
      console.warn("Email sent but no ID returned. Response:", data);
    }
    
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    console.error("Error details:", {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    throw error;
  }
};
