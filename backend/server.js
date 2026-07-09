require('dotenv').config();
require('dotenv').config();
console.log("DEBUG: Email User is ->", process.env.EMAIL_USER);
console.log("DEBUG: Email Pass is ->", process.env.EMAIL_PASS ? "Password loaded!" : "UNDEFINED!");
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON data
app.use(cors());         // Allows your React app to talk to this server

// Set up the Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// The POST Route to handle the form submission
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Portfolio Message from ${firstName} ${lastName}`,
    text: `You have received a new message from your portfolio contact form.\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

// Start the server
// Dynamic port allocation for production, fallback to 5000 for local development
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const cors = require('cors');

// Allow requests from your live portfolio domain
app.use(cors({
  origin: 'https://nuh-portfolio.site', 
  methods: ['GET', 'POST'],
  credentials: true
}));