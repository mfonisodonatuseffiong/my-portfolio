import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;
    try {
      await new Resend(process.env.RESEND_API_KEY).emails.send({
        from: "kaytwobaba@gmail.com",
        to: "kaytwobaba@gmail.com",
        subject: subject || `New contact from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p>${message}</p>
        `,
      });
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
