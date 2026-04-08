import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Resend } from "resend";
import cors from "cors";

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ Allow requests from your React dev server
app.use(cors({
  origin: ["http://127.0.0.1:5173", "http://localhost:5173"], // allow both
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    await resend.emails.send({
      from: "kaytwobaba@gmail.com",
      to: "kaytwobaba@gmail.com",
      subject: subject || `New contact from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
