import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "ab.bshara1995@gmail.com",
    to: "america.usa14@gmail.com",
    subject: "Hello from Resend",
    react: <WelcomeTemplate name="Adam" />,
  });
  return NextResponse.json({ message: "Email sent successfully" });
}
