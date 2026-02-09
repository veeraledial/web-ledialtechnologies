import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, name, email, company, phone, product, subject, issueType, message, sourceUrl } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // TODO: Integrate with CRM, email service (Resend, SendGrid), or database
    // For now, log the enquiry
    console.log("Enquiry received:", {
      type: type ?? "contact",
      name,
      email,
      company,
      phone,
      product,
      subject,
      issueType,
      message,
      sourceUrl,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
