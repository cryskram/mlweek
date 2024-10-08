import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ML Week - BMSCE",
  description: "BMSCE IEEE Computer Society flagship event 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${poppins.className} antialiased bg-background text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
