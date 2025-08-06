import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, mobile, email, unitInterested, formType } = body;

    // Create a transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use 'true' if your SMTP port is 465 (SSL)
      auth: {
        user: process.env.EMAIL_USER, // Your email from .env.local
        pass: process.env.EMAIL_PASS, // Your email password or app password from .env.local
      },
    });

    // Determine the subject line based on formType
    const subject = `New ${formType
      .replace(/-/g, " ")
      .toUpperCase()} Inquiry - Real Estate Website`;

    // Generate HTML email content
    const htmlEmailContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subject}</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
                  -webkit-text-size-adjust: 100%;
                  -ms-text-size-adjust: 100%;
              }
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  border-top: 5px solid #4B7B87;
              }
              .header {
                  text-align: center;
                  padding-bottom: 20px;
                  border-bottom: 1px solid #eeeeee;
                  margin-bottom: 20px;
              }
              .header h1 {
                  color: #333333;
                  font-size: 24px;
                  margin: 0;
              }
              .content {
                  color: #555555;
                  line-height: 1.6;
              }
              .content p {
                  margin-bottom: 10px;
              }
              .content strong {
                  color: #333333;
              }
              .data-table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-top: 20px;
              }
              .data-table th, .data-table td {
                  padding: 10px;
                  border: 1px solid #dddddd;
                  text-align: left;
              }
              .data-table th {
                  background-color: #f0f0f0;
                  color: #333333;
                  font-weight: bold;
              }
              .footer {
                  text-align: center;
                  margin-top: 30px;
                  padding-top: 20px;
                  border-top: 1px solid #eeeeee;
                  font-size: 12px;
                  color: #888888;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>New Inquiry from Real Estate Website</h1>
              </div>
              <div class="content">
                  <p>Dear Sales Team,</p>
                  <p>You have received a new inquiry through the website's <strong>${formType.replace(
                    /-/g,
                    " "
                  )}</strong> form. Below are the details submitted by the client:</p>
                  
                  <table class="data-table">
                      <tr>
                          <th>Field</th>
                          <th>Value</th>
                      </tr>
                      <tr>
                          <td><strong>Form Type</strong></td>
                          <td>${formType.replace(/-/g, " ")}</td>
                      </tr>
                      <tr>
                          <td><strong>Name</strong></td>
                          <td>${name}</td>
                      </tr>
                      <tr>
                          <td><strong>Mobile</strong></td>
                          <td>${mobile}</td>
                      </tr>
                      <tr>
                          <td><strong>Email</strong></td>
                          <td>${email}</td>
                      </tr>
                      ${
                        unitInterested
                          ? `
                      <tr>
                          <td><strong>Unit Interested In</strong></td>
                          <td>${unitInterested}</td>
                      </tr>
                      `
                          : ""
                      }
                      <tr>
                          <td><strong>Submitted At</strong></td>
                          <td>${new Date().toLocaleString()}</td>
                      </tr>
                  </table>
                  <p style="margin-top: 20px;">Please reach out to the client promptly.</p>
              </div>
              <div class="footer">
                  <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                  <p>This is an automated email, please do not reply.</p>
              </div>
          </div>
      </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Your configured email address
      to: "hanzalasarang01@gmail.com", // Replace with your actual sales email
      subject: subject,
      html: htmlEmailContent, // Use html property for HTML content
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
