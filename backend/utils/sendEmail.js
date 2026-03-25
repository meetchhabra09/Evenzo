const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = async ({ to, subject, html }) => {
  try {
    const mailOptions = {
      from: `"Evenzo 🎉" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Email send error:', error.message);
    throw error;
  }
};

const sendRegistrationEmail = async (user, event, ticketId) => {
  const html = `
    <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #6c63ff;">🎉 Registration Confirmed!</h1>
      <p>Hi <strong>${user.name}</strong>,</p>
      <p>You have successfully registered for:</p>
      <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; margin: 16px 0;">
        <h2 style="margin: 0 0 8px; color: #1a1a2e;">${event.title}</h2>
        <p style="margin: 4px 0;">📅 ${new Date(event.date).toLocaleDateString()}</p>
        <p style="margin: 4px 0;">🕐 ${event.time}</p>
        <p style="margin: 4px 0;">📍 ${event.venue}</p>
      </div>
      <p><strong>Ticket ID:</strong> ${ticketId}</p>
      <p style="color: #666; font-size: 14px;">Show the QR code from your dashboard at the event for check-in.</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
      <p style="color: #999; font-size: 12px;">Evenzo — Your college events, reimagined.</p>
    </div>
  `;

  return sendEmail({
    to: user.email,
    subject: `✅ Registration Confirmed - ${event.title} | Evenzo`,
    html
  });
};

module.exports = { sendEmail, sendRegistrationEmail };
