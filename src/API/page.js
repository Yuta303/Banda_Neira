// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Simulasi pengiriman email
    // Anda dapat mengganti bagian ini dengan logika pengiriman email yang sesungguhnya (misalnya menggunakan nodemailer atau layanan pengiriman email lainnya)

    console.log(`New message from ${name} (${email}): ${message}`);

    // Respons sukses
    res.status(200).json({ success: true });
  } else {
    // Method not allowed
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}