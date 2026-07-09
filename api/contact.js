import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Reject anything that isn't a POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Only POST requests allowed' });
  }

  const { firstName, lastName, email, message } = req.body;

  try {
    // 1. Configure the email transporter using Environment Variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    // 2. Format the email you will receive
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sends the email to your own inbox
      subject: `New Portfolio Inquiry from ${firstName} ${lastName || ''}`,
      text: `
Name: ${firstName} ${lastName || ''}
Email: ${email}
        
Message:
${message}
      `,
      replyTo: email,
    };

    // 3. Send it
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email' });
  }
}