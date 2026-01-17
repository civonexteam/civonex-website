import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SINGLE metadata export (only one allowed)
export const metadata: Metadata = {
  title: "Civonex — Educate. Empower. Engage.",
  description:
    "Civonex is a digital-first platform focused on education, civic awareness, and empowering institutions through technology.",
  keywords: [
    "civic sense",
    "education platform",
    "student awareness",
    "digital society",
    "Civonex",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
