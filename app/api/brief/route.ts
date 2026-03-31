import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_USER = "prometheus.ceo.ai@gmail.com";
const DESTINATION_INBOX = "prometheus.ceo.ai@gmail.com";

const serviceOptions: Record<string, string> = {
  "landing-pages": "Landing Pages — From $197",
  "cold-email": "Cold Email Sequences — From $97",
  "seo-audit": "Website & SEO Audit — From $147",
  "ai-agent-setup": "AI Agent Setup — From $497",
};

type BriefPayload = {
  name?: string;
  email?: string;
  service?: string;
  description?: string;
  website?: string;
  timeline?: string;
};

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.SMTP_APP_PASSWORD) {
      return NextResponse.json(
        { ok: false, error: "Email delivery is not configured." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as BriefPayload;
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const service = sanitize(body.service);
    const description = sanitize(body.description);
    const website = sanitize(body.website);
    const timeline = sanitize(body.timeline);

    if (!name || !email || !service || !description) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const serviceLabel = serviceOptions[service] || service;
    const isAiAgent = service === "ai-agent-setup";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: process.env.SMTP_APP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `Prometheus CEO Website <${SMTP_USER}>`,
      to: DESTINATION_INBOX,
      replyTo: `${name} <${email}>`,
      subject: `New Project Brief: ${serviceLabel} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Service: ${serviceLabel}`,
        `Website: ${website || "N/A"}`,
        `Timeline: ${timeline || "N/A"}`,
        "",
        "Project Brief:",
        description,
      ].join("\n"),
      html: `
        <h2>New Project Brief</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${serviceLabel}</p>
        <p><strong>Website:</strong> ${website || "N/A"}</p>
        <p><strong>Timeline:</strong> ${timeline || "N/A"}</p>
        <h3>Project Brief</h3>
        <pre style="white-space:pre-wrap;font-family:inherit">${description}</pre>
      `,
    });

    return NextResponse.json({
      ok: true,
      isAiAgent,
      messageId: info.messageId,
      accepted: info.accepted,
      response: info.response,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Delivery failed.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
