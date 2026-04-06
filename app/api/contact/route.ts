import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Reuse existing SMTP configuration from /api/brief
const SMTP_USER = "prometheus.ceo.ai@gmail.com";
const DESTINATION_INBOX = "prometheus.ceo.ai@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  businessName?: string;
  serviceType?: string;
  source?: string; // e.g., "roofing-demo", "nail-salon-demo"
};

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    // Check SMTP configuration (same as /api/brief)
    if (!process.env.SMTP_APP_PASSWORD) {
      return NextResponse.json(
        { ok: false, error: "Email delivery is not configured." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactPayload;
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const message = sanitize(body.message);
    const businessName = sanitize(body.businessName);
    const serviceType = sanitize(body.serviceType || "General Inquiry");
    const source = sanitize(body.source || "unknown");

    // Basic validation - name, email, and at least one contact method
    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Create transporter (same as /api/brief)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: process.env.SMTP_APP_PASSWORD,
      },
    });

    // Email subject includes source for easy filtering
    const subject = `[${source}] New Contact Form Submission: ${name}`;

    // HTML email template
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <p style="margin: 0; color: #666;"><strong>Source:</strong> ${source}</p>
          <p style="margin: 5px 0 0 0; color: #666;"><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone}</td>
          </tr>
          ` : ''}
          ${businessName ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Business:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${businessName}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Service Type:</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${serviceType}</td>
          </tr>
        </table>
        
        ${message ? `
        <div style="margin-top: 20px;">
          <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap; font-family: monospace;">
            ${message}
          </div>
        </div>
        ` : ''}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
          <p>This contact form submission came from a Prometheus CEO demo page.</p>
          <p>To respond, reply directly to ${email} or use the contact information above.</p>
        </div>
      </div>
    `;

    // Plain text version for email clients that prefer it
    const text = `
New Contact Form Submission
Source: ${source}
Timestamp: ${new Date().toISOString()}

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${businessName ? `Business: ${businessName}` : ''}
Service Type: ${serviceType}

${message ? `Message:\n${message}` : ''}
    `.trim();

    // Send email
    await transporter.sendMail({
      from: `Prometheus CEO Contact Form <${SMTP_USER}>`,
      to: DESTINATION_INBOX,
      subject,
      text,
      html,
    });

    return NextResponse.json(
      { 
        ok: true, 
        message: "Contact form submitted successfully.",
        data: {
          name,
          email,
          source,
          timestamp: new Date().toISOString()
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form submission error:", error);
    
    return NextResponse.json(
      { 
        ok: false, 
        error: "Failed to submit contact form. Please try again later.",
        details: process.env.NODE_ENV === "development" ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}