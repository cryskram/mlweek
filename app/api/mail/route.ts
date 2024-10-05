import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL as string,
      pass: process.env.PASS as string,
    },
  });

  try {
    await transporter.sendMail({
      from: email as string,
      to: process.env.EMAIL,
      subject: "New Message from ML Week",
      text: `
                Email: ${email}
                Message: ${message}
            `,
      html: `
             <h1>New Message from ml week website</h1>
             <p><b>Email</b>: ${email}</p>
             <p><b>Message</b>: ${message}</p>
            `,
    });

    console.log("Email sent");
    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false });
  }
}
