import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define recipient email
const recipientEmails = ["kieran@theholygrailstudio.com"];

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, company, message } = data;
    
    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing required fields" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Format the current date
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // 1. Send email to recipient
    await transporter.sendMail({
      from: `"Holy Grail Studio Website" <${process.env.EMAIL_USER}>`,
      to: recipientEmails.join(", "),
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Date:</strong> ${currentDate}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    // 2. Send confirmation email to sender
    await transporter.sendMail({
      from: `"Holy Grail Studio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Holy Grail Studio",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Your Message</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us through our website. We have received your message and will get back to you as soon as possible.</p>
          <p>For your records, here is a copy of your message:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p>If you need to reach us directly, you can also email us at <a href="mailto:kieran@theholygrailstudio.com">kieran@theholygrailstudio.com</a>.</p>
          <p>Best regards,<br>Holy Grail Studio Team</p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Thanks for reaching out. We'll get back to you shortly." 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error("Contact form error:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: "Something went wrong. Please try again later." 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
