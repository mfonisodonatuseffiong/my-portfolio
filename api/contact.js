import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    try {
      await resend.emails.send({
        from: "kaytwobaba@gmail.com",   // ✅ verified sender (Resend tied to GitHub login)
        to: "kaytwobaba@gmail.com",     // ✅ receiving email (same Gmail for now)
        subject: subject || `New contact from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to send message." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
